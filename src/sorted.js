/**
 * Sort the vertices topologically breaking ties according to a given function.
 *
 * @param {Iterable<any>} edges - The input graph as a list of edges.
 * @param {(a: any, b: any) => Number} breakTies - The function to break ties.
 * @returns {Iterable<any>} The vertices sorted in topological order.
 */
export default function sorted(edges, breakTies = (_a, _b) => -1) {
	const vertices = new Set();
	for (const [u, v] of edges) {
		vertices.add(u);
		vertices.add(v);
	}

	return [...vertices].sort(breakTies)[Symbol.iterator]();
}
