import { expose } from "threads/worker"

let currentCount = 0;

const counter = {
    getCount() {
        return currentCount;
    },
    increment() {
        return ++currentCount;
    },
    decrement() {
        return --currentCount;
    }
}

expose(counter);