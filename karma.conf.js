module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'jasmine-matchers'],
        preprocessors: {
            '*.js': 'coverage'
        },
        files: [
            '*.js',
            '*.spec.js'
        ],
        plugins: [
            'karma-jasmine', 
            'karma-jasmine-matchers', 
            'karma-chrome-launcher',
            'karma-coverage'
        ],
        reports: ['dots', 'coverage'],
        color: true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};