#Вопросы к уроку 12

###1. Что такое контроллер? 
* a) Функция, осуществляющая связь между представлением и моделью 
* b) Функция, осуществляющая связь между представлением и моделью и используемая для манипуляции DOM 
* c) Функция, используемая для создания сервисов 

###2. Какая директива используется для односторонней привязки данных? 
* a) ng-bind
* b) ng-model
* c) ng-app

###3. В чем отличие односторонней привязки данных от двусторонней? 
* a) при односторонней привязке данные в модели не меняются при их изменении в представлении, в отличии от двухсторонней
* b) при двусторонней привязке данные в модели не меняются при их изменении в представлении, в отличии от односторонней
* c) Разницы нет. 

###4. Выберите правильные варианты односторонней привязки данных: 
* a) <p>{{item}}</p>
* b) <p>ng-bind=”item”</p>
* c) <p ng-bind=”item”></p>
* d) <p class=”{{item}}”></p>
* e) <ng-bind=”item”></ng-bind>

###5. Может ли в приложении использоваться больше одного контроллера? 
* a) Да 
* b) Нет

###6. Какой класс (классы) будут у тега 'b' ? 
```
<div ng-app="app" ng-init="false_= 'false';"> 
  <b class="false" ng-class="{'true': false_};"></b> 
</div> 
``` 
* a) false
* b) true
* c) false true 
* d) true false 

###7. Что будет напечатано на странице в результате выполнения этого кода? 
```
<script>
angular.module('myTestApp',[]) 
 
    .controller('scopeCtrl',['$scope',function($scope){ 
        $scope.data = { 
            brand: "mitsubishi", 
            model: "lancer" 
        } 
    }]); 
</script>
<body ng-app="myTestApp"> 
    <div ng-controller="scopeCtrl"> 
        <h1>{{data.brand}}</h1> 
    </div> 
    <div> 
        <h1>{{data.model}}</h1> 
    </div> 
</body> 

```
* a) mitsubishi
* b) lancer
* c) mitsubishi lancer 
* d) ничего 

###8. Каких встроенных директив не существует в Angular JS? 
* a) ng-click
* b) ng-model
* c)ng-send
* d) ng-paralize 

###9. Можно ли использовать несколько директив на одном элементе? 
* a) Да 
* b) Нет  

###10. Какой директивы не существует? 
* a) input
* b) input[year]
* c) input[date]
* d) input[month]

###11. Может ли модуль использовать больше одного контроллерра? 
* a) Да 
* b) Нет
 
###12. Директива ngModel: 
* a) устанавливает требуемый css-класс для элемента (ng-valid, ng-invalid, ng-dirty, ng-pristine)
* b) связывание вида с моделью при использовании с другими директивами, такими как input, textarea или select
* c) осуществляет двустороннюю привязку данных
* d) регистрирует элемент управления в родительской директиве form 

###13. Какой класс будет присвоен четным элементам p? 
```
<p ng-repeat="item in items" ng-class="$even ? 'class1' : 'class2'"></p>
``` 
* a) class1
* b) class2
* c) class1 class2

###14. Выберите правильный вариант отображенич данных массива items в виде списка 
по свойству name: 
```
  $scope.items = [{ name: 'item1', created: 2011 }, { name: 'item2', created: 2015 },
            { name: 'item3', created: 2013 }, { name: 'item4', created: 2003 },
            { name: 'item5', created: 2016 }, { name: 'item6', created: 2010 },
            { name: 'item6', created: 2014 }, { name: 'item7', created: 2005 },
            { name: 'item8', created: 2012 }, { name: 'item9', created: 2001 }];
        })
```  
* a) <ul><li ng-repeat=”item in items”>{{item.name}}</ul>
* b) <ul><li ng-repeat=”item in items”>{{name}}</ul>
* c) <ul ng-repeat=”item in items”><li >{{item.name}}</ul>
 
###15. Может ли один элемент на странице использовать несколько контроллеров? 
* a ) Да 
* b) Нет

###16. В каком из вариантов кода ошибка? 
* a) app.controller(‘mainCtrl’, function(scope){
$scope.message = ‘Hello world!’
})
* b) app.controller(‘mainCtrl’, function(){
this.message = ‘Hello world!’
})

* c) app.controller(‘mainCtrl’, function($scope){
$scope.message = ‘Hello world!’
})  

###17. Директива ng-include: 
* a) асинхронно загружает HTML разметку с помощью кросс-доменного запроса
* b) асинхронно загружает HTML разметку с помощью AJAX 
* c) показывает/скрывает фрагмент DOM дерева 

###18. Какая директива используется для двусторонней привязки данных? 
* a) ng-model
* b) ng-bind
* c) ng-connect

###19. Что будет выведено на экран в резульатате выполнения этого кода? 
```
    <script>
        var app = angular.module('myApp', [])
        .controller('firstCtrl', function ($scope) {
            $scope.message = 1; 

        })
        .controller('secondCtrl', function ($scope) {

        })


    </script>
</head>
<body>
<div ng-controller="firstCtrl">
    <div ng-controller="secondCtrl">{{message}}</div>
</div>
</body>
```  

* a) 1
* b) ничего 
* c) произойдет ошибка

###20. Что будет выведено на экран в резульатате выполнения этого кода? 
```
    <script>
        var app = angular.module('myApp', [])
        .controller('firstCtrl', function ($scope) {
     
                setTimeout(function () {
                    $scope.message = "1";
                }, 1000);
            

        })
     


    </script>
</head>
<body>
<div ng-controller="firstCtrl">
    {{message}}
</div>
</body>
``` 
* a ) 1
* b) ничего 
* c) произойдет ошибка 
