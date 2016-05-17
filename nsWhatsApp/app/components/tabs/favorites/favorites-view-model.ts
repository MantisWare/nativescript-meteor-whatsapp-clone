import {Observable} from 'data/observable';
import {ObservableArray} from 'data/observable-array';
export class FavoritesViewModel extends Observable {
    favorites;
    constructor() {
        super();
        this.favorites = new ObservableArray();
    }
    load() {
    }
}