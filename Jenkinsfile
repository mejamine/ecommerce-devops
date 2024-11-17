pipeline {
    agent any
    stages {
        stage("checkout") {
            steps {
                checkout scm
            }
        }

        stage("install dependencies api") {
            steps {
                dir('api') {
                    sh 'npm install'
                }
            }
        }

        stage("install dependencies client") {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }

        stage("build docker images and run container"){
            steps {
                
                    sh  'echo root | sudo -S docker compose up --build'
                
            }
        }
    }
}