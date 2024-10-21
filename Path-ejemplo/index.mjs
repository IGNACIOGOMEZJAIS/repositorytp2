import path from 'path';

const filePath = './data/example.txt';

const dirName = path.dirname(filePath);
console.log(dirName); // Output: ./data

const baseName = path.basename(filePath,'.txt');
console.log(baseName); // Output: example

const extName = path.extname(filePath);
console.log(extName); // Output: .txt

const newPath = path.join('/user','docs','newfile.txt');
console.log(newPath); // Output: /user/docs/newfile.txt