// Piping streams - ��������������� ������ ������ ������ � ������� ������  

var fs = require("fs");

// ������� ����� ��� ������ ������
var readerStream = fs.createReadStream('input.txt');

// ������� ����� ��� ������ ������
var writerStream = fs.createWriteStream('output.txt');

// �������� ������ ������ readerStream ������ writerStream 
readerStream.pipe(writerStream);

writerStream.on('finish', function () {
    console.log('data written to file output.txt')
});