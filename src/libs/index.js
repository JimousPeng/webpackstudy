import '../assets/style.css'
import addContent from './add-content';
import headerHtml from '../template/header.html'
import avatarImage from '../../test.jpg';
console.log(avatarImage, '看看图片地址')
document.write('jimous,hhhss');
document.write(headerHtml)
addContent();

// 在导入一个模块时，对CommonJS来说获取的是一份导出值的拷贝，而在ES6 Module中则是值的动态映射，并且这个映射是只读的。

/**CommonJs */
// var name = 'index.js';
// const calcurator = require('./calculator.js');
// console.log(name, calcurator)
// const add = require('./calculator.js').add;
// const sum = add(2, 3);
// console.log('sum', sum);
// const moduleName = require('./calculator.js').name;
// console.log('end')
// var count = require('./calculator.js').count;
// var add = require('./calculator.js').add;
// console.log(count); //0
// add(2,3)
// console.log(count); //0
// count += 1;
// console.log(count); //1
// require('./foo.js')




/**ES6 */
// import { name, add as count } from './calculator.js';
// console.log(name, count, '看看module')
// const sum = count(2, 3);
// console.log(sum)
// import myCalculator, { name } from './calculator.js';
// let a = myCalculator.add(2, 3);
// console.log(a, name)
// import * as myCont from './calculator.js';
// console.log(myCont.default)
// import foo from './foo.js'
// console.log(9)
// foo('index.js')



// 模块打包原理
const calculator = require('./calculator');
const sum = calculator.add(2, 3);
console.log('sum', sum)