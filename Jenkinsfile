pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        
         stage('Install dependencies') {
            steps {
                sh 'npm install'
                dir('client') {
                  sh'npm install'
              }
                
            }
        }
        
        
        stage('Frontend Build') {
            steps {
                dir('client') {
                  sh'npm start'
              }
            }
        }
        
        stage('Backend Build') {
            steps {
                sh 'npm run serve'
            }
        }
        
        stage('Deployment') {
            steps {
                echo "docker-compose commands"
            }
        }
    }
}

