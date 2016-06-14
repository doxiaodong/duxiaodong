// main.js

import {
	新建个人,
	获取信息
} from './base'

import {
	核心信息,
  基本信息,
  工作经历,
  技能,
  其他
} from './data'

var 前端狗 = 新建个人(核心信息, 基本信息, 工作经历, 技能, 其他);
var 毒枭东 = new 获取信息(前端狗);

var 下一步 = 毒枭东.next();

var 下一步函数 = () => {
  if (!下一步.done) {
    setTimeout(() => {
      console.log(下一步.value);
      下一步 = 毒枭东.next();
      下一步函数();
    }, 500);
  }
};
下一步函数();
