import { Component } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/en';
import { locale as french } from '../shared/fr';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }


}
