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
    Demo.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(src_1.Button, {type: "primary", size: "lg", addonLeft: "music", style: style}, "最大"), React.createElement(src_1.Button, {type: "primary", size: "lg", style: style}, "最大"), React.createElement(src_1.Button, {type: "primary", size: "lg", addonRight: "star", style: style}, "最大"), React.createElement(src_1.Button, {type: "success", style: style}, "适中"), React.createElement(src_1.Button, {type: "warning", size: "xs", addonLeft: "bus", style: style}, "小"), React.createElement(src_1.Button, {type: "warning", size: "xs", style: style}, "小"), React.createElement(src_1.Button, {type: "warning", size: "xs", addonRight: "book", style: style}, "小"), React.createElement(src_1.Button, {type: "info", size: "sm", addonRight: "bomb", style: style}, "最小"), React.createElement(src_1.Button, {type: "info", size: "sm", style: style}, "最小"), React.createElement(src_1.Button, {type: "info", size: "sm", addonLeft: "bank", style: style}, "最小")));
    };
    return Demo;
}(React.Component));
exports.__esModule = true;
exports["default"] = Demo;
