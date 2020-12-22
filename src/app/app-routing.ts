import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IssueEnComponent } from './pages/issue-en/issue-en.component';
import { IssueZhComponent } from './pages/issue-zh/issue-zh.component';

const routes: Routes = [
  {
    path      : '',
    redirectTo: 'zh',
    pathMatch : 'full'
  },
  {
    path: 'zh', component: IssueZhComponent
  },
  {
    path: 'en', component: IssueEnComponent
  },
  {
    path      : '**',
    redirectTo: 'zh',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [ RouterModule ]
})

export class AppRouting {
}

