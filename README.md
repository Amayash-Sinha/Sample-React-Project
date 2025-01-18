Key Steps involved in the project:
1. Setup a Basic React Application
   > Install Node.js and npm: Ensure Node.js and npm are installed.
   > Create a React App
   > Test the App Locally
   > Initialize a Git Repository
   > Push Code to a GitHub Repository
   
2. Setup CircleCI
   > Create a CircleCI Account: Sign up using GitHub credentials.
   > Authorize GitHub Repository: Link your GitHub account and enable the repository for the project.
   > Add .circleci/config.yml: Create a .circleci folder and add a config.yml file inside
   > Commit and Push

3. Prepare AWS EC2 Instance
   > Launch an EC2 Instance:
       - Select an Ubuntu instance.
       - Configure security groups to allow SSH (port 22) and HTTP (port 80).
   > SSH into EC2 Instance
       ssh -i <key.pem> ubuntu@<EC2-IP>
   > Install Required Packages
       sudo apt update
       sudo apt install -y nginx
   > Setup Nginx:
       Update the default nginx config to serve files from /var/www/html
   > Change root directive
   > Restart Nginx
       sudo systemctl restart nginx
  
4. Configure CircleCI Deployment
   > Set Up SSH Access for CircleCI
       - Generate an SSH key on your local machine
         ssh-keygen -t rsa -b 4096 -C "circleci-deploy"
       - Add the public key (~/.ssh/id_rsa.pub) to the EC2 instance
       - Add the private key (~/.ssh/id_rsa) to CircleCI under Project Settings > SSH Permissions.
   > Test Deployment: Commit changes and ensure the pipeline builds and deploys the app.

5. Access the Application
   > Open your browser and navigate to http://<EC2-IP>. You should see the deployed React app.
 
