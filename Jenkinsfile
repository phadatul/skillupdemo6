pipeline {
    agent any

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/phadatul/skillupjava.git'
            }
        }
        
        stage('Build') {
            steps {
                bat 'mvn install' 
            }
        }
        
        stage('Deploy') {
            steps {
                bat 'java -jar target/HelloApp-0.0.1-SNAPSHOT.jar'
            }
        }
    }
}
