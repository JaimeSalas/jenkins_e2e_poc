def image

pipeline {
    agent any 
    stages {
        stage('Build e2e runner') {
            steps {
                script {
                    image = docker.build("jaimesalas/e2e", "--pull -f ./Dockerfile.e2e .")
                }
            }
        }
        stage('e2e') {
            steps {
                script {
                    image.withRun { c ->
                        sh 'npm run test:e2e:local'
                    }
                }
            }
        }
    }
}