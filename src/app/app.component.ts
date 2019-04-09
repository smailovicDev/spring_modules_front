import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CatalogueWebApp';
  constructor( private translatorService: TranslateService ){
      this.translatorService.setDefaultLang('en');
  }
}
