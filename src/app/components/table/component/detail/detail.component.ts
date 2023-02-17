import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() inputData: any;
  @Output() outputData = new EventEmitter<any>();
  count = 0;
  ngOinit() {
  }
  outputDataHandler(event: any) {
    console.log(event)
  }
  addNewDog(data: any) {
    this.outputData.emit(data)
  }


}
