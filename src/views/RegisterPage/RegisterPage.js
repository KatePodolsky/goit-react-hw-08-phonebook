import React, { Component } from 'react';
import { authOperations } from '../../redux/auth';

import styles from './RegisterPage.module.css';

class RegisterPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <div>
                <h1 className={styles.title}>Register now</h1>

                <form
                    onSubmit={this.handleSubmit}
                    className={styles.form}
                    autoComplete="off"
                >
                    <label className={styles.label}>
                        Name
                        <input
                            type="name"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className={styles.label}>
                        Post
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className={styles.label}>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button type="submit">Register now </button>
                </form>
            </div>
        );
    }
}

// const mapDispatchToProps = {
//     onLogin: authOperations.logIn,
// };

export default RegisterPage;