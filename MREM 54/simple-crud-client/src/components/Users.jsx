import React from "react";

const Users = () => {
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
    </div>
  );
};

export default Users;
