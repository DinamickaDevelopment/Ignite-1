module.exports = {

    tableLoader: {

        tableData: 'wait for data...',
        loadTable: function () {
            var mysql = require('mysql');

            // �������� ����������� � ��
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
            // ������ � �� 
            return query = connection.query('SELECT * FROM `items`', function (err, rows) {
                if (err) {
                    console.log(err);
                    return;
                }

                // ��������� ����� ������� �� ������ ���������� ������  
                var table_rows = rows.map((row) => {
           
                    return (` 
                        <tr>
                            <td>${row.name}</td>
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



