import {Fragment, Component} from 'react';
import classes from './UserFind.module.css'
import Users from './Users';
import UserContext from "../store/userContext";
const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
]

class UserFinder extends Component{
    static contextType = UserContext
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.setState({filteredUsers: this.context.users})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user)=> user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(event){
        this.setState({searchTerm: event.target.value})
    }
    render() {
    return (
        <Fragment>
            <div className={classes.finder}>
            <input type='search' onChange={this.searchChangeHandler.bind(this)} />
            <Users users={this.state.filteredUsers} />
            </div>
        </Fragment>
    );
    }
}

export default UserFinder;
