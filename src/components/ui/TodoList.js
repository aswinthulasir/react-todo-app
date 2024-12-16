import React, { useContext } from 'react';
import { TodoContext } from '../wrappers/StateProvider';  // Make sure the correct path is used for importing
import { applyFilter, search, FILTER_ACTIVE } from '../../services/filter';
import Header from './Header';
import FilteredList from './FilteredList';
import Footer from './Footer';
import Info from './Info';

export default function TodoList() {
    const { todos, filter, query, addNew, changeFilter, changeStatus, setSearchQuery } = useContext(TodoContext);
    const activeItemCount = applyFilter(todos, FILTER_ACTIVE).length;
    const items = search(applyFilter(todos, filter), query);

    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    <Header {...{ addNew, query, setSearchQuery }} />
                    <FilteredList {...{ items, changeStatus }} />
                    <Footer {...{ activeItemCount, filter, changeFilter }} />
                    <Info />
                </div>
            </div>
        </div>
    );
}
