//esm
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from "@rollup/plugin-commonjs";
export default {
    input: "./index.js",
    out: [{
        file: "dist/bundle.esm.js",
        format: "esm"
    },
    {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
        plugins: [terser()]

    }],
    plugins: [nodeResolve(), json(), commonjs()],
    external: ["vue"]
}