var mysql = require('mysql');

module.exports = {

    selectedRow: '', 
    // ����� �������� �� id 
    findItemById: function (id, connection) {
        var self = this; 
        var query = connection.query('SELECT * FROM `items` WHERE id=?', [id], function (err, rows) {
            if (err) console.log(err);
            self.selectedRow = rows[0]; 
        })
        return query;
    },
    // �������������� �������� 
    updateItem: function (data, connection) {

        // �������������� �������
        var sql = 'UPDATE `items` SET name=?, description=?, completed=? WHERE id=?';
        var inserts = [data.name, data.description, data.completed, data.id];
        sql = mysql.format(sql, inserts);

        var query = connection.query(sql, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('database updated');
            }
        }); 
        return query; 
    },
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