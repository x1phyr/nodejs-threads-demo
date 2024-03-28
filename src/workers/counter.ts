import { Observable } from "observable-fns"
import { expose } from "threads";
import { ObservablePromise } from "threads/dist/observable-promise"

function startCounting() {
    return new Observable(observer => {
        for (let i = 1; i <= 10; i++) {
            observer.next(i);
        }
        observer.complete();
    });
}

expose(startCounting);