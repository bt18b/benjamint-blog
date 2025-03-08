FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml (if you have one)
COPY package.json pnpm-lock.yaml* ./

# Install all dependencies, including devDependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of your project files
COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev", "--host", "0.0.0.0", "--port", "3000"]
