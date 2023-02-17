import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { Dog } from 'src/app/models/dog.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from 'src/app/ ngrx/actions/counter.actions';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = store.select('counter');
  }
  counter$: Observable<number>;
  count = 0;
  Dog = 'Du lieu cua cha'
  Doggys = [
    {
      id: 1,
      name: 'Buddy',
      age: 3,
      inStock: 2,
      price: 5520200,
      content: '2kg 4 foot 2 ear 1 tail',
      photoDog: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Yen_Bai_-_dogs_-_P1390010.JPG'
    },
    {
      id: 2,
      name: 'Lucky',
      age: 5,
      inStock: 1,
      price: 5000,
      content: '8kg 8 foot 4 ear 9 tail',
      photoDog: 'https://dogily.vn/wp-content/uploads/2019/09/Chu-cho-beo-nhat-Ha-Noi.jpg'
    },
    {
      id: 3,
      name: 'Quan',
      age: 100,
      inStock: 1,
      price: 10000,
      content: '10kg 2 foot 2 ear 2 tail',
      photoDog: 'https://icdn.dantri.com.vn/thumb_w/660/2021/06/09/chodocx-1623207689539.jpeg'
    }
  ]
  add(event: any) {
    this.Doggys.push(
      {
        id: 4,
        name: 'Quan',
        age: 100,
        inStock: 1,
        price: 10000,
        content: '10kg 2 foot 2 ear 2 tail',
        photoDog: 'https://icdn.dantri.com.vn/thumb_w/660/2021/06/09/chodocx-1623207689539.jpeg'
      }
    )
  }

  addRandom(event: Dog) {
    console.log(event)
  }
  increase() {
    this.store.dispatch(increment())
  }
  derease() {
    this.store.dispatch(decrement())
  }
  reset() {
    this.store.dispatch(reset())
  }

}
