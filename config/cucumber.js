const{DEFAULT_THEME} = require("@cucumber/pretty-formatter")

module.exports = {

    default: {
        formatOptions: {
            snippetInterface: "async-await", 
            colorsEnabled: true,
            theme: {
                ...DEFAULT_THEME,
                'step text': ['green']
            }
        },
        compilerOptions: {
            esModuleInterop: true,
            resolveJsonModule: true
        },
        paths: [
            "src/test/features"
        ],
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/test/hooks/hooks.ts",
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "html:test-results/reports/cucumber-report.html",
            "json:test-results/reports/cucumber-report.json",
            
        ],
    },
};