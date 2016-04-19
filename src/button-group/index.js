"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var module = require('./module');
var src_1 = require('../../../../common/transmit-transparently/src');
var ButtonGroup = (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup(props) {
        _super.call(this, props);
        this.state = new module.State();
    }
    ButtonGroup.prototype.render = function () {
        var groupClass = classNames({
            'btn-group': !this.props.vertical,
            'btn-group-vertical': this.props.vertical
        });
        return (React.createElement("div", React.__spread({}, src_1.others(new module.Props(), this.props), {className: groupClass}), this.props.children));
    };
    ButtonGroup.defaultProps = new module.Props();
    return ButtonGroup;
}(React.Component));
exports.__esModule = true;
exports["default"] = ButtonGroup;
