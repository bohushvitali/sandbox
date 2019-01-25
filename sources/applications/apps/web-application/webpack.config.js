const path = require('path');
const DotenvPlugin = require('webpack-dotenv-extended-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const ContentInjectionPlugin = require(`${process.cwd()}/tools/build-extension/index-inject.plugin`);

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const STATIC_DIR_PATH = path.join(process.cwd(), 'dist', 'apps', 'web-application');

const ROUTES = [];

function NothingPlugin() {
  this.apply = function() {};
}

module.exports = {
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    crypto: true,
    stream: true
    // process: 'mock',
    // tty: 'mock'
    // global: true,
    // tty: false,
    // module: false,
    // clearImmediate: false,
    // setImmediate: false,
    // os: 'empty',
  },
  plugins: [
    process.env.DEVELOPMENT_MODE
      ? new NothingPlugin()
      : new PrerenderSPAPlugin({
          staticDir: STATIC_DIR_PATH,
          routes: ROUTES,
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true
          },
          renderer: new Renderer({
            injectProperty: '__PRERENDER_INJECTED',
            inject: {
              foo: 'bar'
            },
            maxConcurrentRoutes: 4,
            renderAfterDocumentEvent: 'custom-render-trigger',
            renderAfterElementExists: 'my-app-element',
            renderAfterTime: 5000,
            headless: true,
            executablePath: process.env.CHROME_BIN
          })
        })
    // new ContentInjectionPlugin()
  ]
};