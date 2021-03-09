import freeVertices from './freeVertices.js';
import kahn1962 from './kahn1962.js';

/**
 * Sort the vertices topologically using a queue to order the free vertices.
 *
 * @param {any} queue - The queue that will be used.
 * @param {any} graph - The input graph as a list of edges.
 * @returns {Iterable<any>} The vertices sorted in topological order.
 */
export default function subroutine(queue, graph) {
	for (const u of freeVertices(graph)) queue.push(u);
	return kahn1962(queue, graph);
}
