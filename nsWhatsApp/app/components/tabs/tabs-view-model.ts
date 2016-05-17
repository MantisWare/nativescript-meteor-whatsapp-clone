import {Observable} from 'data/observable';

export class TabsViewModel extends Observable {
    constructor() {
        super();
        this.set("selectedIndex", 3);
    }
}