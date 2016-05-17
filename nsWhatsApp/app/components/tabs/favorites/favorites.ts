import * as view from 'ui/core/view';
import {NavigatedData} from 'ui/page';
import {GridLayout} from 'ui/layouts/grid-layout';
export class Favorites extends view.View {

}

export function loaded(args: NavigatedData) {
    args.object.set("favorites", [{ name: 'osei' }, { name: 'john' }])
    args.object.get("favorites")
}