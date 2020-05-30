import path from 'path';
import multiInput from 'rollup-plugin-multi-input';
import multi from '@rollup/plugin-multi-entry';
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/packages/*.js',
    output: {
      format: 'cjs',
      file: 'dist/index.js'
    },
    plugins: [
      multi(),
      resolve()
    ]
  },
  {
    input: 'src/packages/*.js',
    output: {
      format: 'cjs',
      dir: 'dist'
    },
    plugins: [
      multiInput({
        relative: 'src/',
        transformOutputPath: (output, input) => `lib/${path.basename(output)}`,
      }),
      resolve()
    ]
  }
];
