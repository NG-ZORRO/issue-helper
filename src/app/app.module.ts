import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
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
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    IssueZhComponent,
    IssueEnComponent,
    ModalIntroZhComponent,
    ModalIntroEnComponent,
    ModalPreviewComponent,
    ModalReproductionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    MarkdownModule.forRoot(),
    NzModalModule,
    NzLayoutModule,
    NzSelectModule,
    NzGridModule,
    NzIconModule,
    NzFormModule,
    NzRadioModule,
    NzInputModule,
    NzButtonModule,
    NzToolTipModule
  ],
  providers: [GithubService, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
