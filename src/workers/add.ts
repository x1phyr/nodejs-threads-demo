import { expose } from "threads";

expose(function add(a, b) {
    return a + b;
});