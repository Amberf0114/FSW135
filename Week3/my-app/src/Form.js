import React from 'react'

export default function Form(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    inputs: {
      email,
      passcode
    } 
  }= props

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

      </form>
    );
  }