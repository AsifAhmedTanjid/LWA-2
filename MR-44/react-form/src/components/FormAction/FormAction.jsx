import React from 'react';

const FormAction = () => {
const handleFormAction = (formData)=>{
    console.log(formData.get("name"));
    
}

    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name="name" placeholder='name' />
                <br />
                <input type="email" name="email" placeholder='email' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;