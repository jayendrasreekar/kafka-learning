//const kafka = require("kafkajs").Kafka
const {Kafka} = require("kafkajs")


run();
async function run(){
    try{
      const kafka = new Kafka({
          "clientId" : "myapp",
          "brokers" : ["C02WM50EHTD5.group.on:9092"]
      })
      
      const admin = kafka.admin();
      console.log("Connectiong....")
      await admin.connect()
      console.log("Connected.....")
      //A-M,N-Z
      await admin.createTopics({
          "topics" : [{
              "topic" : "users",
              "numPartitions": 2
          }]
      })
      console.log("Created Successfully");
      await admin.disconnect();
    }

    catch(ex){
        console.error('Something bad happened ${ex}');
    }
    finally{
       process.exit(0); 
    }
}