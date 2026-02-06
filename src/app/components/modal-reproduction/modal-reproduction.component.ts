import { Component, inject } from '@angular/core';

import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-reproduction',
  templateUrl: './modal-reproduction.component.html'
})
export class ModalReproductionComponent {
  readonly language = inject(NZ_MODAL_DATA)?.language || 'zh';
}
