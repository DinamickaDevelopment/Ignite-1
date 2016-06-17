#Вопросы к уроку 8 

###1. В каком из предложенных вариантов обрабо тчик события назначен правильно? 
* a) div.onclick(alert(‘click!’)); 
* b) div.on(‘click’, function() {alert(‘click!’)}); 
* c) div.onclick = function() {alert(‘click!’)}; 

###2. Что такое всплытие событий? 
* a) Синхронное срабатывание событий. 
* b) Принцип обработки  события, при котором обработчики сначала срабатывают родительском элементе, затем на его дочернем и так далее, вниз по цепочке вложенности.
* c) Принцип обработки  события, при котором обработчики сначала срабатывают на самом вложенном элементе, затем на его родителе, затем выше и так далее, вверх по цепочке вложенности.

###3. В каком из предложенных вариантов обработчик события DOM level 2  для элемента div установлен правильно? 
* a) div.addEventListener(‘click’, function() {alert(‘click!’)}); 
* b) document.addEventListener(div, ‘click’, function() {alert(‘click!’)}); 
* c) div.addEventListener(‘onclick’, function() {alert(‘click!’)}); 


###4. Что выведет на экран данный код? 
```
…<body>
<input type="text" id="inp">
</div> 
<script> 
  var inp = document.getElementById('inp');  

function handler() {
	alert('clicked!'); 

}
 inp.addEventListener('click', handler); 
 inp.removeEventListener('click', handler); 

</script>
</body>… 
``` 
* a) ничего 
* b) clicked 
* c) Ошибку 

###5. Что выведет данный код на экран при клике на div? 
```
…<body>
<div id="div1"></div> 
<script> 
  var div = document.getElementById('div1'); 

  div.addEventListener('click', function() {
  	  alert(this.id); 
  })
</script>
</body>…
``` 
* a) div1
* b) null 
* c) undefined  

###6. Что будет выведено на экран при клике на div с id ‘div3’ ? 
```
…<body>
<div id="div1">
	<div id="div2">
		<div id="div3"></div>
	</div>
</div> 
<script> 
  var divs = document.getElementsByTagName('div'); 

  for(i = 0; i < divs.length; i++) {
  	divs[i].addEventListener('click', function() {
  		alert(this.id); 
  	}, false); 
  } 
</script>
</body>… 
``` 
* a) div1, затем div2, затем div3; 
* b) div3, затем div2, затем div1; 
* c) только div3; 

###7. В каком из предложенных вариантов обработчик события назначен правильно? 
```
<body>
<div id="div1"></div> 
<script> 
  var div = document.getElementById('div1'); 

  function handler() {
  	alert('Hello!'); 
  }
</script> 
```
* a) div.onclick = handler(); 
* b) div.on(‘click’, handler); 
* c) div.onclick = handler; 

###8. Какой метод используется для установки обработчика событий в IE8- ? 
* a) attachEvent(‘on<event>’, handler); 
* b) addEventListener((‘<event>’, handler); 
* c)  setEvent(‘on<event>’, handler); 

###9. Что из нижеперечисленного не является способом отмены события? 
* a) метод preventDefault(); 
* b) elem.on<event> = function() { return false }; 
* c) метод stopPropagation; 

###10. Что из нижеперечисленного не является свойством события? 
* a) event.Target; 
* b) event.target; 
* c) event.currentTarget; 

###11. Какой метод инициирует событие? 
* a) startEvent(); 
* b) dispatchEvent(); 
* c) preventDefault(); 

###12. Возможна ли одновременная обработка нескольких событий в JavaScript? 
* a) Нет; 
* b) Да, с использованием технологии Web Workers; 
* c) Да; 

###13. Что будет выведено на экран первым? 
```
…<body>
<input type="text" id="inp">
</div> 
<script> 
  var inp = document.getElementById('inp');  

  inp.onclick = function() { 
  	alert('1'); 
  	this.onfocus = function() {
  		alert('2'); 
  	}
  }
</script>
</body>… 
``` 
* a) 1
* b) 2
* c) null  

###14. Что выведет на экран данный код? 
```
…<body>
<input type="text" id="inp">
</div> 
<script> 
  var inp = document.getElementById('inp');  

function handler() { 

	alert('clicked!'); 

}
 inp.addEventListener('click', handler); 
 inp.onclick = function() {
 	return false; 
 }

</script>
</body>…
``` 
* a) clicked 
* b) ничего 
* c) Ошибку 

###15. Что выведет на экран данный код? 
```
…<body>
<input type="text" id="inp">
</div> 
<script> 
  var inp = document.getElementById('inp');  

  inp.onclick = function() { 
  	alert('1'); 
  	this.onfocus = function(e) {
  		e.preventDefault(); 
  	}
  }
</script>
</body>… 
``` 
* a) 1, затем 2; 
* b) 2, затем 1; 
* c) только 1; 

###16. Что будет выведено на экран при клике на div с id ‘div3’ ? 
```
…<body>
<div id="div1">
	<div id="div2">
		<div id="div3"></div>
	</div>
</div> 
<script> 
  var divs = document.getElementsByTagName('div'); 

  for(i = 0; i < divs.length; i++) {
  	divs[i].addEventListener('click', function() {
  		alert(this.id); 
  	}, true); 
  } 
</script>
</body>… 
``` 
* a) div1, затем div2, затем div3; 
* b) div3, затем div2, затем div1; 
* c) только div3; 

###17. В чем отличие свойства  события currentTarget и target? 
* a) target – элемент, на котором произошло событие, а currentTarget – элемент, до которого дошло событие в процессе обработки. 
* b) Разницы между этими свойствами нет. 
* c) currentTarget – элемент, на котором произошло событие, а target – элемент, до которого дошло событие в процессе обработки. 
 
###18 . Что из перечисленного не является свойством конструктора Event? 
* a) bubbles
* b) cancelable
* c) details

###19. Что выведет на экран данный код? 
```
…<body>
<input type="text" id="inp">
</div> 
<script> 
  var inp = document.getElementById('inp');  

  var e = new CustomEvent('click', {detail: {prop1: 1}}); 
  inp.onclick = function(e) {
  	alert(e.detail.prop1); 
  }
  inp.dispatchEvent(e); 
</script>
</body>… 
``` 
* a) 1
* b) undefined 
* c) Ошибка 

###20.  Что будет выведено на экран при клике на div с id ‘div1’ ? 
```
<body>
<div id="div1">
	<div id="div2">
		<div id="div3"></div>
	</div>
</div> 
<script> 
  var divs = document.getElementsByTagName('div'); 

  for(i = 0; i < divs.length; i++) {
  	divs[i].addEventListener('click', function(e) { 
  		alert(this.id); 
  		e.stopPropagation(); 
  	}, true); 
  } 
</script>
</body>
``` 
* a) div1
* b) div3, затем div2, затем  div1 
* c) div1, затем  div2, затем  div3 

###21. Как будет обработано событие click, переданное следующему обработчику: elem.addEventListener(‘click’, function() {alert(‘click!’)}, true) ? 
* a) на этапе всплытия 
* b) на этапе перехвата 
* c) событие не будет распространяться  

###22. Какое из перечисленных событий не может быть обработано на этапе всплытия? 
* a) focus 
* b) blur 
* c) mouseover 




