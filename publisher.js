//advanced message q protocol
const amqp = require('amqplib');

const message = {number: 9}
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




