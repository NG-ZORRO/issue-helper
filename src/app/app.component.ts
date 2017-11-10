import {Component, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  lang = 'en_US';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.lang);
    translate.use(this.lang);
  }

  changeLang() {
    if (this.lang === 'zh_CN') {
      this.lang = 'en_US';
    } else {
      this.lang = 'zh_CN';
    }
    this.translate.use(this.lang);
  }
}
