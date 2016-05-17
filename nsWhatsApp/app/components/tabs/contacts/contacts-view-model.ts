import {Observable} from 'data/observable';
import {ObservableArray} from 'data/observable-array';
export class ContactsViewModel extends Observable {
    contacts;
    constructor() {
        super();
        this.contacts = new ObservableArray();
    }
    load() {
    }
}