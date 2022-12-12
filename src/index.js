var http = require("http");
const querystring = require("querystring")

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {

    let url = req.url.split("?")[0];
    // let qparam = querystring.parse(req.url.split("?")[1]);
    // console.log(qparam);

    if(url == "/welcome"){
        res.writeHead(200 , {"contant-type" : "text/plain" })
        res.write("Welcome to Dominos!")
        res.end();
    }
    else if(url == "/contact"){
        res.writeHead(200 , {"contant-type" : "application/json" })
        res.write(JSON.stringify({
            phone: "18602100000",
            email: "guestcaredominos@jublfood.com"
        }));
        res.end();
    }
    else{
        res.writeHead(404 , {"contant-type" : "text/plain" })
        res.end("<h1>404! Contnt Not Found</h1>");
    }
  
}
httpServer.listen(8081 , console.log("server is setup at the port 8081"))
module.exports = httpServer;