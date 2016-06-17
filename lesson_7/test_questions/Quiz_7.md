#Вопросы к уроку 7 

###1. Какой из предложенный вариантов записи стиля верный? 
* a) e.style.font-weight: “bold”;
* b) e.fontWeight = “bold” ;
* c) e.style.fontWeight = bold; 
* d) e.style.fontWeight = “bold”;  

###2.  Что из перечисленного не является методом для вставки элементов на страницу? 
* a) insertBefore(); 
* b) insertAfter(); 
* c) appendChild(); 
###3. Что выведет на экран следующий код? 
…<body>
<ul>
	<li>1</li> 
	<li>2</li>
	<li>3</li>
</ul>
<script>
	var ul = document.getElementsByTagName('ul')[0]; 

	var ul2 = ul.cloneNode(true); 
	document.body.appendChild(ul2); 
	alert(ul2.firstChild.nodeType); 

</script>

</body> … 

* a) 3
* b) 1
* c) 2 

###4. Что увидит на экране пользователь после загрузки страницы? 
```
…<head>
<script> 
 window.onload = function() {
 	document.write('1'); 
 }
</script>
</head> 
<body>
<div id="div1">Some text</div>
</body>…

```
* a) 1
* b) Some text 
* c) Some text1 
* d) 1Some text

###5. Что увидит на экране пользователь после загрузки страницы? ```
…<script> 
 window.onload = function() {
 	document.body.insertAdjacentHTML("beforeEnd", '<div id="div2">Hello
        world</div>');  
 }
</script>
</head> 
<body>
<div id="div1">Text</div>
</body>…
```
* a) Hello world 
* b) 
Hello world 
Text 

* c)  
Text 
Hello world 

###6. В каком из примеров кода нет ошибки? 
* a) 
```
div.style.cssText = 'background-color: yellow; \
    width: 100px; \
    text-align: center; '
``` 
* b) 
```
div.cssText = 'background-color: yellow; \
    width: 100px; \
    text-align: center; '
``` 

* c) 
```
div.style.css= 'background-color: yellow; \
    width: 100px; \
    text-align: center; '
``` 

###7. В каком из следующих примеров значение свойства width элемента div получено неправильно? 
* a) var width = div.getAttribute('style', 'width'); 
* b) var width = div.getComputedStyle(div).width; 
* c) var width = getComputedStyle(div).width; 

###8. Что выведет на экран следующий код? 
```
…
<style type="text/css">
	#div {
		width: 200px; 
		height: 200px; 
		background-color: green;
	}
</style>
<script> 
 window.onload = function() {
 	var div = document.getElementById('div1'); 
 	alert(div.style.width); 
 }
</script>
</head> 
<body>
<div id="div1"></div>
</body>  …
``` 
* a) пустую строку 
* b) 200px
* c) 200  

###9. Какой из методов вставляет элемент в начало DOM-узла? 
* a) node.before(nodes); 
* b) node.prepend(nodes); 
* c) node.append(nodes); 

###10. Какой из нижеперечисленных вариантов кода добавит элемент li  в список ul? 
var ul = document.getElementById("ul"); 
var li = document.createElement('li'); 

...ваш код...

* a) document.body.ul.appendChild(li); 
* b) ul.appendChild(li); 
* c) ul.appendChild(‘li’);  

###11.  Что выведет на экран следующий код? 
```
…<style type="text/css"> 
#div1 {
	padding: 50px; 
	width: 200px; 
	height: 200px; 
	border: 5px solid green; 
}
</style>
</head>

<script> 
 window.onload = function() {
 	var div = document.getElementById('div1'); 

 	 alert(div.offsetWidth); 
 }
</script>
</head> 
<body>
<div id="div1"></div>
</body> …  
``` 
* a) 310 
* b) 210 
* c) 200 

###12. Что делает метод  elementFromPoint(x, y)? 
* a) возвращает элемент, который находится на координатах (x, y) относительно окна. 
* b) возвращает координаты элемента, под которыми понимаются размеры «воображаемого прямоугольника», который охватывает весь элемент.
* c) возвращает элемент, который находится на координатах (x, y) относительно экрана. 
.
###13. Какие свойства хранят размеры окна браузера? 
* a) window.screenWidth/Height ; 
* b) document.documentElement.clientWidth/ Height; 
* c) window.innerWidth/ Height;  

###14. Что выведет на экран следующий код? 

…<body>

<div id="div1"></div
<p></p>
</div> 

<script>
var div = document.getElementById("div1"); 
var paragraph = document.getElementsByTagName("p")[0]; 

alert(div.removeChild(paragraph).nodeType); 
</script>
</body>…

* a) 1
* b) 3
* c) null 

###15. Что делает метод  getBoundingClientRect()? 
* a) возвращает элемент, который находится на координатах (x, y) относительно экрана. 
* b) возвращает элемент, который находится на координатах (x, y) относительно окна.
* c) возвращает координаты элемента, под которыми понимаются размеры «воображаемого прямоугольника», который охватывает весь элемент.

###16. В каком примере правильно установлены координаты для элемента div со свойством position: absolute? 
* a) div.style.left = 100 + "px"; 
* b) div.css.left = "100px"; 
* c) div.style.left = 100; 

###17. Выберите правильный способ запрета прокрутки страницы? 
* a) document.body.overflow = "auto";
* b) document.body.style.overflow = "auto"; 
* c) document.body.style.overflow = "hidden"; 

###18. Что делает метод scrollIntoView в данном примере? 
```
…<style type="text/css"> 
#div1 {
	padding: 50px; 
	width: 200px; 
	height: 200px; 
	border: 5px solid green; 
	position: absolute; 
	left: 200px; 
	top: 500px;
}
</style>
</head>

<script> 
  window.onload = function() {
  	div.scrollIntoView(false); 
  }
</script>
</head> 
<body>
<div id="div1"></div>
</body> … 
```
* a) прокручивает страницу так, что элемент div оказывается в нижней части области видимости страницы. 
* b) прокручивает страницу так, что элемент div оказывается в центре страницы.
* c) прокручивает страницу так, что элемент div оказывается в верхней части области видимости страницы.

###19. Что из перечисленных ниже вариантов является значением свойства clientTop? 
* a) ширина верхнего отступа padding;
* b) ширина верхнего отступа margin; 
* c) ширина верхней рамки border; 

###20. Что выведет на экран следующий код?
…<body>
<div id="div1">info</div> 
<script> 

var div = document.getElementById("div1"); 
var text=" text"
div.appendChild(document.createTextNode(text)); 

</script>

</body>…

* a) text 
* b) info text 
* c) info

###21. Что из перечисленных ниже вариантов является значением свойства offsetParent? 
* a) ссылка на body. 
* b) ссылка на дочерний элемент в смысле отображения на странице.
* c) ссылка на родительский элемент в смысле отображения на странице.

###22. Что из перечисленных ниже вариантов является значением свойства scrollTop?
* a) высота невидимой, прокрученной в данный момент, части страницы сверху.
* b) высота элемента с учетом вертикальной прокрутки. 
* c) высота невидимой, прокрученной в данный момент, части элемента сверху.
