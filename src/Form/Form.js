import React, {Component} from 'react';
import Img from './assets/bond_approve.jpg';
import './Form.css';

class Form extends Component {
    state = {
        values: {
            firstname: '',
            lastname: '',
            password: ''
        },
        errors: {
            firstname: '',
            lastname: '',
            password: ''
        },

        isValid: false
    }
    
    handleChange = (e) => {
        const {values} = this.state;
        const{name, value} = e.target;

        this.setState({
            values: {
                ...values,
                [name]: value
            },
            errors: {
                firstname: '',
                lastname: '',
                password: ''
            }
        });
    }

    validateName = value => {
        if(value === '') {
            this.setState(({errors}) => ({
                errors: {...errors, firstname: 'Нужно указать имя'}
            }));
            return false;
        }

        if(value.toLowerCase() !== 'james') {
            this.setState(({errors}) => ({
                errors: {...errors, firstname: 'Имя указано неверно'}
            }));
            return false;
        }

        return true;
    };

    validateLastname = value => {
        if(value === '') {
            this.setState(({errors}) => ({
                errors: {...errors, lastname: 'Нужно указать имя'}
            }));
            return false;
        }

        if(value.toLowerCase() !== 'bond') {
            this.setState(({errors}) => ({
                errors: {...errors, lastname: 'Фамилия указана неверно'}
            }));
            return false;
        }

        return true;
    }

    validatePassword = value => {
        if(value === '') {
            this.setState(({errors}) => ({
                errors: {...errors, password: 'Нужно указать пароль'}
            }));
            return false;
        }

        if(value.toLowerCase() !== '007') {
            this.setState(({errors}) => ({
                errors: {...errors, password: 'пароль указан неверно'}
            }));
            return false;
        }

        return true;
    }
  
    handleSubmit = e => {
        const {firstname, lastname, password} = this.state.values;
        e.preventDefault();

        const validName = this.validateName(firstname);
        const validLastName = this.validateLastname(lastname);
        const validPassword = this.validatePassword(password);
 
        if(validName && validLastName && validPassword) {
            return this.setState({isValid: true});
        }

        return this.setState({isValid: false});
    }

    render() {
        const {firstname, lastname, password} = this.state.values;
        const aprove = <img src={Img} alt='bond approve' className='t-bond-image' />;
        const form = (
            <div className='app-container'>
                <form className='form'>
                    <h1>Введите свои данные, агент!!!</h1>
                    <p className='field'>
                        <label className='field__label' htmlFor='firstname'>
                            <span className='field-label'>Имя</span>
                        </label>
                        <input name='firstname' type='text' value={firstname} onChange={this.handleChange} className='field__input field-input t-input-firstname'/>
                        <span className='field__error field-error t-error-firstname'>{this.state.errors.firstname}</span>
                    </p>
                    <p className='field'>
                        <label className='field__label' htmlFor='lastname'>
                            <span className='field-label'>Фамилия</span>
                        </label>
                        <input name='lastname' type='text' value={lastname} onChange={this.handleChange} className='field__input field-input t-input-lastname'/>
                        <span className='field__error field-error t-error-lastname'>{this.state.errors.lastname}</span>
                    </p>
                    <p className='field'>
                        <label className='field__label' htmlFor='password'>
                            <span className='field-label'>Пароль</span>
                        </label>
                        <input name='password' type='text' value={password} onChange={this.handleChange} className='field__input field-input t-input-password'/>
                        <span className='field__error field-error t-error-password'>{this.state.errors.password}</span>
                    </p>
                    <div className='form-buttons'>
                        <input type='submit' value='Проверить' onClick={this.handleSubmit} className='button t-submit'/>
                    </div>
                </form>
            </div>
        );

        if(this.state.isValid) {
            return <div className='app-container'>{aprove}</div>
        } else {
            return form
        }
    }
}








export default Form;