# Use an official Node.js runtime as the base image
FROM node:19-alpine
# Set the working directory inside the container
WORKDIR /
# Copy package.json and yarn.lock (or package-lock.json) to the working directory
COPY . .
# Install dependencies
RUN npm i && npm run build
# Expose port 4173
EXPOSE 4173
# Start the app
CMD npm run preview