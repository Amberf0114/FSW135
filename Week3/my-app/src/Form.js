import React from 'react'

export default function Form(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: {
      email,
      passcode
    } 
  }= props

    console.log('errMsg: ', errMsg)

    return (
      <form onSubmit={handleSubmit}>
        <input
        type= "text"
        value={email}
        name="email"
        onChange={handleChange}
        placeholder="Email"
        />

        <input
        type= "text"
        value={passcode}
        name="passcode"
        onChange={handleChange}
        placeholder="Passcode"   
        />

        <button> {btnText} </button>    
        <p style ={{backgroundColor: "#c00000", color: "#ffffff", textAlign: "center"}}>{errMsg}</p>
      </form>
    );
  }