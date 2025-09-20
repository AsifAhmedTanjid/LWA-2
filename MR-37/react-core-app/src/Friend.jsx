export default function Friend({friend}){
    const{name,email,phone}=friend;
    return(
        <div className="card">
            <h3 >Name: {name} </h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}