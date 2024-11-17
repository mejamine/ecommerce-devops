pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                    sh 'docker compose -f compose.yml build'
                }
        }

        stage('Run Containers') {
            steps {
                
                    sh 'docker compose -f compose.yml up -d'
                }
            
        }

        stage('Stop Containers') {
            steps {
                
                    sh 'docker compose -f compose.yml down'
                }
            
        }

        stage('Tag and Push Images to Docker Hub') {
            steps {
                
                    sh "docker tag mejbri1998/api:latest mejbri1998/api:latest"
                    sh "docker tag mejbri1998/client:latest mejbri1998/client:latest"
                    
                    sh "docker push mejbri1998/api:latest"
                    sh "docker push mejbri1998/client:latest"
                }
            
        }
    }
    post {
        always {
            sh 'docker system prune -af'
        }
    }
}
