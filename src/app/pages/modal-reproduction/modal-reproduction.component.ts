import { Component, Inject, OnInit, Optional } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-reproduction',
  templateUrl: './modal-reproduction.component.html',
  styleUrls: ['./modal-reproduction.component.less'],
  standalone: false
})
export class ModalReproductionComponent implements OnInit {
  
  get language(): string {
    return this.nzModalData?.language || 'zh';
  }

  constructor(@Optional() @Inject(NZ_MODAL_DATA) private nzModalData: { language?: string } | null) { }

  ngOnInit() {
  }

}
