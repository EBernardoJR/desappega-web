import React from 'react';
import Header from '../../components/Header';
import './styles.css'
import ButtonSecondary from '../../components/ButtonSecondary';
// import { Container } from './styles';

function Home() {

  const [products, setProducts] = React.useState([{
    name: 'Camisa naruto M',
    _id: 'C32332r',
    price: 130,
    image: 'https://img.elo7.com.br/product/zoom/12C8427/camiseta-naruto-camiseta-game.jpg'
  }, {
    name: 'Camisa naruto P NOVA SARIO',
    _id: 'C323saa32r',
    price: 189,
    image: 'https://img.elo7.com.br/product/zoom/12C8427/camiseta-naruto-camiseta-game.jpg'
  }, {
    name: 'Camisa naruto M muito usada',
    _id: 'C3233sssss9a2r',
    price: 190,
    image: 'https://img.elo7.com.br/product/zoom/12C8427/camiseta-naruto-camiseta-game.jpg'
  }])
  return (
    <div>
        <Header page={'home'} />
        <div className='container-home'>
          {
            products.map(product => {
              return <div className="item">
                <img src={product.image} alt="item" />
                <p className="text">
                  {product.name}
                  <span> R${product.price.toFixed(2).replace('.', ',')}</span>
                </p>
                <div className="item-footer">
                  <ButtonSecondary label={'Comprar'}/>
                </div>
              </div>
            })
          }
        </div>
    </div>
  );
}

export default Home;