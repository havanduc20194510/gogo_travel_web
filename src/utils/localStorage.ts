export const saveToLocalStorage = <T>(key: string, data: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

export const deleteFromLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error deleting from localStorage:", error);
  }
};

export const getFromLocalStorage = <T>(key: string): T | undefined => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.error("Error getting data from localStorage:", error);
  }
};

export const updateLocalStorageItem = <T>(key: string, newValue: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(newValue));
  } catch (error) {
    console.error("Error updating localStorage item:", error);
  }
};
