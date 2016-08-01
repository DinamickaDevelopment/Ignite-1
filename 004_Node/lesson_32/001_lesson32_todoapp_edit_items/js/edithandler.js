var mysql = require('mysql'); 
var pool = require('./connection_pool');

var queries = require('./queries'); 

module.exports = {
    loadEditMode: function(req, res) {
        
    }, 
    loadEditPage: function (req, res) {

        // ����������� � ��
        pool.getConnection(function (err, connection) {

            // ������ � �� 
            var query = queries.findItemById(req.params.id, connection);

            query.on('end', function () {
                var row = queries.selectedRow;

                res.render('edit_item_page', {
                    id: row.id,
                    name: row.name,
                    description: row.description,
                    completed: row.completed
                });

                // ���������� ���������� 
                connection.release(); 
            }); 
        })

    }, 

    changeItem: function (req, res) {

        // ����������� � ��
        pool.getConnection(function (err, connection) {
            // ������ � �� 
            var query = queries.updateItem(req.body, connection);

            query.on('end', function () {
                res.end();
                // ���������� ���������� 
                connection.release();

            });
        });
    }
}

