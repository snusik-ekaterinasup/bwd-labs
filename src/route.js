plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        chunks: ['index'],
        filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/secondPage.html',
        inject: true,
        chunks: ['index'],
        filename: 'secondPage.html'
 
 
    }),
 ],
 