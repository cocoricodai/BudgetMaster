export enum ThemeType {
    Light = 'LIGHT',
    Dark = 'DARK',
}

export namespace ThemeType {

    // Interface

    export function getRightNameToLoadTheme(type: ThemeType) {
        return `${type.toLowerCase()}.css`;
    }
}