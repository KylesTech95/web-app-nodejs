// console.log("Hello from nodeJS")
// console.log("first node file")

//Create interface
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})
const fs = require('fs');
const http = require('http');

//Ask a question to the server
// rl.question('Please enter your name:\n', (name) => {
// console.log("What's good, " + name + "?")
// rl.close()
// })
//close event (on)
// rl.on('close',() =>{
//     console.log('Interface is closed by you')
//     process.exit(0)
// })
/***************************************************** */
//readFileSync - Single thread , Line-by-line (Synchronous exe)
// let textIn = fs.readFileSync('./Files/input.txt','utf-8');
// console.log(textIn)

// let content = `Data read from input.txt: ${textIn} \nDate created: ${new Date()}`
// fs.writeFileSync("./Files/o utput.txt",content) // This can create & write the file upon command
/***************************************************** */
//Async code
// fs.readFile('./Files/input.txt','utf-8',(err,data) =>{
//     console.log(data)
// })
// console.log("Reading File...")
// fs.readFile('./Files/start.txt','utf-8', (err1, data1) => {
//     fs.readFile(`./Files/${data1}.txt`,'utf-8',(err2,data2)=>{
//         fs.readFile('./Files/append.txt','utf-8',(err3, data3)=>{
//             fs.writeFileSync('./Files/output.txt',`${data2}\n\n${data3}\n${new Date()}`)
//                 console.log("file written")
//             })
//         })
//     })
// console.log("Reading File...")
/***************************************************** */
//step1: Create web server
let server = http.createServer((request,response) => {
//Request a url (section of a webpage tree) in order to route
let path = request.url;
let html = fs.readFileSync('./template/index.html','utf-8')
let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'))//storing data in JSON.parse()
let contact = fs.readFileSync('./template/contact.html','utf-8')
let about = fs.readFileSync('./template/about.html','utf-8')
let prod_list = fs.readFileSync('./template/products.html','utf-8')

products.map((prod) => {
    return null //Start here Kyle
    //https://www.youtube.com/watch?v=M60Q4rW-AJU
    //time stamp: 4:46
}) 
//route() function - parameter: path
let route = (path) => {
    //switch statement:
    //Switch statements provide a faster execution if multiple paths are listed versus if-else statements
    switch(true){
        case path==='/' || path.toLocaleLowerCase()=='/home':
            response.writeHead(200, {
                'Content-Type':'text/html',
                'my-header': 'Hello World'
            })//Set the status code before resposne.end()
            response.end(html.replace('{{%CONTENT}}', prod_list))
            break;
        case path.toLocaleLowerCase()=='/contact':
            response.writeHead(200,{
                'Content-Type':'text/html',
                'my-header': 'Hello World'
            })
            response.end(html.replace('{{%CONTENT}}', 'You are in contact page'))
            break;
        case path.toLocaleLowerCase()=='/products':
            response.writeHead(200, {
                'Content-Type': 'application/json',//content type for json files
                'my-header': 'Hello World'
            })
            response.end('you are in products page')
            console.log(products)
            break;
        case path.toLocaleLowerCase()=='/about':
            response.writeHead(200,{
                'Content-Type':'text/html',
                'my-header': 'Hello World'
            })
            response.end(html.replace('{{%CONTENT}}', 'you are in about page'))
            break;
        default:
            response.writeHead(404,{
                'Content-Type':'text/html',
                'my-header': 'Hello World'
            })
            response.end(html.replace('{{%CONTENT}}', 'Error 404: Page not found'))
        break;
    }
}
route(path)
// if(path==='/' || path.toLocaleLowerCase()==='/welcome'){
//     response.end(html);
// }
// else if(path.toLocaleLowerCase() ==='/contact'){
//     response.end(contact)
// }
// else{
//     response.end('Error 404: Page not found!')
// }
})
//step2: Start the server
server.listen('8000','127.0.0.1', () => {
    console.log('server has started!');
})
/***************************************************** *///
//products.json file issued by Procademy
//https://drive.google.com/file/d/1FUnmyeyFmjngzXMt0YdH7-9-QJH0kkfN/view

//Youtube channel - https://www.youtube.com/watch?v=4829X9PM2ow


