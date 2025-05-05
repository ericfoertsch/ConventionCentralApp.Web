# Use node:20-alpine image to minimize the size
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5173 for the app
EXPOSE 5173

# Start the app using npm run dev
CMD ["npm", "run", "dev", "--", "--host"]
