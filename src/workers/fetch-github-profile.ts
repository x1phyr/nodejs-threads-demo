import { expose } from "threads";

expose((async function fetchGithubProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.json();
}));