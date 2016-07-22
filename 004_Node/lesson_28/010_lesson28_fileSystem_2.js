var fs = require('fs');
 
console.log("Going to open file!");

// открыть файл
fs.open('demofile.txt', 'w+', function (err, fd) {
    console.log('opening file!'); 
    if (err) {
        console.log(err);
    }
    else {
        
        // ћетод write - альтернатива методу writeFile; позвол€ет записать данные в файл и принимает такие аргументы: 
            // fd - место дл€ записи файла 
            // buffer - данные в виде буфера или строки, 
            // offset, length - определ€ют часть буфера, которую следует записать в файл 
            // position - отступ от начала файла, куда будут записаны данные 
            // callback - функци€, принимающа€ аргументы err, written, string 

        fs.write(fd, 'This is the file content!', { encoding: 'utf-8' }, function (err, written, string) {

            console.log('writing to file!'); 

            if (err) throw err;

            console.log(written); // written - количество байтов, которое потребовалось дл€ записи данных 
            console.log(string);  // строка, записанна€ в файл 
        });

        var arr = new Uint16Array(1024); 
        var buf = Buffer.from(arr.buffer);

        // ћетод read позвол€ет читать данные из файла, принимает аргументы: 
            // fd - местонахождение файла 
            // buffer - буфер, в который будут помещены прочитанные данные 
            // offset, length - определ€ют часть буфера, которую следует записать в файл 
            // position - отступ от начала файла, данные которого считываютс€ 
            // callback - функци€, принимающа€ аргументы err, bytesRead, buffer
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {

            console.log('reading from file!'); 

            if (err) throw err; 

            console.log(bytes);
            console.log(buf.slice(0, bytes).toString()); 

        })

        // закрыть файл 
        fs.close(fd, function (err) {
            if (err) throw err;
            console.log('file closed!');
        })
    }
}); 