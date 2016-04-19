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
        return (React.createElement("div", null, React.createElement(src_1.Button, {type: "primary", style: style}, "Primary"), React.createElement(src_1.Button, {type: "success", style: style}, "Success"), React.createElement(src_1.Button, {type: "info", style: style}, "Info"), React.createElement(src_1.Button, {type: "warning", style: style}, "Warning"), React.createElement(src_1.Button, {type: "danger", style: style}, "Danger"), React.createElement(src_1.Button, {type: "dark", style: style}, "Dark")));
    };
    return Demo;
}(React.Component));
exports.__esModule = true;
exports["default"] = Demo;
