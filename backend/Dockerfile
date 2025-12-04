# Use official Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy app code
COPY . .

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
