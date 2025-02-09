export default {
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transformIgnorePatterns: ["/node_modules/"],
};