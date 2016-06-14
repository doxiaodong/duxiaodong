'use strict';

var _base = require('./base');

var _data = require('./data');

// main.js

var 前端狗 = (0, _base.新建个人)(_data.核心信息, _data.基本信息, _data.工作经历, _data.技能, _data.其他);
var 毒枭东 = new _base.获取信息(前端狗);

var 下一步 = 毒枭东.next();

var 下一步函数 = function 下一步函数() {
  if (!下一步.done) {
    setTimeout(function () {
      console.log(下一步.value);
      下一步 = 毒枭东.next();
      下一步函数();
    }, 500);
  }
};
下一步函数();

// while(!下一步.done) {
//   console.log(下一步.value);
//   下一步 = 毒枭东.next();
// }