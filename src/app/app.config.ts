import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withHashLocation, withPreloading } from '@angular/router';

import { provideMarkdown } from 'ngx-markdown';

import { provideNzI18n, zh_CN } from 'ng-zorro-antd/i18n';
import { NzModalService } from 'ng-zorro-antd/modal';

import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    NzModalService,
    provideNzI18n(zh_CN),
    provideMarkdown({}),
    provideHttpClient(),
    provideRouter(routes, withHashLocation(), withPreloading(PreloadAllModules))
  ]
};
