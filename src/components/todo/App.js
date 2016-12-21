/**
 * 容器组件
 */
'use strict'
import '../../styles/todo/todo.css'
import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../../actions/todo/actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import Nav from '../nav/Nav';

class TodoApp extends Component {
    render() {
        // 由react-redux connect方法完成依赖注入传参
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <div>
                <Nav />
                <AddTodo onAddClick={text => dispatch(addTodo(text))} />
                <TodoList todos={visibleTodos}
                    onTodoClick={index=> { dispatch(completeTodo(index)) } }
                    />
                <Footer  filter={visibilityFilter}  onFilterChange={filter => {
                    dispatch(setVisibilityFilter(filter))
                } } />
            </div>
        )
    }
}
TodoApp.propTypes={
    visibleTodos:PropTypes.arrayOf(PropTypes.shape({
        text:PropTypes.string.isRequired,
        completed:PropTypes.bool.isRequired
    })),
    visibilityFilter:PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos,filter){
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo=> todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.completed)
    }
}
// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。
function  select(state){
    return{
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(TodoApp)