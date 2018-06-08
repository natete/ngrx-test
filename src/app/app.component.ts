import { Component } from '@angular/core';
import { Person } from './person/person';
import { combineLatest, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PeopleActionType } from './person/people.action-type';
import { newId } from './shared/helpers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: Observable<any>;

  constructor(private store: Store<Person>) {
    this.model = combineLatest(
      this.store.select('people'),
      this.store.select('filter')
    )
      .pipe(
        map((results) => {
          const people: Person[] = results[0];
          const filter: (person: Person) => Person = results[1];
          return {
            total: people.length,
            people: people.filter(filter),
            attending: people.filter(person => person.attending).length,
            guests: people.reduce((acc, curr) => acc + curr.guests, 0)
          };
        })
      );
  }

  addPerson(name: string) {
    this.store.dispatch({ type: PeopleActionType.ADD_PERSON, payload: { id: newId(), name } });
  }

  addGuest(id: number) {
    this.store.dispatch({ type: PeopleActionType.ADD_GUEST, payload: id });
  }

  removeGuest(id: number) {
    this.store.dispatch({ type: PeopleActionType.REMOVE_GUEST, payload: id });
  }

  removePerson(id: number) {
    this.store.dispatch({ type: PeopleActionType.REMOVE_PERSON, payload: id });
  }

  toggleAttending(id: number) {
    this.store.dispatch({ type: PeopleActionType.TOGGLE_ATTENDING, payload: id });
  }

  updateFilter(filter) {
    this.store.dispatch({ type: filter });
  }
}
