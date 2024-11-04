import { useState } from "react";


const StatrForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState('')
    // const [error, setError] = useState(0)
    const SubmitForm = (e) => {
        e.preventDefault();
        if (password.length>=6) {
            
            console.log(name, " ", email, " ", password) 
        }
        else {
            console.log('your pass is too short ,set pass uppto 4 latter');
        }

    }
    const NameChangeEvent = (e) => {

        setName(e.target.value)
        // console.log(e.target.value);

    }
    const emailChangeEvent = (e) => {

        setEmail(e.target.value)
        // console.log(e.target.value);
    }
    const PassWordChangeEvent = (e) => {
        setPassword(e.target.value)
       
        // console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={SubmitForm} action="">
                <input type="text" name='NameExample'
                    onChange={NameChangeEvent}
                /> <br />
                <input type="email" name="email" id=""
                    onChange={emailChangeEvent}
                /><br />
                <input type="password" name="Passwor" id=""
                    onChange={PassWordChangeEvent}
                /><br />

                <button type="submit">Submit.</button>
            </form>
        </div>
    );
};

export default StatrForm;