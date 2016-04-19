"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var src_1 = require('../../src');
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        _super.apply(this, arguments);
    }
    Demo.prototype.render = function () {
        return (React.createElement(src_1.ButtonGroup, null, React.createElement(src_1.Button, null, "Left"), React.createElement(src_1.Button, {active: true}, "Middle"), React.createElement(src_1.Button, null, "Right")));
    };
    return Demo;
}(React.Component));
exports.__esModule = true;
exports["default"] = Demo;
