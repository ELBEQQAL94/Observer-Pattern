// define a class
class Observable {
    // each instance of the Observer class
    // start with a empty array of things (observers)
    // That react to a state change
    constructor() {
        this.observers = [];
    }

    // Add the ability to subscribe to a new object / DOM elemnt
    // essentially, add somthing to observers array
    subscribe(f) {
        this.observers.push(f);
    }

    // add the ability to unsubscribe from a particular object
    // essentially, remove somthing from observers array
    unsubscribe(f) {
        this.observers = this.observers.filter(subscribe => subscribe!==f);
    }

    // Update all subscribed objects / DOM element
    // and pass some data to each of them
    notify(data) {
       this.observers.forEach(observer => observer(data));
    }
}