import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component{
    constructor() {
        super();
        this.state = {
            showUsers: true,
            demoUsersList: [
                { id: 'u1', name: 'Max' },
                { id: 'u2', name: 'Manuel' },
                { id: 'u3', name: 'Julie' },
            ]
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.users.length === 0){
            throw new Error('No Users Provided!')
        }
    }

    toggleUsersHandler = () => {
        this.setState((oldState)=>{
            return {showUsers: !oldState.showUsers}
        })
    };
    render() {
        const usersList = (
            <ul>
                {this.props.users ? this.props.users.map((user) => (
                    <User key={user.id} name={user.name} />
                )) : null}
            </ul>
        );
        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        );
    }
}

export default Users;
