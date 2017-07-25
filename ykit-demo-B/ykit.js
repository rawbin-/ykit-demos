module.exports = {
    plugins: [{
        name:'mock',
        options:{
            confPath:'./tests/mockdata/mockconf.js'
        }
    }],
    config: {
        exports: [
            './scripts/index.js',
            './styles/index.css'
        ],
        modifyWebpackConfig: function(baseConfig) {
            // edit ykit's Webpack configs

            return baseConfig;
        }
    },
    hooks: {},
    commands: []
};
