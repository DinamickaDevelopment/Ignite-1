module.exports = {
    addRow: function (data) {

            var mysql = require('mysql'); 

            var connection = mysql.createConnection({
                    host: 'localhost',
                    port: 3306,
                    user: 'root',
                    password: '',
                    database: 'todos'
            }); 
    
        // ����������� � ��
        connection.connect(function (err) {

            if (err) {
                console.log(err);
                return;
            }

            console.log('connected to database!');
        });

        var self = this;

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