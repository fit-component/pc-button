"use strict";
exports.Type = {
    Default: 'default',
    Primary: 'primary',
    Success: 'success',
    Info: 'info',
    Warning: 'warning',
    Danger: 'danger',
    Dark: 'dark'
};
exports.Size = {
    Normal: 'nm',
    Large: 'lg',
    ExtraSmall: 'sx',
    Small: 'sm'
};
var Props = (function () {
    function Props() {
        this.type = exports.Type.Default;
        this.disabled = false;
        this.active = false;
        this.loading = false;
        this.rounded = false;
        this.addonLeft = null;
        this.addonRight = null;
        this.size = exports.Size.Normal;
        this.onClick = function () {
        };
    }
    return Props;
}());
exports.Props = Props;
var State = (function () {
    function State() {
    }
    return State;
}());
exports.State = State;
