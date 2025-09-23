pipeline {
    agent any
    tools {
        nodejs 'nodejs-22'   
    }

    stages {
        stage('checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/jtaraya/gallery.git'
            }
        }

        stage('Install Dependencies') {              
           steps {                                  
                echo 'Installing Node.js dependencies...'                                      
                 sh 'npm install'                      
            }                                        
        } 
       
        stage('Test') {
            steps {
                withCredentials([
                    string(credentialsId: 'mongo-username', variable: 'MONGO_USERNAME'),
                    string(credentialsId: 'mongo-password', variable: 'MONGO_PASSWORD'),
                    string(credentialsId: 'mongo-cluster', variable: 'MONGO_CLUSTER')
                ]) {
                    echo 'Running tests...'
                    sh 'npm test'
                }
            }

            post {
                failure {
                    emailext (
                        to: 'jacobtaraya@gmail.com',
                        subject: 'Jenkins Pipeline Failed - Test Stage',
                        body: 'The test stage in Jenkins pipeline has failed. Please check the console output for details.',
                        attachLog: true
                    )
                }
            }
        }
       
        stage('Deploy to Render') {
            steps {
                withCredentials([string(credentialsId: 'gallery-render-hook', variable: 'DEPLOY_HOOK')]) {
                    sh 'curl -X POST $DEPLOY_HOOK'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment to Render was successful!'
        }
        failure {
            echo 'Deployment to Render failed.'
        }
    }
}

post {
        success {
            withCredentials([string(credentialsId: 'slack-webhook', variable: 'SLACK_WEBHOOK')]) {
                sh '''
                    curl -X POST -H 'Content-type: application/json' \
                    --data '{"text":"✅ Jenkins Pipeline Success! Build ID: '${BUILD_NUMBER}' 
                '''
            }
        }
        failure {
            echo 'Pipeline failed!'
        }
    }

