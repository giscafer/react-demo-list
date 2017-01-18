
import { SET_VISIBILITY_FILTER } from '../../actions/citypanel/actions';
import {cityData} from './cityData.js';

export default function cityList(state = [], action) {

    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return cityFilter(action.filter)
        default:
            return state
    }

}
function cityFilter(filter) {
    return cityData.map((item) => {
         if(item['pinyin'][0].toLocaleUpperCase() === filter){
             return item;
         }else{
              console.log(filter)
         }
    })
}