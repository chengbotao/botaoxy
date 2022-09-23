/*
 * @Author: Chengbotao
 * @Date: 2022-06-05 18:00:17
 */
import { resolve } from 'path';
import pkg from './package.json';

import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';
import DefineOptions from 'unplugin-vue-define-options/rollup';
import vue from 'rollup-plugin-vue';
// import eslint from '@rollup/plugin-eslint';
// import { babel } from '@rollup/plugin-babel';

const { version } = pkg;
const outputConf = {
  banner: `/* vue3xy version ${version} */`,
  footer: `/* Follow me on GitHub! @chengbotao */`,
};

export default {
  input: './src/index.ts',
  output: [
    {
      file: resolve(__dirname, 'dist', 'vue3xy.esm.js'),
      format: 'esm',
      ...outputConf,
    },
    {
      file: resolve(__dirname, 'dist', 'vue3xy.js'),
      format: 'umd',
      name: 'vue3xy',
      ...outputConf,
    },
  ],
  plugins: [
    alias({
      entries: {
        packages: resolve(__dirname, 'packages'),
      },
    }),
    nodeResolve({
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json', '.vue'],
    }),
    commonjs(),
    json(),
    // eslint(),
    DefineOptions(),
    typescript({
      compilerOptions: {
        resolveJsonModule: true,
        allowSyntheticDefaultImports: true,
      },
    }),
    vue(),
  ],
};
