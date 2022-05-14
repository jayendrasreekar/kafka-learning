//const kafka = require("kafkajs").Kafka
const {Kafka} = require("kafkajs")
const msg = process.argv[2];

run();
async function run(){
    try{
      const kafka = new Kafka({
          "clientId" : "myapp",
          "brokers" : ["C02WM50EHTD5.group.on:9092"]
      })
      
      const producer = kafka.producer();
      console.log("Connectiong....")
      await producer.connect()
      console.log("Connected.....")
      const partition = msg[0] < "N" ? 0 : 1;
      const result = await producer.send({
          "topic":"Users",
          "messages": [
            {
              "value" : msg,
              "partition": partition
            }, 
          ]
      })
      console.log(`Send Successfully! ${JSON.stringify(result)}`);
      await producer.disconnect();
    }

    catch(ex){
        console.error('Something bad happened ${ex}');
    }
    finally{
       process.exit(0); 
    }
}