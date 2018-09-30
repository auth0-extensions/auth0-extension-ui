import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: 'src/components/index.js',
  output: {
    file: pkg.main,
    format: 'cjs'
  },
  plugins: [
    babel({
      babelrc: true
    }),
    resolve({
      browser: true
    }),
    commonjs({
      include: [
        'node_modules/**'
      ],
      namedExports: {
        'node_modules/react/index.js': [ 'Component', 'PureComponent', 'Fragment', 'Children', 'createElement', 'cloneElement' ],
        'node_modules/react-dom/index.js': [ 'render', 'findDOMNode' ]
      }
    }),
    postcss()
  ]
};
