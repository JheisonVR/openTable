import React from 'react'


interface Props {
    inputs: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        city: string;
        password: string;
    };
    handleChangeInput:  (e: React.ChangeEvent<HTMLInputElement>) => void;
    isSignIn: boolean
}

export  const AuthModalInput = ( {inputs, handleChangeInput, isSignIn} : Props ) => {
  return (
    <>
        { isSignIn ? null : <div className="my3 flex justify-between text-sm">
            <input 
                type="text" 
                className="border rounded p-2 py-3 w-[49%]" 
                placeholder='First Name'
                value={inputs.firstName}
                name='firstName'
                onChange={ handleChangeInput }
            />
            <input 
                type="text" 
                className="border rounded p-2 py-3 w-[49%]" 
                placeholder='Last Name'
                value={inputs.lastName}            
                name='lastName'
                onChange={ handleChangeInput }
            />
        </div>}
        <div className="my3 flex justify-between text-sm">
            <input 
                type="text" 
                className="border rounded p-2 py-3 w-full" 
                placeholder='Email'
                value={inputs.email}
                name='email'
                onChange={ handleChangeInput }
            />
        </div>
        { isSignIn ? null : <div className="my3 flex justify-between text-sm">
            <input 
                type="text" 
                className="border rounded p-2 py-3 w-[49%]" 
                placeholder='Phone'
                value={inputs.phone}
                name='phone'
                onChange={ handleChangeInput }
            />
            <input 
                type="text" 
                className="border rounded p-2 py-3 w-[49%]" 
                placeholder='City'
                value={inputs.city}
                name='city'
                onChange={ handleChangeInput }
            />
        </div>}
        <div className="my3 flex justify-between text-sm">
            <input 
                type="password" 
                className="border rounded p-2 py-3 w-full" 
                placeholder='Password'
                value={inputs.password}
                name='password'
                onChange={ handleChangeInput }
            />
        </div>
    </>
  )
}
