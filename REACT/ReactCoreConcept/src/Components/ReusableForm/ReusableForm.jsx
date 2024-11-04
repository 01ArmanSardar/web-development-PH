
const ReusableForm = ({ form_title, submitBtnTxt = 'Submit' ,handelSubmit ,children}) => {
    const LocalhandelSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.NameExample.value,
            email: e.target.email.value,
            password: e.target.password.value

        }
        handelSubmit(data)
    }
    return (

        <div>
            {/* <h1>{form_title}</h1> */}
            {children}
            <form onSubmit={LocalhandelSubmit} action="">
                <input type="text" name='NameExample' /> <br />
                <input type="email" name="email" id="" /><br />
                <input type="password" name="password" id="" /><br />

                <button type="submit">{submitBtnTxt}</button>
            </form>
        </div>
    );
};

export default ReusableForm;