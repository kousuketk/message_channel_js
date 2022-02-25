const assert = require("assert");
const { parentPort, MessagePort } = require("worker_threads");
parentPort.on("message", ({ worker1 }) => {
  assert(worker1 instanceof MessagePort);
  worker1.on("message", (message) => {
    console.log("worker2 received message: %o", message);
  });
  for (let i = 0; i < 3; i++) {
    worker1.postMessage("message from worker2");
  }
});
