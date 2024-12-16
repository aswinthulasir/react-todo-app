import React, { useState } from 'react';

function InputBox({ addNew }) {
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState('');

    const handleAdd = (e) => {
        if (e.key === 'Enter') {
            addNew({ text: e.target.value, priority, dueDate, completed: false });
            e.target.value = ''; // Clear input after adding
        }
    };

    return (
        <div>
            <input
                autoFocus
                type="text"
                className="form-control add-todo"
                onKeyUp={handleAdd}
                placeholder="Add New Task"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
        </div>
    );
}

export default InputBox;
