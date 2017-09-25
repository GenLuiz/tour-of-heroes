import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 0,  name: 'Ancients' },
        { id: 11, name: 'Tidehunter' },
        { id: 12, name: 'Spirit Breaker' },
        { id: 13, name: 'Silencer' },
        { id: 14, name: 'Keeper of the light' },
        { id: 15, name: 'Earthshaker' },
        { id: 16, name: 'Rubick' },
        { id: 17, name: 'Mirana' },
        { id: 18, name: 'Luna' },
        { id: 19, name: 'Timbersaw' },
        { id: 20, name: 'Kunkka' }
    ];
    return {heroes};
  }
}