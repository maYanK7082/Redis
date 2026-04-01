// configuration for redis

const Redis = require("ioredis");

// basic setup
const redis = new Redis({
    host: "127.0.0.1",// localhost
    port: 6379 // port where redis is running
})
// connect to redis
// event -> connect
redis.on("connect", () => {
    console.log("Redis DB connected!")
})
//event -> error
redis.on("error", (err) => {
    console.log("err connecting to redis db", err)
})
module.exports = redis