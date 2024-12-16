import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const StateProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [query, setQuery] = useState('');

    const addNew = (todo) => setTodos([...todos, todo]);
    const changeFilter = (newFilter) => setFilter(newFilter);
    const changeStatus = (id) => setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
    const setSearchQuery = (newQuery) => setQuery(newQuery);

    return (
        <TodoContext.Provider value={{ todos, filter, query, addNew, changeFilter, changeStatus, setSearchQuery }}>
            {children}
        </TodoContext.Provider>
    );
};

export default StateProvider;
