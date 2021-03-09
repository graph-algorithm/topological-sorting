import test from 'ava';

import {increasing, decreasing} from '@aureooms/js-compare';
import {sorted} from '../../src/index.js';

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
