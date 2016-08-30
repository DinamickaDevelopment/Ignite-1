var React = require('react'); 
var ReactDOM = require('react-dom'); 

   
        //JSX позволяет указать дочерние узлы используя XML синтаксис
        var Nav, Heading; 

        var app = <nav><heading>Hello!</heading></nav>; 
        var container = document.getElementById('example'); 

        ReactDOM.render(app, container); 
