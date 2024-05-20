import {inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {ThemeType} from "../../enums/theme/theme-type.enum";

@Injectable({
    providedIn: 'root'
})
export class ThemeManagerService {

    // Inner properties

    private readonly themeId = 'client-theme';

    // Injectable properties

    private readonly _document = inject(DOCUMENT);

    // Interface

    public loadTheme(theme: ThemeType) {
        const themeSrc = this._document.getElementById(this.themeId) as HTMLLinkElement;
        const themeHref = ThemeType.getRightNameToLoadTheme(theme);

        if (themeSrc) {
            themeSrc.href = themeHref;
        } else {
            const head = this._document.head;
            const style = this._document.createElement('link');

            style.id = this.themeId;
            style.rel = 'stylesheet';
            style.href = themeHref;

            head.appendChild(style);
        }
    }
}