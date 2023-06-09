pipeline {
	agent any
	triggers {
		pollSCM("*/5 * * * *")
		//cron("* * * * *")
	}
	
	stages {
		stage("build") {
			steps {
				sh "docker build . -t ckfrontend"
				nodejs(nodeJSInstallationName: 'nodejs', configId: '8888f8d6-4952-46cb-ae62-2c518decba43') {
					sh 'npm install'
					sh 'npm run build'
				}
				// Deploy the docker container so that is ready for testing later
				catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
					sh "docker kill \$(docker ps -qf expose=3000)"
				}
				sh "docker run --rm -p 3000:3000 -d ckfrontend"
			}
		}

		stage('Testing') {
			steps {
				catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
					nodejs(nodeJSInstallationName: 'nodejs', configId: '8888f8d6-4952-46cb-ae62-2c518decba43') {
						sh 'npm install'
						sh 'npm test'
					}
				}
				clover(cloverReportDir: 'coverage', cloverReportFileName: 'clover.xml',
					// optional, default is: method=70, conditional=80, statement=80
					healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80],
					// optional, default is none
					unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50],
					// optional, default is none
					failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]
				)
				sh 'testcafe "chromium:headless" testcafé/CreateCollectionPageTest.js testcafé/LoginPageTest.js testcafé/OverviewPageTest.js testcafé/RegisterPageTest.js'
				sh 'k6 run k6/loadtest.js'
			}
		}

		stage("deploy") {
			steps {
				catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
					sh "docker kill \$(docker ps -qf expose=3000)"
				}
				sh "docker run --rm -p 3000:3000 -d ckfrontend"
			}
		}
	}
}
