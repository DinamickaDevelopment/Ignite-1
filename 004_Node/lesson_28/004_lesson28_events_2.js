var events = require('events');
var emitter = new events.EventEmitter;

var listener1 = () => {
    console.log('listener 1 executed'); 
}
var listener2 = () => {
    console.log('listener 2 executed');
}

emitter.on('error', (err) => { 
    console.log(err); 
}) 

emitter.on('event', listener1); 
emitter.on('event', listener2);

// ����� once ��������� ������� ���������� ������� 1 ���, ����� ���� �� ����� ������ 
emitter.once('event', listener2); 

// ������� listenerCount ���������� ���������� ������������ �������, 
// ����������� �� � �������� ��������� 
var listenerCount = emitter.listenerCount('event');
console.log(listenerCount); // 3 

emitter.emit('event');


var listenerCount = emitter.listenerCount('event'); 
console.log(listenerCount); // 2, ��� ��� ����������, ����������� � ������� once, ��� ������  

// removeAllListeners - �������, ������� ������� ��� ����������� �������, 
// ����������� �� � �������� ���������. ���� ������� �������� ��� ����������, 
// ��� ������� ��� ����������� �������, ���� ������ �� ������������� 
emitter.removeAllListeners('event');

var listenerCount = emitter.listenerCount('event');
console.log(listenerCount); // 0

