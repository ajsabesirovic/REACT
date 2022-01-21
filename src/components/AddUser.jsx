import React,{useState} from "react";

function Add({onSaveUserData}){
    const [enteredName,setEnteredName] = useState('')
    const [enteredUsername,setEnteredUsername] = useState('')
    const [enteredEmail,setEnteredEmail] = useState('')
    const [enteredActive,setEnteredActive] = useState(false)


    const nameChanger = (e) =>{
        setEnteredName(e.target.value)
    }
    const usernameChanger = (e) =>{
        setEnteredUsername(e.target.value)
    }
    const emailChanger = (e) =>{
        setEnteredEmail(e.target.value)
    }
    const activeChanger = (e) =>{
        setEnteredActive(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const userData = {
            name : enteredName,
            username: enteredUsername,
            email: enteredEmail,
            is_active: enteredActive
        }

        onSaveUserData(userData)

        setEnteredName('')
        setEnteredUsername('')
        setEnteredActive(false)
        setEnteredEmail('')
    }
    return (
        <form onSubmit={submitHandler}>
            
                <input placeholder="name" type='text' value={enteredName} onChange={nameChanger}></input>

                <input placeholder="username" type='text' value={enteredUsername} onChange={usernameChanger}></input>
            
                <input placeholder="email" type='email' value={enteredEmail} onChange={emailChanger}></input>      
              
                <input type='checkbox' value={enteredActive} onChange={activeChanger}></input>
      
                <button onClick={onSaveUserData} type="submit">Add expense</button>
            
        </form>
    )
}

export default Add;