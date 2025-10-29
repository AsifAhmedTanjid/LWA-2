import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user=useLoaderData();
    console.log(user);

    const handleUpdateUser=(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const email =e.target.email.value;
        console.log(name,email);
        const updatedUser={name,email}
        fetch(``,{
            method:'PATCH'
        }).then (res=>res.json())
        .then(data=>{
            console.log('after updating',data);
            
        })
        

    }
    
    return (
        <div>
            <h1>edit</h1> 
              <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="" placeholder="Name" defaultValue={user.name} />
        <br />
        <input type="email" name="email" id="" placeholder="Email" defaultValue={user.email} />
        <br />
        <input type="submit" value="Update" />
      </form>
        </div>
    );
};

export default UpdateUser;