var React = require('react'); 
var ReactDOM = require('react-dom'); 

   
        // React JSX трансформирует XML-подобный синтаксис в JavaScript. 
        // XML элементы, атрибуты и дочерние элементы трансформируются в аргументы React.createElement


        //для того, чтобы использовать
        //<Nav />, переменная Nav должна находиться в области видимости. 
        var Nav;

        var app = <nav color="blue" className="cls1"/>
        var container = document.getElementById('example'); 

        ReactDOM.render(app, container); 
