let worker = new Worker('worker.js');
worker.postMessage('count');

worker.addEventListener('message', function (e) {
    console.log(e.data);
});