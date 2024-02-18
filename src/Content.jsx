import React, {useEffect, useState} from 'react';

import './App.css';


// query DB

// use a key to display content from DB, if nothing, show nothing or a message


function Content() {
    const [parsedData, setParsedData] = useState([]);
    useEffect(() => {
        return () => {
            fetch('http://localhost:5000/pull')
                .then((res) => {
                    return res.json();
                }).then((data) => {
                console.log(data);
                const arr = [];
                for (const parsedEmail of data.parsedData) {
                    arr.push(
                        {
                            id: parsedEmail._id,
                            emailContent: parsedEmail.emailContent
                        });
                }
                setParsedData(arr);
            })
        };
    }, []);

    return (
        <ul>
            {parsedData.map((data) => {
                return (
                    <li className="parse-data" key={data.id}>
                        <p>{data.emailContent}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default Content