import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.less' ]
})
export class AppComponent {
  title = 'app';
  LANGUAGE = 'zh';

  constructor(private router: Router) {
    if (window.location.hash.indexOf('zh') === -1) {
      this.LANGUAGE = 'en';
    }
  }

  changeLanguage() {
    if (this.LANGUAGE === 'zh') {
      this.LANGUAGE = 'en';
    } else {
      this.LANGUAGE = 'zh';
    }

    // 切换路由
    this.router.navigate([ this.LANGUAGE ]).then();
  }
}
