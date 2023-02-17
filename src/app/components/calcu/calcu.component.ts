import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalcuAction } from 'src/app/ ngrx/actions/counter.actions';
@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.scss']
})
export class CalcuComponent {
  @ViewChild('input') input: any;

  calculation$!: Observable<number>

  constructor(private store: Store<{ calculator: number }>) {
    this.calculation$ = this.store.select('calculator');
  }
  display = '0';
  firstValue: number = 0;
  action: string | null = null;

  numClick(val: any) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  oper(action: any) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = "";
  }

  calculate() {
    const a = this.firstValue;
    const b = parseFloat(this.display);
    let temp = new Array<number>();
    let result = 0;
    if (this.action === '*') {
      result = a * b;
      temp.push(result);
      this.store.dispatch(CalcuAction.multiply({ num1: a, num2: b }))
      this.calculation$.subscribe((data) => {
        console.log('data ne' + data)
      })
      console.log('mang:' + temp)
    }
    else if (this.action === '/') {
      console.log('2')
    }
    else if (this.action === '+') {
      console.log('3')
    }
    else if (this.action === '-') {
      console.log('4')
    }
    this.firstValue = result;
    console.log(result)
    this.display = result.toString();
  }
}
