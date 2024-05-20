import {Component, Input, SimpleChanges} from '@angular/core';
import {IIcon} from "../../models/icon.interface";
import {IconType} from "../../enums/icon-type.enum";
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  imports: [
    SvgIconComponent
  ],
  standalone: true
})
export class IconComponent implements IIcon {

  // Inputs

  @Input()
  public iconType: IconType;

  @Input()
  public color: string = 'red';

  @Input()
  public size = 16;

  // Enums

  public iconTypeEnum = IconType;

  // Public properties

  public url: string;

  // Lifecycle

  ngOnChanges(changes: SimpleChanges) {
    if (changes['iconType']) {
      this._setupUrl();
    }
  }

  // Setup

  private _setupUrl(): void {
    this.url = IconType.getUrl(this.iconType);
  }

}
