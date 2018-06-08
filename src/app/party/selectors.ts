import { Party } from './party';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export function partyModelSelector() {
  return (state: Observable<any[]>) =>
    state
      .pipe(
        map((results) => {
          return {
            total: results[0].people.length,
            people: results[0].people.filter(results[1].filter),
            attending: results[0].people.filter(person => person.attending).length,
            guests: results[0].people.reduce((acc, curr) => acc + curr.guests, 0)
          };
        })
      );
}

export function attendeesSelector() {
  return (state: Observable<Party>) =>
    state
      .pipe(
        map((party: Party) => party.people),
        distinctUntilChanged()
      );
}

