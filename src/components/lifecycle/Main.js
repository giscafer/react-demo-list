import '../../styles/lifecycle/index.css'
import LifeCycleApp from './LifeCycle';
import React from 'react';


class LifeCycleMainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            info: 'The React Component Lifecycle'
        }
    }
    render() {
        return (
            <LifeCycleApp text={this.state.info} />
        );
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                info: 'React组件生命周期'
            })
        }, 2000)
        setTimeout(() => {
            this.setState({
                info: '再次改变state值'
            })
        }, 5000)
    }
    componentWillUnmount() {

    }
}

LifeCycleMainComponent.defaultProps = {
};

export default LifeCycleMainComponent;
