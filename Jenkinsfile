pipeline {
    agent any
    stages {
        stage("checkout") {
            steps {
                checkout scm
            }
        }

        stage("build docker images and run container"){
            steps {
                
                    sh  'echo root | sudo -S docker compose up --build'
                
            }
        }
    }
}