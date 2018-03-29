const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 9090

var mosca=require('mosca');
var settings={
	port:PORT
}

var server=new mosca.server(settings);

server.on('ready',function(){
	console.log('Server listening on port '+PORT);
});

