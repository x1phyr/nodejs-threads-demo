import { Thread, Worker, spawn } from "threads";

async function main() {
    const counter = await spawn(new Worker("./workers/counter"));
    await counter.increment();
    await counter.increment();
    await counter.decrement();

    console.log(`Counter is now at ${await counter.getCount()}`);
    await Thread.terminate(counter);
}

main().catch(console.error);
