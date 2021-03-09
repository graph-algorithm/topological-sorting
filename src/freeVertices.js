/**
 * Compute the free vertices of the input graph.
 *
 * @param {Iterable<any>} graph - The input graph as a list of edges.
 * @returns {Iterable<any>} The free vertices of the input graph.
 */
export default function freeVertices(graph) {
	const vertices = new Set();
	for (const [u] of graph) vertices.add(u);
	for (const [, v] of graph) vertices.delete(v);
	return vertices;
}
