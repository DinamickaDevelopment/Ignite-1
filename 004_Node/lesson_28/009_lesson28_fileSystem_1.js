// ���������� ������ fs - file system - ������������� API ��� ������ � �������. 
// ������ fs ����� ���������� � ����������� ����� 
var fs = require('fs');

// ����������� �������� ����� 
fs.writeFile('file.txt', 'this is some data!', function(err) { 
    if(err) {
        console.log(err)
    } 
}); 

// ����������� ������ �� ����� 
fs.readFile('file.txt', {encoding: 'utf-8'}, function(err, data) {
    if(err) {
        console.log(err)
    } 
    else {
        console.log(data.toString())
    }
}); 
