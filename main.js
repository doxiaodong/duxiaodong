// main.js

import {
	新建个人, 
	获取信息
} from './base'

import {
	核心信息,
  基本信息,
  工作经历,
  技能
} from './data'

var 杜小东 = 新建个人(核心信息, 基本信息, 工作经历, 技能);
var 毒枭东 = new 获取信息(杜小东);

var 输出信息;
while(输出信息 = 毒枭东.next().value) {
  console.log(输出信息);
}