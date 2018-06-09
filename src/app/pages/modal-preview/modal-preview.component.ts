import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector   : 'app-modal-preview',
  templateUrl: './modal-preview.component.html',
  styleUrls  : [ './modal-preview.component.less' ]
})
export class ModalPreviewComponent implements OnInit {

  @Input() previewData;

  constructor() {
  }

  ngOnInit() {
  }

}
