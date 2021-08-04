import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);
    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const useFavorite = () => {
  const [favorites, setFavorites] = useLocalStorage("favoriteContents", []);

  const heartIconClickHandler = (id) => {
    const newFavorites = [...favorites];
    const index = newFavorites.indexOf(id);
    if (index === -1) {
      newFavorites.push(id);
    } else {
      newFavorites.splice(index, 1);
    }
    setFavorites(newFavorites);
  };

  return { heartIconClickHandler, favorites, setFavorites };
};
