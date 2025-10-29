import React, { use, useState } from "react";

const Users = ({userPromise}) => {
    const initialUsers =use(userPromise)
    console.log(initialUsers);
    const [users,setUsers]=useState(initialUsers)
    
  const handleUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log({ name, email });
    const newUser ={name,email}

    //save this user data to database (via server)
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving user", data);
        if(data.insertedId){
            newUser._id=data.insertedId;
            const newUsers=[...users,newUser];
            setUsers(newUsers)
            alert("user added successfully")
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleUser}>
        <input type="text" name="name" id="" placeholder="Name" />
        <br />
        <input type="email" name="email" id="" placeholder="Email" />
        <br />
        <input type="submit" value="Add User" />
      </form>


      <p>-------------------------------</p>
      {
        users.map(user=> <p key={user._id}>{user.name}: {user.email}
        <button>x</button></p>)
      }
    </div>
  );
};

export default Users;
