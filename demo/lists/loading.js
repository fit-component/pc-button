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
    function Demo(props) {
        _super.call(this, props);
        this.state = {
            loading: false
        };
    }
    Demo.prototype.handleLoadingClick = function () {
        this.setState({
            loading: true
        });
    };
    Demo.prototype.handleCancelLoadingClick = function () {
        this.setState({
            loading: false
        });
    };
    Demo.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(src_1.Button, {type: "primary", loading: this.state.loading}, "按钮"), React.createElement(src_1.Button, {onClick: this.handleLoadingClick.bind(this), style: { marginLeft: 10 }}, "点我进入loading"), React.createElement(src_1.Button, {onClick: this.handleCancelLoadingClick.bind(this), style: { marginLeft: 10 }}, "点我取消loading")));
    };
    return Demo;
}(React.Component));
exports.__esModule = true;
exports["default"] = Demo;
