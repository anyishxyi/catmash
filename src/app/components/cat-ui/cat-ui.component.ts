import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat-ui',
  templateUrl: './cat-ui.component.html',
  styleUrls: ['./cat-ui.component.scss']
})
export class CatUiComponent implements OnChanges {
  @Input() catData: any;
  @Output() onSelectedCat = new EventEmitter<number>();

  ngOnChanges(): void {}

  onSelect(value: number): void {
    this.onSelectedCat.emit(value);
  }

}
