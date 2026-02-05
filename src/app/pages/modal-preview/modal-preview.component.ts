import { Component, inject, OnInit } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector   : 'app-modal-preview',
  templateUrl: './modal-preview.component.html',
  styleUrls  : [ './modal-preview.component.less' ]
})
export class ModalPreviewComponent implements OnInit {

  readonly nzModalData: { previewData?: string } = inject(NZ_MODAL_DATA, { optional: true }) || {};
  
  get previewData(): string {
    return this.nzModalData.previewData || '';
  }

  constructor() {
  }

  ngOnInit() {
  }

}
