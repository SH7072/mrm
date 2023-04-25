import React, { useState } from 'react'

const Home = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');

  const submit = async () => {
    console.log(name);
    console.log(email);
    console.log(file);

    const res = await fetch("http://localhost:4000/user/formSubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, file
      })
    });
    const data = res.json();



    console.log(data);









  }


  return (
    <div className="home">
      {/* <form method="post" encType="multipart/form-data"> */}
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required value={name} onChange={(e) => { setName(e.target.value) }} /><br></br>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required value={email} onChange={(e) => { setEmail(e.target.value) }} /><br></br>

      <label htmlFor="file">Choose a file:</label>
      <input type="file" id="file" name="file" /><br></br>

      <input type="submit" value="Submit" onClick={submit} />
      {/* </form> */}
    </div>
  )
};

export default Home;