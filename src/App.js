import React from 'react';

function Food({ name, picture }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  )
}

/**
 * const renderFood = dish => <Food name={dish.name} picture={dish.image} />;
 */

const foodLike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df69d373e2757c68f942680cce7380e9926f789c5a2c1f914c05db87146ac64319a',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sammm',
    image: 'https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df69d373e2757c68f942680cce7380e9926f789c5a2c1f914c05db87146ac64319a',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'YYYY',
    image: 'https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df69d373e2757c68f942680cce7380e9926f789c5a2c1f914c05db87146ac64319a',
    rating: 2.3,
  },
  {
    id: 4,
    name: 'ZZZ',
    image: 'https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df69d373e2757c68f942680cce7380e9926f789c5a2c1f914c05db87146ac64319a',
    rating: 3.1,
  },
];

function App() {
  return (
            <div>
              {
                foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image}/>))
              }
            </div>
          );
}

export default App;
