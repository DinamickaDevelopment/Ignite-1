var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // В ReactJS по умолчанию события обрабатываются на этапе всплытия(bubbling phase) 
        // Для обработки события на этапе перехвата(capturing phase) добавьте Capture к названию React события. Например: onClickCapture вместо onClick 
        var Demo = React.createClass({ 

            mouseDownHandler: function(e) {
                e.currentTarget.style.backgroundColor = 'blue'; 
                alert('mouseDown Bubbling Phase!'); 
            }, 

            mouseDownCaptureHandler: function(e) {
                 e.currentTarget.style.backgroundColor = 'red';
                  alert('mouseDown Capturing Phase!');
            }, 
 
            render: function() {
                return (
                 <div className="container big"
                      onMouseDown={this.mouseDownHandler} onMouseDownCapture={this.mouseDownCaptureHandler}>

                     <div className="container mid"
                      onMouseDown={this.mouseDownHandler} onMouseDownCapture={this.mouseDownCaptureHandler}>

                         <div className="container small"
                      onMouseDown={this.mouseDownHandler} onMouseDownCapture={this.mouseDownCaptureHandler}>

                         </div>
                     </div>
                 </div>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo />, container);