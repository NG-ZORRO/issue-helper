import { Routes } from '@angular/router';

import { IssueEnComponent } from './routers/issue-en/issue-en.component';
import { IssueZhComponent } from './routers/issue-zh/issue-zh.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'zh',
    pathMatch: 'full'
  },
  {
    path: 'zh',
    component: IssueZhComponent
  },
  {
    path: 'en',
    component: IssueEnComponent
  },
  {
    path: '**',
    redirectTo: 'zh',
    pathMatch: 'full'
  }
];
