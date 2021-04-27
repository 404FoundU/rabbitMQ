//advanced message q protocol
const amqp = require('amqplib');
// get user input
const message = {number: process.argv[2]}
async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(message)));
        console.log(`Job sent successfully ${message.number}`);
    } catch (e)
    {
        console.error(e);
    }

}

connect();




