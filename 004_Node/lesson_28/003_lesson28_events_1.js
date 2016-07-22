// ����� ��������� EventEmitter ��������� ����� ������, �� ���������� ������� 'error' 
// ����� �������� ����� ���������� �������, EventEmitter ���������� ������� 'newListener'
// ����� ������ ���������� �������, ������������ ������� 'removeListener'

'use strict'; 
 
// ������ ������ events
const events = require('events');

// �������� ���������� EventEmitter
const emitter = new events.EventEmitter;

emitter.on('newListener', () => {
    console.log('event listener added!')
});

emitter.on('removeListener', () => {
    console.log('event listener removed!')
});

emitter.on('error', (err) => {
    console.log(err)
});

let counter = 0;
let count = () => {
    counter++;
    console.log(counter);
}; 

emitter.on('count', count); 


emitter.emit('count');
emitter.emit('count');

// � nodejs ������� ������������� ���������� �� ������� error, 
// ��� ��� �������������� ������ ����������� ���������� node ���������� 
emitter.emit('error', new Error('Something went wrong!'));

emitter.removeListener('count', count); 
