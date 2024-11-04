import { useRef } from "react";

const UseRefForm = () => {
    const nameRef = useRef(null)
    const emailRef=useRef(null)
    const passWordRef=useRef(null)
    const SubmitForm = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passWordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={SubmitForm}>
                <input type="text" name='NameExample'
                    ref={nameRef}
                /> <br />
                <input type="email" name="email" id=""
ref={emailRef}
                /><br />
                <input type="password" name="Password" id=""
ref={passWordRef}
                /><br />

                <button type="submit">Submit..</button>
            </form>
        </div>
    );
};

export default UseRefForm;