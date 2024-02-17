import React, {useEffect} from 'react';

import './App.css';

function Content() {
    useEffect(() => {
        return () => {
            fetch('http://localhost:5000/put/3')
                .then((res) => {
                    return res.json();
                }).then((data) => {
                console.log(data);
            })
        };
    }, []);

    return (
        <p>Content</p>
    )
}

export default Content