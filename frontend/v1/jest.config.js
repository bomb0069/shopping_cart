module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['./setupTests.js'],
  moduleNameMapper: {
    '\\.(scss|sass|css|svg)$': 'identity-obj-proxy'
  }
}
