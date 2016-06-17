# Вопросы к уроку 6
###1. Как расшифровываются названия DOM и BOM? 
* a) Document Object Model, Browser Object Model; 
* b) Document Open Model, Browser Open Model; 
* c) Dynamic Object Model, Browser Object Model; 

###2. Какое из утверждений про DOM неверно?  
* a) Пример DOM-узла – тэг и его html-содержимое; 
* b) Каждый DOM-узел, включая текстовые узлы, может иметь дочерние DOM-узлы. 
* c) Каждый DOM-узел представляет собой объект со своими атрибутами и методами. 

###3. Что выведет на экран данный код? 
```
<html> 
<head>  
<script> 
alert(document.body); 
</script>
</head> 
	
<body> 
<p>Some Text Here</p>
</body>
</html>
```
* a) undefined
* b) null
* c) body 

###4. Что выведет на экран данный код? 
```
…
<body> 
<ul>
	<li></li> 
	<li></li>
	<li></li>

</ul> 
<script>
	var li = document.getElementsByTagName('li'); 
	li.innerHTML= 'list item'; 
	alert(li[0].innerHTML); 
</script>
</body>  
…
```
* a) undefined
* b) list item
* c) Пустую строку 

###5.  Что выведет на экран следующий код? 
```
…<head>
…
<script>
	alert(document.getElementById("p").innerHTML); 
</script>
</head> 

<body> 
	<p id="p">text</p>
</body>…
```
* a) Ошибка
* b) text
* c) undefined

###6.  Какой из предложенный вариантов поиска элемента  <a> неправильный?  
```
…<body> 
<ul id="list">
	<li></li> 
	<li id=”li”>
		<a><p>Link</p></a>
	</li>
	<li><p>Paragraph</p></li>

</ul>
</body>…
```
* a) document.getElementsByTagName(‘a’); 
* b) document.querySelector(‘li a’); 
* c) document.querySelector(‘#li a’); 


###7.  Что из нижеперечисленного не является свойством DOM-узла? 
* a) nodeName
* b) nodeType
* c) nodeValue 
* d) nodeData

###8.  Что выведет на экран следующий код? 
```
…<body> 
<div id="div1" class="one two three"></div>
<script>
	var div = document.getElementById("div1"); 
	div.className = "four"; 
	div.classList.remove("four"); 
	div.classList.add("one"); 

alert(div.className); 
</script>
</body>… 
```
* a) undefined
* b) four one
* c)  one


###9.  Что выведет на экран следующий код? 
```
…<body>
<div id="div1" class="one two three"></div>
<script>
	var div = document.getElementById("div1"); 
if (div.matches('div')) {
	alert(true); 
}
else {alert(false)}; 

</script>

</body> … 
```
* a) true
* b) false
* c) null 

###10.  Какое значение будет присвоено переменной li?  
```
…<body>
<ul>
	<li>1</li> 
	<li>2</li>
	<li>3</li>
</ul> 
<ul>
	<li>1</li> 
	<li>2</li>
	<li>3</li>
</ul>

<script>
	var ul = document.getElementsByTagName('ul')[0]; 
	var li = document.querySelectorAll('ul li'); 

</script>

</body>…
```
* a) Все элементы li на странице; 
* b) Первый дочерний элемент первого ul; 
* c) Дочерние элементы li первого ul; 

###11. Какой из вариантов присвоения свойству style значения background-color: red элемента div правильный? 
* a) div.setAttribute('backgroundColor', 'red'); 
* b) div.setAttribute('style', 'backgroundColor: red'); 
* c) div.setAttribute('style', 'background-color: red'); 

###12.  Какой из вариантов присвоения элементу div класса test неправильный? 
* a) div.classList.add('test'); 
* b) div.addClass('test'); 
* c) div.className = 'test'; 

###13.  Есть элемент <div id=”div1” class=”one two three”></div>. Как правильно удалить класс two у этого элемента? 
* a) document.getElementsById('div1').classList.removeClass('two'); 
* b) document.getElementById('div1').className.remove('two'); 
* c) document.getElementById('div1').classList.remove('two'); 

###14.  Как вывести на экран значение атрибута data-val из следующего кода? 

```
<body> 
<input id="inp" type="button" data-val="true"> 
<script> 
	var input = document.getElementById("inp"); 
	// … ваш вариант ответа… 
</script> 
</body>
```
* a) alert(input.data); 
* b) alert(input.dataset.val); 
* c) alert(input.dataset.value); 

###15.  Что такое полифилл? 
* a) функция, которая используется для создания новых объектов. 
* b) функция, поведение которой  зависит от типа переданных аргументов.  
* c) библиотека, которая добавляет в старые браузеры поддержку возможностей, которые в современных браузерах являются встроенными. 

###16.  В чем заключается разница между свойствами DOM-узла tagName и nodeName? 
* a) Свойство tagName есть только у элементов Element, свойство nodeName есть у всех элеменнтов. 
* b) Между этими свойствами нет разницы. 
* c) Свойство nodeName есть только у элементов Element, свойство tagName есть у всех элеменнтов. 

###17.  Что выведет на экран данный код?  
```
<div>Привет <b>Мир</b></div>

<script>
  var div = document.body.children[0];

  alert( div.outerHTML ); // <div>Привет <b>Мир</b></div>
</script>
```
* a) Привет
* b) Привет Мир 
* c) div>Привет <b>Мир</b></div> 

###18.  Что выведет на экран данный код?  
```
…<body>
<ul>
	<li>1</li> 
	<li id="li">2/li>
	<li>3</li>
</ul> 
<ul>
	<li>4</li> 
	<li>5</li> 
</ul>

<script>
	var ul = document.getElementsByTagName('ul')[0]; 
	var li = document.getElementsByTagName('li')[1]; 
	alert(ul.contains(li)); 

</script>

</body>… 
```
* a) true
* b) false
* c) null 

###19.  Что выведет на экран данный код? 
```
…<body>
<ul>
	<li>Привет, </li> 
	<li>меня</li>
	<li>зовут</li>
</ul> 
<ul>
	<li>Вася</li> 
</ul>

<script>
	var ul = document.getElementsByTagName('ul')[0]; 
	alert(ul.textContent); 

</script>

</body>…
```
* a) Привет, меня зовут Вася
* b) Привет, меня зовут 
* c) Привет 

###20.  Какое из нижеперечисленных свойств доступно только для чтения? 
* a) classList; 
* b) innerHTML; 
* c) outerHTML;  
* d) nodeName; 

###21.  Какое значене вернет метод  compareDocumentPosition?  
```
…<body>
<ul>
	<li>1</li> 
	<li id="li">2/li>
	<li>3</li>
</ul> 

<script>
	var ul = document.getElementsByTagName('ul')[0]; 
	var li = document.getElementsByTagName('li')[1]; 
	alert(ul.compareDocumentPosition(li)); 

</script>

</body>…
```
* a) 10
* b) 4
* c) 20


###22.  Какое значене вернет метод  compareDocumentPosition?  
```
…<body>
<ul>
	<li>1</li> 
	<li id="li">2/li>
	<li>3</li>
</ul> 

<script>
	var ul = document.getElementsByTagName('ul')[0]; 
	var li = document.getElementsByTagName('li')[1]; 
	alert(ul.compareDocumentPosition(ul)); 

</script>

</body>…
```
* a) 8
* b) 0 
* c) 20

###23.  Что выведет на экран данный код? 
```
…<body>
<ul>
	<li>1</li> 
	<li>2</li>
	<li>3</li>
</ul> 
<ul>
	<li>4</li> 
	<li>5</li> 
</ul>

<script>
	var li = document.getElementsByTagName('li')[0]; 
	li.outerHTML = 0; 
	alert(li.outerHTML); 

</script>

</body>…
```

* a) 0 
* b) Ошибка 
* c) <li>1</li>

