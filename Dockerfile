# Use an official Node.js image as the base
FROM node:20.17-alpine
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json, * here means anything starting with package.
COPY package*.json .
# Install dependencies in the container
RUN npm install
# Copy the rest of the application code
COPY . .
# Give the Port number where local react application is running as you r going to expose that port
EXPOSE 3000

CMD ["npm","run","dev"]