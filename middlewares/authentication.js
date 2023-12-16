const { GraphQLError } = require('graphql');
const { verifyToken } = require('../helpers/jwt');
const User = require('../models/user');
const { ObjectId } = require('mongodb');

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

        return { UserId };
    } catch (error) {
        throw error;
    }
}

module.exports = authentication;