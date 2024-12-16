import { FILTER_ALL } from './filter';

export function sortTasks(list, sortBy) {
    if (sortBy === 'dueDate') {
        return list.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
    if (sortBy === 'priority') {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return list.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }
    return list;
}
