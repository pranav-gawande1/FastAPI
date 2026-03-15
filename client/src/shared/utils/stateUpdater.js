export const removeItem = (setState, id, key = "_id") => {
    setState(prev => prev.filter(item => item[key] !== id));
};

export const updateItem = (setState, updatedItem, key = "_id") => {
    setState(prev =>
        prev.map(item => item[key] === updatedItem[key] ? updatedItem : item)
    );
};

export const addItem = (setState, newItem) => {
    setState(prev => [newItem, ...prev]);
};