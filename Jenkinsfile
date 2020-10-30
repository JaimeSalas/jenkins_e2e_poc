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
                    docker.script.sh(script: "docker run --rm jaimesalas/e2e npm run test:e2e:local", returnStdout: false)
                }
            }
        }
    }
}