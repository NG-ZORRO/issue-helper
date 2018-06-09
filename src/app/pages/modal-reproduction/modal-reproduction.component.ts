import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-reproduction',
  templateUrl: './modal-reproduction.component.html',
  styleUrls: ['./modal-reproduction.component.less']
})
export class ModalReproductionComponent implements OnInit {

  @Input() language;

  constructor() { }

  ngOnInit() {
  }

}
