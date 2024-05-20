import {Component, inject, OnInit} from '@angular/core';
import {ThemeManagerService} from "./core/services/theme/theme-manager.service";
import {ThemeType} from "./core/enums/theme/theme-type.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Injectable properties

  private readonly _themeManager = inject(ThemeManagerService);

  // Lifecycle

  ngOnInit() {
    this._themeManager.loadTheme(ThemeType.Light); // TODO : Will be manage by UserSetting or LocalStorage
  }
}
