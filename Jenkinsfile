pipeline {
  agent any

  triggers {
    // From GitHub webhook to trigger the pipeline
    githubPush()
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://github.com/jtaraya/gallery.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm install'
          } else {
            bat 'npm install'
          }
        }
      }
    }

    stage('Deploy to Render') {
      steps {
        withCredentials([string(credentialsId: 'render-deploy-hook')]) {
          script {
            if (isUnix()) {
              sh 'curl -X POST render-deploy-hook'
            } else {
              bat 'curl -X POST render-deploy-hook'
            }
          }
        }
      }
    }
  }
}

  post {
    success {
      echo 'Deployment successful!'
    }
    failure {
      echo 'Deployment failed.'
    }
  }

