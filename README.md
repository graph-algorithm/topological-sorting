:oden: [@graph-algorithm/topological-sorting](https://graph-algorithm.github.io/topological-sorting)
==

Topological sorting algorithms for JavaScript.
See [docs](https://graph-algorithm.github.io/topological-sorting/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
// Sort anything that can be iterated over with `for (const [u, v] of ...)`
import {sorted} from '@graph-algorithm/topological-sorting';
sorted(["ab", "bc"]); // abc

// Add a comparison function to break ties.
import {increasing} from '@total-order/primitive';
sorted(["ab", "cd"], increasing); // abcd

import {decreasing} from '@total-order/primitive';
sorted(["ab", "cd"], decreasing); // cdab
```

[![License](https://img.shields.io/github/license/graph-algorithm/topological-sorting.svg)](https://raw.githubusercontent.com/graph-algorithm/topological-sorting/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@graph-algorithm/topological-sorting.svg)](https://www.npmjs.org/package/@graph-algorithm/topological-sorting)
[![Tests](https://img.shields.io/github/workflow/status/graph-algorithm/topological-sorting/ci:cover?event=push&label=tests)](https://github.com/graph-algorithm/topological-sorting/actions/workflows/ci:cover.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/graph-algorithm/topological-sorting.svg)](https://github.com/graph-algorithm/topological-sorting/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/graph-algorithm/topological-sorting.svg)](https://github.com/graph-algorithm/topological-sorting/issues)
[![Downloads](https://img.shields.io/npm/dm/@graph-algorithm/topological-sorting.svg)](https://www.npmjs.org/package/@graph-algorithm/topological-sorting)

[![Code issues](https://img.shields.io/codeclimate/issues/graph-algorithm/topological-sorting.svg)](https://codeclimate.com/github/graph-algorithm/topological-sorting/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/graph-algorithm/topological-sorting.svg)](https://codeclimate.com/github/graph-algorithm/topological-sorting/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/graph-algorithm/topological-sorting/main.svg)](https://codecov.io/gh/graph-algorithm/topological-sorting)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/graph-algorithm/topological-sorting.svg)](https://codeclimate.com/github/graph-algorithm/topological-sorting/trends/technical_debt)
[![Documentation](https://graph-algorithm.github.io/topological-sorting/badge.svg)](https://graph-algorithm.github.io/topological-sorting/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@graph-algorithm/topological-sorting)](https://bundlephobia.com/result?p=@graph-algorithm/topological-sorting)
