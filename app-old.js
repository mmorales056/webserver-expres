const http= require('http');
http.createServer( (req, res)=>{
    res.writeHead(200,{'Content-Type': 'applicarion/json'});
    //res.write('Hola mundo');
    let salida={
        nombre: 'mateo',
        edad: 24,
        url: req.url

    }

    res.write(JSON.stringify(salida));
    res.end();
} )
.listen(8080);
console.log("escuchando el puerto 8080")