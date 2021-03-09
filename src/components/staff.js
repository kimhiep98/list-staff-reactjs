import React from 'react'
import { useReducer } from 'react'
import { Link } from 'react-router-dom';
import './staff.css'
import Profile from './Profile'

function staff({ people }) {
    const handleCheckProfile = (id) => {
        <Link to={`profile/${id}`} key={id}>
            <Profile id={id}/>
            
        </Link>
    }
    return (
        <div className="list-person">
            {people.map((person) => {
                const { id, firstName, lastName, email, date } = person;
                return (
                    <div key={id} className="person-info">
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                        <p>{email}</p>
                        <p>{date}</p>
                        <button className="check-person" onClick={handleCheckProfile(id)}> Go to profile</button>
                    </div> 
                    );   
            })}
           
        </div>
    )
}

export default staff
