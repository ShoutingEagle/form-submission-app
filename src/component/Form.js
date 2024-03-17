import React,{useState} from 'react'

function Form() {

  const [state,setState] = useState({
    email : '',
    emailState : false,
    password : '',
    passwordState : false,
    confirmPassword : '',
    confirmPasswordState : false,
    buttonState : false
  })


  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setState((prevState) => ({
        ...prevState,
        [name] : value,
    }))
    
    if(name === 'email'){
        const isValidEmail = /(?=.*\.com)(?=.*@)/.test(value);
        setState((prevState) => ({...prevState,emailState:isValidEmail}))
    }

    if(name === 'password'){
        const isPasswordValid = value.length > 7
        setState((prevState) => ({
        ...prevState,
        passwordState: isPasswordValid,
        }))
        
    }

    if(name === 'confirmPassword'){
        const isConfirmPasswordValid = (value === state.password);
        setState((prevState) => ({
        ...prevState,
        confirmPasswordState: isConfirmPasswordValid,
    }))
    }

  }


  const handleSignUp = () => {
    

    if(state.emailState && state.passwordState && state.confirmPasswordState){
        alert('Form Successfully submitted');
        setState({
            email : '',
            emailState : false,
            password : '',
            passwordState : false,
            confirmPassword : '',
            confirmPasswordState : false,
            buttonState : true      
        })
        return 
    }
    
    alert('Please correct the mistakes')
  }
  

  return (
    <div className='form'>
        <div className='form-container'>


        <span className='inputs'>
            Email:
            <input 
            type='text' 
            name='email'
            value={state.email}
            onChange={handleInputChange}
            className={state.emailState?'passed':null}
            />
        {<span style={{color:'red'}}>{state.emailState?null:'Invalid Email Format'}</span>}
        </span>


        <span className='inputs'>
            Password:
            <input 
            type='text'
            name='password'
            value={state.password}
            onChange={handleInputChange}
            className={state.passwordState?'passed':null}
            />
        {<span style={{color:'red'}}>{state.emailState?null:'Password must be atleast 8 characters'}</span>}
        </span>


        <span className='inputs'>
            Confirm Password:
            <input
            type='text'
            name='confirmPassword'
            value={state.confirmPassword}
            onChange={handleInputChange}
            className={state.confirmPasswordState?'passed':null}
            />
        {<span style={{color:'red'}}>{state.emailState?null:'Passwords do not match'}</span>}
        </span>
        

        <button        
        onClick={handleSignUp}
        >
        Sign Up
        </button>
        </div>
        
    </div>
  )
}

export default Form





















