pipeline {
  agent any
  
   tools {nodejs "node"}
    
    stages {
        stage("Clone code from GitHub") {
            steps {
                script {
                    checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'GITHUB_CREDENTIALS', url: 'https://github.com/Abqari63/greeting-using-react']])
                }
            }
        }
     
        stage('ReactJS Project Build') {
            steps {
                sh 'npm install'
            }
        }
  
        stage('Build ReactJS Docker Image') {
            steps {
                script {
                    sh 'docker build -t abqari63/greetings:latest .'
                }
            }
        }


        stage('Deploy Docker Image to DockerHub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'DOCKER_CREDENTIALS', variable: 'DOCKER_CREDENTIALS')]) {
                        sh 'docker login -u abqari63 -p ${DOCKER_CREDENTIALS}'
                    }
                    sh 'docker push abqari63/greetings:latest'
                }
            }   
        }
         
        stage('Deploying Node App to Kubernetes') {
            steps {
                script {
                    sh ('aws eks update-kubeconfig --name react-app-cluster --region us-east-1')
                    sh "kubectl get ns"
                    sh "kubectl apply -f kubernetes/greetings.yaml"
                }
            }
        }

    }
}