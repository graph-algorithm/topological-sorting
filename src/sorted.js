import Heap from '@aureooms/js-pairing-heap';
import {EfficientlyInvertiblePairs as Pairs} from '@aureooms/js-pairs';

import kahn from './kahn.js';

/**
 * Sort the vertices topologically breaking ties according to a given function.
 *
 * @param {Iterable<any>} edges - The input graph as a list of edges.
 * @param {Function} breakTies - The function to break ties.
 * @returns {Iterable<any>} The vertices sorted in topological order.
 */
export default function sorted(edges, breakTies = undefined) {
	const graph = Pairs.from(edges);

	const queue = breakTies ? new Heap(breakTies) : [];
	const freeVertices = new Set();
	for (const [u] of graph) freeVertices.add(u);
	for (const [, v] of graph) freeVertices.delete(v);
	for (const u of freeVertices) queue.push(u);

	return kahn(queue, graph);
}
