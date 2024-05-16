![image](https://github.com/itsarkcodes/devops-assignment/assets/87442305/a12e00d1-c407-40ec-8e25-e8d36c77c770)

# Step 1: Clone the GitHub Repository
Clone the repository to your local machine:
``git clone <https://github.com/pranavtotla/assignment-boilerplate>``

cd assignment-boilerplate

# Step 2: Create an EKS Cluster
Use eksctl to create a Kubernetes cluster with at least 3 nodes:  
```eksctl create cluster --name=my-cluster --nodes=3 --region=<your-aws-region>```

Replace <your-aws-region> with the desired AWS region (e.g., us-west-2).

# Step 3: Configure kubectl to Use Your New Cluster  
After the cluster is created, configure kubectl to use it:  
```aws eks --region <your-aws-region> update-kubeconfig --name my-cluster```


# Step 4: Create a Dockerfile
In the cloned repository directory, create a Dockerfile to build the Node.js application:
```
FROM node:14
# Create and change to the app directory.
WORKDIR /usr/src/app
# Install app dependencies.
COPY package*.json ./
RUN npm install
# Copy app source code.
COPY . .
# Start the app.
CMD [ "node", "index.js" ]
```


