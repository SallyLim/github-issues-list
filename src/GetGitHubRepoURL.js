import React, { useState } from "react";
import FetchIssues from "./FetchIssues";

export default function GetGitHubRepoURL(props) {

    const [username, setUsername] = useState('')
    const [repo, setRepo] = useState('')
    const [ usernameRepoSent, setUsernameRepoSent ] = useState(null)

    const handleSubmit = event => {
        event.preventDefault()
        setUsernameRepoSent([username,repo])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">GitHub Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        name='username' />
                </div>
                <div>
                    <label htmlFor="">GitHub Repo</label>
                    <input
                        type="text"
                        value={repo}
                        onChange={event => setRepo(event.target.value)}
                        name='repo' />
                </div>
                <button onClick={handleSubmit}>Get Issues</button>
                {/*<div>{this.state.urlError}</div> - form validation*/}
            </form>
            {usernameRepoSent===null? null : <FetchIssues usernameRepo={usernameRepoSent}/>}
        </div>
    );
}

    //guard for repo not found or username not found
