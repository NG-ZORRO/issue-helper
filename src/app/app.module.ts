import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NzIssueHelpComponent } from './nz-issue-help/nz-issue-help.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GithubService } from './services/github.service';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        NzIssueHelpComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        NgZorroAntdModule.forRoot(),
        RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/new-issue',
                    pathMatch: 'full'
                },
                {
                    path: 'new-issue',
                    component: NzIssueHelpComponent
                },
                {
                    path: '**',
                    redirectTo: '/new-issue', pathMatch: 'full'
                }
            ],
            {
                useHash: true,
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    providers: [GithubService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
