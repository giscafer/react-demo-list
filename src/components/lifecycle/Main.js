
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
            <div>
                <LifeCycleApp text={this.state.info} />
                <div id="console">
                    <h2>Console</h2>
                    <ul></ul>
                </div>
            </div>
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
