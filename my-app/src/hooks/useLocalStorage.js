import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const readValue = () => {
    if (typeof window === "undefined") return initialValue;
    
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [value, setValue] = useState(readValue);

  // Get all localStorage items
  const getAllItems = () => {
    if (typeof window === "undefined") return {};
    
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      try {
        items[k] = JSON.parse(localStorage.getItem(k));
      } catch {
        items[k] = localStorage.getItem(k);
      }
    }
    return items;
  };

  const [allItems, setAllItems] = useState(getAllItems);

  // Update localStorage when value changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setAllItems(getAllItems());
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  // Set value directly (replaces existing value)
  const updateValue = (newValue) => {
    try {
      const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
      setValue(valueToStore);
    } catch (error) {
      console.warn(`Error updating value for key "${key}":`, error);
    }
  };

  // Add/merge value (for arrays and objects)
  const addValue = (newValue) => {
    try {
      let updatedValue;
      
      if (Array.isArray(value)) {
        updatedValue = [...value, newValue];
      } else if (typeof value === "object" && value !== null) {
        updatedValue = { ...value, ...newValue };
      } else {
        updatedValue = newValue;
      }
      
      setValue(updatedValue);
    } catch (error) {
      console.warn(`Error adding value for key "${key}":`, error);
    }
  };

  // Remove item from localStorage
  const removeItem = () => {
    try {
      if (typeof window === "undefined") return;
      
      localStorage.removeItem(key);
      setValue(initialValue);
      setAllItems(getAllItems());
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  };

  // Clear all localStorage
  const clearStorage = () => {
    try {
      if (typeof window === "undefined") return;
      
      localStorage.clear();
      setValue(initialValue);
      setAllItems({});
    } catch (error) {
      console.warn(`Error clearing localStorage:`, error);
    }
  };

  return { 
    value, 
    setValue: updateValue, 
    addValue, 
    removeItem, 
    clearStorage, 
    allItems 
  };
}