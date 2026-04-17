pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "mano0603/devops-app"

        // AWS credentials from Jenkins
        AWS_ACCESS_KEY_ID = credentials('aws-access-key')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-key')
        DOCKER_PASSWORD = credentials('docker-password')
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Murugan0603/devops-project2.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('app') {
                    bat 'docker build -t %DOCKER_IMAGE% .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                bat '''
                echo %DOCKER_PASSWORD% | docker login -u mano0603 --password-stdin
                docker push %DOCKER_IMAGE%
                '''
            }
        }

        stage('Terraform Apply') {
            steps {
                dir('terraform') {
                    bat '''
                    set AWS_ACCESS_KEY_ID=%AWS_ACCESS_KEY_ID%
                    set AWS_SECRET_ACCESS_KEY=%AWS_SECRET_ACCESS_KEY%
                    set AWS_DEFAULT_REGION=ap-south-1

                    terraform init
                    terraform apply -auto-approve
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat '''
                set KUBECONFIG=C:\\Users\\ELCOT\\.kube\\config
                kubectl apply -f k8s/
                '''
            }
        }
    }
}
