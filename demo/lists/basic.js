"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var src_1 = require('../../src');
var style = {
    margin: 3
};
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        _super.apply(this, arguments);
    }
    Demo.prototype.handleClick = function () {
        console.log('基本用法 点击');
    };
    Demo.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(src_1.Button, {style: style, onClick: this.handleClick.bind(this)}, "Default"), React.createElement(src_1.Button, {disabled: true, style: style}, "Disabled")));
    };
    return Demo;
}(React.Component));
exports.__esModule = true;
exports["default"] = Demo;
