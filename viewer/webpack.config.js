const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = [{
    mode: nodeEnv,
    entry: {
      'bundle': __dirname + '/src/js',
    },
    output: {
      path: __dirname + '/public/js',
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        { 
            test: /\.js$/,
            exclude: /node_modules/, 
            use: 'babel-loader'
        }
      ]
    }
}]