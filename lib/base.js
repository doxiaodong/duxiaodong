"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.获取信息 = exports.新建个人 = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [获取信息].map(_regenerator2.default.mark);

// base.js

var 前端工程师 = function () {
  function 前端工程师(核心信息) {
    (0, _classCallCheck3.default)(this, 前端工程师);

    this.核心信息 = 核心信息;
  }

  (0, _createClass3.default)(前端工程师, [{
    key: "设置基本信息",
    value: function _(基本信息) {
      this.基本信息 = 基本信息;
    }
  }, {
    key: "设置工作经历",
    value: function _(工作经历) {
      this.工作经历 = 工作经历;
    }
  }, {
    key: "设置技能",
    value: function _(技能) {
      this.技能 = 技能;
    }
  }, {
    key: "设置其他",
    value: function _(其他) {
      this.其他 = 其他;
    }
  }]);
  return 前端工程师;
}();

var 新建个人 = function 新建个人(核心信息, 基本信息, 工作经历, 技能, 其他) {
  var it狗 = new 前端工程师(核心信息);
  it狗.设置基本信息(基本信息);
  it狗.设置工作经历(工作经历);
  it狗.设置技能(技能);
  it狗.设置其他(其他);
  return it狗;
};

function 获取信息(前端) {
  var 项, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, 键, 值;

  return _regenerator2.default.wrap(function 获取信息$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = _regenerator2.default.keys(前端);

        case 1:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 35;
            break;
          }

          项 = _context.t1.value;
          _context.next = 5;
          return "<" + 项 + ">";

        case 5:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 8;
          _iterator = (0, _getIterator3.default)(前端[项]);

        case 10:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 19;
            break;
          }

          _step$value = (0, _slicedToArray3.default)(_step.value, 2);
          键 = _step$value[0];
          值 = _step$value[1];
          _context.next = 16;
          return 键 + ": " + 值;

        case 16:
          _iteratorNormalCompletion = true;
          _context.next = 10;
          break;

        case 19:
          _context.next = 25;
          break;

        case 21:
          _context.prev = 21;
          _context.t2 = _context["catch"](8);
          _didIteratorError = true;
          _iteratorError = _context.t2;

        case 25:
          _context.prev = 25;
          _context.prev = 26;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 28:
          _context.prev = 28;

          if (!_didIteratorError) {
            _context.next = 31;
            break;
          }

          throw _iteratorError;

        case 31:
          return _context.finish(28);

        case 32:
          return _context.finish(25);

        case 33:
          _context.next = 1;
          break;

        case 35:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[8, 21, 25, 33], [26,, 28, 32]]);
}

exports.新建个人 = 新建个人;
exports.获取信息 = 获取信息;