module.exports = {

    tableLoader: {

        tableData: 'wait for data...', 
        loadTable: function (options) {
        	var mysql = require('mysql'); 

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
            // запрос к бд 
            return query = connection.query('SELECT * FROM `items`', function (err, rows) {
                if (err) {
                    console.log(err);
                    return;
                }


                // генерация рядов таблицы на основе полученных данных  
                var table_rows = rows.map((row) => {
           
                    return (` 

                        <tr>
                            <td class="name" id="${row.id}">${options.edit ? 
                                '<a class="glyphicon glyphicon-pencil edit"></a>'  + 
                                row.name 
                             : row.name} </td>
                            <td>${row.description}</td>
                            <td>${row.completed ? 'yes' : 'no'}</td>
                        </tr>
                    `)
                })

                	self.tableData = table_rows.join(' '); 
                
            });

        }
    }

}



