#Вопросы к уроку 9  

###1. Что из перечисленного не является свойством события мыши? 
* a) e.ctrlKey; 
* b) e.charCode; 
* c) e.clientY; 

###2. Что выведет на экран данный код при клике на элементе div? 
```
…<script> 
window.onload = function() {
	var div = document.getElementById('div1'); 
	div.onclick = function(e) {
		alert(this.button); 
	}

} 
</script>
</head> 
<body>
<div id="div1"> </div>
</body>… 
``` 
* a) undefined
* b) 1
* c) 2

###3. В каком свойстве события мыши хранятcя ее координаты относительно окна браузера?  
* a) clientX/Y
* b) pageX/Y 
* c) offsetX/Y 

###4. Когда происходит событие onerror? 
* a) При ошибке загрузки внешних ресурсов; 
* b) При использовании пользовательских ошибок; 
* c) При ошибке загрузки DOM. 

###5. Когда происходит событие focus? 
* a) При нажатии на поле ввода; 
* b) Когда мышь находится над полем ввода; 
* c) При изменении значения поля ввода; 

###6. В чем главное отличие событий mouseenter/mouseleave от событий mouseover/mouseout? 
* a) события mouseover/mouseout не всплывают, в отличии от mouseenter/mouseleave. 
* b) разницы нет. 
* c) события mouseenter/mouseleave не всплывают, в отличии от mouseover/mouseout. 

###7. Какое из событий мыши отслеживает нажатие правой кнопки мыши? 
* a) mouseclick; 
* b) contextmenu; 
* c) mousedown; 

###8. Что выведет на экран данный код? 
```
…<script> 
window.onload = function() {
	alert('2')
} 

document.addEventListener('DOMContentLoaded', function() {
	alert('1'); 
}); 
</script>… 
``` 
* a) 1; 
* b) 2; 
* c) 1, затем 2;  

###9. Что из перечисленного не является методом получения скан-кода события клавиатуры? 
* a) e.which(); 
* b) e.charCode; 
* c) e.keyCode;  
* d) e.fromCharCode; 

###10. Что из перечисленного является значением свойства event.relatedTarget для события mouseout? 
* a) элемент, на который перешла мышь.
* b) элемент, с которого пришла мышь. 
* c) элемент, с которого ушла мышь. 

###11. Какое событие клавиатуры обрабатывает только нажатие на символьные клавиши (но не на функциональные)? 
* a) keyup
* b) keypress
* c) keydown
 
###12. Что выведет на экран данный код при прокрутке страницы? 
```
…<style type="text/css">
	body {
		overflow: hidden; 
	}
	
</style></head>

<script> 
window.onload = function() {
document.body.onscroll = function() {
	alert('scrolled!'); 
}
} 
</script>… 
``` 
* a) scrolled!;  
* b) Ошибка; 
* c) ничего;  

###13. Что выведет на экран данный код при клике на элементе div? 
```
…<script> 
window.onload = function() {
   var div = document.getElementById('div1'); 

   div.onclick = function(e) {
   	alert(clientX + ‘<br/>’ + clientY ); 
   } 

} 
</script> …
``` 
* a) ничего;  
* b) координаты мыши относительно окна браузера; 
* c) координаты мыши относительно документа; 

###14. Что выведет на экран данный код при двойном клике на элементе div? 
```
…<script> 
window.onload = function() {
   var div = document.getElementById('div1'); 

   div.onclick = function() {
   	alert('1'); 
   } 
   div.ondblclick = function() {
   	alert('2'); 
   }
} 
</script>… 
``` 
* a) 1; 
* b) 2; 
* c) 1, затем 2; 

###15. Какое событие клавиатуры работает со свойством e.charCode? 
* a) keyup; 
* b) keydown; 
* c) keypress; 

###16. Что выведет на экран данный код при прокрутке страницы? 
```
…<style type="text/css">
	body {
		overflow: hidden; 
	}
	
</style></head>

<script> 
window.onload = function() {
document.body.onscroll = function() {
	alert('scrolled1!'); 
} 
document.onwheel = function() {
	alert('scrolled2!'); 
}
} 
</script>
</head>… 
``` 
* a) scrolled1!; 
* b) ничего;  
* c) scrolled2!;  

###17. Что выведет на экран данный код при клике на элементе div? 
```
…<script> 
window.onload = function() {
	var div = document.getElementById('div1'); 

		div.onmousedown = function(e) {
			alert(e.which); 
		}
} 
</script>
</head> 
<body>
<div id="div1"> </div>
</div>

</body>… 
``` 
* a) 1; 
* b) 2; 
* c) 3; 

###18 . В чем разница между событиями unload и beforeunload? 
* a) Событие unload не позволяет отменить зкрытие страницы, в отличии от beforeunload; 
* b) Разницы нет. 
* c) Событие beforeunload не позволяет отменить зкрытие страницы, в отличии от unload;

###19. Что выведет на экран данный код при одновременном клике и нажатии клавиши alt? 
```
<script>
  document.body.onclick = function(e) {
    if (!e.altKey || !e.shiftKey) return;
    alert( '1' );
  }
</script>
``` 
* a) 1 
* b) Ошибка 
* c) ничего 

###20. Что из перечисленного не является свойством readyState события readystatechange? 
* a) loaded
* b) loading
* c) ready 
* d) complete 



