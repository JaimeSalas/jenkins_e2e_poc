def front
def back 

def withDockerNetwork(Closure inner) {
  try {
    networkId = UUID.randomUUID().toString()
    sh "docker network create ${networkId}"
    inner.call(networkId)
  } finally {
    sh "docker network rm ${networkId}"
  }
}

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
                    withDockerNetwork{n ->
                        sh 'echo "$n"'
                    }
                }
            }
        }
    }
}