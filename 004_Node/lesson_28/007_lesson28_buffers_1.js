// �����(buffer) - ���������� ������ nodeJS. ��� ��� ������������� �� ����� �������� require. 
// ����� ������������ ��� ��������� ��������� ����. 


// ����� Buffer.from(array) - ������� ����� �� ������ ������� ������. 
const buf1 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]); // ������� ����� �����, ���������� ASCII �����
console.log(buf1.toString()) // buffer 

// ����� Buffer.from(arrayBuffer[, byteOffset[, length]]) - ������� ����� �� ������ ������ ������������� ������� JS 
// ��� ������������� ������ ������ ����� � ������������ ������ ��������� �� ���� � ��� �� ������� ������ 
var arr = new Uint16Array(10);
const buf2 = Buffer.from(arr.buffer, 2, 4);
console.log(buf2);

// ����� Buffer.from(str[, encoding]) - ������� ����� �����, ������� �������� ������ str � ��������� ���������(�� ��������� - utf-8) 
var buf3 = Buffer.from('Test buffer!');
console.log(buf3);
console.log(buf3.toString());

