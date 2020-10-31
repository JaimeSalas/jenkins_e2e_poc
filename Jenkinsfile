def front
def back 

pipeline {
    agent any
    stages {
        stage('Build front') {
            steps {
                script {
                    front = docker.build("jaimesalas/e2e", "--pull -f ./front/Dockerfile.e2e ./front")
                }
            }
        }
        stage('Build back') {
            steps {
                script {
                    back = docker.build("jaimesalas/e2e-back", "--pull -f ./back/Dockerfile ./back")
                }
            }
        }
        stage ('e2e') {
            steps {
                script {
                    sh 'echo future e2e'
                }
            }
        }
    }
}