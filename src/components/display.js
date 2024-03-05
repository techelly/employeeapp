import React, { useEffect, useState, startTransition } from 'react';
//import axios from 'axios';
import {getProdData} from '../service';
const DISPLAY = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        startTransition(() => {
            //fetchData();
            getProdData().then(function(response){
                console.log(response.data);
                setData(response.data);     
        }).catch(function(error){
            console.log(error);
        },[]);
        });
    }, []);

    

    return (
        <div className='card'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name  </th>
                        <th>Price </th>
                        <th>Desciption </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{ item.price} </td>
                            <td>{item.desc}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DISPLAY;