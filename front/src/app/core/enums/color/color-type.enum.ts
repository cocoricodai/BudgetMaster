export enum ColorType {

    /* Core */
    Text = 'TEXT',
}

export namespace ColorType {

    // Interface
    export function getRightVarColor(type: ColorType): string {
        const colorToUse = type.replaceAll('_', '-');

        return `var(--color-${colorToUse.toLowerCase()})`;
    }
}