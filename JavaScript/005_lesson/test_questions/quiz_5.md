#Вопросы к уроку  5
###1.  Что такое полиморфная функция? 
* a) Функция, которая может быть вызвана неограниченное количество раз. 
* b) Функция, которая по-разному обрабатывает аргументы в зависимости от их типа.
* c) Функция, которая принимает больше 3 аргументов; 

###2. Что выведет на экран следующий код? 
```
var date = new Date;
alert( toString.call(date) ); 
``` 
* a) текущую дату 
* b) [Object]
* c) [object Date]

###3. Что выведет на экран следующий код? 
```
var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
};

setTimeout(user.sayHi, 1000)
 ``` 
* a) null
* b) undefined
* c) Ошибка 
* в) Вася 

###4.  Какое значение будет выведено на экран первым? 
```
function func1() {
setTimeout(function(){alert(1)}, 1000); 
}; 

function func2() {
setInterval(function(){alert(2)}, 1000); 

}; 

func1(); 
func2(); 

``` 
* a) 1 
* b) 2 
* c) undefined 

### 5. У какого из предложенныъ объектов нет внутреннего свойства [[Class]]? 
* a) new Date(); 
* b) new Object(); 
* c) new Function(); 
* d) свойство есть у всех предложенных объектов;  

### 6. Что выведет на экран данный код? 
```
var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);

alert( user.friends[1] ); 
``` 
* a) 1
* b) null
* c) [1, 2, 3] 

### 7. Что выведет на экран данный код? 
```
var a = 1; 
var timer = (function(){setInterval(function() {
	alert(a++); 
}) }()); 


clearInterval(timer);
``` 
* a) 1, затем 2, затем 3 и т.д. 
* b) Ничего
* c) Произойдет  ошибка 

### 8.  Что возвращает метод eval при вызове? 
* a) Последнее вычисленное выражение; 
* b) undefined
* c) логическое значение 

### 9. Выберите вариант, в котором представлена правильная запись JSON – объекта. 
* a) var obj = {"key1":"prop1","key2":"prop2","key3":"prop3"}; 
* b) var obj = ‘{"key1":"prop1","key2":"prop2","key3":"prop3"}’; 
* c) var obj = {'key1': 'prop1', 'key2': 'prop2', 'key3': 'prop3'}; 

### 10. Каким будет результат выполнения следующего кода? 
```
var counter = 0;
function printNum() {
	document.write(counter); 
	counter++; 
} 

setInterval(printNum, 100); 
setTimeout(function(){ clearInterval(printNum)}, 1000); 
``` 
* a) На экран будут выводиться числа в возрастающем порядке на протяжении 1 секунды; 
* b) На экран будут выводиться числа в возрастающем порядке на протяжении 100 миллисекунд; 
* c) На экран будут выводиться числа в возрастающем порядке бесконечно; 

### 11. Каким будет результат выполнения данного кода? 
```
var user = {
name: 'Vasya', 
sayHi: function() {

      alert(this.name); 
   }
} 

user = JSON.stringify(user); 
alert(user);
```
* a) {"name":"Vasya"}
* b) {"name":"Vasya", "sayHi":"Vasya"}
* c) {"name":"Vasya", "sayHi":"function() { alert(this.name);  }"}

### 12. Что такое “утиная типипзация”? 
* a) Подход к типизации,  основанный на наличии или отсутствии необъодимыъ методов и свойств у проверяемого операнда.  
* b) Типизация с помощью оператора typeof. 
* c) Подход к типизации,  основанный на обращении к внутреннему свойству [[Class]]. 

### 13. Что выведет на экран данный код?
```
var x = 5;
eval(" alert( x ); x = 10"); 
alert( x ); // 
``` 
* a) 5 
* b) 10 
* c) undefined 

### 14. Что выведет на экран данный код? 
```
function User() {
this.name = name; 
this.age = age}

var user = new User('someName', 28);

alert( user instanceof User ); 
```
* a) true
* b) [Object][object]
* c) false 

### 15. Что выведет на экран данный код? 
```
var user = '{"name":"Vasya", "sayHi": "null"}'; 

user = JSON.parse(user, function(key, value){
	if (key == "sayHi") {
		return function() {alert(this.name)}; 
	} 
	return value; 
}) 

user.sayHi();
``` 
* a) Vasya
* b) undefined
* c) Ошибка 

### 16. Что выведет на экран данный код? 
```
try {
  setTimeout(function() {
    throw new Error(); 
  }, 1000);
} catch (e) {
  alert(e);
}
``` 
* a) Ничего. Произойдет ошибка; 
* b) Текст ошибки;  
* c) Ничего. Ошибки не произойдет;  

### 17.  Что выведет на экран данный код? 
```
var a = 1; 
function timer() {
	alert(a++); 
}

var t = setInterval(timer, 200); 

clearInterval(t);
``` 
* a) Ничего
* b) 1, 2, 3… 
* c) Ошибка 

### 18. Что выведет на экран данный код?
```
"use strict";

eval("var a = 5; function f() { }");
alert( a ); 
``` 
* a) Ошибка
* b) undefined 
* c) 5 

### 19. Какая величина минимальной задержки таймера (setTimeout или setInterval)? 
* a) 10мс
* b) 4 мс
* c) 30мс 

### 20. Что выведет на экран данный код?
```
var data = '{ "age": 30 }'; 
try {

  var user = JSON.parse(data); 
  if(!user.name) { 
  	throw new Error( "Извините, в данных ошибка" );}
  alert( user.name ); 

} catch (e) {
 alert( "Извините, в данных ошибка" );
}
``` 
* a) Извините, в данных ошибка
* b) undefined 
* c) null 

### 21. Что выведет на экран данный код? 
```
var data = '{ "age": 30 }'; 
try {

  var user = JSON.parse(data); 
  if(!user.name) { 
  	throw new Error( "Извините, в данных ошибка" );}
  alert( user.name ); 

} catch (e) {
  user.name = 'Vasya'; 
} 
finally {
	alert(true); 
}
``` 
* a) true
* b) Vasya
* c) undefined 



 
