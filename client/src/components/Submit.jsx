import React, { useEffect, useState } from 'react'

const Submit = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [file, setFile] = useState(null);



    useEffect(() => {
        const load = async () => {
            const res = await fetch("http://localhost:4000/user/getUser", {
                method: "GET"
            });
            const response = await res.json();
            const data = response.data;
            console.log(data);
            setName(data[0].name);
            setEmail(data[0].email);
            setFile(data[0].uri);
        }
        load();
    }, []);

    // const handleFile = (e) => {
    //     const file = e.target.files[0];
    //     setFile(file);
    // }

    return (
        <div className="home">
            <label htmlFor="name">Name:</label>
            {name && <p>{name}</p>}

            <label htmlFor="email">Email:</label>
            {email && <p>{email}</p>}


            <label htmlFor="file">Choose a file:</label>
            {file && <img src={'http://localhost:4000/uploads/' + file} alt="file" />}
        </div>
    )
};

export default Submit;