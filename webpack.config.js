module.exports = {
  entry: "./game/nyan_jump.js",
  output: {
    filename: "./assets/bundle.js"
	},
	devtool: "source-map",
  module: {
    loaders: [
      {
        test: [ /\.js?$/,],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
