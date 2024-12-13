import ELK from "elkjs";

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
  const elk = new ELK({
    workerUrl: require.resolve("elkjs/lib/elk-worker.js"),
  });
  const r = await elk.layout(graph);
  elk.terminateWorker();
  console.log(r);
};

generate(graph);
