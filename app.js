//  console.log(__filename)
//  console.log(__dirname)
//var url="file:///C:/Users/odosa/Desktop/Transit/webpageClient.html"

// function log(message){
//     //send an Http request
//     console.log(message)
// }
//for single function 
//module.exports = log;
// or  
//for an object
//module.exports.log=log;


//path
// const path = require("path")

// var pathObj= path.parse(__filename)

// console.log(pathObj)




//operating system
// const os = require("os")

// var  totalMemory = os.totalmem();
// var freeMemory = os.freemem()

// console.log(`totalmemory: ${totalMemory}`)
// console.log(`freememory: ${freeMemory}`)



//const fs = require("fs")
//synchronous
// const files = fs.readdirSync("./")
// console.log(files)


//asynchronous
// fs.readdir("./",function(err,files){
//     if(err) console.log("error",err)
//     else console.log("result",files)
// })



//events
//const EventEmitter = require("events")
//const emitter = new EventEmitter()


// const Logger= require("./introNode")
// const logger = new Logger()



// //register a listener
// logger.on("messageLogged", function(arg){
//     console.log("listener called",arg)
// })



// logger.log("message")












