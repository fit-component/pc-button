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
require('./index.scss');
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        _super.call(this, props);
        this.state = new module.State();
    }
    Button.prototype.handleClick = function () {
        if (this.props.disabled || this.props.loading)
            return;
        this.props.onClick();
    };
    Button.prototype.render = function () {
        var addon = null;
        if (this.props.addonLeft || this.props.addonRight) {
            var addonClass = classNames((_a = {
                    'fa': true
                },
                _a['fa-' + (this.props.addonLeft || this.props.addonRight)] = true,
                _a['btn-addon-left'] = this.props.addonLeft,
                _a['btn-addon-right'] = this.props.addonRight,
                _a
            ));
            addon = (React.createElement("i", {className: addonClass}));
        }
        var loadingComponent = null;
        if (this.props.loading === true) {
            var loadingClass = classNames({
                'loading-container': true,
                'show': true
            });
            loadingComponent = (React.createElement("div", {className: loadingClass}, React.createElement("i", {className: "fa fa-refresh fa-spin"})));
        }
        var btnClass = classNames((_b = {
                '_namespace': true,
                'btn': true
            },
            _b['btn-' + this.props.type] = true,
            _b['disabled'] = this.props.disabled || this.props.loading === true,
            _b['btn-addon'] = this.props.addonLeft || this.props.addonRight,
            _b['btn-rounded'] = this.props.rounded,
            _b['btn-lg'] = this.props.size === module.Size.Large,
            _b['btn-xs'] = this.props.size === module.Size.ExtraSmall,
            _b['btn-sm'] = this.props.size === module.Size.Small,
            _b['active'] = this.props.active,
            _b
        ));
        return (React.createElement("button", React.__spread({onClick: this.handleClick.bind(this), className: btnClass}, src_1.others(new module.Props(), this.props)), React.createElement("div", {style: { display: 'flex', justifyContent: 'center' }}, this.props.addonLeft ? addon : null, this.props.children, this.props.addonRight ? addon : null, this.props.loading ? loadingComponent : null)));
        var _a, _b;
    };
    Button.defaultProps = new module.Props();
    return Button;
}(React.Component));
exports.__esModule = true;
exports["default"] = Button;
