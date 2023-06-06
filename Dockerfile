# Use an official Node.js runtime as the base image
FROM node:14-alpine
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and yarn.lock (or package-lock.json) to the working directory
COPY . .
# Install dependencies
RUN yarn install --frozen-lockfile
# Build the React app for production
RUN yarn build
# Expose port 3000
EXPOSE 3000
# Start the app
CMD ["yarn", "start"]