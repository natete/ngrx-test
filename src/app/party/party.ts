import { Person } from '../person/person';

export interface Party {
  total: number;
  people: Person[];
  attending: Person[];
  guests: Person[];
}
