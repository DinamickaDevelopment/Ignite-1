'use strict';

// ������ �������� �� ������ sample_module
const imported_module = require('./sample_module');

// ��� ���� ������������� �������� ������ �� ��������� ����� ������ - 
// � ������, � JS ��������. 

let a = imported_module.counter;
let b = imported_module.counter;

imported_module.printCount(a.count); // 0
imported_module.printCount(b.count); // 0

a.addCount();

// ���������� �� ������ �������� a, �� � �������� b, 
// ��� ��� a � b ��������� �� ���� � ��� �� ������ 

imported_module.printCount(a.count); // 1
imported_module.printCount(b.count); // 1
