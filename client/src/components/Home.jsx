import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');

  const navigate = useNavigate();

  const submit = async () => {

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('file', file);

    console.log(name);
    console.log(email);
    console.log(file);

    const res = await fetch("http://localhost:4000/user/formSubmit", {
      method: "POST",
      body: formData
    });
    const data = await res.json();

    if (data.success === true) {
      navigate('/submit');
    }



    console.log(data);

  }

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  return (
    <div className="home">
      {/* <form method="post" encType="multipart/form-data"> */}
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required value={name} onChange={(e) => { setName(e.target.value) }} /><br></br>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required value={email} onChange={(e) => { setEmail(e.target.value) }} /><br></br>
      <label htmlFor="file">Choose a file:</label>
      <input type="file" id="file" name="file" onChange={handleFile} /><br></br>
      <input type="submit" value="Submit" onClick={submit} />
      {/* </form> */}
    </div>
  )
};

export default Home;