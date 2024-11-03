const Form = () => {
    const Submit=e=>{
        e.preventDefault();
        console.log(e.target.NameExample.value);
    }
    return (
        <div>
            <form onSubmit={Submit} action="">
                <input type="text" name='NameExample'/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;