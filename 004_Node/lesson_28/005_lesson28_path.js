var path = require('path');

// __filename - ���������� ������ nodeJS, ������� �������� ��� �����, ��� �������� ����������� 
// path.basename(path[, ext]) - ���������� ��������� ������� ���� �����. ��������: 
console.log(path.basename(__filename,'js')); 

// __dirname - ���������� ������ nodeJS, ������� �������� ��� ����������, � ������� ��������� ����, ��� �������� �����������  
// path.dirname(path) - ���������� ���������� ���������� ���� 
console.log(path.dirname(__dirname));


// path.parse(path) - ������������ ���� � ���� JS ������� 
var pathObj = path.parse(__filename); 
console.log(pathObj); 

// path.format(pathObject) - �����, ��������������� parse - ����������� ������ ���� � ������ 
console.log(path.format(pathObj)); 

// path.isAbsolute(path) - ���������� true, ���� ���� ����������, � ��������� ������ - false 
console.log(path.isAbsolute(__filename)); 

// path.join([path[, ...]]) - �����, ������� ���������� �������� ���� � ������������� ����, ���������� � ����������
console.log(path.join('/somefolder', __filename)); 
