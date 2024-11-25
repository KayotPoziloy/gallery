import React, { useEffect, useState } from 'react';
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";

export interface UnsplashImage {
  id: string;
  description: string;
  urls: {
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  likes: number;
  user: {
    name: string;
    instagram_username: string;
  };
}

function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('dog');

  useEffect(() => {
    if (term.trim() === '') {
      setImages([]);
      setIsLoading(false);
      return;
    }

    fetch(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${term}`
    )
      .then(res => res.json())
      .then(data => {
        setImages(data.results)
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text: string) => setTerm(text)}/>

      {!isLoading && images.length === 0 &&
          <h1 className="text-6xl text-center mx-auto mt-32">
              Nothing
          </h1>
      }
      {isLoading ?
        <h1 className="text-6xl text-center mx-auto mt-32">Loading</h1> :
        <>
          <div className="grid grid-cols-3 gap-4">
            {images.map(image => (
              <ImageCard key={image.id} image={image}/>
            ))}
          </div>
        </>
      }
    </div>
  );
}

export default App;
