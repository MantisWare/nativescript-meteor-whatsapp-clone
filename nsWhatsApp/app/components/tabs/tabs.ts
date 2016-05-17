import {TabView, SelectedIndexChangedEventData} from 'ui/tab-view';
import {Page, NavigatedData} from 'ui/page';
import {TabsViewModel} from './tabs-view-model';
import {ChatsViewModel} from './chats/chats-view-model';
import {ContactsViewModel} from './contacts/contacts-view-model';
import {FavoritesViewModel} from './favorites/favorites-view-model';
import {RecentViewModel} from './recent/recent-view-model';
import {SettingsViewModel} from './settings/settings-view-model';
import * as frame from 'ui/frame';
import * as moment from 'moment';
let page;
let tabsVm = new TabsViewModel();
let tabView;
const favoritesVm = new FavoritesViewModel();
const recentVm = new RecentViewModel();
const contactsVm = new ContactsViewModel();
const chatsVm = new ChatsViewModel();
const settingsVm = new SettingsViewModel();
export function navigatingTo(args: NavigatedData) {
    page = <Page>args.object;
    page.bindingContext = tabsVm;
    tabView = <TabView>page.getViewById("tabs");
    console.log('loaded')

    tabView.on(TabView.selectedIndexChangedEvent, (args: SelectedIndexChangedEventData) => {
        switch (args.newIndex) {
            case 0:
                page.bindingContext = favoritesVm.load();
                break;
            case 1:
                page.bindingContext = recentVm.load();
                break;
            case 2:
                page.bindingContext = contactsVm.load();
                break;
            case 3:
                page.bindingContext = chatsVm.load();
                break;
            case 4:
                page.bindingContext = settingsVm.load();
                break;
        }
    })

}
export function loaded(args: NavigatedData) {

}