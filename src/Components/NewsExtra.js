import React, { useState } from 'react';

const pageSize = 5;
const search = "latest technology";

function NewsExtra() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&pageSize=${pageSize}&from=2023-12-22&sortBy=publishedAt&apiKey=a2f5490a01a04f2bae9868f80096f2f4`);
            const result = await response.json();
            setData(result.articles);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <div>
                <h1>News</h1>
                <ul>
                    {data.map((d, index) => (
                        <li key={index}>
                            <a href={d.url} target="_blank" rel="noopener noreferrer">
                                {d.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <button id='search-btn' onClick={fetchData}>Get Data</button>
        </>
    );
}

export default NewsExtra;
