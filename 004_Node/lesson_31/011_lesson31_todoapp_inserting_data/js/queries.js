var mysql = require('mysql');

module.exports = {

    tableRows: '',
    // ����� ���� ��������� � ����������� � ���� ������� 
    getAllItems: function (options, connection) {
        var self = this; 
        var query = connection.query('SELECT * FROM `items`', function (err, rows) {
            if (err) console.log(err) 

            // ��������� ����� ������� �� ������ ���������� ������  
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
    },

    insertItem: function (data, connection) {
        // �������������� �������
        var sql = 'INSERT INTO `items` (name, description, completed) VALUES (?, ?, ?)'
        var inserts = [data.name, data.description, data.completed];
        var sql = mysql.format(sql, inserts);

        // ������ � �� 
        return query = connection.query(sql, function (err, rows) {
            if (err) {
                console.log(err);
                return;
            }

            console.log('item inserted into database!');
        })
    }

}