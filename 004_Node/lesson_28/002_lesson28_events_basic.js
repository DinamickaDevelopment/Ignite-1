'use strict'; 

// ������ ������ events
const events = require('events');

// �������� ���������� EventEmitter
const emitter = new events.EventEmitter; 

// ���������� ����������� ������� 
emitter.on('event', () => {
    console.log('an event occured!'); 
}); 

// ��������� ������� 'event'
emitter.emit('event');

