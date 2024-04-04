//console.log(module)

//const log =require("./app")

//log("massage")
//or
//log.log("massage")

// const EventEmitter = require("events")
// //const emitter = new EventEmitter()

// class Logger extends EventEmitter{
//     log(message) {
//         console.log(message)

//         this.emit("messageLogged", { id: 1, url: "http://" })
//     }
// }



// module.exports = Logger



//http module

// const http = require("http")
// const { json } = require("stream/consumers")

// const server = http.createServer((req, res)=>{
//     if(req.url==="/"){
//         res.write("hello")
//         res.end()
//     }

//     if(req.url ==="/api/courses"){
//         res.write(JSON.stringify([1,2,3]))
//         res.end
//     }
// })

// // server.on("connection", (socket)=>{
// //     console.log("new connection....")
// // })

// server.listen(3000)

// console.log("listening on port 3000...")