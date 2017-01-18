
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import cityPanelIndex from '../../components/citypanel/index'
import * as ctiyActions from '../../actions/citypanel/actions'

//将state.cityList绑定到props的cityList
function mapStateToProps(state){
    return {
        cityList:state.cityList
    }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch){
    return bindActionCreators(ctiyActions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(cityPanelIndex)