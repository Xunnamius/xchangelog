<p align="center" width="100%">
  <img width="300" src="./xchangelog.png">
</p>

<p align="center" width="100%">
A <a href="https://github.com/conventional-changelog/conventional-changelog" target="_blank">conventional-changelog</a> fork with bug fixes and improved monorepo support.
</p>

<hr />

<!-- badges-start -->

<div align="center">

[![Black Lives Matter!][x-badge-blm-image]][x-badge-blm-link]
[![Last commit timestamp][x-badge-lastcommit-image]][x-badge-repo-link]
[![Codecov][x-badge-codecov-image]][x-badge-codecov-link]
[![Source license][x-badge-license-image]][x-badge-license-link]
[![Uses Semantic Release!][x-badge-semanticrelease-image]][x-badge-semanticrelease-link]

[![NPM version][x-badge-npm-image]][x-badge-npm-link]
[![Monthly Downloads][x-badge-downloads-image]][x-badge-npm-link]

</div>

<!-- badges-end -->

<br />

# xchangelog (@-xun/changelog)

This
[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
fork slightly tweaks the original for improved monorepo support.

> \[!NOTE]
>
> The only reason to use xchangelog over
> [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
> is if you are using an
> [xscripts](https://github.com/Xunnamius/xscripts)-powered project or your
> repository is a monorepo. Otherwise, just use
> [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog).

## Install

To install xchangelog:

```shell
npm install --save-dev conventional-changelog-core@npm:@-xun/changelog
```

If you want to use a specific version of xchangelog, provide its semver:

```shell
npm install --save-dev conventional-changelog-core@npm:@-xun/changelog@1.2.3
```

> \[!NOTE]
>
> xchangelog installations reuse the "conventional-changelog-core" name so that
> plugins with conventional-changelog-core as a peer dependency are able to
> recognize xchangelog's presence.

## Usage

```js
import conventionalChangelogCore from '@-xun/changelog';

conventionalChangelogCore()
  .pipe(process.stdout); // or any writable stream
```

## API

See the [`conventionalChangelogCore`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-core#api) upstream documentation. The only change made by this
package (outside of bug fixes) is the addition of `secondaryTagPrefix`.

### `secondaryTagPrefix`

An optional secondary [git
tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging) format that, if given,
will be used in addition to [`tagPrefix`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-core#tagprefix) when filtering commits.

[x-badge-blm-image]: https://xunn.at/badge-blm 'Join the movement!'
[x-badge-blm-link]: https://xunn.at/donate-blm
[x-badge-codecov-image]:
  https://img.shields.io/codecov/c/github/Xunnamius/xchangelog/main?style=flat-square&token=HWRIOBAAPW
  'Is this package well-tested?'
[x-badge-codecov-link]: https://codecov.io/gh/Xunnamius/xchangelog
[x-badge-downloads-image]:
  https://img.shields.io/npm/dm/@-xun/changelog?style=flat-square
  'Number of times this package has been downloaded per month'
[x-badge-lastcommit-image]:
  https://img.shields.io/github/last-commit/Xunnamius/xchangelog?style=flat-square
  'Latest commit timestamp'
[x-badge-license-image]:
  https://img.shields.io/npm/l/@-xun/changelog?style=flat-square
  "This package's source license"
[x-badge-license-link]: https://github.com/Xunnamius/xchangelog/blob/main/LICENSE
[x-badge-npm-image]:
  https://xunn.at/npm-pkg-version/@-xun/changelog
  'Install this package using npm or yarn!'
[x-badge-npm-link]: https://www.npmjs.com/package/@-xun/changelog
[x-badge-repo-link]: https://github.com/Xunnamius/xchangelog
[x-badge-semanticrelease-image]:
  https://xunn.at/badge-semantic-release
  'This repo practices continuous integration and deployment!'
[x-badge-semanticrelease-link]:
  https://github.com/semantic-release/semantic-release
[x-pkg-cjs-mojito]:
  https://dev.to/jakobjingleheimer/configuring-commonjs-es-modules-for-nodejs-12ed#publish-only-a-cjs-distribution-with-property-exports
[x-pkg-dual-package-hazard]:
  https://nodejs.org/api/packages.html#dual-package-hazard
[x-pkg-exports-conditions]:
  https://webpack.js.org/guides/package-exports#reference-syntax
[x-pkg-exports-module-key]:
  https://webpack.js.org/guides/package-exports#providing-commonjs-and-esm-version-stateless
[x-pkg-exports-types-key]:
  https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta#packagejson-exports-imports-and-self-referencing
[x-pkg-side-effects-key]:
  https://webpack.js.org/guides/tree-shaking#mark-the-file-as-side-effect-free
[x-pkg-tree-shaking]: https://webpack.js.org/guides/tree-shaking
[x-pkg-type]:
  https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#type
[x-repo-all-contributors]: https://github.com/all-contributors/all-contributors
[x-repo-all-contributors-emojis]: https://allcontributors.org/docs/en/emoji-key
[x-repo-choose-new-issue]:
  https://github.com/Xunnamius/xchangelog/issues/new/choose
[x-repo-contributing]: /CONTRIBUTING.md
[x-repo-docs]: docs
[x-repo-license]: ./LICENSE
[x-repo-package-json]: package.json
[x-repo-pr-compare]: https://github.com/Xunnamius/xchangelog/compare
[x-repo-sponsor]: https://github.com/sponsors/Xunnamius
[x-repo-support]: /.github/SUPPORT.md
