const path = require('path');

module.exports = {
  src: path.resolve(__dirname, '../src'), // source files
  assets: path.resolve(__dirname, '../src/assets'), // assets files
  build: path.resolve(__dirname, '../../back/assets'), // production build files
  static: path.resolve(__dirname, '../public'), // static files to copy to build folder
  envPath: path.resolve(__dirname,
    path.join('../', process.env.IS_PROD ? '.env.public.prod' : '.env.public.dev'),
  ), // switch .env file path depending on production / dev
};
