pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Janakiraman0207/jenkins-fullstack-app.git'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                sh 'cd backend && npm install'
            }
        }

        stage('Start Backend Using PM2') {
            steps {
                sh '''
                    cd backend
                    pm2 stop backend || true
                    pm2 start index.js --name backend
                '''
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                    sudo rm -rf /var/www/html/*
                    sudo cp -r frontend/* /var/www/html/
                '''
            }
        }
    }
}
