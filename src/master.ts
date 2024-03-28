import { Thread, Worker, spawn } from "threads";

async function main() {
    const minmax = await spawn(new Worker("./workers/minmax"));

    minmax.values().subscribe(({ min, max }) => {
        console.log(`Min: ${min} | Max: ${max}`);
    });

    await minmax.add(2);
    await minmax.add(3);
    await minmax.add(4);
    await minmax.add(1);
    await minmax.add(5);
    await minmax.finish();

    await Thread.terminate(minmax);
}

main().catch(console.error);
