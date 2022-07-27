module.exports = function (api) {
    api.cache(true);

    return {
        presets: ['@babel/preset-react'],
        plugins: ['@babel/plugin-transform-react-jsx', '@babel/plugin-syntax-jsx'],
    };
};
