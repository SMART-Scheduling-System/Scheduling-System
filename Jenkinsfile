pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('Git') {
            steps {
                git branch: 'main', url: 'https://github.com/SMART-Scheduling-System/Scheduling-System.git'
            }
        }
        
         stage('Install dependencies') {
            steps {
                bat 'npm install'
                bat 'cd ./client/ && npm install'
                
            }
        }
        stage('Build'){
            parallel {
                stage('Backend Build') {
            steps {
                bat 'cd build_timeoutbackend && node server.js'
            }
        }
        
        stage('Frontend Build') {
            steps {
                bat 'cd ./client/  && npm run build-win'
              
            }
        }
                
            }
        }
        
        stage('Test') {
            steps {
                bat 'cd __tests__ && npm run test'
            }
        }
        
        stage('Deployment') {
            steps {
                bat 'docker-compose build'
            }
        }
    }
}

