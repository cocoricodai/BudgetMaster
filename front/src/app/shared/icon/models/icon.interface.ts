import {IconType} from "../enums/icon-type.enum";

export interface IIcon {
    iconType: IconType;
    color?: string;
    size?: number;
}