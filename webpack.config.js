var path = require('path')

module.exports= {
    entry: `${path.join(__dirname,'/client/src')}/index.jsx`,
      output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'/client/dist'),
      },
  
    module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|browser_components)/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react','@babel/preset-env',{
                'plugins': ['@babel/plugin-proposal-class-properties']}]
          }
        }
    },
 
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },

]
   
},

  }
