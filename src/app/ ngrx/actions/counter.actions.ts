// generate counter action
import { createAction, props } from '@ngrx/store';
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');


export const CalcuAction = {
  sum: createAction('[Calcu Component] Sum', props<{ num1: number, num2: number }>()),
  minus: createAction('[Calcu Component] Minus', props<{ num1: number, num2: number }>()),
  multiply: createAction('[Calcu Component] Multiply', props<{ num1: number, num2: number }>()),
  divide: createAction('[Calcu Component] Divide', props<{ num1: number, num2: number }>()),
}
