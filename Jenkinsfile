pipeline {
    agent any
    
    stages{
        stage('Git CheckOut'){
            steps{
                cleanWs()
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'GIT_HUB_CREDENTIALS', url: 'https://github.com/muhammadaqib1994/jenkin-pipeline-for-nodejs-app.git']])
                
            }
        }
        
        stage('Build docker image'){
            steps{
                script{
                    sh 'docker build -t aqibansari/hello-world:latest .'
                }
            }
        }
        
        stage('Push image to Docker Hub'){
            steps{
                script{
                    withCredentials([string(credentialsId: 'DOCKER_HUB_PASSWORD', variable: 'dockerhubpwd')]) {
                        sh 'docker login -u aqibansari -p ${dockerhubpwd}'
                    }
                  
                    sh 'docker push aqibansari/hello-world:latest'
                }
            }
        }
        
        stage('Deploy to k8s'){
            steps{
                script{
                    kubeconfig(credentialsId: 'mykubeconfig', serverUrl: 'https://172.31.54.73:8443') {
                        // sh 'kubectl delete -f deployment.yml'
                        sh 'kubectl apply -f deployment.yml'
                        sh 'kubectl rollout restart -f deployment.yml'
                        sh 'kubectl apply -f service.yml'
                        sh 'kubectl get pods'
                        sh 'kubectl get service'
                    }
                    
                    
                }
            }
        }
        
    }
}
