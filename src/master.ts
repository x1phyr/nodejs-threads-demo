import { Thread, Worker, spawn } from "threads";

async function main() {
    const fetchGithubProfile = await spawn(new Worker("./workers/fetch-github-profile"))
    const x1phyr = await fetchGithubProfile("x1phyr");
    console.log(`User "andywer" has signed up on ${new Date(x1phyr.created_at).toLocaleString()}`);
    console.log(x1phyr);
    await Thread.terminate(fetchGithubProfile);
}

main().catch(console.error);
