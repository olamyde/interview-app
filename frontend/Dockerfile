# Frontend Dockerfile (Parakeet AI UI)
# Dockerfile for the React-based frontend
# FROM node:18 AS build

# WORKDIR /app

# # Copy and install dependencies
# COPY package.json package-lock.json ./
# RUN npm install

# # Copy the application code and build
# COPY . .
# RUN npm run build

# # Serve the production build
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 3000
# EXPOSE 3000

# Build stage
FROM node:18 AS build
WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application code and build
COPY . .
RUN npm run build

# Serve the production build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (Nginx default)
EXPOSE 80 
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
