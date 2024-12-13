# Bun elkjs demo

If we run the official sample directly: `TypeError: undefined is not a constructor (evaluating 'new _Worker(url)')`. The root cause seems to be an import/require issue. Ref: https://github.com/oven-sh/bun/issues/15737

If works if we manually specify the worker, but it won't exit. Ref: https://github.com/kieler/elkjs/issues/315

I need to manually invoke `worker.terminate()`. But if we termiate worker, we cannot `elk.layout` any more.
