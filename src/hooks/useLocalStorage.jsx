const useLocalStorage = (key) => {
  const localStorage = {
    setItem: (value) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {
        throw new Error("Local storage Error");
      }
    },
    getItem: () => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
      } catch {
        throw new Error("Local storage Error");
      }
    },

    removeItem: () => {
      try {
        window.localStorage.removeItem(key);
      } catch {
        throw new Error("Local storage Error");
      }
    },
  };

  return { localStorage };
};

export default useLocalStorage;
