import './style.css'
import './header.css'
import './404.css'
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        chunks: ['index'],
        filename: 'index.html'
    }),

 ]
 