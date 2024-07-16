pipeline {
    agent { docker { image 'node:20.15.1-alpine3.20' } }
    stages {
        stage('build') {
            steps {
                echo 'Buiding...'
                sh 'node --version'
            }
        }
        stage('test') {
            echo 'Testing...'
            echo 'Synk Stage'
            synkSecurity(
                synkInstallation: 'synk@latest',
                synkTokenId: '95ee304c-8980-46e1-aac5-3bd06c945f09'
            )
        }
    }
}