export interface TypeInterface {
    Default:string
    Primary:string
    Success:string
    Info:string
    Warning:string
    Danger:string
    Dark:string
}

export const Type:TypeInterface = {
    Default: 'default',
    Primary: 'primary',
    Success: 'success',
    Info: 'info',
    Warning: 'warning',
    Danger: 'danger',
    Dark: 'dark'
}

export interface SizeInterface {
    Normal:string
    Large:string
    Small:string
    ExtraSmall:string
}

export const Size:SizeInterface = {
    Normal: 'nm',
    Large: 'lg',
    ExtraSmall: 'xs',
    Small: 'sm'
}

export interface PropsInterface {
    /**
     * 按钮风格类型
     */
        type?:string

    /**
     * 是否禁用
     */
    disabled?:boolean

    /**
     * 是否处于激活状态
     */
    active?:boolean

    /**
     * 是否loading中
     */
    loading?:boolean

    /**
     * 圆形按钮
     */
    rounded?:boolean

    /**
     * 左侧图标
     */
    addonLeft?:any

    /**
     * 右侧图标
     */
    addonRight?:any

    /**
     * 大小
     */
    size?:string

    /**
     * 点击后的回调
     */
    onClick?:()=> void
    
    [x:string]:any
}

export class Props implements PropsInterface {
    type = Type.Default
    disabled = false
    active = false
    loading = false
    rounded = false
    addonLeft:any = null
    addonRight:any = null
    size = Size.Normal
    onClick = ()=> {
    }
}

export interface StateInterface {

}

export class State implements StateInterface {

}