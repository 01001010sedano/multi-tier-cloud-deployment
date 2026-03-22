# Step 1: Build the React Application using Node
FROM node:18-alpine AS build

WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy all customized source files (Tailwind configs, React sources, generic public assets)
COPY frontend/ ./
# Build the production React files in /app/dist
RUN npm run build

# Step 2: Serve the Built SPA utilizing Nginx
FROM nginx:alpine

# Copy the generated output from the "build" stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
