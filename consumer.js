//advanced message q protocol
const amqp = require('amqplib');

async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        channel.consume("jobs",message=>{
            const input = JSON.parse(message.content.toString());
            console.log(`Received job with ${input.number}`);
        })
        console.log("Waiting for messages");
    } catch (e)
    {
        console.error(e);
    }
}

connect();




