#Вопросы к уроку 4 

###1.  Какие аргументы принимает метод call? 
* a) (context, [arg1, arg2…]); 
* b) (context, arg1, arg2…); 
* c) ([arg1, arg2…], context]);  

###2. Что такое карринг? 
* a) термин, который означает создание новой функции путём фиксирования контекста выполнения существующей. 
* b) термин, который означает создание новой функции путём фиксирования аргументов существующей. 
* c) термин, который означает создание новой функции путём фиксирования аргументов и контекста выполнения существующей. 

###3. Что выведет на экран следующий код? 
```
function f(a,b,c) {
	 return a + b + c; 
} 

var func = f.bind(this,3,3); 
alert(func(1)) ;  
``` 
* a) 6
* b) 7
* c) undefined 

###4. Что выведет на экран следующий код? 
```
function f(a,b) {
   arguments.join = [].join; 

   return arguments.join("*"); 
} 

alert(f(1,2,[1,2,3]));
```
* a) 1\*2\*1,2,3
* b) 12123
* c) undefined 

###5. Что выведет на экран следующий код? 
```
function f() {
  alert( this );
}

var user = {
  g: f.bind("Hello")
}

user.g();

``` 
* a) Hello 
* b) udefined
* c) window 

###6. Что выведет на экран данный код? 
```
var user1 = {
name: "Вася", 
sayHi: function() {
  alert( this.name )
  }
}; 
var user2 = { 
name: "Петя" , 
sayHi: function() {
  alert( this.name )
  }

}; 

var func = user1.sayHi.call(user2); 
func(); 
``` 
* a) Вася
* b) Петя 
* c) undefined 

###7. Что выведет на экран данный код? 
```
function f1(a) {
	return f2.call(f1,5,5)
}
function f2(a, b) {
	return a + b
}; 

var func = f1.bind(f2,6,7); 

alert(func());
``` 
* a) 10
* b) 13
* c) 11 

###8. Что выведет на экран данный код? 
```
function f() {
	arguments.concat = [].concat; 
	return arguments.concat("4,5,6"); 
} 

alert(f(1,2,3)); 
``` 
* a) {object Arguments},4,5,6
* b) 1,2,3,4,5,6
* c) undefined 

###9. Что выведет на экран данный код? 
```
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

var bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test )
``` 
* a) 5 
* b) Вася 
* c) undefined 

###10. Что выведет на экран данный код?
```
function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
``` 
* a) Вася
* b) Петя
* c) Ошибка 

###11. Что выведет на экран данный код? 
```
var count = 1; 

function f(a) { 
	alert(a); 
	if(count > 0) { 
	count--; 
	return f.call(f,5); 
    }
}  
f(3);  
```
* a) 3, затем 5
* b) только 5
* c) только 3 

###12.  Что выведет на экран следующий код? 
```
function func() {
alert(func.bind(this)); 
}; 

func(); 
``` 
* a) window
* b) Ошибка
* c) function() {…} 

###13. Что выведет на экран следующий код? 
```
function sayHi(name) {
alert(name); 
}; 

var user = {
name: ‘Vasya’, 
age: 25
}

sayHi.call(user, this.name); 
  
```
* a) ‘Vasya’
* b) null
* c) undefined 

###14. Что будет выведено на экран? 
```
function printArgs() {
  arguments.join = [].join; // одолжили метод (1)

  var argStr = arguments.join(':'); // (2)

  alert( argStr ); // сработает и выведет 1:2:3
}

printArgs(1, 2, 3);
```
* a) 1, 2, 3
* b) undefined
* c) Ошибка 

###15. В каком из предложенных вариантов метод bind на функции f вызван правильно? 

* a)
```
var bound = bind(this, f.arguments); 

```
* b) 
```
var bound = f.bind(this, f.arguments); 

```

* c) 
```
var bound = f.bind(this, arguments); 

```

###16. Что будет выведено на экран?  
```
  var user = {
	fullName: 'Вася Иванов', 
	get firstName() {
		return this.fullName.split(' ')[0]; 
	}, 
} 

alert(user.firstName);
```
* a) Вася 
* b) Вася Иванов 
* c) undefined  


###17. Что будет выведено на экран?  
```
var obj = new Object; 

Object.defineProperty(obj, 'prop1',{
  value: "prop1",
  writable: false, 
  configurable: false}); 

obj.prop1 = 'prop2'; 
alert(obj.prop1);
``` 
* a) prop1
* b) prop2
* c) undefined 


###18. Что будет выведено на экран?  
```
var user = new Object(); 
Object.defineProperty(user, 'name', {
	value: 'Вася', 
	enumerable: false 
})

for(var key in user) alert(key);  
``` 
* a) Вася
* b)  Ничего
* c) Ощибка 

###19. Какую функцию выполняет декоратор? 
* a) Модифицирует поведение функции, позволяет упростить рутинные, повторяющиеся задачи, вынести их из кода функции.
* b) Осуществляет привязку контекста к функции; 
* c) Осуществляет привязку контекста к функции и вызывает ее;

###20. Что выведет на экран следующий  код? 
```
  var user = {
  firstName: "Василий",
  surname: "Петров",
  patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
  alert( this[firstPart] + " " + this[lastPart] );
}
showFullName.call(user, 'firstName', 'surname') 

``` 
* a)  Василий Петров
* b) Василий Иванович 
* c) undefined

###21. Что выведет на экран следующий  код? 
```
function User(name) {
	this.name = name; 
	this.sayHi = function() {
		alert('Hello, I am ' + this.name)
	}
} 

function checkAdmin(func, context) {
	if (context.name == 'admin') {
	    return func.apply(context, func); 
	} 
	else {
	alert('недостаточно прав!')
	}
}; 

var user1 = new User('admin'); 
checkAdmin(user1.sayHi, user1); 

```
* a) Hello, I am admin 
* b) недостаточно прав! 
* c) Ошибку 

###22. Что выведет на экран следующий  код? 
```
var a = 1 ;
function func(func) { 
	var a = 0; 
	alert(this.a); 
	return function() {
	    return func.bind(this)
	} 
} 

func()(); 
``` 
* a) undefined 
* b) 0
* c) 1 

###23. Что выведет на экран следующий  код? 
```
 var counter = 0;
function countFunc(func) {
counter++; 
alert(counter); 

return func.apply(null); 
} 

function f() {
	return true; 
}; 

countFunc(f);

``` 
* a) 1
* b) 0
* c) undefined 


