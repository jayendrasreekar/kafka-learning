# kafka-learning
Kafka learning


# Zookeeper

docker run --name zookeeper  -p 2181:2181 -d zookeeper


#Kafka

docker run -p 9092:9092 --name kafka  -e KAFKA_ZOOKEEPER_CONNECT=localhost:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -d confluentinc/cp-kafka



Code is to use Node library to create instance of producer, Consumer and Broker



Credits : https://www.youtube.com/watch?v=R873BlNVUB4
