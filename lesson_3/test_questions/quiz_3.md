#Вопросы к уроку 3
###1. Что выведет на экран alert? 
```
var arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?
``` 
* a) Все свойства массива
* b) Тело функции
* c) ошибка

###2. Какое значение вернет функция? 
```
function myFunc() {
return this; 
} 
myFunc(); 
```
* a) window
* b) undefined
* c) null

###3. Что выведет на экран alert? 
```
var obj = {
  go: function() { alert(this) }
}

(obj.go)()
```
* a) undefined 
* b) Тело функции
* c) ошибка

###4.  Что выведет на экран следующий код? 
```
var Obj = {
prop1: 1, 
prop2: 20
}
Obj.prototype.setProps = function() {
	this.prop1 = 10; 
}
alert(Obj.prop1); 
```
* a) 10
* b) 1
* c) undefined 

###5. Что выведет alert в этом коде? 
```
var name = "";

var user = {
  name: "Василий",

  export: function() {
    return {
      value: this
    };
  }

};

alert( user.export().value.name );
``` 
* a) ‘Василий’
* b) Пустую строку
* c) Случится ошибка

###6. Какое значение не может возвращать метод toString? 
* a) Число
* b) Строку
* c) Функцию 

###7. Что выведет на экран alert? 
```
var obj = {
     toString: function() {
	    return this; 
	}
}
alert(obj)

```
* a) Ошибка
* b) [Object][object]
* c) window 

###8. Что выведет на экран следующий код? 
```
function Human(name, lastname, age) {
 this.name = name; 
 this.lastname = lastname; 
 this.age = age; 

 this.toString = function() {
   return 123; 
  } 
}

var user = new Human(); 
alert(user); 
```

* a) undefined
* b) [Object][object]
* c) 123 

###9.  Что выведет на экран следующий код? 
```
var num1 = {
  toString: function() {
      return 123; 
   }, 
   valueOf: function() {
      return ‘20’
  }
}, 
num2 = {
  toString: function() {
      return 1; 
   }, 
   valueOf: function() {
      return ‘5’
  }

} 

alert(num1 + num2); 
```
* a) 25
* b) 205
*c) 1235 

###10. Что выведет на экран следующий код? 
```
var obj = {
     prop1: (function(){ 
	var a = alert(this); 
	
}())     

}
```
* a) Ошибка 
* b) [Object][object]
* c) window 

###11.  Что выведет на экран следующий код? 
``` 
var obj = {
     prop1: function() {
	return {
		get prop2() {
			return true
		}, 
		toString: function() {
			return false; 
		}
	}
  }

} 

alert(obj.prop1());  

``` 
* a) true
* b) false
* c) [Object][object] 

###12.  Что выведет на экран следующий код?  
```
var user = new Object(); 


Object.defineProperty(this, "prop1", {
isEnumerable: false, 
get: function() { 
return true;  
}
})

alert(this.prop1);

```
* a) true
* b) undefined
* c) null 

###13. Статический метод – это… 
* a) Методы и свойства, которые не привязаны к конкретному экземпляру объекта; 
* b) Методы и свойства, которые привязаны к конкретному экземпляру объекта; 

* c) Методы, которые служат для создания новых объектов;  

###14. Что выведет на экран следующий код?  
```
var user = new Object(); 


Object.defineProperty(user, "prop1", {
isEnumerable: false, 
get: function() { 
this.toString = function() {
	return 1; 
}
return this;  
}
})

alert(user.prop1.prop1); 

```
* a) [Object][object]
* b)  1
* c) Ошибка 

###15. Что выведет на экран следующий код?  
```
var obj = {
        x: 8,

        valueOf: function(){
            return this.x + 2;
        },
        toString: function(){
            return this.x.toString();
        }
    },
    result = obj < "9";

alert(obj);
```
* a) [Object][object] 
* b) 8
* c) 10 

###16. Что выведет на экран следующий код?  
```
var obj1 = {}; 
var obj2 = {prop1: false}; 

if(obj1 && obj2) {alert(true)}
```  
* a) true
* b) false
* c) Ощибка

###17. Что выведет на экран следующий код?  

```
var phrase = 'Hi!'; 

function Human() {

var phrase = 'hello!'; 

this.sayHi = function() {
	alert(phrase); 
}
} 


var user = new Human(); 
user.sayHi();
```  
* a) hello!
* b) hi!
* c) undefined 

###18. Что выведет на экран следующий код?  
```      
function IntNum(value) {
	this.value = value; 
	this.valueOf = function() {
		return +this.value; 
	}
}; 

var a = new IntNum(5); 
var b = new IntNum(10); 

alert(a + b);
``` 
* a) 15
* b) 105
* c) 5 

###19. Есть ли разница между вызовом функции-конструктора в формате ```var a = new Func()```  и ```var a = new Func```? 
* a) Да. Вариант вызова функции без скобок не сработает. 
* b) Нет. 

###20. Что выведет на экран следующий код?  
```
var obj1 = { 
	value: 1, 
	toString: function() {
		return this.value
	}
}; 

var obj2 = {
	value: 2, 
	valueOf: function() {
		return this.value
	    }
}; 

obj2.__proto__ = obj1; 
alert(obj2);
```
* a) 2
* b) 1
* c) [Object][object] 

###21. Что выведет на экран следующий код?  
var obj1 = { 
	value: 1, 
	toString: function() {
		return this.value++
	}, 
	method1: function() {return this} 
}; 
```

alert(obj1.method1());
* a) 1
* b) 2
* c) Ошибка





 







