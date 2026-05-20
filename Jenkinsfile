pipeline {
  agent any

  environment {
    IMAGE_NAME = "devanvi2611/cicd-demo"
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Anvi-dev/cicd-demo.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
      }
    }

    stage('Push to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds',
                         usernameVariable: 'DOCKER_USER',
                         passwordVariable: 'DOCKER_PASS')]) {
          sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
          sh "docker push ${IMAGE_NAME}:${BUILD_NUMBER}"
        }
      }
    }

    stage('Deploy') {
      steps {
        sh "docker stop app || true"
        sh "docker rm app || true"
        sh "docker run -d --name app -p 3000:3000 ${IMAGE_NAME}:${BUILD_NUMBER}"
      }
    }

  }
}
