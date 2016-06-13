#Homework 

###Задача 1 

Напишите интерфейс, который принимает математическое выражение (в prompt) и результат его вычисления через eval.
При ошибке нужно выводить сообщение и просить переввести выражение.
Ошибкой считается не только некорректное выражение, такое как 2+, но и выражение, возвращающее NaN, например 0/0.

###Задача 2  

Напишите функцию smartSum, которая: 
* Принимает произвольное количество аргументов; 
* Возвращает сумму всех переданных ей аргументов; 
* Принимает за 0 любой аргумент, который не может быть преобразован в числовой тип (т.е при попытке его парсить возвращается NaN); 
* Может быть вызвана неограниченное количество раз; 
* Каждый последующий ее вызов будет прибавлять сумму своих аргумен тов к сумме аргументов, полученной при предыдущем ее вызове; 
```
smartSum(3) // 3; 
smartSum(1, 2)  // 3;
smartSum(1, 3)(2) // 6; 
smartSum(1, 2)(3, 4, 5)(6)(7, 10) // 38; 
``` 

### Задача 3 

Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.
Ее первый аргумент должен содержать дату в одном из видов:
* Как объект Date.
* Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
* Как число секунд с 01.01.1970.

* Как массив [гггг, мм, дд], месяц начинается с нуля
Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.
Пример работы: 
```
function formatDate(date) { /* ваш код */ }

alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01
``` 