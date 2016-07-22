    // ������(Streams) - �������, ������� ��������� ��������� ������ ��� ���������� ������ � �������� � ����������� ������.
    // � NodeJS ���� 4 ���� �������: 
        // Readable - �����, ������� ������������ ��� �������� ������
        // Writable - �����, ������� ������������ ��� ������� ������ 
        // Duplex - �����, ������� ����� ���� ����������� � ��� �������� ������, � ��� �������� ������ 
        // Transform - ��� duplex-������, � ������� �������� ������ ��������������� �� ������ ������� ������  

var fs = require('fs'); 
var writeData = 'This is the file content!'; 

// ����� ��� ������ ������ 
// ���������� ������� error(��� ������), finish(��� ���������� ������� �������� ������ ������)
var writerStream = fs.createWriteStream('output.txt'); 

writerStream.write(writeData, 'utf-8'); 

writerStream.end(); 

writerStream.on('finish', function() {
    console.log('Write completed'); 
}); 

writerStream.on('error', function(err) {
    console.log(err); 
});

// ����� ��� ������ ������
// ���������� ������� error(��� ������), data(����� ������ �������� ��� ������), 
// end(����� ������ ��� ��������� ������ ��� ������)
var readData = ''; 
var readerStream = fs.createReadStream('output.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function (chunk) {
    readData += chunk; 
});

readerStream.on('end', function () {
    console.log(readData); 
});

readerStream.on('error', function (err) {
    console.log(err);
}); 