#Quiz 1

###1.	Что выведет alert? 
```
var arr = [1, 2, 3];
arr.something = 5;

alert(arr.something); // ?
```

* a)	5 
* b)	undefined
* c)	Ошибку  

###2.  Каким будет результат сортировки массива? 
```
var arr = [25, 72, 90]; 
function compareNumeric(a, b) {
  return a - b;
}

arr.sort(compareNumeric)
```
* a) [90, 72, 25] 
* b) [25, 72, 90]
* c) Ошибка 

###3. Что будет выведено на экран? 
```
var arr = [1, 2, 3, 4, 5]; 

var arr2 = arr.splice(1,2);  
document.write(arr); 
  ```           
  * a) 1,2,3,4,5 
  * b) 1,4,5 
  * с) 3,4,5 

###4. Какая длина массива arr после выполнения данного кода? 
```
var num1 = 10, num2 = 20; 
var arr = [12]; 

for (i = 0; i < num1; i++) {
  
 for (j = 0; j < num2; j++) {
   arr[i] = j; 

   }
}
```

* a) 10
* b) 20
* c) 12

###5. Выберите способы перебора массива: 
* a) Конструкция for … in
* b) метод forEach() 
* c)  метод map() 

###6. Выберите правильный вариант цикла, итерирующий значения массива? 
* a) for (i: [1, 2, 3]
* b) for (I in [1, 2, 3]) 
* c) foreach (i: [1, 2, 3]) 

###7. Какой метод удаляет последний элемент массива? 
* a) pop() 
* b) shift() 
* c) slice() 

###8.  Что будет выведено на экран? 
```
  var user1 = {name: ‘Petya’, age: 26}; 
  var user2 = {name: ‘Vasya’, age: 30}; 
  
  user2.friend = user1; 
  user1.friend = user2; 

document.write(user1.friend.friend.name); 
```
* a) ‘Petya’  
* b) undefined
* c) Ошибка 

###9. Каким будет результат? 
 ```
 var a = new Array(5).join(‘5’); 
 console.log(a); 
``` 
* a) 55555  
* b) ‘55555’ 
* c) ‘555555’ 

###10.  Что будет выведено на экран?
```
var r  = [‘a’, ‘l’, ’p’, ‘h’]; 

r.length = 10; 
delete r[0]
alert(r.length); 
```
* a) 10
* b) 4
* c) 9 

###11. Для проверки наличия свойства у объекта используется конструкция: 
* a) object as property  
* b) if (“property” in object) 
* c) object.(has property) 

###12. Что такое Arguments? 
* a) это Функция-конструктор 
* b) это функциональный литерал 
* c) это функция, которая выполняет инициализацию свойств объекта и предназначена для использования совместно с инструкцией new 
* d) это объектное представление массива, позволяющее извлекать переданные функции значения по индексу, а не по имени 

###13. При создании массива был использован конструктор Array(), в который передали одно значение  ”8”  
```
var a = Array(8); 
``` 
Какой массив в результате будет создан? 

* a) Массив на один элемент с числом ”8” 
* b) Пустой массив на 8 элементов 
* c) Так создавать массив нельзя 

###14. Какой вариант кода выведет все свойства объекта на экран? 
```var obj = {prop1: ‘1’, prop2: 30, prop3: ‘some string’, prop4: ‘another property’} ```

* a) ```for (prop in opj) {
    			document.write(prop)                
                     }```
* b)``` for (‘prop’ in obj) {
    			document.write(prop)                
                     }```
* c) ```for (prop in obj) {
    			document.write(obj[prop])                
                     }```

###15. Сколько параметров может принимать функция? 
* a) Сколько угодно 
* b) Столько, сколько у функции аргументов 
* c) один 

###16. Какие методы массива используются для добавления новых элементов в массив? 
* a) unshift() 
* b) shift()
* c) push() 
* d) concat() 
* e) map() 

###17. Что будет выведено на экран?  
``` 
var arr = [1, -30, 256, 89, 10, 23, 28]; 

 var filteredArr = arr.filter(function(num) {
	if (num % 2 == 0) {
    		return num
 } 
}) 
document.write(arr); 
```
* a) -30, 256, 10, 28
* b) 1, -30, 256, 89, 10, 23, 28
* c) 1, 89, 23 

###18. Что будет выведено на экран?  
```
var obj = new Object(); 

obj.property; 
alert(obj.property); 
```
* a) Ошибка
* b) undefined
* c) пустая строка 

###19. Какой из ниже предложенных вариантов вернет текущую дату? 
* a) var date = new Date() 
* b) var date = Date() 
* c) var date = Date.getTime();  

###20. Что будет выведено на экран? 
```
var arr = [5]; 
arr[0] = 5; 
arr[3] = 0; 

document.write(arr); 
```
		
* a) 5,5,0
* b) 5,,,0, 
* c) 5,,0,, 

###21. Какой из методов объекта Date вернет время, прошедшее с 1/1/1970 в миллисекундах? 
* a) getDate() 
* b) getTime() 
* c) getMilliseconds() 


