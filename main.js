const { Worker, MessageChannel } = require("worker_threads");
const { port1, port2 } = new MessageChannel();
const worker1 = new Worker("./worker1.js");
const worker2 = new Worker("./worker2.js");
worker1.postMessage({ worker2: port1 }, [port1]);
worker2.postMessage({ worker1: port2 }, [port2]);
