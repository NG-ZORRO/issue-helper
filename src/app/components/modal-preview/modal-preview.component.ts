import { Component, inject } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-preview',
  imports: [MarkdownModule],
  templateUrl: './modal-preview.component.html',
  styleUrl: './modal-preview.component.less'
})
export class ModalPreviewComponent {
  readonly previewData = inject(NZ_MODAL_DATA)?.previewData || '';
}
