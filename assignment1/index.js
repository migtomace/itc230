var list = require('./list.js');

var http = require("http"); 
http.createServer(function(req,res) {
  var path = req.url.toLowerCase();
  var fs = require("fs");
  
    var query = req.url.toLowerCase().split("?");
    console.log(query);
    var path = query[0]; // part before the ?
    var title = decodeURI((query[1]) ? query[1].split("=")[1] : '');
  
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
 case '/getall':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('All movies: ' + JSON.stringify(list.getAll()));
      break; 
    case '/get':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Searched for: ' + JSON.stringify(list.get(title)));
      break;  
    case '/delete':
      var deleted = list.delete(title); 
      if (deleted) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Movie ' + title + ' removed');
      } else {
      res.writeHead(200, {'Content-Type': 'text/plain'});  
      res.end('Movie ' + title + ' not removed');
      }
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
break;
    }
}).listen(process.env.PORT || 3000);
