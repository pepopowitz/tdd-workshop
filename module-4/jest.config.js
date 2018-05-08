module.exports = {
  displayName: 'module-3',
  modulePaths: ['<rootDir>'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  testPathIgnorePatterns: ['../node_modules', '../.git'],
  transformIgnorePatterns: ['../node_modules', '../.git'],
  roots: ['<rootDir>'],
  // setupTestFrameworkScriptFile: '<rootDir>/test.setup.js',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
