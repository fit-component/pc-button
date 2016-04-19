export interface TypeInterface {
    Default: string;
    Primary: string;
    Success: string;
    Info: string;
    Warning: string;
    Danger: string;
    Dark: string;
}
export declare const Type: TypeInterface;
export interface SizeInterface {
    Normal: string;
    Large: string;
    Small: string;
    ExtraSmall: string;
}
export declare const Size: SizeInterface;
export interface PropsInterface {
    /**
     * 按钮风格类型
     */
    type?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 是否处于激活状态
     */
    active?: boolean;
    /**
     * 是否loading中
     */
    loading?: boolean;
    /**
     * 圆形按钮
     */
    rounded?: boolean;
    /**
     * 左侧图标
     */
    addonLeft?: any;
    /**
     * 右侧图标
     */
    addonRight?: any;
    /**
     * 大小
     */
    size?: string;
    /**
     * 点击后的回调
     */
    onClick?: () => void;
    [x: string]: any;
}
export declare class Props implements PropsInterface {
    type: string;
    disabled: boolean;
    active: boolean;
    loading: boolean;
    rounded: boolean;
    addonLeft: any;
    addonRight: any;
    size: string;
    onClick: () => void;
}
export interface StateInterface {
}
export declare class State implements StateInterface {
}
