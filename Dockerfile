# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app/client

# Copy package.json and package-lock.json to the container
COPY client/package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY client/ .

# Build the React app for production
RUN npm run build

# Expose port 80 for the React app
EXPOSE 80

# Start the React app
CMD ["npm", "start"]

FROM node:14 as client-build

# Set the working directory to /app/client
WORKDIR /app/client

# Copy the client-side code and package.json/package-lock.json
COPY client/package*.json ./
COPY client/ ./

# Install the client dependencies
RUN npm install

# Build the client app
RUN npm run build

# Stage 2: Create a production image
FROM nginx:latest

# Copy the React build from the client-build stage to the nginx public directory
COPY --from=client-build /app/client/build /usr/share/nginx/html

# Expose port 80 (default for HTTP traffic)
EXPOSE 80

# The nginx container will automatically start serving the React app

