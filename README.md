:oden: [@aureooms/js-topological-sorting](https://aureooms.github.io/js-topological-sorting)
==

Topological sorting algorithms for JavaScript.
See [docs](https://aureooms.github.io/js-topological-sorting/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
// Sort anything that can be iterated over with `for (const [u, v] of ...)`
import {sorted} from '@aureooms/js-topological-sorting';
sorted(["ab", "bc"]); // abc

// Add a comparison function to break ties.
import {increasing} from '@aureooms/js-compare';
sorted(["ab", "cd"], increasing); // abcd

import {decreasing} from '@aureooms/js-compare';
sorted(["ab", "cd"], decreasing); // cdab
```

[![License](https://img.shields.io/github/license/aureooms/js-topological-sorting.svg)](https://raw.githubusercontent.com/aureooms/js-topological-sorting/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-topological-sorting.svg)](https://www.npmjs.org/package/@aureooms/js-topological-sorting)
[![Tests](https://img.shields.io/github/workflow/status/aureooms/js-topological-sorting/ci:test?event=push&label=tests)](https://github.com/aureooms/js-topological-sorting/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/aureooms/js-topological-sorting.svg)](https://david-dm.org/aureooms/js-topological-sorting)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-topological-sorting.svg)](https://david-dm.org/aureooms/js-topological-sorting?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-topological-sorting.svg)](https://github.com/aureooms/js-topological-sorting/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-topological-sorting.svg)](https://www.npmjs.org/package/@aureooms/js-topological-sorting)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-topological-sorting.svg)](https://codeclimate.com/github/aureooms/js-topological-sorting/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-topological-sorting.svg)](https://codeclimate.com/github/aureooms/js-topological-sorting/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-topological-sorting/main.svg)](https://codecov.io/gh/aureooms/js-topological-sorting)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-topological-sorting.svg)](https://codeclimate.com/github/aureooms/js-topological-sorting/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-topological-sorting/badge.svg)](https://aureooms.github.io/js-topological-sorting/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-topological-sorting)](https://bundlephobia.com/result?p=@aureooms/js-topological-sorting)
