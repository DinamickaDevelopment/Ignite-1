#Вопросы к уроку 13

###1. Какая директива устанавливает обрабочик на событие изменения значения элемента формы? 
* a) ngFocus
* b) ngBlur
* c) ngTouch

###2. Что из перечисленного не является директивой, используемой в AngularJS? 
* a) ngBlur
* b) ngMousedown
* c) ngSubmit
* d) ngChange
* e) ngPaste 
* f) ngDelete 

###3. Укажите правильное написание Angular выоажений: 
* a) [ expression ]
* b) {{ expression }}
* c) { expression } 

###4. Укажите правильный синтаксис для директивы ngClass по параметру isVisible: 
* a ) ng-class="{'my-class':{{isVisible}} }"
* b) ng-class="{'my-class':isVisible }"
* c) ng-class="'my-class':{isVisible }"

###5. Укажите фильтры, которые существуют в Angular JS и применяются для изменения формата данных? 
* b) currency 
* c) sortBy 
* d) orderBy 
*e) selectBy 

###6. Какие выражения {{expression}} являются валидными в Angular JS? 
* a) user.name 
* b) 1 + 2 
* c) .name 
* d) a + b
* e) items[index] 

###7. Выберите правильный код, который применит фильтр currency к выражению: 
* a) ```<p>the best price: {{price | currency}}</p>```
* b) ```<p>the best price: {{price \ currency}}</p>```
* c) ```<p>the best price: {{price , ‘currency’}}</p> ``` 


###8. Что будет выведено на экран после запуска такого приложения?
```
<!doctype html> 
<html lang="en" ng-app> 
<head> 
  <meta charset="utf-8"> 
  <title>My HTML File</title> 
  <script src="lib/angular/angular.js"></script> 
</head> 
<body> 
 
  <p>Nothing here {{2+5}}</p> 
 
</body> 
</html> 
``` 
* a) Nothing here
* b) Nothing hrer {{2 + 5}}
* c) Nothing here 7
* d) 7 

###9. Что из перечисленного не может содержать Angular выражение? 
* a) регулярные выражения, циклические или условные конструкции
* b) функции 
* c) ключевое слово return 
* d) выражение не может содержать ничего из перечисленного 

###10. Выберитеправильный вариант использования фильтра для отображения данных в формате JSON? 
* a) ```<p>{{data | json}}</p>```
* b) ```<p>{{data | limitTo: json”}}</p>```
* c) ``````<p>{{data | filter:json}}</p>```

###11. Может ли директива ngClass использоваться в качестве элемента? 
* a) Да
* b) Нет

###12. Какие из перечисленных директив работают с CSS свойством display:none? 
* a) ngShow
* b) ngHide
* c) ngIf 
* d) ngInclude 
* e) ngSwitch

###13. Что из перечисленного не является CSS классом, используемым для валидации форм средствами AngularJS? 
* a) ng-pristine 
* b) ng-dirty
* c) ng-invalid
* d) ng-changed
* e) ng-touched

###14. Каким будет результат фильтрации массива $scope.items с помощью функции $scope.filterFunc
```
            $scope.items = [{ name: "Item 1", price: 10.9, category: "Category 1"},
                   { name: "Item 2", price: 1.1, category: "Category 1”},
                   { name: "Item 3", price: 2.6, category: "Category 2”},
                   { name: "Item 4", price: 17.5, category: "Category 2”},

            $scope.filterFunc = function (item) {
                if (item.category == ”Category 1”) {
                    return item;
                }
            }

```  
* a) При отображении данных будут проигнорированы все элементы массива, кроме тех, у которух свойство category имеет значение ”Category 2”
* b) При отображении данных будут проигнорированы все элементы массива, кроме тех, у которух свойство category имеет значение ”Category 1”
* c) Произойдет ошибка 


###15. Какая директива соответствует потере фокуса элемента формы? 
* a) ngBlur 
* b) ngLoseFocus
* c) ngFovuse

###16. Что из перечисленного необходимо для валидации формы с помощью средств AngularJS? 
* a) директива ngModel
* b) директива ngBind
* c) атрибут novalidate

###17. Какой CSS класс будет добавлен элементу формы при изменении его значения ? 
* a) ng-touched 
* b) ng-dirty 
* c) ng-pristine 
* d) ng-invalid
* e) ng-untouched 

###18. Для чего используется фильтр limitTo? 
* a) для отбора из коллекции нужного количества элементов
* b) для сортировки элементов коллекции
* c) для форматирования данных 

###19. Какой CSS класс будет иметь элемент формы до взаимодействия пользователя с ним ? 
* a) ng-pristine
* b) ng-invalid
* c) ng-untouched 
* d) ng-dirty

###20. Для чего используется фильтр orderBy?
* a) для отбора из коллекции нужного количества элементов
* b) для сортировки элементов коллекции
* c) для форматирования данных 
