import React from "react";

export default function ActivityCardDetails(props) {
    const { activity, type, participants, price, link } = props.activity;

    return (
        <div>
            <div style={{ fontSize: "35px", height: "100px" }}>{activity}</div>

            <div>Type: {type}</div>

            {link ? (
                <div>
                    Visit: <a href={link} target="_blank" rel="noopener noreferrer"> {link}</a>{" "}
                </div>
            ) : ("")}

            <div>Number of participants:{participants}</div>

            <div>Price: {price * 10000}</div>
        </div>
    )
}