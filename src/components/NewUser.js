import React from "react";
import Add from "./AddUser";

function NewUser(){
    const saveUserData =(enteredUserData) => {
        const userData = {...enteredUserData, id: Math.random()}
        console.log(userData)
        
    }
    return(
        <div>
            <Add onSaveUserData={saveUserData}>
            </Add>
        </div>
    )
}
export default NewUser;