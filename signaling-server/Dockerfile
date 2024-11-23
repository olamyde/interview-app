# Signaling Server Dockerfile (WebRTC Signaling Server)
FROM node:18

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy signaling server code
COPY . .

# Run the signaling server
CMD ["node", "server.js"]

# Expose port 8080
EXPOSE 8080
