import React, { useState } from 'react';
//import axios from 'axios';
import {addProdData} from '../service';

const SignUp = () => {

  const [formData, setFormData] = useState({});
 
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(e)

    let data = {
      id: e.target[0].value,
      name: e.target[1].value,
      price: e.target[2].value,
      desc: e.target[3].value
    }

    setFormData(data)

    try {
        //const response = await axios.post('http://localhost:9999/addProd', data);
        const response =addProdData(data);
        console.log(response)
        // if(response.status==200){
        //   alert("successfully Registered ....!")
        // }
        


        //setResponseData(response.data);// storing but never used : no use of stroing since its post  
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
  }

  return (

    <div className='card' style={{textAlign:'center'}}>
      <h1>
        ADD Product 
      </h1>
      <form onSubmit={handleSignUp}>
        <input
          name="id"
          type="text"
          value={formData.id}
          placeholder="Enter ID"
        />
        <div style={{ marginTop: "4px" }}></div>
        <input
          name="name"
          type="text"
          value={formData.name}
          placeholder="Enter Name"
        />
        <div style={{ marginTop: "4px" }}></div>
        <input
          name="price"
          type="text"
          value={formData.price}
          placeholder="Enter Price"
        />
        <div style={{ marginTop: "4px" }}></div>
        <input
          name="desc"
          type="text"
          value={formData.desc}
          placeholder="Enter DESC"
        />

        <div style={{ paddingTop: "8px" }}>
          <button
            type="submit"
            className="mt-4 h-12 w-full"
          >
            ADD Product 
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;