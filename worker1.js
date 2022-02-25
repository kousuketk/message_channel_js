const assert = require("assert");
const { parentPort, MessagePort } = require("worker_threads");

parentPort.on("message", ({ worker2 }) => {
  assert(worker2 instanceof MessagePort);
  worker2.on("message", (message) => {
    console.log("worker1 received message: %o", message);
  });
  for (let i = 0; i < 3; i++) {
    worker2.postMessage("message from worker1");
  }
});
