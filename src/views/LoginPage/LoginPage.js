import React, { Component } from 'react';
import { authOperations } from '../../redux/auth';

import styles from './LoginPage.module.css';

class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        // this.props.onLogin(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <h1 className={styles.title}>Log In</h1>

                <form
                    onSubmit={this.handleSubmit}
                    className={styles.form}
                    autoComplete="off"
                >
                    <label className={styles.label}>
                        Почта
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className={styles.label}>
                        Пароль
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button type="submit">Войти</button>
                </form>
            </div>
        );
    }
}

// const mapDispatchToProps = {
//     onLogin: authOperations.logIn,
// };

export default LoginPage;