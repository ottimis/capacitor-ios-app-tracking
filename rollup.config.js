import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/esm/index.js',
    format: 'esm',
    sourcemap: true,
  },
  external: ['@capacitor/core'],
  plugins: [
    typescript({ declaration: false }),
  ],
};
