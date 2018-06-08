import { Person } from '../person/person';
import { PartyFilterActionType } from './party-filter.action-type';

export function partyFilterReducer(state = (person: Person) => person, action) {

  switch (PartyFilterActionType[action.type]) {
    case PartyFilterActionType.SHOW_ATTENDING:
      return (person: Person) => person.attending;
    case PartyFilterActionType.SHOW_ALL:
      return (person: Person) => person;
    case PartyFilterActionType.SHOW_WITH_GUESTS:
      return (person: Person) => person.guests && person.attending;
    default:
      return state;
  }
}
