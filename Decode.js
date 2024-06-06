import React from 'react'
import Navbar from './Navbar'
import './encode.css'
import { useState } from 'react'
import axios from 'axios'

const Decode = () => {
  const [image,setimage]=useState(null)
  const [file,setfile]=useState(null)
  const [pop,setpop]=useState(false)
  const [msg,setmsg]=useState("")
  const toggleModal = () => {
    setpop(!pop);
    
  };
  const handleimage=(e)=>{
    setimage(e.target.files[0])
  }
  const handlefile=(e)=>{
    setfile(e.target.files[0])
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('image',image);
    formdata.append('file',file)
    try{
      
      const response = await axios.post('http://localhost:8000/api/decrypt/', formdata, {
        // responseType: 'blob', // Important for downloading files
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    })
    toggleModal()
    setmsg(response["data"])
  }
    catch(error){
      console.error('Error uploading data', error);

    }
  }
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='h1'>Unveil The Secret</h1>
    <div className='form'>
      <form onSubmit={handleSubmit} >
        <div className='items'>
        <span>Fake Image:</span><input type='file' name='img' className='txt1' onChange={handleimage} required></input>
        <br></br>
        <span>Position File:</span><input type='file' name='img' className='img' onChange={handlefile} required></input>
        <br></br>
        <input type='submit' className='btn' value='Reveal'></input>
        </div>


      </form>

    </div>


    {pop && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{msg}</h2>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Decode