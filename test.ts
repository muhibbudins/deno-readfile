import readFile from './index';

(async () => {
  console.log(await readFile('./LICENSE'))
})()