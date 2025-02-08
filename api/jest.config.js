export default {
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transformIgnorePatterns: ["/node_modules/"],
    moduleNameMapper: {
        "^(\\..*)\\.js$": "$1", // Only applies to relative imports
    },
    setupFilesAfterEnv: ['./test/jest.setup.ts'],
};