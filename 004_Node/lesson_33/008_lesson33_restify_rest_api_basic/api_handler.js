var idCounter = 0;
// ��������� ������ 
var store = [];

// ������� ��� ������ �������� �� ID 
function getItemById(id) {
    var found = false; 

    for (var i = 0; i < store.length; i++) {
        if (store[i].id == id) {
            found = true; 
        }
    }
    return found; 
} 

module.exports = {

    // ������� ��� �������� 
    getItems: function (req, res) {
     
        console.log(store); 
        res.send(store); 
    },
    // �������� ����� ������� 
    addItem: function(req, res) { 

        var newItem = {
            id: idCounter++, 
            name: 'Test', 
            description: 'Test Item'
        } 

        store.push(newItem); 
        console.log(newItem)
        res.header('Allow', 'POST'); 
        res.send(store); 
    },
    // �������� ������� �� ID 
    updateItem: function(req, res) { 

        var updatedItem = {
            id: req.params.id, 
            name: 'New name', 
            description: 'New description'
        }; 

        if (getItemById(req.params.id)) { 
   
            store.splice(req.params.id, 1, updatedItem); 
            console.log('item by id ' + req.params.id + ' changed!');
            res.send(updatedItem);   

        } else {
            throw new restify.errors.InternalError('Wrong item id. Update failed')
        }

    },
    // ������� ������� �� ID
    removeItem: function(req, res) { 

        if (getItemById(req.params.id)) { 

            store.splice(req.params.id, 1); 
            console.log('item by id ' + req.params.id + ' removed!'); 
            res.send('item by id ' + req.params.id + ' removed!');  

        } else {
            throw new restify.errors.InternalError('Wrong item id. Couldn\'t delete item')
        }
    }

}

