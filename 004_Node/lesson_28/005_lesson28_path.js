var path = require('path');

// __filename - глобальный объект nodeJS, который содержит имя файла, код которого выполняется 
// path.basename(path[, ext]) - возвращает последний сегмент пути файла. Например: 
console.log(path.basename(__filename,'js')); 

// __dirname - глобальный объект nodeJS, который содержит имя директории, в которой находится файл, код которого выполняется  
// path.dirname(path) - возвращает директорию указанного пути 
console.log(path.dirname(__dirname));


// path.parse(path) - представляет путь в виде JS объекта 
var pathObj = path.parse(__filename); 
console.log(pathObj); 

// path.format(pathObject) - метод, противоположный parse - преобразует объект пути в строку 
console.log(path.format(pathObj)); 

// path.isAbsolute(path) - возвращает true, если путь абсолютный, в противном случае - false 
console.log(path.isAbsolute(__filename)); 

// path.join([path[, ...]]) - метод, который объединяет сегменты пути и нормализирует путь, полученный в результате
console.log(path.join('/somefolder', __filename)); 
