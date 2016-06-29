#Вопросы к уроку 10 

###1. Что такое AJAX?
* a) Asynchronous Javascript and XML; 
* b) Asynchronous JSON and XML; 
* c) Asynchronous Javascript and XHML;

###2. С какими типами данных может работать XMLHttpRequest? 
* a)XML 
* b) С любыми типами данных 
* c) JSON

###3. Что из нижеперечисленного не является свойством XMLHttpRequest? 
* a) timeout; 
* b) statusCode; 
* c) statusText;  

###4. Какой метод отменяет отправку запроса XMLHttpRequest?
* a)abort
* b) stop
* c) disable

###5. Что из нижеперечисленного не является вариантом кодировки данных для отправки на сервер? 
* a)utf-8
* b) multipart/form-data
* c) application/x-www-form-urlencoded


###6. Какой из вариантов кода отправит асинхронный запрос xhr на сервер? 
* a) xhr.open(‘GET’,’file.html’, false); 
* b) xhr.open(‘GET’,’file.html’);
* c) xhr.open(‘GET’,’file.html’, true);

###7.  В каком из предложенных вариантов GET параметры a и b переданы правильно? 
* a) xhr.open(‘GET’, ‘file.html?a=”arg1&b=”arg2” ); 
* b) xhr.open(’GET’, ‘file.html/a=”arg1&b=”arg2”); 
* c) xhr.open(‘GET’, a=”arg1”; b=”arg2”); 

###8. Какой из методов XMLHttpRequest отправляет данные на сервер? 
* a) open(); 
* b) load(); 
* c) send(); 

###9. Какое из утверждений неверно? 
* a) Если в xhr.open указан третий аргумент false (или если третьего аргумента нет), то запрос выполняется асинхронно. 
* b) Событие readystatechange происходит несколько раз в процессе отсылки XMLHttpRequest и получения ответа . 
* c) Особенностью XMLHttpRequest является то, что отменить setRequestHeader невозможно. 
 
###10. Сколько вариантов кодировки доступно для метода POST? 
* a) 3
* b) 2
* c) 1

###11.  В каком свойстве хранится информация о состоянии обработки запроса? 
* a) readyState; 
* b) statusCode; 
* c) status; 

###12.  Какой статус-код соответствует успешному завершению обработки XMLHTTPRequest? 
* a) 201
* b) 200
* c) 300

###13.  Какой заголовок содержит кодировку при отправке данных методом POST? 
* a)Content-Disposition
* b) Content-Encoding
* c) Content-Type

###14.  Какая кодировка используется по умолчанию?
* a) application/x-www-form-urlencoded
* b)  multipart/form-data
* c) text/plain

###15.  Как называется альтернатива XMLHttpRequest, используемая в IE8 и IE9? 
* a)DomainRequest
* b) XdomainRequest
* c) HttpRequest

###16.  Что делает метод getResponseHeader(name)? 
* a) Возвращает значение заголовка ответа name, кроме Set-Cookie и Set-Cookie2.
* b) Возвращает все заголовки ответа, кроме Set-Cookie и Set-Cookie2.
* c) ) Возвращает значение заголовка ответа name, включая Set-Cookie и Set-Cookie2.


###17.  Можно ли использовать один объект XmlHttpRequest для множества разных запросов?
* a)  Да, можно
* b)  Да, но перед каждым новым запросом надо вызывать abort()
* c) Нет, только один запрос на один объект 

###18.  Как расшифровывается CORS? 
* a) Cross Origin Request Sharing; 
* b) Cross Origin Resource Sharing; 
* c) Cross Origin Resource System; 

###19.  Для чего используется CORS? 
* a) Для обеспечения безопасности при использoовании кросс-доменных запросов. 
* b) Для получения данных сервера в формате JSON. 
* c) Для синхронной загрузки внешних ресурсов на страницу. 

###20. Наличие какого заголовка в ответе сервера необходимо для получения CORS-разрешения? 
* a) Access-Control-Allow-Access
* b) Access-Control-Expose-Headers
* c) Access-Control-Allow-Origin



