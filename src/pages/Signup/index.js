import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import Input from '../../components/Input';
import Button from '../../components/button';

function Signup() {
  return <div className='container'>
    <div className="banner"></div>
    <form action="" className="form">
        <img className="logo" src={Logo}/>
        <Input placeholder={'E-mail'} />
        <Input placeholder={'Senha'} />
        <Input placeholder={'Confirmar senha'} />
        <Button label={'cadastrar'}/>
          <span className="login">
            <Link className='link' to='/login'>
              Já é cadastrado? Entre agora
            </Link>
          </span>
    </form>
  </div>;
}

export default Signup;