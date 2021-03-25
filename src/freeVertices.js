/**
 * Compute the free vertices of the input graph.
 *
 * @param {any} graph - The input graph as a list of edges.
 * @returns {Iterable} The free vertices of the input graph.
 */
export default function freeVertices(graph) {
	const vertices = new Set();
	for (const u of graph.left()) vertices.add(u);
	for (const v of graph.right()) vertices.delete(v);
	return vertices;
}
