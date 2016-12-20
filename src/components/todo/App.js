'use strict'
import '../../styles/todo/todo.css'
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import Nav from '../nav/Nav';

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <AddTodo onAddClick={text => fpLog('add todo', text)} />
                <TodoList todos={[{
                    text: 'Use Redux',
                    completed: true
                }, {
                    text: 'Learn to connect it to React',
                    completed: false
                }]}
                onTodoClick={todo=>{fpLog('todo clicked',todo)}}
                />
                <Footer filter='SHOW_ALL' onFilterChange={filter=>{
                    fpLog('filter change',filter)
                }}/>
            </div>
        )
    }
}
