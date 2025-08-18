FROM node:20-bullseye

# Set the working directory
WORKDIR /chat-app-client

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV NEXT_PUBLIC_API_URL=https://chat-app-server-k3ih.onrender.com

# Build application
RUN npm run build

# Command to run the application
CMD ["npm", "start"]
