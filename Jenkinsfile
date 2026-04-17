pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "mano0603/devops-app"
    }
//https://github.com/Murugan0603/devops-project2.git
    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Murugan0603/devops-project.git'
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
                bat 'docker login -u mano0603 -p dckr_pat_lDJTc_vYxFUeV_prl9vioHUEaQw'
                bat 'docker push %DOCKER_IMAGE%'
            }
        }

        stage('Terraform Apply') {
            steps {
                dir('terraform') {
                    bat 'terraform init'
                    bat 'terraform apply -auto-approve'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'set KUBECONFIG=C:\\Users\\ELCOT\\.kube\\config && kubectl apply -f k8s/'
            }
        }
    }
}
