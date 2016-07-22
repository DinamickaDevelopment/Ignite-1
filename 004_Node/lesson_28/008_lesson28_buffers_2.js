var arr1 = new Uint16Array(10);
const buf1 = Buffer.from(arr1.buffer);
var arr2 = new Uint16Array(4);
const buf2 = Buffer.from(arr2.buffer); 

// ����� buf.write(string[, offset][, length][, encoding]) - ������ ������ � �����, ���������: 
    // string - ������ � ��������� ���� 
    // offset - ������ ������, � �������� �������� ������ 
    // length - ���������� ������ ��� ������  
    // encoding - ���������; �� ��������� utf-8 
buf1.write('123', 2, 2);
buf2.write('1234', 2, 3); 

// buf.toString([encoding][, start][, end]) - ������ ������ �� ������, ���������: 
    // encoding - ���������; �� ��������� utf-8 
    // start - ������, � �������� ������ ������ ������ ������ 
    // end - ������, �� �������� ������ ������ ������
var bufData = buf1.toString('utf-8', 2, 3);
console.log(bufData); // 1

// ������������ �������: Buffer.concat(list[, totalLength]), ���������:  
    // list - ������ ������� ��� ������������ 
    // totalLength - ����� ������, ����������� � ���������� ������������ 
var buf3 = Buffer.concat([buf1, buf2], 15);
console.log(buf3.toString());

// ��������� �������: buf1.compare(buf2);
// ���������� 0 ���� ������ �����, -1, ���� buf1 ���� ����� buf2 � 1, ���� �������� 
var res = buf1.compare(buf2);
console.log(res); // -1


// ����������� �������: buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd]), ���������:   
// targetBuffer - �����, � ������� ���������� ������
buf3.copy(buf2, 0, 2, 5);
console.log(buf2.toString()); 


