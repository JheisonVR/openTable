"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { render } from "react-dom";
import { AuthModalInput } from "./AuthModalInput";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal( {isSingIn}:{isSingIn:boolean} ) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signInContent: string, signUp: string) => {
    return isSingIn ? signInContent : signUp 
  } 

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    })
  }

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName:'',
    email:'',
    phone:'',
    city:'',
    password:'',
  })

  return (
    <div>
      <Button        
        className= {`${renderContent('bg-blue-400 text-white hover:bg-sky-900', 'hover:bg-slate-200')} border p-1 px-4 rounded mr-3 capitalize `}
        onClick={handleOpen}
      >
        {renderContent('Sign In', 'Sign Up')}
        
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                <p className="text-sm">
                    {renderContent('Sign In', 'Create Account')}
                </p>
            </div>
            <div className="m-auto">
                <h2 className="text-2xl font-light text-center mb-2">
                    {renderContent('Log Into Your Account', 'Create your OpenTable Account')}
                </h2>
                <AuthModalInput 
                  inputs={ inputs} 
                  handleChangeInput={handleChangeInput}
                  isSignIn = {isSingIn}
                />
                <button className="uppercase bg-red-700 w-full text-white p-3 rounded text-sm mt-2 disabled: bg-slate-200" >
                  {renderContent('Sign In', 'Create Account')}
                </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
