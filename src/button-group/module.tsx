export interface PropsInterface {
    /**
     * 是垂直显示
     */
    vertical?:boolean

    [x:string]:any
}

export class Props implements PropsInterface {
    vertical = false
}

export interface StateInterface {

}

export class State implements StateInterface {

}