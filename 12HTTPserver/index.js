//  creating server
const  http = require('http');
// const server = http.createServer((req, res) =>{
//     console.log(req.url);
//     res.end('Hello from the other side Ashu');
// });

// server.listen(8000,"127.0.0.1", () =>{
//     console.log("listen to the port no. 8000");
// });

const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
    

    //response heaader
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public','inedx.html'),(err,content)=>{
    //         if(err){
    //             throw err;
    //         }
    //         res.end(content);
    //     });
    // }
    // else if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public','about.html'),(err,content)=>{
    //         if(err){
    //             throw err;
    //         }
    //         res.end(content);
    //     });
    // }

    let filePath = path.join(__dirname, 'public' , req.url === '/' ? 'index.html' : req.url);

    let ext = path.extname(filePath);
    let contentType = 'text/html';
    
    if(!ext){
        filePath += '.html';
    }

    switch(ext){
        case '.css' :
            contentType = 'text/css';
            break;
        case '.js' :
            contentType = 'text/javascript';
            break;
        default:
            contentType = 'text/html';
    }

    fs.readFile(filePath,(err , content)=>{
        // if(err){
        //     res.writeHead(500);
        //     res.end('Error');
        // }

        if(err){
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err , data) => {
                if(err){
                    res.writeHead(500);
                    res.end('Error!!!');
                }else{
                    res.writeHead(404,{
                        'Content-Type': contentType
                    });
                }
                res.end(data);
            });
        }
        
        
        else{
            res.writeHead(200,{
                'Content-Type': contentType
            });
            res.end(content);
        }


    });

    
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listning on port ${PORT}`);
});