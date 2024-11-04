
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa';
// import HookForm from './Components/HookForm/HookForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import UseRefForm from './Components/UseRefForm/UseRefForm'
// import Form from './Components/Form/Form'
// import StatrForm from './Components/StateForm/StateForm'

function App() {
  const handelSignupForm = data => {
    console.log('Signup formSUbmit Done', data);

  }
  const handelUpdateForm = data => {
    console.log('update formSUbmit Done', data);

  }

  return (
    <>
    <Grandpa></Grandpa>
      {/* <h1>hello app</h1> */}
      {/* <Form></Form> */}
      {/* <StatrForm></StatrForm> */}
      {/* <UseRefForm></UseRefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm form_title={'SignupForm'} submitBtnTxt={'signup'} handelSubmit={handelSignupForm}> <h1>SIGNUPfORM</h1></ReusableForm>
      <ReusableForm form_title={'UpdateForm'} submitBtnTxt={'update'} handelSubmit={handelUpdateForm}><h1>UPDATEFORM</h1></ReusableForm> */}
    </>
  )
}

export default App
