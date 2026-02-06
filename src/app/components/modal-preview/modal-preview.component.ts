import { Component, inject } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-modal-preview',
  imports: [MarkdownModule],
  templateUrl: './modal-preview.component.html',
  styleUrls: ['./modal-preview.component.less']
})
export class ModalPreviewComponent {
  readonly previewData = inject(NZ_MODAL_DATA)?.previewData || '';
}
