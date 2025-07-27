# Use official Node.js image
FROM node:18

# Create working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build React app
RUN npm run build

# Install serve globally to serve the build folder
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Command to serve the build folder
CMD ["serve", "-s", "build", "-l", "3000"]
