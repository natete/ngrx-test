import { Action } from '@ngrx/store';
import { Person } from './person';

export interface PeopleAction extends Action {
  payload: Person | number;
}
