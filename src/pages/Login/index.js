import React from 'react';
import './styles.css'
import Logo from '../../assets/logo.png'
import Input from '../../components/Input';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

function Home() {
  return <div className='container'>
    <div className="banner"></div>
    <form action="" className="form">
        <img className="logo" src={Logo}/>
        <Input placeholder={'E-mail'} />
        <Input placeholder={'Senha'} />
        <Button label={'Entrar'}/>
          <span className="signup">
            <Link to={'/signup'}>
              Ainda não possue cadastro? 
              Cadastre-se agora!
            </Link>
          </span>
    </form>
  </div>;
}

export default Home;