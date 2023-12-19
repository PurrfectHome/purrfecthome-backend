if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const app = express();
const port = 4000;

const { createServer } = require('http');
const { Server } = require('socket.io');

const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: '*',
	},
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

io.on('connection', (socket) => {
    console.log('New Connection with ID: ', socket.id)

    socket.on("sendMessage", (payload) => {
        console.log(payload)

        socket.broadcast.emit("new-message", payload)
    })

    socket.on('disconnect', () => {
        console.log('disconnected')
    })
})

const cors = require('cors');
app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello World")
})


server.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
