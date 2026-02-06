import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzButtonModule, NzLayoutModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  LANGUAGE = 'zh';

  constructor(private router: Router) {
    if (window.location.hash.indexOf('zh') === -1) {
      this.LANGUAGE = 'en';
    }
  }

  changeLanguage(): void {
    if (this.LANGUAGE === 'zh') {
      this.LANGUAGE = 'en';
    } else {
      this.LANGUAGE = 'zh';
    }

    // 切换路由
    this.router.navigate([this.LANGUAGE]).then();
  }
}
