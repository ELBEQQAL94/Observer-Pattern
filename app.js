// Init Observable Obj
const observer = new Observable;

// get DOM elemnts
const input = document.querySelector('#input');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

const subscribeP1 = document.querySelector('#subscribe-p1');
const subscribeP2 = document.querySelector('#subscribe-p2');
const subscribeP3 = document.querySelector('#subscribe-p3');

const unsubscribeP1 = document.querySelector('#unsubscribe-p1');
const unsubscribeP2 = document.querySelector('#unsubscribe-p2');
const unsubscribeP3 = document.querySelector('#unsubscribe-p3');

// some actions to add to the observers array
const updateP1 = text => p1.textContent = text;
const updateP2 = text => p2.textContent = text;
const updateP3 = text => p3.textContent = text;

// subscribe to some observers
observer.subscribe(updateP1);
observer.subscribe(updateP2);
observer.subscribe(updateP3);

// subscribe object/ DOM elemnt
subscribeP1.addEventListener('click', () => 
observer.subscribe(updateP1));

// unsubscribe object/ DOM elemnt
unsubscribeP1.addEventListener('click', () => 
observer.unsubscribe(updateP1));

subscribeP2.addEventListener('click', () => 
observer.subscribe(updateP2));

unsubscribeP2.addEventListener('click', () => 
observer.unsubscribe(updateP2));

subscribeP3.addEventListener('click', () => 
bserver.subscribe(updateP3));

unsubscribeP3.addEventListener('click', () => 
observer.unsubscribe(updateP3));

// Add event listenre
input.addEventListener('input', (e) => {
    observer.notify(e.target.value);
});

