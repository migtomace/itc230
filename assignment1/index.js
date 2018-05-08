import * as movies from 'list';

var http = require("http"); 
http.createServer(function(req,res) {
  var path = req.url.toLowerCase();
  var fs = require("fs");
  
  switch(path) {
    case '/':
      fs.readFile('public/home.html', function (err, data) {
        if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         res.writeHead(404, {'Content-Type': 'text/html'});
      }else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         res.writeHead(200, {'Content-Type': 'text/html'});	
         
         // Write the content of the file to response body
         res.write(data.toString());		
      }
      // Send the response body 
      res.end();
      });
      break;
      
    case '/about':
      fs.readFile('package.json', function (err, data) {
        if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         res.writeHead(404, {'Content-Type': 'text/html'});
      }else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         res.writeHead(200, {'Content-Type': 'text/html'});	
         
         // Write the content of the file to response body
         res.write(data.toString());		
      }
      // Send the response body 
      res.end();
      });
      break;
    case '/get':
      movies.getAll();
      break;
    case '/delete':
        
        movies.deleteFunction();
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);