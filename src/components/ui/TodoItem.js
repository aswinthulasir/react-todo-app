import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const { data, changeStatus } = props;

    const handleChange = (checked) => {
        if (checked) {
            if (window.confirm('Are you sure you want to mark this task as completed?')) {
                changeStatus(data.id, true);
            } else {
                changeStatus(data.id, false);
            }
        } else {
            changeStatus(data.id, false);
        }
    };

    const className = `todo-item ui-state-default ${
        data.completed ? 'completed' : 'pending'
    }`;

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange} /> {data.text}
                </label>
                <div>
                    <span className="badge bg-primary">{data.priority}</span>
                    <span className="due-date">Due: {data.dueDate}</span>
                </div>
            </div>
        </li>
    );
}
