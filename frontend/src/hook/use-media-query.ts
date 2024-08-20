import { useState, useEffect } from 'react';

const useMediaQuery = (query: string, callback?: () => void): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => {
      const isMatch = mediaQueryList.matches;
      if (isMatch !== matches) setMatches(isMatch);
    };

    // Set the initial state
    documentChangeHandler();

    // Listen for changes
    mediaQueryList.addEventListener('change', documentChangeHandler);

    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [matches, query]);

  useEffect(() => {
    if (matches && callback) callback();
  }, [matches, callback]);

  return matches;
};

export default useMediaQuery;