function Counter() {

    this.count = 0;
    this.addCount =  function() {
        return this.count++; 
    }

};

var printCount = (num) => {
    console.log(`current count is ${num}`);
};

// ������� ���������� �������-������������ 
module.exports = {
    counter: function () {
        return new Counter; 
    },
    printCount: printCount 
};
