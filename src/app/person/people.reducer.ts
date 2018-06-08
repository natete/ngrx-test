import { PeopleActionType } from './people.action-type';
import { PeopleAction } from './people.action';
import { Person } from './person';

function details(state, action: PeopleAction) {

  switch (PeopleActionType[action.type]) {
    case PeopleActionType.ADD_GUEST:
      if (state.id === action.payload) {
        return Object.assign({}, state, { guests: state.guests + 1 });
      }
      return state;
    case PeopleActionType.REMOVE_GUEST:
      if (state.id === action.payload) {
        return Object.assign({}, state, { guests: state.guests - 1 });
      }
      return state;
    case PeopleActionType.TOGGLE_ATTENDING:
      if (state.id === action.payload) {
        return Object.assign({}, state, { attending: !state.attending });
      }
      return state;
    default:
      return state;
  }
}

export function peopleReducer(state: Person[] = [], action: PeopleAction) {
  switch (PeopleActionType[action.type]) {
    case PeopleActionType.ADD_PERSON:
      const newPerson: Person = <Person>action.payload;
      return [...state, Object.assign({}, { id: newPerson.id, name: newPerson.name, guests: 0, attending: false })];
    case PeopleActionType.REMOVE_PERSON:
      return state.filter(person => person.id !== action.payload);
    case PeopleActionType.ADD_GUEST:
      return state.map(person => details(person, action));
    case PeopleActionType.REMOVE_GUEST:
      return state.map(person => details(person, action));
    case PeopleActionType.TOGGLE_ATTENDING:
      return state.map(person => details(person, action));
    default:
      return state;
  }
}

