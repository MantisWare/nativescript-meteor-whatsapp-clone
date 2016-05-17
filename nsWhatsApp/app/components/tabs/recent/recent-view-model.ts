import {Observable} from 'data/observable';
import {ObservableArray} from 'data/observable-array';
export class RecentViewModel extends Observable {
    recent;
    constructor() {
        super();
        this.recent= new ObservableArray();
    }
    load() {
    }
}