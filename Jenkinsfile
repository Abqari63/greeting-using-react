pipeline {
    environment {
        dockerimagename = "abqari63/greetings-project"
    }

    agent any

    stages {
        stage('Checkout Source') {
            steps {
                git 'https://github.com/Abqari63/greeting-using-react.git'
            }
        }

        stage('Build image') {
            steps {
                script {
                    dockerImage = docker.build dockerimagename
                }
            }
        }

        stage('Pushing Image') {
            environment {
                registryCredential = 'dockerhublogin'
            }
            steps {
                script {
                    docker.withRegistry('https://hub.docker.com/', registryCredential)
                }
            }
        }

        stage('Deploying App to Kubernetes') {
            steps {
                script {
                    kubernetesDeploy(configs: './kubernetes/greetings-deployment.yaml', kubeconfigId: 'kubeconfig')
                }
            }
        }
    }
}