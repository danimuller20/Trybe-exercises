import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Component } from 'react';
import Adress from '../components/Adress';
import City from '../components/City';
import State from '../components/State';
import Complement from '../components/Complement';
import Name from '../components/Name';
import Email from '../components/Email';
import CPF from '../components/CPF';
import Abstract from '../components/Abstract';
import Office from '../components/Office';
import Description from '../components/Description';
import FormErrors from '../components/FormErrors';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      CPF: '',
      adress: '',
      city: '',
      state: '',
      complement: false,
      abstract: '',
      office: '',
      description:'',
      errors: {
        name: '',
        email: '',
        CPF: '',
        adress: '',
        city: '',
        state: '',
        complement: false,
        abstract: '',
        office: '',
      }
    }
    this.handleEvent = this.handleEvent.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleEvent({ target }) {
    const { name } = target;
    const value = target.type === 'radio' ? target.checked : target.value;
    this.setState({
      [name]: value,
      errors: {
        [name]: this.validateField(name, value),
      }
    });
  }

  validateField(fieldName, value) {     
    switch (fieldName) {
      case 'name':
        return value.length > 40 ? ' is too long!' : '';
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        return isValid ? '' : ' is invalid';
      case 'CPF':
        return !isNaN(Number(value)) && value.length === 11 ?
         '' : ' is invalid, only numbers and 11 digits';
      case 'adress':
        return value.length > 200 ? ' is too long' : '';
      case 'city':
        return value.length > 28 ? ' is too long': '';
      case 'state':
        return value === 'Escolha seu estado' ? 'is invalid' : '';
      case 'complement':
        return value === false ? 'is required' : '';
      case 'abstract':
        return value.length > 1000 ? 'is too long' : '';
      case 'office':
        return value.length > 40 ? 'is too long' : '';
      case 'description':
        return value.length > 500 ? 'is too long' : '';
    }
    return '';
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Forms 2.0</title>
        </Head>
        <fieldset className={styles.container2}>
          <Name value={this.state.name} handleEvent={this.handleEvent} />
          <Email value={this.state.email} handleEvent={this.handleEvent} />
          <CPF value={this.state.CPF} handleEvent={this.handleEvent} />
          <Adress value={this.state.adress} handleEvent={this.handleEvent} />
          <City value={this.state.city} handleEvent={this.handleEvent}/>
          <State value={this.state.state} handleEvent={this.handleEvent} />
          <Complement value={this.state.complement} handleEvent={this.handleEvent} />
        </fieldset>
        <fieldset className={styles.container2}>
          <Abstract value={this.state.abstract} handleEvent={this.handleEvent} />
          <Office value={this.state.office} handleEvent={this.handleEvent} />
          <Description value={this.state.description} handleEvent={this.handleEvent} />
        </fieldset>
        <FormErrors errors={this.state.errors} />
      </div>
    );
  }
    

  
}
