module.exports = {
  name: 'lazy-routing-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lazy-routing-lib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
