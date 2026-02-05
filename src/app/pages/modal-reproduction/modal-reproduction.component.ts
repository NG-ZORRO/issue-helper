import { Component, inject, OnInit } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-reproduction',
  templateUrl: './modal-reproduction.component.html',
  styleUrls: ['./modal-reproduction.component.less']
})
export class ModalReproductionComponent implements OnInit {

  readonly nzModalData: { language?: string } = inject(NZ_MODAL_DATA, { optional: true }) || {};
  
  get language(): string {
    return this.nzModalData.language || 'zh';
  }

  constructor() { }

  ngOnInit() {
  }

}
