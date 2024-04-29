import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import './styles.css'
import Button from '../../components/button';
import Upload from '../../assets/upload.svg'
// import { Container } from './styles';

function Items() {
  return <div>
    <Header page={'items'}/>
    <form className="container-items">
    <label for="file-upload" class="custom-file-upload">
        Carregar foto
        <img src={Upload} alt="" />
    </label>
      <input placeholder='Carregar arquivo' type="file" name="file" id="file-upload" />
        <Input placeholder={'Nome do produto'} />
        <Input placeholder={'Preço'} />
        <Button label={'Cadastrar'}/>
    </form>
  </div>;
}

export default Items;