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
