import React, { useState, useEffect } from "react";

export default function FetchIssues(props) {
    const [loading, setLoading] = useState(true)
    const [issues, setIssues] = useState([])
    const [clicked, setClicked] = useState(false)

    //filter data
    //update to show filtered list
    const filterList = event => {   
        setClicked(true)
        //filter here:

        //set state here:
    }

    useEffect(() => {
        let url = "https://api.github.com/repos/" + props.usernameRepo[0] + "/" + props.usernameRepo[1] + "/issues"
        fetch(url) // fix issue with multi word repo
            .then(result => result.json())
            .then(json => {
                setLoading(false)
                setIssues(json)
            });
    })

    let filtered = issues;
    if (clicked){
        filtered = issues.filter((issue) => issue.state === "open")
    }

    if (loading === true) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <button onClick={filterList}>Filter</button>
                <ul>
                    {filtered.map(issue => (
                        <li key={issue.id}>
                            Number: {issue.number} | Name: {issue.title}
                        </li>
                    ))}
                </ul>
            </div>

        );
    }
}