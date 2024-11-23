# Backend API Dockerfile (Node.js Backend)
FROM node:18

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application code
COPY . .

# Set environment variables for production
ENV NODE_ENV=production

# Run the application
CMD ["npm", "start"]

# Expose port 5000
EXPOSE 5000
