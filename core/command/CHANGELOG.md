# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.0-beta.21"></a>
# [3.0.0-beta.21](https://github.com/lerna/lerna/compare/v3.0.0-beta.20...v3.0.0-beta.21) (2018-05-12)

**Note:** Version bump only for package @lerna/command





<a name="3.0.0-beta.20"></a>
# [3.0.0-beta.20](https://github.com/lerna/lerna/compare/v3.0.0-beta.19...v3.0.0-beta.20) (2018-05-07)


### Features

* Upgrade execa ([393b501](https://github.com/lerna/lerna/commit/393b501))





<a name="3.0.0-beta.19"></a>
# [3.0.0-beta.19](https://github.com/lerna/lerna/compare/v3.0.0-beta.18...v3.0.0-beta.19) (2018-05-03)

**Note:** Version bump only for package @lerna/command





<a name="3.0.0-beta.18"></a>
# [3.0.0-beta.18](https://github.com/lerna/lerna/compare/v3.0.0-beta.17...v3.0.0-beta.18) (2018-04-24)


### Features

* **command:** Move GitUtilities.isInitialized into class method ([abecfcc](https://github.com/lerna/lerna/commit/abecfcc))
* **filters:** Add `--include-filtered-dependents` flag ([#1393](https://github.com/lerna/lerna/issues/1393)) ([2838260](https://github.com/lerna/lerna/commit/2838260))


### BREAKING CHANGES

* **command:** GitUtilities.isInitialized no longer exists. You shouldn't be using GitUtilities.





<a name="3.0.0-beta.17"></a>
# [3.0.0-beta.17](https://github.com/lerna/lerna/compare/v3.0.0-beta.16...v3.0.0-beta.17) (2018-04-13)

**Note:** Version bump only for package @lerna/command





<a name="3.0.0-beta.15"></a>
# [3.0.0-beta.15](https://github.com/lerna/lerna/compare/v3.0.0-beta.14...v3.0.0-beta.15) (2018-04-09)

**Note:** Version bump only for package @lerna/command





<a name="3.0.0-beta.14"></a>
# [3.0.0-beta.14](https://github.com/lerna/lerna/compare/v3.0.0-beta.13...v3.0.0-beta.14) (2018-04-03)


### Bug Fixes

* **logging:** Log failures from package scripts once, not twice ([436cfe1](https://github.com/lerna/lerna/commit/436cfe1))





<a name="3.0.0-beta.13"></a>
# [3.0.0-beta.13](https://github.com/lerna/lerna/compare/v3.0.0-beta.12...v3.0.0-beta.13) (2018-03-31)


### Features

* Enable progress bars only when necessary ([b766c83](https://github.com/lerna/lerna/commit/b766c83))





<a name="3.0.0-beta.12"></a>
# [3.0.0-beta.12](https://github.com/lerna/lerna/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2018-03-30)


### Features

* **project:** Merge `package` and `packageJson` into `manifest` ([9a47ff7](https://github.com/lerna/lerna/commit/9a47ff7))





<a name="3.0.0-beta.11"></a>
# [3.0.0-beta.11](https://github.com/lerna/lerna/compare/v3.0.0-beta.10...v3.0.0-beta.11) (2018-03-29)

**Note:** Version bump only for package @lerna/command





<a name="3.0.0-beta.10"></a>
# [3.0.0-beta.10](https://github.com/lerna/lerna/compare/v3.0.0-beta.9...v3.0.0-beta.10) (2018-03-27)

**Note:** Version bump only for package @lerna/command





<a name="3.0.0-beta.9"></a>
# [3.0.0-beta.9](https://github.com/lerna/lerna/compare/v3.0.0-beta.8...v3.0.0-beta.9) (2018-03-24)


### Features

* **command:** Remove legacy config handling ([d305a38](https://github.com/lerna/lerna/commit/d305a38))
* **command:** Rename this.repository -> this.project ([43e98a0](https://github.com/lerna/lerna/commit/43e98a0))
* **project:** Normalize config.commands -> config.command ([24e55e3](https://github.com/lerna/lerna/commit/24e55e3))
* **project:** Use cosmiconfig to locate and read lerna.json ([b8c2789](https://github.com/lerna/lerna/commit/b8c2789))


### BREAKING CHANGES

* **command:** lerna.json `bootstrapConfig` and `publishConfig` namespaces are no longer honored.
These config blocks should be moved to `command.bootstrap` and `command.publish`, respectively.





<a name="3.0.0-beta.7"></a>
# [3.0.0-beta.7](https://github.com/lerna/lerna/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2018-03-20)


### Bug Fixes

* **cli:** Retrieve correct version ([bb2c5e8](https://github.com/lerna/lerna/commit/bb2c5e8))





<a name="3.0.0-beta.4"></a>
# [3.0.0-beta.4](https://github.com/lerna/lerna/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2018-03-19)


### Bug Fixes

* **clean-stack:** Try to avoid causing errors during error cleanup ([89f9d3b](https://github.com/lerna/lerna/commit/89f9d3b))





<a name="3.0.0-beta.3"></a>
# [3.0.0-beta.3](https://github.com/lerna/lerna/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2018-03-15)

**Note:** Version bump only for package @lerna/command





<a name="3.0.0-beta.2"></a>

# [3.0.0-beta.2](https://github.com/lerna/lerna/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2018-03-10)

### Features

* Replace @lerna/match-package-name with multimatch ([423f82c](https://github.com/lerna/lerna/commit/423f82c))
* **filter-packages:** Simplify method signature ([47e1c86](https://github.com/lerna/lerna/commit/47e1c86))

### BREAKING CHANGES

* **filter-packages:** The parameters to `filterPackages()` have changed:
  * Two lists (include, exclude) have replaced the destructured config object

<a name="3.0.0-beta.1"></a>

# [3.0.0-beta.1](https://github.com/lerna/lerna/compare/v3.0.0-beta.0...v3.0.0-beta.1) (2018-03-09)

### Bug Fixes

* **filter-options:** require a git repo when using --since ([d21b66e](https://github.com/lerna/lerna/commit/d21b66e)), closes [#822](https://github.com/lerna/lerna/issues/822)

### Features

* **collect-packages:** simplify signature ([39170cf](https://github.com/lerna/lerna/commit/39170cf))
* **filter-options:** Exclude private packages with --no-private ([6674d18](https://github.com/lerna/lerna/commit/6674d18))

### BREAKING CHANGES

* **collect-packages:** Formerly a config object, it is now two parameters, only the first of
  which (rootPath) is required. The second parameter is a list of package
  location globs, defaulting to lerna's default of `["packages/*"]`.
