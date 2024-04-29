import React from 'react';
import './styles.css'
import Logo from '../../assets/logo.png'
import Sair from '../../assets/log-out.svg'
import { Link } from 'react-router-dom';
import Items from '../../pages/Items';
// import { Container } from './styles';

function Header({ page }) {

  return (
    <header className='navigation'>
        <img src={Logo} alt="logo" className='logo' />
        <ul>
            <li>
            <Link to={'/'} className={page == 'home'?'selected' : 'unselected' }>
                Home
            </Link>
            </li>
            <li>
            <Link to={'/items'} className={page == 'items'?'selected' : 'unselected' }>
                Seus itens
            </Link>
            </li>
            <li>Perfil</li>
            <li>
                <Link to='/login'>
                    <div>
                        Sair
                        <img src={Sair} alt="sair" />
                    </div>
                </Link>
            </li>
        </ul>
    </header>
  );
}

export default Header;