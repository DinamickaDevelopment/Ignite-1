var React = require('react'); 
var ReactDOM = require('react-dom'); 

        //форма
        var Form = React.createClass({

            render: function() {

                return (
                     <div className="cls panel well">  
                         <form action="#" name="myForm">
                             {/* отображение дочерних React компонентов */}
                                <InputField/>
                                <Button/>
                        </form> 
                    </div>
            )}
        }); 

        // поле ввода
        var InputField = React.createClass({
            render: function() { 
                return (
               <div> <label>Input Field <br /> <input className="input-lg" value={this.props.prop1}/></label><br/> </div>         
            )}
        }); 

        // кнопка
        var Button = React.createClass({
        render: function() {
                return (         
                <input type="submit" className="btn-lg btn-success" value={this.props.prop2}/>
           )}
        }); 

        var container = document.getElementById('example'); 

        ReactDOM.render(<Form/>, container); 