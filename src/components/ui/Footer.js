import React from 'react';

export default function Footer(props) {
    const { activeItemCount, sortTasksBy } = props;

    return (
        <footer className="clearfix">
            <div className="pull-left">
                {`${activeItemCount} items left`}
                <select
                    className="form-select"
                    onChange={(e) => sortTasksBy(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="dueDate">Due Date</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
        </footer>
    );
}
