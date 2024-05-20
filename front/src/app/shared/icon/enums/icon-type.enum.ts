export enum IconType {
    Cross = 'Cross',
}

export namespace IconType {

    // Interface
    export function getUrl(type: IconType): string {
        switch (type) {
            case IconType.Cross:
                return '/assets/img/cross.svg';
            default:
                return '';
        }
    }
}