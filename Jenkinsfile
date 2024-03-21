pipeline {
    environment {
        dockerImageName = "abqari63/greetings-project" // Corrected variable name
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
                    dockerImage = docker.build dockerImageName // Corrected variable name
                }
            }
        }

        stage('Pushing Image') {
            environment {
                registryCredential = 'dockerhublogin'
            }
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        dockerImage.push() // Push the built Docker image to Docker Hub
                    }
                }
            }
        }

        stage('Deploying App to Kubernetes') {
            steps {
                script {
                    // Deploy the application to Kubernetes using the kubeconfig stored in Jenkins
                    kubernetesDeploy(configs: './kubernetes/greetings-deployment.yaml', kubeconfigId: 'kubeconfig')
                    kubernetesDeploy(configs: './kubernetes/greetings-service.yaml', kubeconfigId: 'kubeconfig')
                }
            }
        }
    }
}
