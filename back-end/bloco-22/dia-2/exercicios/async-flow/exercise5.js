const fs = require('fs').promises;

const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

arr.forEach((item, index) => {
  if(index === 0) fs.writeFile(`file${index+1}.txt`, 'Finalmente ', { flag: 'wx' });
  if(index === 1) fs.writeFile(`file${index+1}.txt`, 'estou ', { flag: 'wx' });
  if(index === 2) fs.writeFile(`file${index+1}.txt`, 'usando ', { flag: 'wx' });
  if(index === 3) fs.writeFile(`file${index+1}.txt`, 'Promise.all ', { flag: 'wx' });
  if(index === 4) fs.writeFile(`file${index+1}.txt`, '!!!', { flag: 'wx' });
})

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
  fs.readFile('file4.txt'),
  fs.readFile('file5.txt')
])
  .then(([file1, file2, file3, file4, file5]) => {
    const fileAll = file1 + file2 + file3 + file4 + file5;
    fs.writeFile('fileAll.txt', fileAll, { flag: 'wx' });
    console.log(`Arquivo criado com sucesso ${fileAll}`);
  })
  .catch((err) => {
    console.error(`Erro ao cria o arquivo: ${err.message}`);
  });