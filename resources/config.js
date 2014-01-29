var Config = {

    // path of the temporary directory to store coverage files in (bin and src subdirs are created).
    // this directory is automatically removed by this tool, it's just required for the coverage executable.
    target: "build-tmp",

    // path to the directory containing the testrunner.html
    templates: "resources",

    src: {
        // application related javascripts (which are measured by the coveragetool)
        application: "js/todo/*.js",

        // library javascripts used by the application (which are not measured)
        libraries: "resources",

        // path to the directory containing all your qunit tests
        tests: "tests",

        // path to the directory containing the qunit.css, qunit.jss and qunit-coverage.js
        qunit: "resources",

        // path to the directory with all your mockupdata used bu your qunit tests
        mockups: "mockups"

    },

    // paths where to export your junit and cobertura results
    output: {
        junit: "reports/junit.xml",
        cobertura: "reports/cobertura.xml"
    }

};