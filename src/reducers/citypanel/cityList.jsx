
import { SET_VISIBILITY_FILTER } from '../../actions/citypanel/actions';
import { cityData } from './cityData.js';
const initialState = cityData.filter(item => item['citynum'])
console.log(initialState)
export default function cityList(state = initialState, action) {

    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return cityFilter(action.filter)
        default:
            return state
    }

}
function cityFilter(filter) {
    return cityData.map((item) => {
        if (filter === '特大' || !filter) {
            if (item['citynum']) {
                return item;
            }
        } else if (item['pinyin'][0].toLocaleUpperCase() === filter) {
            return item;
        } else {
            console.log(filter)
        }
    })
}