## [1.1.1](https://github.com/mini-roostico/api-web/compare/1.1.0...1.1.1) (2025-02-06)

### Bug Fixes

* removed comment ([b685bef](https://github.com/mini-roostico/api-web/commit/b685bef97e166f1fe0c8addf008f5ae858f97ed1))

### Build and continuous integration

* added auth token setup for npmjs publishing ([965493c](https://github.com/mini-roostico/api-web/commit/965493c4846168c9c565e64d7e98506b9dfc310b))
* added job to test common project ([fea3c45](https://github.com/mini-roostico/api-web/commit/fea3c451ec460215c38f69d6178427faeb5e1d40))
* deleted test-common job due to failing dependency resolution in later steps ([2aad259](https://github.com/mini-roostico/api-web/commit/2aad259401c3a5486341106ef32b162e4836cad6))
* switched job order ([84afe6e](https://github.com/mini-roostico/api-web/commit/84afe6ef884253723f07af91ddf0011c0fac38d6))

## [1.1.0](https://github.com/mini-roostico/api-web/compare/1.0.0...1.1.0) (2025-02-06)

### Features

* provided a simple api app with mongo configs, provided jwt key configs ([3e6a8c5](https://github.com/mini-roostico/api-web/commit/3e6a8c5c242cb730e46037093cd8dc52b2132550))

### Dependency updates

* **deps:** update actions/setup-node action to v4.2.0 ([cf50127](https://github.com/mini-roostico/api-web/commit/cf50127abdb57fee2aefe162593dc66af01ab431))
* **deps:** update docker/build-push-action digest to ca877d9 ([a7e46b4](https://github.com/mini-roostico/api-web/commit/a7e46b4a0902702889935450050e5bc3139432b7))
* **deps:** update docker/login-action digest to 327cd5a ([6ee1525](https://github.com/mini-roostico/api-web/commit/6ee152530cadcf468e24c2ae6f9d1835208eea6d))
* **deps:** update docker/metadata-action digest to 8e1d546 ([7784c96](https://github.com/mini-roostico/api-web/commit/7784c96c7b3532723168444d291e428c78d6875b))
* **deps:** update verdaccio/verdaccio docker tag to v6 ([96099f3](https://github.com/mini-roostico/api-web/commit/96099f30d757c9e5591da303620af5e17ab01c4d))

### Bug Fixes

* removed verdaccio folder and updated to last ci configs ([84d0389](https://github.com/mini-roostico/api-web/commit/84d03895ec416fbe7d369838f6ef0f48c115c6e9))
* updated to master, fixed conflicts ([7003991](https://github.com/mini-roostico/api-web/commit/70039919b1bb791d8c50a7f0dc648f2b3fec425a))

### Build and continuous integration

* add .npmrc for verdaccio config ([b4f3204](https://github.com/mini-roostico/api-web/commit/b4f3204445133b6cba9d5a743dd7b90161e89716))
* add job to run verdaccio ([8ad2933](https://github.com/mini-roostico/api-web/commit/8ad2933433e49672dc6e711f43a947cedce40bb9))
* add listen config and registry config in ci ([074cff3](https://github.com/mini-roostico/api-web/commit/074cff35758cc0d7ecf7e0d72e9682d431ce11f9))
* add package-lock overriding ([6fc51dc](https://github.com/mini-roostico/api-web/commit/6fc51dcb5b388850321fcc684a3897cf8e321a38))
* add required node version ([f2250b7](https://github.com/mini-roostico/api-web/commit/f2250b72b392bcad1fadfdabffcabd6c916e6ebe))
* add verdaccio config in common package ([ee96dfc](https://github.com/mini-roostico/api-web/commit/ee96dfcefc14da09fe653a45e74f6139c373f6f1))
* add verdaccio job in ci ([de88ab7](https://github.com/mini-roostico/api-web/commit/de88ab7886102f4eb9e848af95f7c19e186c1e1f))
* add verdaccio service ([5aa34a2](https://github.com/mini-roostico/api-web/commit/5aa34a2e56a981adc17c1d03c40ca3fb623c0416))
* added `npm run build` to api and auth dockerfiles ([52e2731](https://github.com/mini-roostico/api-web/commit/52e2731a599cc14ca9a9e68d88f22a56adc6526d))
* added debug step to look at github workspace ([214edbd](https://github.com/mini-roostico/api-web/commit/214edbd79d0a89832e7a7db44271294f420f09d7))
* added npm install ([3479ec4](https://github.com/mini-roostico/api-web/commit/3479ec450c55f4d5b227e306814c2800565c258a))
* change dockerfile conf file indexing ([db5c15d](https://github.com/mini-roostico/api-web/commit/db5c15d25aae9fc57760c3c05eac0259f26a0109))
* changed publishCmd in release.config.mjs ([d75b400](https://github.com/mini-roostico/api-web/commit/d75b4002c828a6161d39b56c92e1ba43b0610a4e))
* debugging verdaccio service with version 4 ([ba75b5c](https://github.com/mini-roostico/api-web/commit/ba75b5c354bf037b7bb3be66eb897bdac5549c85))
* fix dockerfile indexing ([f193e27](https://github.com/mini-roostico/api-web/commit/f193e2734f1a293f6cd5acf939c4fe3d093feb93))
* fix typo in dir ([f464335](https://github.com/mini-roostico/api-web/commit/f4643356c310a1c2a3074949070a9d83f5b667a1))
* fix typo in dockerfile conf file indexing ([a79be66](https://github.com/mini-roostico/api-web/commit/a79be667362cc0ba0ca56a1d51714a5d7d144084))
* fixed semantic release not running due to incorrect configuration and permissions ([171f9ed](https://github.com/mini-roostico/api-web/commit/171f9edb035d26535cf4591cb8bed8b02ee6cdf7))
* indexed dockerfile in common ([ebfe60c](https://github.com/mini-roostico/api-web/commit/ebfe60c73c2bd0d0970e3e56b77d8837fbd4525b))
* re-deleted health checks ([fbe4dbf](https://github.com/mini-roostico/api-web/commit/fbe4dbf4f5607f66dd729b1e6a5cb84f45df8e7b))
* removed job ([456c57d](https://github.com/mini-roostico/api-web/commit/456c57d2fcaee1f78f9fa773b605a45e88bdceb7))
* removed jobs for verdaccio standalone, integrated config in test and check ([e805e3e](https://github.com/mini-roostico/api-web/commit/e805e3e1950901732f097c9b279adf21e7ebe24d))
* removed unused verdaccio folder ([ff1c6ef](https://github.com/mini-roostico/api-web/commit/ff1c6efc6958bb73eb93617a344c6c80c3c903bf))
* removed useless concurrency for test-and-check job ([ccddc26](https://github.com/mini-roostico/api-web/commit/ccddc269395def2002202064545d1780cf420171))
* removed verdaccio 'auth' in config.yaml ([6548703](https://github.com/mini-roostico/api-web/commit/65487032b7af2225c1542cb4cdf9e4c6a0c59589))
* removed verdaccio start up job ([664e842](https://github.com/mini-roostico/api-web/commit/664e842ba93f142927d3a1000fdbb9ed55e11a3f))
* switched to 'moduleResolution' = 'bundler' inside tsconfig.json ([16dcddb](https://github.com/mini-roostico/api-web/commit/16dcddb0e2126f6941e01d6aaedbad28f058bb1e))
* switched to npm for running verdaccio ([d8e68db](https://github.com/mini-roostico/api-web/commit/d8e68dbcbf5c6741d7e53b54de40996b2896154f))
* switched to service containers using standard verdaccio image ([539463c](https://github.com/mini-roostico/api-web/commit/539463c412e1097ca19049bd29298d2ced2f638d))
* switched to verdaccio:6, added health checks and debugging concurrency ([259457c](https://github.com/mini-roostico/api-web/commit/259457c6941cfec41c5d4e29d0493b73adcdbdf3))
* troubleshooting dockerfile ([85966ba](https://github.com/mini-roostico/api-web/commit/85966ba1b645eac8933dd23312b0937307af9664))
* updated dependencies and removed .npmrc ([dc6f678](https://github.com/mini-roostico/api-web/commit/dc6f678487a029ef059329b35ff97326e108b866))

## 1.0.0 (2025-02-05)

### Features

* implemented errors, handler for auth, error, limiter, response and validation. Models implementation for jwt tokens, sources and users. Generic utils for jwt handler, limiter and response, and utils for local testing db ([70ac419](https://github.com/mini-roostico/api-web/commit/70ac4199a1bf594d2012a60b34f32c20b864c3cb))

### Build and continuous integration

* add jest and node install for windows not working ([1dcc8b0](https://github.com/mini-roostico/api-web/commit/1dcc8b00538dd3fde1f678845676f33ed1be9faa))
* add linter configs and an empty file in packages ([17e503b](https://github.com/mini-roostico/api-web/commit/17e503b17c560f3f47a42699bcd9be7e7769c8b5))
* add package.json to main package ([3fb39cf](https://github.com/mini-roostico/api-web/commit/3fb39cfd3e15adcb448f983fdce0a298d04203c1))
* add release config ([b5d6bfc](https://github.com/mini-roostico/api-web/commit/b5d6bfc82ec539a12f7b1e10117891ea4be436fc))
* add ts install for windows not working ([33f5d95](https://github.com/mini-roostico/api-web/commit/33f5d95bc84049b24228cbd5cddc12e7d0303dee))
* added config for verdaccio in CI ([810c33d](https://github.com/mini-roostico/api-web/commit/810c33d409d7bb72ac9e0e47dd524b4d50594d27))
* added dependencies install for auth project ([fa85d9a](https://github.com/mini-roostico/api-web/commit/fa85d9a294c83f33d8e33b2b73cf545d1b4f3b8e))
* added Dockerfiles ([3ed21d4](https://github.com/mini-roostico/api-web/commit/3ed21d4580faba0c9b489221351993c46c495e1d))
* added publish command inside release.config.mjs ([278a54c](https://github.com/mini-roostico/api-web/commit/278a54cd423698d37c3d21aa0218c067d52db5e9))
* added release command with new version ([c916aa8](https://github.com/mini-roostico/api-web/commit/c916aa88c163b60a435524d7c57c36d43b21d8ad))
* applied restyle for linter ([0205b87](https://github.com/mini-roostico/api-web/commit/0205b876b856792881908aca3a1f3f471b336af2))
* attempt to modify warning for unused vars ([3f01330](https://github.com/mini-roostico/api-web/commit/3f01330c1809be81baa7d1f4ddf7ed2f9872d1f3))
* changed common to module ([6e327b2](https://github.com/mini-roostico/api-web/commit/6e327b2c688d775d8613bc30dd4025d10271476b))
* changed name of the common package ([443715c](https://github.com/mini-roostico/api-web/commit/443715c99cec407785cfe7feefc1e1b5eebfe59e))
* collapsed commands in same run ([46b9172](https://github.com/mini-roostico/api-web/commit/46b9172b462b7f3f1745c217d5e24bac829403a7))
* de-commented needs for deploy job ([5a0b70a](https://github.com/mini-roostico/api-web/commit/5a0b70a3d66a6dc41eba31357b883483bd431bba))
* fix cyclic dependency ([966402e](https://github.com/mini-roostico/api-web/commit/966402e3b3a0220247781ee48cc91c1cc2ae999b))
* fix install rather than clean-install ([4d9fcff](https://github.com/mini-roostico/api-web/commit/4d9fcffef139bc867e1a4be51ce259a8652af15e))
* fix node version for semantic-release action ([940ffd1](https://github.com/mini-roostico/api-web/commit/940ffd15acb2b08d0b3111fb30d71a96997ec3da))
* fix to install jest and node in windows env ([2871577](https://github.com/mini-roostico/api-web/commit/2871577ddaa41b9699a675703906358c3fe7463b))
* fix to install jest and node in windows env ([879face](https://github.com/mini-roostico/api-web/commit/879face6b450c4931f706560c29e0863847e5aad))
* fix to install jest and node in windows env ([753193d](https://github.com/mini-roostico/api-web/commit/753193dfff55646b94e7c3d9800d112143758a0f))
* fix to install jest and node in windows env ([0eab538](https://github.com/mini-roostico/api-web/commit/0eab5380c2b95997c507ec087de98b5dde313153))
* fixed npm script call ([62721f0](https://github.com/mini-roostico/api-web/commit/62721f01e5e1dd25a9c7bc85a58b44cbcb2b51cd))
* linter modified for unused variables convention, set up working directory ([0d6b90d](https://github.com/mini-roostico/api-web/commit/0d6b90d96d3f7847844771edad30f250ef439850))
* minor ([52a260a](https://github.com/mini-roostico/api-web/commit/52a260ad5b3e5ca3d149b110f880c849c265f747))
* minor ([e06b28a](https://github.com/mini-roostico/api-web/commit/e06b28ad0b8f0851a003bd141b8cb4a8992b3caf))
* minor ([04ab2c0](https://github.com/mini-roostico/api-web/commit/04ab2c08a76cbd11fe816f93a6c464e79da8b1b2))
* minor ([f41261f](https://github.com/mini-roostico/api-web/commit/f41261f183ad15ed79949ddd43dd5e3472f37a01))
* minor ([9b74831](https://github.com/mini-roostico/api-web/commit/9b74831eb9ac897d2ac3631816900c55947d5c14))
* minor ([90b3cbf](https://github.com/mini-roostico/api-web/commit/90b3cbfed9ba63f28b79b8ccc37b317246b4604a))
* minor ([9efe0ca](https://github.com/mini-roostico/api-web/commit/9efe0ca1eb60851274490ddba383473fdd03ddcf))
* minor ([097e6da](https://github.com/mini-roostico/api-web/commit/097e6dac4b8a3ecd2024be6043ea787c2d16e361))
* minor ([9b5cfb7](https://github.com/mini-roostico/api-web/commit/9b5cfb7e67016b5e7863e2df2f9e99bf36896a90))
* minor ([c5caa4b](https://github.com/mini-roostico/api-web/commit/c5caa4b8a12837c0c4e4b95968e2e6ad9682c052))
* minor ([0425bf6](https://github.com/mini-roostico/api-web/commit/0425bf69123de05c4c03cd5840c209189be71212))
* minor ([4bea8bd](https://github.com/mini-roostico/api-web/commit/4bea8bd8b0ac9d5f57edbb5dc95d70b4b70293fd))
* minor ([de3297b](https://github.com/mini-roostico/api-web/commit/de3297bce86c949a258fd127e3dac24d6763c467))
* minor ([9851fb3](https://github.com/mini-roostico/api-web/commit/9851fb3acc16bb831016731dac6db75f34723136))
* minor ([acf559a](https://github.com/mini-roostico/api-web/commit/acf559a3fedfb330678b9879d1b85242d606d3f5))
* minor ([221d800](https://github.com/mini-roostico/api-web/commit/221d800178192899972f24f18848a5c1f9a6f12b))
* minor ([c946d23](https://github.com/mini-roostico/api-web/commit/c946d231c3fce476425f086d5cd3cb8fe6c6a8e6))
* removed illegal ci workflow. Added utility script to package.json ([2059ef1](https://github.com/mini-roostico/api-web/commit/2059ef13202c8230dd0e0863148586bd1073ca3f))
* removed matrix on precompute-next-version job ([86dc23e](https://github.com/mini-roostico/api-web/commit/86dc23e80c5b360ae4ee276b8f88c4a97c6848e6))
* removed node setup for the whole project ([c0e9e84](https://github.com/mini-roostico/api-web/commit/c0e9e84f2edfa7c14ab85cf8109cd55d521ad4ff))
* removed node setup for the whole project ([f739626](https://github.com/mini-roostico/api-web/commit/f7396265aeab6a810893dd827a8f17119bbcab50))
* removed node version file specification ([cb653eb](https://github.com/mini-roostico/api-web/commit/cb653eb9b949c1272871c88cc8f38a1d53e66a01))
* removed output from precompute job ([680559b](https://github.com/mini-roostico/api-web/commit/680559b78b82adbe2548557d27661a9add814b79))
* setup of test-and-check, release and deploy-to-registry jobs ([d904d40](https://github.com/mini-roostico/api-web/commit/d904d40efe663b38a190c60494a23c589971f13c))

### General maintenance

* changed jest config to ES module syntax ([6453a07](https://github.com/mini-roostico/api-web/commit/6453a07b9a7e5b1aa414ba38479fb5a10e42bc00))
* fix typo in github workflows ([b0279c5](https://github.com/mini-roostico/api-web/commit/b0279c5950b53066888f6b3833ba35a4f4c804b2))
* proveded verdaccio configs ([285791c](https://github.com/mini-roostico/api-web/commit/285791c18d35d3dda82cf6c218980aa999d2cca9))
* provided starting setup for modules api, auth and common, as well as starting github actions ([6278492](https://github.com/mini-roostico/api-web/commit/6278492debbb0000fb1fbc2005edcbe4c40db284))

### Style improvements

* applied formatter ([f5ef46f](https://github.com/mini-roostico/api-web/commit/f5ef46f10211df40f3d544de39f4b6384873c8f0))
