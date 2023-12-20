const { GraphQLError } = require('graphql');
const { verifyToken } = require('../helpers/jwt');
const User = require('../models/user');
const { ObjectId } = require('mongodb');
const Post = require('../models/post');

const authentication = async (req) => {
    if (!req.headers.authorization) {
        throw new GraphQLError('Invalid Token', {
            extensions: { code: 'Unauthenticated' },
        });
    }
    const accessToken = req.headers.authorization.split(' ').at(-1);

    try {
        if (!accessToken) {
            throw new GraphQLError('Invalid Token', {
                extensions: { code: 'Unauthenticated' },
            });
        }
        const { UserId } = verifyToken(accessToken);
        const user = await User.getById({ id: new ObjectId(UserId) });
        if (!user) {
            throw new GraphQLError('Invalid Token', {
                extensions: { code: 'Unauthenticated' },
            });
        }
        req.user = { UserId };
        return { userId: UserId };
    } catch (error) {
        throw error;
    }
}

const authorization = async (req) => {
    try {
        const PostId = req.body.variables.postId;
        const post = await Post.getById({ PostId });
        if (post.PosterId.toString() !== req.user.UserId) {
            throw new GraphQLError(`You're not allowed to take the action`, {
                extensions: { code: 'Unauthorized' },
            });
        }

        return true;
    } catch (error) {
        throw error;
    }
}



module.exports = { authentication, authorization };