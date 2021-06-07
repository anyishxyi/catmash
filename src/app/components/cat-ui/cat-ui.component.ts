import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat-ui',
  templateUrl: './cat-ui.component.html',
  styleUrls: ['./cat-ui.component.scss']
})
export class CatUiComponent {
  @Input() catData: any;
  @Output() onSelectedCat = new EventEmitter<number>();

  onSelect(value: number): void {
    this.onSelectedCat.emit(value);
  }

}
