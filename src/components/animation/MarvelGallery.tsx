import React from 'react';

const images = [
  "https://image.tmdb.org/t/p/w342/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg",
  "https://image.tmdb.org/t/p/w342/x1v8Qzvp46WEpxoBFlqaGfSsAxw.jpg",
  "https://image.tmdb.org/t/p/w342/wsgfe8YmntJ1uVIkBjBdRdYpJyN.jpg",
  "https://image.tmdb.org/t/p/w342/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg",
  "https://image.tmdb.org/t/p/w342/nkWF1jIMQqWZSShNTAdBUqrdFsZ.jpg",
  "https://image.tmdb.org/t/p/w342/wsgfe8YmntJ1uVIkBjBdRdYpJyN.jpg",
  "https://image.tmdb.org/t/p/w342/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg",
  "https://image.tmdb.org/t/p/w342/nkWF1jIMQqWZSShNTAdBUqrdFsZ.jpg"
];

const App: React.FC = () => {

  return (
    <div>
      <div className="wrapper-images">
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div className="images-line" key={rowIndex}>
            {images.map((src, colIndex) => (
              <div className="line" style={{ backgroundImage: `url(${src})` }} key={colIndex}>
                <div className="img" style={{ backgroundImage: `url(${src})` }}></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

