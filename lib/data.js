'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.其他 = exports.技能 = exports.工作经历 = exports.基本信息 = exports.核心信息 = undefined;

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// data.js

var 核心信息 = new _map2.default([['姓名', '杜小东'], ['性别', '男']]);

var 基本信息 = new _map2.default([['生日', '1992-01-22']]);

var 工作经历 = new _map2.default([['公司', '七牛'], ['职位', '前端']]);

var 技能 = new _map2.default([['JavaScript', '熟悉'], ['TypeScript', '了解']]);

var 其他 = new _map2.default([['爱好', '篮球']]);

exports.核心信息 = 核心信息;
exports.基本信息 = 基本信息;
exports.工作经历 = 工作经历;
exports.技能 = 技能;
exports.其他 = 其他;