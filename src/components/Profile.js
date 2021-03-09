import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { data} from '../data'

function Profile({ id }) {
    const [list, setList] = useState(data);
    const [person, setPerson] = useState({id:'',name:'',email:'',date:''});
    const personProfile = () => {
        setPerson(list.filter((person) => person.id === id));
        console.log(list);
    }
    return (
        <div>
            <p>{personProfile}</p>    
        <Link to='/'>Back to home</Link>    
        </div>
    )
}

export default Profile
