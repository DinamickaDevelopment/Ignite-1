var mysql = require('mysql');

module.exports = {

    tableRows: '',
    // выбор всех элементов и отображение в виде таблицы 
    getAllItems: function (options, connection) {
        var self = this; 
        var query = connection.query('SELECT * FROM `items`', function (err, rows) {
            if (err) console.log(err) 

            // генерация рядов таблицы на основе полученных данных  
            var table_rows = rows.map((row) => {
                return (` <tr>
                            <td class="name" id="${row.id}">${options.edit ?
                            '<a class="glyphicon glyphicon-pencil edit"></a>' +
                            ' <a class="glyphicon glyphicon-remove remove"></a> ' + 
                             row.name : row.name} </td>
                            <td>${row.description}</td>
                            <td>${row.completed ? 'yes' : 'no'}</td>
                        </tr> `)
            })

            self.tableRows = table_rows.join(' ');

        });
        return query;
    }
}