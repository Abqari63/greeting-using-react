# Use Node.js as base image
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
