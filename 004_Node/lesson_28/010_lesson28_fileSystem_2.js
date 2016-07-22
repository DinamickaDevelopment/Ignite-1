var fs = require('fs');
 
console.log("Going to open file!");

// ������� ����
fs.open('demofile.txt', 'w+', function (err, fd) {
    console.log('opening file!'); 
    if (err) {
        console.log(err);
    }
    else {
        
        // ����� write - ������������ ������ writeFile; ��������� �������� ������ � ���� � ��������� ����� ���������: 
            // fd - ����� ��� ������ ����� 
            // buffer - ������ � ���� ������ ��� ������, 
            // offset, length - ���������� ����� ������, ������� ������� �������� � ���� 
            // position - ������ �� ������ �����, ���� ����� �������� ������ 
            // callback - �������, ����������� ��������� err, written, string 

        fs.write(fd, 'This is the file content!', { encoding: 'utf-8' }, function (err, written, string) {

            console.log('writing to file!'); 

            if (err) throw err;

            console.log(written); // written - ���������� ������, ������� ������������� ��� ������ ������ 
            console.log(string);  // ������, ���������� � ���� 
        });

        var arr = new Uint16Array(1024); 
        var buf = Buffer.from(arr.buffer);

        // ����� read ��������� ������ ������ �� �����, ��������� ���������: 
            // fd - ��������������� ����� 
            // buffer - �����, � ������� ����� �������� ����������� ������ 
            // offset, length - ���������� ����� ������, ������� ������� �������� � ���� 
            // position - ������ �� ������ �����, ������ �������� ����������� 
            // callback - �������, ����������� ��������� err, bytesRead, buffer
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {

            console.log('reading from file!'); 

            if (err) throw err; 

            console.log(bytes);
            console.log(buf.slice(0, bytes).toString()); 

        })

        // ������� ���� 
        fs.close(fd, function (err) {
            if (err) throw err;
            console.log('file closed!');
        })
    }
}); 