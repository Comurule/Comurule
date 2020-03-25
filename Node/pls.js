var http = require('http');
var  fs = require('fs');
var qs = require('querystring');

http
  .createServer(function(req, res){
    if (req.method == 'POST' && req.url == '/message'){
      let body = '';
      req.on('data', chunk =>{
        body += chunk.toString();
      });
      
      req.on('end', function (){
        var post = qs.parse(body);
        fs.writeFile('C:\\xampp\\htdocs\\HNGstuffs\\Node\\message.txt', qs.parse(body).message , function(err){
          if (err) console.log(err);
        console.log(qs.parse(body).message);
      }); 
        
      });
        
     
     
        res.end('Saved');
      
    }
    else {
    res.writeHead(200, {'content-Type' : 'text/html'});
    res.end(`
    <html>
    <head>
	    <title>First Form</title>
    </head>

    <body>
    	Please enter a message below:
	    <form action="/message" method="POST"> 
	  	  <textarea name="message" rows="5" cols="30" placeholder="enter your message">
	    	</textarea><br>
		    <button type="submit">Save Meessage</button> 
	      </form>
	
    </body>
    </html>
    `);
    };
  })
  .listen(8080);