import React, { useEffect, useState } from "react";
import Card from "./Card";

const ShowCards = () => {
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState('');
    function FetchData() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setData(json));
    }
    console.log(data);

    useEffect(() => {
        FetchData();
    }, []);

    function deleteRow(index) {
            setData(data.filter((value, idx) => idx !== index));
        }

    function updateBody(index,e){
        setData(data.map((value,idx)=>{
            if(index !== idx){
                return value
            }
            else{
                return ({...value, body: update})
            }
        }))
    }        
        return (
            <>
            <table>
                <thead>
                    <tr>
                        <td>S.No.</td>
                        <td>User ID</td>
                        <td>Title</td>
                        <td>Body</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td><button onClick={() => deleteRow(index)}>delete</button></td>
                            <td><input type="text" onChange={(e)=>{setUpdate(e.target.value)} }/>
                                <button onClick={(e)=>updateBody(index,e)}>Update Body</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ShowCards;
