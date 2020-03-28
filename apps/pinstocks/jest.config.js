module.exports = {
  name: 'pinstocks',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pinstocks',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
