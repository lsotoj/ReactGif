import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category)
      .then((images) => {
        setImages(images);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error("No se pudieron obtener los gifs, error ->", e);
      });
  }, []);

  return {
    images,
    isLoading,
  };
};
