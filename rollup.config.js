import replace from '@rollup/plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import autoNamedExports from 'rollup-plugin-auto-named-exports';

const isProd = process.env.NODE_ENV === 'production';
const extensions = ['.js', '.ts', '.tsx'];



export default {
  input: 'src/index.tsx',
  output: {
    file: 'public/index.js',
    format: 'iife',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    }),
    babel({
      extensions,
      exclude: /node_modules/,
      babelrc: false,
      runtimeHelpers: true,
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [
        'react-require',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-proposal-object-rest-spread', {
          useBuiltIns: true,
        }],
        ['@babel/plugin-transform-runtime', {
          corejs: 2,
          helpers: true,
          regenerator: true,
          useESModules: false,
        }],
      ],
    }),
    resolve({
      extensions,
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: [
        "node_modules",
        "node_modules/**",
        "node_modules/**/*",],

      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PureComponent',
          'PropTypes',
          'createElement',
          'Fragment',
          'createPortal',
          'isFragment',
          'cloneElement',
          'useCallback',
          'StrictMode',
          'useMemo',
          'useState',
          'useReducer',
          'useContext',
          'createFactory',
          'useRef',
          'createRef',
          'useEffect',
          'createContext',
          'isValidElement',
          'isValidElementType',
        ],
        'node_modules/react-dom/index.js': [
          'render',
          'hydrate',
          'findDOMNode',
          'unmountComponentAtNode',
          'createPortal',
        ],
        'node_modules/react-is/index.js': [
          'isValidElementType'
        ],
      },
    }),
    autoNamedExports(),
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: 'inline',
    }),

    serve({
      open: true,
      historyApiFallback: true,
      contentBase: ['public']
    }),
    livereload(),
    (isProd && terser()),
  ],
};
