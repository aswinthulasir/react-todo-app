import React, { useState } from 'react';

export default function Header({ addNew, filter, query, setSearchQuery, changeFilter }) {
    const [newTodoText, setNewTodoText] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [currentFilter, setCurrentFilter] = useState(filter); // to store filter
    const [priority, setPriority] = useState('low'); // default priority

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodoText.trim()) {
            const newTodo = {
                id: Date.now(),
                text: newTodoText,
                completed: false,
                date: selectedDate || new Date().toISOString(), // if no date selected, use current date
                priority, // include priority
            };
            addNew(newTodo);  // Calls the addNew function passed down from the parent component
            setNewTodoText(''); // Clears the input after submitting
            setSelectedDate(''); // Clears the date input
            setPriority('low'); // Reset to default priority
        }
    };

    const handleFilterChange = (e) => {
        setCurrentFilter(e.target.value);
        changeFilter(e.target.value);  // Update filter in parent component
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);  // Update priority when user selects a different option
    };

    return (
        <header className="todo-header">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add Todo</button>
            </form>

            {/* Filter Selection */}
            <div className="filter-section">
                <label htmlFor="filter">Filter: </label>
                <select id="filter" value={currentFilter} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            {/* Date Selection */}
            <div className="date-section">
                <label htmlFor="date">Due Date: </label>
                <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
            </div>

            {/* Priority Selection */}
            <div className="priority-section">
                <label htmlFor="priority">Priority: </label>
                <select id="priority" value={priority} onChange={handlePriorityChange}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            {/* Optional: Add a search bar */}
            <input
                type="text"
                value={query}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Todos"
            />
        </header>
    );
}
