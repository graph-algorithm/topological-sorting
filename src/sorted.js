import Heap from '@aureooms/js-pairing-heap';
import {EfficientlyInvertiblePairs as Pairs} from '@aureooms/js-pairs';

import kahn1962 from './kahn1962.js';

/**
 * Sort the vertices topologically breaking ties according to a given function.
 *
 * @param {Iterable<any>} edges - The input graph as a list of edges.
 * @param {Function} breakTies - The function to break ties.
 * @returns {Iterable<any>} The vertices sorted in topological order.
 * @throws {Error} If the input graph contains a cycle.
 */
export default function* sorted(edges, breakTies = undefined) {
	const graph = Pairs.from(edges);

	const queue = breakTies ? new Heap(breakTies) : [];
	const freeVertices = new Set();
	for (const [u] of graph) freeVertices.add(u);
	for (const [, v] of graph) freeVertices.delete(v);
	for (const u of freeVertices) queue.push(u);

	yield* kahn1962(queue, graph);

	if (graph.size > 0) {
		throw new Error(
			'@aureooms/js-topological-sorting#sorted: input graph contains a cycle',
		);
	}
}
