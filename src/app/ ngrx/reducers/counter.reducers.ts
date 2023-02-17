// generate counter reducer
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, CalcuAction } from '../actions/counter.actions';
export const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);
export const CalcuReducer = createReducer(
  initialState,
  on(CalcuAction.sum, (state, { num1, num2 }) => state = (num1 + num2)),
  on(CalcuAction.minus, (state, { num1, num2 }) => state = (num1 - num2)),
  on(CalcuAction.multiply, (state, { num1, num2 }) => state = (num1 * num2)),
  on(CalcuAction.divide, (state, { num1, num2 }) => state = (num1 / num2)),
);

