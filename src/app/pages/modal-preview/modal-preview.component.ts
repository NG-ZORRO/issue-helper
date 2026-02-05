import { Component, Inject, OnInit, Optional } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector   : 'app-modal-preview',
  templateUrl: './modal-preview.component.html',
  styleUrls  : [ './modal-preview.component.less' ],
  standalone: false
})
export class ModalPreviewComponent implements OnInit {
  
  get previewData(): string {
    return this.nzModalData?.previewData || '';
  }

  constructor(@Optional() @Inject(NZ_MODAL_DATA) private nzModalData: { previewData?: string } | null) {
  }

  ngOnInit() {
  }

}
