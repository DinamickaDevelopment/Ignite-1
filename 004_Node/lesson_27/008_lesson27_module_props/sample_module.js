// � ������ ������� �������� �������� ������� module 

// ��� ����� � �������
console.log('module id: ' + module.id);
console.log('module filename: ' + module.filename);

// boolean - �������� ������ ��� ���
console.log('module is loaded: ' + module.loaded);
// ������, ����������� ��������� ������ 
console.log(module.parent);


module.exports = {
    msg: 'Sample module loaded!'
};

