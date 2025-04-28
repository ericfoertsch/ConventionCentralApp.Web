FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy everything else
COPY . .

# Expose the Vite port
EXPOSE 5173

# Run dev server with host binding
CMD ["npm", "run", "dev", "--", "--host"]
