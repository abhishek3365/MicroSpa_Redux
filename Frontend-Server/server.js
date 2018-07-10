const express = require('express');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 4202;

const app = express();

// app.get( '/app1/*' , (req,res) => {
//     res.sendFile( path.join( __dirname , '/public/app1/index.html' ) )
// } )

// app.use( express.static('public') );

// app.listen( PORT , () => {
//     console.log( 'Server running at port - ' + PORT );
// } );


app.use(express.static(path.join( __dirname , '/public'  )));

app.get( '/app1/*' , (req,res) => {
    res.sendfile( path.join( __dirname + "/public/app1/index.html" ) )
} );

app.get( '/app2/*' , (req,res) => {
    res.sendfile( path.join( __dirname + "/public/app2/index.html" ) )
} );

app.get( '/app3/*' , (req,res) => {
    res.sendfile( path.join( __dirname + "/public/app3/index.html" ) )
} );

app.set( 'port' , PORT );

const server = http.createServer(app);
server.listen( PORT , () => {
    console.log(`Server running at ${PORT}`);
} )