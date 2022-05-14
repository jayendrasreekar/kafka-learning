//const kafka = require("kafkajs").Kafka
const {Kafka} = require("kafkajs")

run();
async function run(){
    try{
      const kafka = new Kafka({
          "clientId" : "myapp",
          "brokers" : ["C02WM50EHTD5.group.on:9092"]
      })
      
      const consumer = kafka.consumer({"groupId" : "test"});
      console.log("Connectiong....")
      await consumer.connect()
      console.log("Connected.....");

      consumer.subscribe({
          "topic" : "Users",
          "fromBeginning" : true
      })
      
      await consumer.run({
          "eachMessage" : async result => {
              console.log(`Received Message ${result.message.value} on partition ${result.partition}`);
          }
      })

    }

    catch(ex){
        console.error('Something bad happened ${ex}');
    }
    finally{
    }
}