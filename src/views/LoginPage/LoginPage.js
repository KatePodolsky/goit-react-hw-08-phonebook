import React, { Component } from 'react';
import { connect } from 'react-redux';

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

        this.props.onLogIn(this.state);

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
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className={styles.input}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className={styles.label}>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            className={styles.input}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button className={styles.button} type="submit">Log In</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    onLogIn: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);