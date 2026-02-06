import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withHashLocation, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideNzI18n, zh_CN } from 'ng-zorro-antd/i18n';
import { provideMarkdown } from 'ngx-markdown';
import { routes } from './routes';
import { NzModalService } from 'ng-zorro-antd/modal';

export const appConfig: ApplicationConfig = {
  providers: [
    NzModalService,
    provideNzI18n(zh_CN),
    provideMarkdown({}),
    provideHttpClient(),
    provideRouter(routes, withHashLocation(), withPreloading(PreloadAllModules))
  ]
};
