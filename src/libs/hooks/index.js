import { useEffect } from 'react'

export const useBackground = (color) => {
    const defaultBg = "#fff";
    useEffect(() => {
      document.body.style.background = color;
      return () => {
        document.body.style.background = defaultBg;
      };
    }, [color]);
  };