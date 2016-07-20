var counter = {
    count: 0,
    addCount: function () {
        return this.count++;
    }
};

var printCount = (num) => {
    console.log(`current count is ${num}`);
};

// module.exports - ������� ������ ��� �������� �������� �� ������, 
// ��� ��� �� ��������� ���������� �� � ���� ������ 
module.exports = {
    counter: counter,
    printCount: printCount
}; 
