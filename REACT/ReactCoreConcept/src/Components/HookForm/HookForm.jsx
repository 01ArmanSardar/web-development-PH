import useInputState from "../../Hooks/CustomHooks";


const HookForm = () => {
    // const [name, handelNameChange] = useInputState('rojoni hooked')
    const emailState=useInputState('rojoni@gamil.com')
    const HandelSubmit = (e) => {
        e.preventDefault();
        // console.log('form submit', name);
        console.log(emailState.value);
    }
    return (

        <div>
            <form onSubmit={HandelSubmit} action="">
                {/* <input value={name} onChange={handelNameChange} type="text" name='NameExample' /> <br /> */}
                <input {...emailState} type="email" name="email" placeholder="email here"/><br />
                <input type="password" name="Password" /><br />

                <button type="submit">Submit..</button>
            </form>
        </div>
    );
};

export default HookForm;