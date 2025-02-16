const setItems = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getItems = (key: string) => {
    const item = localStorage.getItem(key);
    if (!item) {
        return null;
    }

    try {
        return JSON.parse(item);
    } catch (error) {
        console.error(`Error parsing JSON from localStorage for key: ${key}`, error);
        return null;
    }
}

const removeItems = (key: string) => {
    localStorage.removeItem(key);
}

const localStorageService = {
    setItems,
    getItems,
    removeItems
}

export default localStorageService;
