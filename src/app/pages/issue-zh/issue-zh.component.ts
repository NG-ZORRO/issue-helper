import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';
import { GithubService } from '../../services/github.service';
import { ModalIntroZhComponent } from '../modal-intro-zh/modal-intro-zh.component';
import { ModalPreviewComponent } from '../modal-preview/modal-preview.component';
import { ModalReproductionComponent } from '../modal-reproduction/modal-reproduction.component';

@Component({
  selector   : 'app-issue-zh',
  templateUrl: './issue-zh.component.html',
  styleUrls  : [ './issue-zh.component.less' ]
})
export class IssueZhComponent implements OnInit, OnDestroy {
  searchSubject$ = new Subject();
  searchSubjection: Subscription;
  issueBugForm: FormGroup;
  issueFeatureForm: FormGroup;
  issueType = 'bug';
  confirmMarkdown = '';

  repositories = [ 'ng-zorro-antd' ];
  features = [
    {
      label: '错误报告',
      value: 'bug'
    },
    {
      label: '功能要求',
      value: 'feature'
    }
  ];

  versions = [];
  searchIssues = [];

  replinkValidator = (control: FormControl): { [s: string]: boolean } => {
    // 匹配预定复现网址
    const REP_LINK_REGEXP = /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*(stackblitz|github)[-A-Za-z0-9+&@#/%?=~_|!:,.;]+/;
    // 现有网址不可完全复制
    const preventRegexp = /^(https?:\/\/)?((stackblitz\.com\/edit\/ng-zorro-antd-start)|(ng-zorro-antd-start\.stackblitz\.io))\/?$/i;
    if (!control.value) {
      return { error: true, required: true };
    } else if (!REP_LINK_REGEXP.test(control.value) || preventRegexp.test(control.value)) {
      return { error: true, repLink: true };
    }
    return null;
  }

  getFormControl(name) {
    if (this.issueType === 'bug') {
      return this.issueBugForm.controls[ name ];
    } else {
      return this.issueFeatureForm.controls[ name ];
    }
  }

  /**
   * 更换issue type
   * @private
   */
  changeType() {
    this.searchSubject$.next(null);
  }

  /**
   * 提交表单
   */
  submitForm() {
    const repo = this.getFormControl('repository').value;
    const label = this.issueType === 'feature' ? '&labels=type:feature' : '';
    this.confirmMarkdown = this.confirmMarkdown + '<!-- generated by ng-zorro-issue-helper. DO NOT REMOVE -->';
    const body = encodeURIComponent(this.confirmMarkdown).replace(/%2B/gi, '+');
    window.open(
      `https://github.com/NG-ZORRO/${repo}/issues/new?title=${encodeURIComponent(this.getFormControl('issue_title').value)}&body=${body}${label}`
    );
  }

  /**
   * 预览
   */
  submitFormPreview() {
    this.confirmMarkdown = '';
    let canPreview = false;
    if (this.issueType === 'bug') {
      for (const i in this.issueBugForm.controls) {
        this.issueBugForm.controls[ i ].markAsDirty();
        this.issueBugForm.controls[ i ].updateValueAndValidity();
      }
      if (!this.issueBugForm.invalid) {
        canPreview = true;
      }
    } else {
      for (const i in this.issueFeatureForm.controls) {
        this.issueFeatureForm.controls[ i ].markAsDirty();
        this.issueFeatureForm.controls[ i ].updateValueAndValidity();
      }
      if (!this.issueFeatureForm.invalid) {
        canPreview = true;
      }
    }
    if (canPreview) {
      switch (this.issueType) {
        case 'bug':
          this.confirmMarkdown = `
### Reproduction link
[${this.getFormControl('link').value}](${this.getFormControl('link').value})

### Steps to reproduce
${this.getFormControl('step').value}

### What is expected?
${this.getFormControl('expect_result').value}

### What is actually happening?
${this.getFormControl('exist_result').value}

| Environment | Info |
|---|---|
| ng-zorro-antd | ${this.getFormControl('version').value} |
| Browser | ${this.getFormControl('environment').value} |

${this.getFormControl('addtion').value ? `---\n${this.getFormControl('addtion').value}` : ''}
`.trim();
          break;
        case 'feature':
          this.confirmMarkdown = `
## What problem does this feature solve?
${this.getFormControl('motivation').value}

## What does the proposed API look like?
${this.getFormControl('proposal').value}
`.trim();
          break;
      }
      this.modalService.create({
        nzTitle          : 'Issue 预览',
        nzMaskClosable   : false,
        nzWidth          : 680,
        nzContent        : ModalPreviewComponent,
        nzOkText         : '创建',
        nzCancelText     : null,
        nzStyle          : {
          top: '40px'
        },
        nzComponentParams: {
          previewData: this.confirmMarkdown
        },
        nzOnOk           : () => {
          this.submitForm();
        }
      });
    }
  }

  // 获取版本
  fetchReleases() {
    this._githubApiService.fetchReleases('NG-ZORRO', 'ng-zorro-antd').subscribe(data => {
      this.versions = [];
      for (const i in data) {
        this.versions.push(data[ i ][ 'tag_name' ]);
      }
      this.issueBugForm.controls[ 'version' ].setValue(this.versions[ 0 ]);
    });
  }

  searchOnChange(data) {
    this.searchSubject$.next(data);
  }

  /**
   * 弹窗提示
   */
  showIntro() {
    this.modalService.create({
      nzTitle       : '为什么要有这么严格的 issue 规定',
      nzMaskClosable: true,
      nzFooter      : null,
      nzWidth       : 680,
      nzContent     : ModalIntroZhComponent
    });
  }

  /**
   * 复现链接说明
   */
  showReprod() {
    this.modalService.create({
      nzTitle          : '关于重现',
      nzMaskClosable   : true,
      nzFooter         : null,
      nzWidth          : 680,
      nzContent        : ModalReproductionComponent,
      nzComponentParams: {
        language: 'zh'
      }
    });
  }

  constructor(private modalService: NzModalService, private fb: FormBuilder, private _githubApiService: GithubService) {
  }

  ngOnInit() {
    this.searchIssues = [];
    this.issueBugForm = this.fb.group({
      repository   : [ 'ng-zorro-antd', [ Validators.required ] ],
      issue_title  : [ '', [ Validators.required ] ],
      link         : [ '', [ this.replinkValidator ] ],
      version      : [ '', [ Validators.required ] ],
      environment  : [ '', [ Validators.required ] ],
      step         : [ '', [ Validators.required ] ],
      expect_result: [ '', [ Validators.required ] ],
      exist_result : [ '', [ Validators.required ] ],
      addtion      : [ '' ]
    });
    this.issueFeatureForm = this.fb.group({
      repository : [ 'ng-zorro-antd', [ Validators.required ] ],
      issue_title: [ '', [ Validators.required ] ],
      motivation : [ '', [ Validators.required ] ],
      proposal   : [ '', [ Validators.required ] ]
    });
    // 版本
    this.fetchReleases();
    // 查询
    this.searchSubjection = this.searchSubject$.pipe(debounceTime(300)).pipe(distinctUntilChanged()).subscribe((keyword: string) => {
      this.searchIssues = [];
      if (keyword) {
        this._githubApiService.fetchIssues(keyword).subscribe((issues: any) => {
          if (issues[ 'items' ]) {
            this.searchIssues = issues[ 'items' ];
          } else {
            this.searchIssues = [];
          }
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.searchSubjection) {
      this.searchSubjection.unsubscribe();
      this.searchSubjection = null;
    }
  }
}
