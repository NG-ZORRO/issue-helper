import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { MarkdownModule } from 'ngx-markdown';
import { AppRouting } from './app-routing';

import { AppComponent } from './app.component';
import { IssueEnComponent } from './pages/issue-en/issue-en.component';
import { IssueZhComponent } from './pages/issue-zh/issue-zh.component';
import { ModalIntroEnComponent } from './pages/modal-intro-en/modal-intro-en.component';
import { ModalIntroZhComponent } from './pages/modal-intro-zh/modal-intro-zh.component';
import { ModalPreviewComponent } from './pages/modal-preview/modal-preview.component';
import { GithubService } from './services/github.service';
import { ModalReproductionComponent } from './pages/modal-reproduction/modal-reproduction.component';

registerLocaleData(zh);

@NgModule({
  declarations   : [
    AppComponent,
    IssueZhComponent,
    IssueEnComponent,
    ModalIntroZhComponent,
    ModalIntroEnComponent,
    ModalPreviewComponent,
    ModalReproductionComponent
  ],
  imports        : [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    MarkdownModule.forRoot(),
    NgZorroAntdModule
  ],
  entryComponents: [
    ModalIntroZhComponent,
    ModalIntroEnComponent,
    ModalPreviewComponent,
    ModalReproductionComponent
  ],
  providers      : [ GithubService, { provide: NZ_I18N, useValue: zh_CN } ],
  bootstrap      : [ AppComponent ]
})
export class AppModule {
}
