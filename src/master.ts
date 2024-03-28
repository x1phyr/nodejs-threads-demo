import { Thread, Worker, spawn } from "threads";

async function main() {
    const counter = await spawn(new Worker("./workers/counter"))
    counter().subscribe(newCount => console.log(`Counter incremented to:`, newCount));
    // await Thread.terminate(counter);
}

main().catch(console.error);
