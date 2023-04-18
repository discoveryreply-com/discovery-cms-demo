import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    watch: {
        include: ['./src/**', './src/types.ts'],
        clearScreen: false,
    },
    external: ['react', 'react-dom'],
    plugins: [
        external(),
        resolve({ extensions: ['.jsx', '.js', '.ts'] }),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            extensions: ['.jsx', '.js', '.ts'],
            exclude: ['node_modules/**', 'src/discovery-cms-connector.js', 'src/nextjs/**'],
        }),
        terser(),
        copy({
            targets: [
                { src: 'src/discovery-cms-connector.js', dest: 'dist/' },
                { src: 'src/nextjs/**', dest: 'dist/nextjs'}
            ],
        }),
    ],
};
