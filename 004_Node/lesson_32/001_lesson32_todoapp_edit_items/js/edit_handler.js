var mysql = require('mysql'); 

module.exports = { 

    rowData: '', 
	findItemById: function(id) {

        // конфигурация подключения 
		var connection = mysql.createConnection({
	            host: 'localhost',
	            port: 3306,
	            user: 'root',
	            password: '',
	            database: 'todos'
	        }); 

	      // подключение к бд 
            connection.connect(function (err) {

                if (err) {
                    console.log(err);
                    return;
                }

                console.log('connected to database!'); 
            }); 

            var self = this; 
		    var query = connection.query('SELECT * FROM `items` WHERE id=?', [id], function(err, rows) {

		    	self.rowData = rows; 

		    }) 

		    return query; 

	},  

    // редактирование элемента в бд 
	editItem: function(data) {

	    // конфигурация подключения 
	    var connection = mysql.createConnection({
	        host: 'localhost',
	        port: 3306,
	        user: 'root',
	        password: '',
	        database: 'todos'
	    });

	    // подключение к бд 
	    connection.connect(function (err) {

	        if (err) {
	            console.log(err);
	            return;
	        }

	        console.log('connected to database!');
	    });


		    var sql = 'UPDATE `items` SET name=?, description=?, completed=? WHERE id=?';  
		    var inserts = [data.name, data.description, data.completed, data.id]; 
		    sql = mysql.format(sql, inserts);

		    return connection.query(sql, function (err) {
		        if (err) {
		            console.log(err)
		        } else {
		            console.log('database updated'); 
		        }
		    });
       
	}
}