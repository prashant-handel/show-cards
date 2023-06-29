import React from "react";

const Card = (props) => {
    const data = props.data;

    // console.log(data);
    return (
        data.map((item, index) => {
            return (
                <div className="container" key={index}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://images.unsplash.com/photo-1687184688387-bdacfcf7c9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" style={{ width: "200px", padding: "0" }} />
                        <div className="card-body">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-text">
                                {item.body}
                            </p>
                        </div>
                    </div>
                </div>
            )
        }))
};

export default Card;