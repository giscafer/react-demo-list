'use strict'
import React from 'react';
import Nav from '../nav/Nav';

class LifeCycleComponent extends React.Component{
    constructor(props){
        super(props);
        fpLog('初始化调用:constructor()');
    }
    //在完成首次渲染之前调用，此时仍可以修改组件的state
    componentWillMount(){
        fpLog('完成渲前调用:componentWillMount()')
    }
    render(){
        fpLog('渲染时调用:render()');
        return(
            <div>
                <Nav/>
                <p>{this.props.text}</p>
                <a href="https://facebook.github.io/react/docs/react-component.html" target="_blank">Component Specs and Lifecycle</a>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState){
        //该方法用来做一下性能优化，默认是返回true，返回false则阻止render()调用，跳过后续的生命周期方法
        //在首次渲染期间或者调用了forceUpdate方法后，该方法不会被调用
        fpLog('当渲染新的props或state调用:shouldComponentUpdate()');
        fpLog2('<span style="color:blue">原始props.text='+this.props.text+'</span>');
        fpLog2('<span style="color:red">改变后的props.text='+nextProps.text+'</span>');

        if(this.props.info!==nextProps.text){
            return true
        }
    }
    componentWillUpdate(){
         //该方法中不允许更新props或state，也就是更新也是无效的
        fpLog('接收到新的props或者state后，进行渲染之前调用:componentWillUpdate()');
    }
    componentDidUpdate(){
        fpLog('完成渲染新的props或者state后调用，此时可以访问到新的DOM元素:componentDidUpdate()');
    }
    //真实DOM渲染后调用
    componentDidMount(){
        fpLog('真实DOM渲染后调用:componentDidMount()')
    }
    componentWillReceiveProps(nextProps){
        fpLog('组件接收到新的props时调用:componentWillReceiveProps()---'+nextProps.text)
    }
    componentWillUnmount(){
        fpLog('组件销毁前调用：componentWillUnmount()')
    }
}
LifeCycleComponent.dispalyName='LifeCycleComponentDemo';
export default LifeCycleComponent;