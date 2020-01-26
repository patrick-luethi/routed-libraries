module.exports = {
  name: 'non-lazy-routing-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/non-lazy-routing-lib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
