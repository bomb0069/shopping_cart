module.exports = {
  "roots": [
    "<rootDir>"
  ],
  "transform": {
    "\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  "testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.js?",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
}