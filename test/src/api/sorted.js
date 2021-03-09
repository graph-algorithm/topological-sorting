import test from 'ava';

import {map, list, range} from '@aureooms/js-itertools';
import {
	increasing,
	decreasing,
	colexicographical,
	fn,
} from '@aureooms/js-compare';
import {EfficientlyInvertiblePairs as Pairs} from '@aureooms/js-pairs';
import counter from '@aureooms/js-collections-counter';
import {sorted} from '../../../src/index.js';

// https://en.wikipedia.org/wiki/Topological_sorting
const wikipediaGraph = [
	[3, 8],
	[3, 10],
	[5, 11],
	[7, 11],
	[7, 8],
	[8, 9],
	[11, 2],
	[11, 9],
	[11, 10],
];

test('smallest-numbered available vertex first', (t) => {
	const expected = [3, 5, 7, 8, 11, 2, 9, 10];
	const edges = wikipediaGraph.slice();
	const result = [...sorted(edges, increasing)];
	t.deepEqual(result, expected);
});

test('largest-numbered available vertex first', (t) => {
	const expected = [7, 5, 11, 3, 10, 8, 9, 2];
	const edges = wikipediaGraph.slice();
	const result = [...sorted(edges, decreasing)];
	t.deepEqual(result, expected);
});

test('fewest edges first', (t) => {
	const expected = [5, 7, 3, 8, 11, 10, 9, 2];
	const edges = wikipediaGraph.slice();
	const nEdges = counter(map(([u]) => u, edges));
	const breakTies = (a, b) =>
		increasing(nEdges.get(a), nEdges.get(b)) || decreasing(a, b);
	const result = [...sorted(edges, breakTies)];
	t.deepEqual(result, expected);
});

test('Coffman-Graham Algorithm step 2', (t) => {
	/**
	 * See:
	 *   - https://en.wikipedia.org/wiki/Coffman%E2%80%93Graham_algorithm#The_algorithm
	 *   - *Coffman and Graham*: Optimal Scheduling for Two-Processor Systems
	 *     (Section II, page 203)
	 *
	 */

	const expected = list(range(1, 20));

	const edges = [
		[19, 17],
		[19, 6],
		[18, 17],
		[17, 16],
		[17, 15],
		[16, 13],
		[16, 14],
		[15, 14],
		[14, 12],
		[14, 11],
		[13, 10],
		[12, 9],
		[12, 8],
		[11, 9],
		[11, 8],
		[10, 9],
		[10, 8],
		[9, 7],
		[8, 7],
		[7, 5],
		[7, 3],
		[6, 4],
		[5, 2],
		[5, 1],
		[4, 1],
		[3, 1],
	];

	const order = new Map();
	for (const [u, v] of edges) {
		order.set(u, []);
		order.set(v, []);
	}

	// N(T) = decreasing({a(T'): T' in S(T)})
	const N = (u) => order.get(u);

	const linearOrderOnDecreasingSequences = colexicographical(increasing);
	const colexOrder = fn(linearOrderOnDecreasingSequences, N);

	const breakTies = (u, v) => colexOrder(u, v) || increasing(u, v);

	const graph = Pairs.from(edges);
	const result = [];
	for (const u of sorted(graph.invert(), breakTies)) {
		result.push(u);
		const k = result.length;
		for (const v of graph.rightOf(u)) {
			order.get(v).push(k);
		}
	}

	t.deepEqual(result, expected);
});

test('Triangle', (t) => {
	const edges = ['ab', 'bc', 'ca'];
	t.throws(() => [...sorted(edges)], {message: /cycle/});
});

test('Triangle after edge', (t) => {
	const edges = ['xa', 'ab', 'bc', 'ca'];
	t.throws(() => [...sorted(edges)], {message: /cycle/});
});

test('README example #1', (t) => {
	const edges = ['ab', 'bc'];
	const expected = list('abc');
	t.deepEqual([...sorted(edges)], expected);
});

test('README example #2', (t) => {
	const edges = ['ab', 'cd'];
	const expected = list('abcd');
	t.deepEqual([...sorted(edges, increasing)], expected);
});

test('README example #3', (t) => {
	const edges = ['ab', 'cd'];
	const expected = list('cdab');
	t.deepEqual([...sorted(edges, decreasing)], expected);
});
