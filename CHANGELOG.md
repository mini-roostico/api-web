## [1.9.2](https://github.com/mini-roostico/api-web/compare/1.9.1...1.9.2) (2025-02-10)

### Bug Fixes

* provided keys for jwt test in common ([9b1e846](https://github.com/mini-roostico/api-web/commit/9b1e846f47e35ed0fe82c4bdb71141565e07ec58))
* provided path for keys based on env ([a412132](https://github.com/mini-roostico/api-web/commit/a412132cd4170ec29798041affb131d064749609))

### Tests

* provided sources tests ([0c04426](https://github.com/mini-roostico/api-web/commit/0c04426c586a89b3a67437ed09a440f50480e548))
* provided test for common ([4ec27e5](https://github.com/mini-roostico/api-web/commit/4ec27e56bf99fc9049a8d864aec09926d6970f88))
* provided test for source ([e663070](https://github.com/mini-roostico/api-web/commit/e663070e63bf3b48ecf4d4c5922d69c282ec607f))

## [1.9.1](https://github.com/mini-roostico/api-web/compare/1.9.0...1.9.1) (2025-02-10)

### Documentation

* provided swagger docs for api and auth routes ([16c6c1c](https://github.com/mini-roostico/api-web/commit/16c6c1c8122971b72a101568de1f42f133bf9da2))

### Tests

* provided user tests, fixed ac rules ([bc45e64](https://github.com/mini-roostico/api-web/commit/bc45e6473b8ed96df5d6b9e13cd9ad31dde470fa))

## [1.9.0](https://github.com/mini-roostico/api-web/compare/1.8.1...1.9.0) (2025-02-09)

### Features

* added health check route to both api and auth services ([c173a6f](https://github.com/mini-roostico/api-web/commit/c173a6f4ca38eaab637299d42c690b25d2def794))

### Style improvements

* fixed style in healthcheck.ts and index.ts ([588f005](https://github.com/mini-roostico/api-web/commit/588f005857e947b264af3b3ac85019c3f4dfeba7))

### Refactoring

* added firstName to login return ([883d10e](https://github.com/mini-roostico/api-web/commit/883d10eae9a736407b081f95f97b65e1973a796f))

## [1.8.1](https://github.com/mini-roostico/api-web/compare/1.8.0...1.8.1) (2025-02-09)

### Bug Fixes

* updated all keys' env variables to new name ([b6ff58c](https://github.com/mini-roostico/api-web/commit/b6ff58c3482acef4836f9534e6fa442a283c9272))

### Tests

* add auth routes tests ([bea6fec](https://github.com/mini-roostico/api-web/commit/bea6fec6a1411e5b3e0551241fa26896741158fe))
* add flag in test command ([c396df7](https://github.com/mini-roostico/api-web/commit/c396df762863089f5f2eb14cc828a32bc6194003))
* add process termination ([ec9ff60](https://github.com/mini-roostico/api-web/commit/ec9ff6009f26fa37ca4972cbc18872cea44af41e))
* add test timeout ([6f374c3](https://github.com/mini-roostico/api-web/commit/6f374c3979cf23cf8696db3c2c68b5d1c4bc0feb))
* attempt to fix process termination ([629755f](https://github.com/mini-roostico/api-web/commit/629755f73dd2ec87c250736d808ac21e8285cf15))
* close connection properly ([1de36ff](https://github.com/mini-roostico/api-web/commit/1de36ff08c0f9a72315b95dc1128dbd1e726673a))
* fix keys path ([29990de](https://github.com/mini-roostico/api-web/commit/29990de6ea47b324ec36ffc174ecf475a55dff86))
* fix process termination ([ab34b07](https://github.com/mini-roostico/api-web/commit/ab34b07a14bab2ff93585626facecad38e239f95))
* force exit to kill process ([a0076d1](https://github.com/mini-roostico/api-web/commit/a0076d1e0efc003a62342a62b811832c69531c1d))
* reduced timeout ([cf835ca](https://github.com/mini-roostico/api-web/commit/cf835ca5656d41d99c39a412584c7319ba1982b2))
* troubleshooting keys issue ([3a7d6e4](https://github.com/mini-roostico/api-web/commit/3a7d6e47cc6b1bef7e1c4af8674aa441c6d55ba0))

### Build and continuous integration

* add env variable for keys ([d659d56](https://github.com/mini-roostico/api-web/commit/d659d56e797525c4340a7211c691b395633aff6f))
* add print for testing ([4b159f7](https://github.com/mini-roostico/api-web/commit/4b159f730015e8cc6baa7beb55dab684e93d34a9))
* modified secrets copy ([314d97a](https://github.com/mini-roostico/api-web/commit/314d97aebbb110f9efd9633d5cac5bb309f3d9d8))

## [1.8.0](https://github.com/mini-roostico/api-web/compare/1.7.2...1.8.0) (2025-02-09)

### Features

* added support for generation through Subjekt ([d1411f4](https://github.com/mini-roostico/api-web/commit/d1411f4f4569b89588506f81b4284982efeb2648))

### Dependency updates

* **deps:** update eslint monorepo to v9.20.0 ([61fba91](https://github.com/mini-roostico/api-web/commit/61fba915dce9385f6e8a31aa7c8ac836cd5c0cd3))

### Refactoring

* removed log ([8c8d34b](https://github.com/mini-roostico/api-web/commit/8c8d34bb32882beadf21ccc695dfc9d2f6b86a56))

## [1.7.2](https://github.com/mini-roostico/api-web/compare/1.7.1...1.7.2) (2025-02-09)

### Bug Fixes

* fixed missing fields in mongoose source ([1ca6d39](https://github.com/mini-roostico/api-web/commit/1ca6d39ba8b8a09606dfdcaf2c613f47fa4ae698))

### General maintenance

* updated comment ([168fa18](https://github.com/mini-roostico/api-web/commit/168fa184ca4d66e9421018c040857dde890f6923))

## [1.7.1](https://github.com/mini-roostico/api-web/compare/1.7.0...1.7.1) (2025-02-09)

### Bug Fixes

* added missing field in user ([2db6ab1](https://github.com/mini-roostico/api-web/commit/2db6ab1b49c9830edbf432b8a78842123a295200))
* added missing parameter to makeAuthenticationHandlerWithModel. Added JwtModel to api ([4baa8a1](https://github.com/mini-roostico/api-web/commit/4baa8a1ff4a53eddf91a4454cf7bdfc39147b2f7))
* fixed id comparison. fixed permissions of access control. Added missing 'next()' call ([11d6465](https://github.com/mini-roostico/api-web/commit/11d646539fd42afcc699a375e8db9c5b893d844c))

### Tests

* added example tests ([bfb6194](https://github.com/mini-roostico/api-web/commit/bfb61948fa6de5e47fa57628db2e988f25d75c2c))
* setup tests for api and auth ([27e3113](https://github.com/mini-roostico/api-web/commit/27e311318ef70dbdffcaad33cbdb97d902fa2b49))

### Build and continuous integration

* added babel to build ([2ed7d0c](https://github.com/mini-roostico/api-web/commit/2ed7d0c06f4ba43ae513f0e6184a6b7a0ff4e516))
* added babel.config.js, modified jest.config.js ([68caa67](https://github.com/mini-roostico/api-web/commit/68caa6741099f02d5fd38580662478d34b471524))
* added set up keys step in test-and-check job ([eb0d226](https://github.com/mini-roostico/api-web/commit/eb0d2265e28e4d630ab38528cef094c1d23f54b2))
* added test dependencies ([18f6957](https://github.com/mini-roostico/api-web/commit/18f69570a2b0cbe00da24e987962b31ad133ad91))
* added types for express ([c25ea34](https://github.com/mini-roostico/api-web/commit/c25ea3433baf6c45be22ccf45cea2bbad66ea44f))
* fixed docker-compose build local images with correct context ([aa3e6d0](https://github.com/mini-roostico/api-web/commit/aa3e6d04dc857326883729d68376b6107bc99ed0))
* fixed mongo connection with docker-compose.yaml ([1e04ac6](https://github.com/mini-roostico/api-web/commit/1e04ac607d7e5ebec5739bb3ddb1b7b1b69adc69))
* setup jest.config.js ([191426b](https://github.com/mini-roostico/api-web/commit/191426b7b7639c174330c2e2cb48f25233ccce3e))
* switched to ".cjs" extension ([7010a67](https://github.com/mini-roostico/api-web/commit/7010a67eecc6beb2a5c308f1ac40f820ab165a43))

### Refactoring

* made dependency with mongo and redis less strict, potentially disabling external services via flag ([7e81e2f](https://github.com/mini-roostico/api-web/commit/7e81e2fc9c4bce0d36fe2996ce71841a6c765107))

## [1.7.0](https://github.com/mini-roostico/api-web/compare/1.6.3...1.7.0) (2025-02-08)

### Features

* add new routes for sources yet to be implemented ([81a6863](https://github.com/mini-roostico/api-web/commit/81a6863dc3ae9c8d6ade29528ee9efc7ef2a48d0))
* add put, delete and save source routes ([7647423](https://github.com/mini-roostico/api-web/commit/7647423f8923cd2ace46d21b03c19f15090cf94e))

### Build and continuous integration

* modified renovate.json to check subdirectories ([a4f7be4](https://github.com/mini-roostico/api-web/commit/a4f7be4c1152a8cc1657fac7246ec23c7769881d))

### Style improvements

* fix import ([e32cde6](https://github.com/mini-roostico/api-web/commit/e32cde6d87f5e869ee8b614a099b11d4b6b347e6))

## [1.6.3](https://github.com/mini-roostico/api-web/compare/1.6.2...1.6.3) (2025-02-08)

### Bug Fixes

* changed connection url for mongodb ([e2c7812](https://github.com/mini-roostico/api-web/commit/e2c7812ffd2e85a6c2f486605b3c5be1cd396cad))
* fixed broken reference to authenticationHandler ([8a6779f](https://github.com/mini-roostico/api-web/commit/8a6779f8dd057df44293515867107a52c6f25468))
* fixed old mongodb connect url ([ed33371](https://github.com/mini-roostico/api-web/commit/ed3337144032689319f1032a88e1d55c8c41d165))

### Build and continuous integration

* added `npm run build` to release.config.mjs ([767c9c3](https://github.com/mini-roostico/api-web/commit/767c9c3f13027f4c2c8b49ad04fea2da4511c030))
* added utility scripts to fix all formatting and linting ([85ec007](https://github.com/mini-roostico/api-web/commit/85ec00754f5fefa04a3235933ac6522d78adcbb3))
* fixed pre-commit failing during semantic-release ([5cbcba0](https://github.com/mini-roostico/api-web/commit/5cbcba008d21d7c5bc9145954d74e430b1573838))
* moved api and auth pre-commit checks into outer package.json ([7a150af](https://github.com/mini-roostico/api-web/commit/7a150afb7ebfb10b8fe341783c21fbafb284208b))
* moved pre-commit checks in the global package.json ([37b6413](https://github.com/mini-roostico/api-web/commit/37b64132e30bd3d12dfce15f1a7034486f875263))
* refactored docker-compose.yaml to handle keys with volumes, added healthchecks and switched to basic mongo image ([ed61238](https://github.com/mini-roostico/api-web/commit/ed612380d289a61d54eade131ea69c349e532f58))

### Style improvements

* fixed formatting and linting ([e02d5bc](https://github.com/mini-roostico/api-web/commit/e02d5bcf53b9257e11716382d02550e33735c43e))
* fixed style in common package ([ad66f77](https://github.com/mini-roostico/api-web/commit/ad66f77bda559de083c5d48c050ccdabc1aa8074))

### Refactoring

* added log on mongo connect, changed path of keys ([8454c6f](https://github.com/mini-roostico/api-web/commit/8454c6f5d7771aeb5a6ea7d26489a7d22dcd78c4))
* added log on mongo connect, changed path of keys for auth project ([ce567ce](https://github.com/mini-roostico/api-web/commit/ce567ce2ba0a8834257d29e776327fe716a749c9))
* added models.ts inside auth project ([eb3a66a](https://github.com/mini-roostico/api-web/commit/eb3a66a5898f0404aa481e66a57209493bb21497))
* changed authenticationHandler, using makeAuthenticationHandlerWithModel wrapper ([56fcd3b](https://github.com/mini-roostico/api-web/commit/56fcd3bb23453464805832717d5569e12785e724))
* moved jwt model out of common project ([da8db32](https://github.com/mini-roostico/api-web/commit/da8db322f76d7995a038e656a070448079024335))
* moved source model into the api project ([5fe440a](https://github.com/mini-roostico/api-web/commit/5fe440af5c9a8c65f4f07d1bba8441d364513a45))
* removed mongoose model for users from the common project ([3fc49b0](https://github.com/mini-roostico/api-web/commit/3fc49b0912fc11c960bf77f97b652c4a4a12be3c))

## [1.6.2](https://github.com/mini-roostico/api-web/compare/1.6.1...1.6.2) (2025-02-08)

### Bug Fixes

* fix linter error ([6e63242](https://github.com/mini-roostico/api-web/commit/6e63242ad8d6afbd798ac26c74b1c8fdbfb2e502))
* jwt path indexing and auth port ([8191ebc](https://github.com/mini-roostico/api-web/commit/8191ebcc2ffc293b81784e1820b6e79b1bdd63e4))

## [1.6.1](https://github.com/mini-roostico/api-web/compare/1.6.0...1.6.1) (2025-02-08)

### Bug Fixes

* removed pw forgot route ([22b34fc](https://github.com/mini-roostico/api-web/commit/22b34fc514e80c4219667e879f484c43558bd8fc))

### Style improvements

* applied formatter ([74e5680](https://github.com/mini-roostico/api-web/commit/74e56803d718a590a089063611d3a9d067b13ffc))

## [1.6.0](https://github.com/mini-roostico/api-web/compare/1.5.0...1.6.0) (2025-02-07)

### Features

* provided docker-compose and startup script, bounded at & rt key path as env ([8427627](https://github.com/mini-roostico/api-web/commit/84276274d53946f6d8de533c7af9341aafcf27b2))

### Style improvements

* applied formatter ([ef0bc53](https://github.com/mini-roostico/api-web/commit/ef0bc53045b9f38b439407e234ec09ec6994e20f))

## [1.5.0](https://github.com/mini-roostico/api-web/compare/1.4.0...1.5.0) (2025-02-07)

### Features

* add auth controller and route ([cbe12df](https://github.com/mini-roostico/api-web/commit/cbe12df36ddfb0f7499431b7ddfbf4ed52153316))

### Refactoring

* applied formatter ([81c6c98](https://github.com/mini-roostico/api-web/commit/81c6c986117bfa0be8f94d718d7d91bd04761c3e))

## [1.4.0](https://github.com/mini-roostico/api-web/compare/1.3.1...1.4.0) (2025-02-07)

### Features

* add auth app and configs ([2bb58c5](https://github.com/mini-roostico/api-web/commit/2bb58c56f05988c94d9e21cb6f19f6fd9c47e78e))

### Bug Fixes

* adapted to module import ([e1ca48d](https://github.com/mini-roostico/api-web/commit/e1ca48d558d99ee011131963d4fd2c01e7259019))
* fix import for auth common package ([4b4d4dd](https://github.com/mini-roostico/api-web/commit/4b4d4ddb4ba99c933243715a8b59f89db6097576))

### Build and continuous integration

* adjust tsconfig for common package import ([78ccdb4](https://github.com/mini-roostico/api-web/commit/78ccdb4b1ab5664ab106afc3a95b5a3f8cb77f1c))
* rename .dockerignore and update patterns for ignored files ([f7cdc63](https://github.com/mini-roostico/api-web/commit/f7cdc63af6a09d54be4154b506a911e838770185))

### General maintenance

* deleted unused config.yaml ([6723315](https://github.com/mini-roostico/api-web/commit/67233152a3728d72f0fe69956af0903f325ee507))

## [1.3.1](https://github.com/mini-roostico/api-web/compare/1.3.0...1.3.1) (2025-02-07)

### Bug Fixes

* switched to local module, not found during docker build ([2183df2](https://github.com/mini-roostico/api-web/commit/2183df2cb6db2464ba3f16bb0ea2a2d5d53b520d))

### Build and continuous integration

* added correct configuration inside Dockerfile of auth and api ([73ddaaf](https://github.com/mini-roostico/api-web/commit/73ddaaf1a23126a72f3eccc0206e399c98782eb2))
* extracted common tests in another job ([98f3f37](https://github.com/mini-roostico/api-web/commit/98f3f37ae0ffda0a5f6723e0ea740c43244bb92e))
* merged features from master ([79f9eee](https://github.com/mini-roostico/api-web/commit/79f9eeebe110fc32a2dda83676b8ff170835851e))
* modified context for docker-push-action ([f9d474c](https://github.com/mini-roostico/api-web/commit/f9d474c3014db45fd5d4dcb71be2d327f040e47d))
* tried removing verdaccio publish ([963fe9b](https://github.com/mini-roostico/api-web/commit/963fe9be9784f64c33973910029982331a76d792))
* updated all tsconfig.json to support correct relative imports ([aa6ca25](https://github.com/mini-roostico/api-web/commit/aa6ca25921d139f59ab8f9a9eb9fe9684d051de5))

### Style improvements

* fixed style issues ([d3e9304](https://github.com/mini-roostico/api-web/commit/d3e93048be9f04a9145dee7ec151c104e761117a))

### Refactoring

* modified relative imports to support NodeNext module resolution ([9ee3cfc](https://github.com/mini-roostico/api-web/commit/9ee3cfcd72d457d089c587b4aa72a7bb06ef3a45))

## [1.3.0](https://github.com/mini-roostico/api-web/compare/1.2.0...1.3.0) (2025-02-06)

### Features

* add source controller and route ([f193784](https://github.com/mini-roostico/api-web/commit/f193784a6bcc1f1a47ac5c91867b604d3a250ea0))

### Build and continuous integration

* re-run ci ([5d9a06e](https://github.com/mini-roostico/api-web/commit/5d9a06edb6a556ab605fc6e0cdbec7af4cb6f12a))

### Refactoring

* applied formatter ([44f87f6](https://github.com/mini-roostico/api-web/commit/44f87f64ba41b64abb511fd37aa5dd629f1a0ec3))

## [1.2.0](https://github.com/mini-roostico/api-web/compare/1.1.0...1.2.0) (2025-02-06)

### Features

* add user controller and route, redis configs and accesscontrol rules ([139d61c](https://github.com/mini-roostico/api-web/commit/139d61c9c9921e48f607ef204c84f85187d74c33))

### Refactoring

* refactor according to linter rules ([21a3315](https://github.com/mini-roostico/api-web/commit/21a3315e5cd2cdb5e35819e65980cbbc9e0238df))

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

* changed dependencies inside api and auth ([11608bd](https://github.com/mini-roostico/api-web/commit/11608bdfaddcc39f1b1e56813481ee85902f8cbe))
* fixed api-common version ([b3598db](https://github.com/mini-roostico/api-web/commit/b3598dbec223dd1fccd939c3d2517f55cc1f4d24))
* fixed next version release.config.mjs ([a9fbf13](https://github.com/mini-roostico/api-web/commit/a9fbf136abe6d922f1fe4a8d14b4e9fb95122e86))
* removed comment ([b685bef](https://github.com/mini-roostico/api-web/commit/b685bef97e166f1fe0c8addf008f5ae858f97ed1))
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
* added auth token setup for npmjs publishing ([965493c](https://github.com/mini-roostico/api-web/commit/965493c4846168c9c565e64d7e98506b9dfc310b))
* added debug step to look at github workspace ([214edbd](https://github.com/mini-roostico/api-web/commit/214edbd79d0a89832e7a7db44271294f420f09d7))
* added job to test common project ([fea3c45](https://github.com/mini-roostico/api-web/commit/fea3c451ec460215c38f69d6178427faeb5e1d40))
* added npm install ([3479ec4](https://github.com/mini-roostico/api-web/commit/3479ec450c55f4d5b227e306814c2800565c258a))
* change dockerfile conf file indexing ([db5c15d](https://github.com/mini-roostico/api-web/commit/db5c15d25aae9fc57760c3c05eac0259f26a0109))
* changed publishCmd in release.config.mjs ([d75b400](https://github.com/mini-roostico/api-web/commit/d75b4002c828a6161d39b56c92e1ba43b0610a4e))
* debugging verdaccio service with version 4 ([ba75b5c](https://github.com/mini-roostico/api-web/commit/ba75b5c354bf037b7bb3be66eb897bdac5549c85))
* deleted test-common job due to failing dependency resolution in later steps ([2aad259](https://github.com/mini-roostico/api-web/commit/2aad259401c3a5486341106ef32b162e4836cad6))
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
* replaced DEPLOYMENT_TOKEN ([7fac49c](https://github.com/mini-roostico/api-web/commit/7fac49c2ff1b38454b947d2c9defd8e41c18a2e9))
* switched job order ([84afe6e](https://github.com/mini-roostico/api-web/commit/84afe6ef884253723f07af91ddf0011c0fac38d6))
* switched to 'moduleResolution' = 'bundler' inside tsconfig.json ([16dcddb](https://github.com/mini-roostico/api-web/commit/16dcddb0e2126f6941e01d6aaedbad28f058bb1e))
* switched to npm for running verdaccio ([d8e68db](https://github.com/mini-roostico/api-web/commit/d8e68dbcbf5c6741d7e53b54de40996b2896154f))
* switched to service containers using standard verdaccio image ([539463c](https://github.com/mini-roostico/api-web/commit/539463c412e1097ca19049bd29298d2ced2f638d))
* switched to verdaccio:6, added health checks and debugging concurrency ([259457c](https://github.com/mini-roostico/api-web/commit/259457c6941cfec41c5d4e29d0493b73adcdbdf3))
* troubleshooting dockerfile ([85966ba](https://github.com/mini-roostico/api-web/commit/85966ba1b645eac8933dd23312b0937307af9664))
* updated dependencies and removed .npmrc ([dc6f678](https://github.com/mini-roostico/api-web/commit/dc6f678487a029ef059329b35ff97326e108b866))

### General maintenance

* changed licenses inside package.json ([f35b405](https://github.com/mini-roostico/api-web/commit/f35b4050faa1e4d021ee3ebe24bd52f0f0a7085d))
* **release:** 1.1.0 [skip ci] ([14074bd](https://github.com/mini-roostico/api-web/commit/14074bd1d6106e7df65e4a26a0c6098ec98dba85))
* **release:** 1.1.1 [skip ci] ([055105a](https://github.com/mini-roostico/api-web/commit/055105a3bbeb30521e1b0c7a609ea41da6c825a4))

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
