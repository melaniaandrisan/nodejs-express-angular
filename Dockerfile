#Docker image name nodejs-express-angular:1.0.0

#For security mkdir -p ~/.docker/machine && touch ~/.docker/machine/no-error-report

#Started from the official repository https://hub.docker.com/_/node/
#follow this guideline https://github.com/docker/docker/blob/master/docs/examples/nodejs_web_app.md
FROM node:latest

# Create app directory
RUN mkdir -p usr/src/nodeapp
WORKDIR /usr/src/nodeapp

# Install git to clone the public repository
# RUN apt-get update && apt-get install -y git

# Clone public repository
# RUN git clone https://github.com/melaniaandrisan/nodejs-express-angular.git /usr/src/nodeapp

RUN git clone --branch=master https://jenkins_build-haufe-lexware:UrH&uRJ4+Xb9@bitbucket.org/haufegroup/ssm.eloqua.git /usr/src/nodeapp
# The clone if the private repository is done by go.cd

# Install app dependencies
COPY package.json /usr/src/nodeapp
RUN npm install

#Bundle app source if you get it from local folder
#COPY . /usr/src/nodeapp

#Expose to docker daemon
EXPOSE 3000

#PORTS 80:3000 just in docker compose

#Start the server
CMD ["node", "app.js"]


#connect the shell to default machine
#eval "$(docker-machine env default)"

# To build docker image
# docker build -t <user_name>/node-web-app .

#Run docker in detached mode and redirect a public port to a private port inside the container
#docker run -p 49160:3000 -d <user_name>/node-web-app
#returns the container id

# remove all containers with status Exited
# docker rm $(docker ps -a | grep Exited | awk '{print $1}')

#get the ports of the container
#docker port <container_name>

#get the ip of the machine
#docker-machine ip <machine_name>

#connect to the http://ip_of_the_machine:the_mapped_port http://192.168.99.101:49160/
#https://docs.docker.com/engine/installation/mac/#container-port-redirection
