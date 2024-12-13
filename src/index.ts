import ELK from "elkjs";
import Worker from "web-worker";

const graph = {
  id: "root",
  layoutOptions: { "elk.algorithm": "layered" },
  children: [
    { id: "n1", width: 30, height: 30 },
    { id: "n2", width: 30, height: 30 },
    { id: "n3", width: 30, height: 30 },
  ],
  edges: [
    { id: "e1", sources: ["n1"], targets: ["n2"] },
    { id: "e2", sources: ["n1"], targets: ["n3"] },
  ],
};

const generate = async (graph) => {
  const worker = new Worker(require.resolve("elkjs/lib/elk-worker.js"));
  const elk = new ELK({ workerFactory: () => worker });
  const r = await elk.layout(graph);
  worker.terminate();
  console.log(r);
};

generate(graph);
