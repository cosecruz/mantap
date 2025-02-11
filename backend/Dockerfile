# Use official Node.js image
FROM node:20-slim

# Create user and group for security
# RUN addgroup --system app && adduser --system --ingroup app app

# Set working directory (owned by root)
WORKDIR /app

# Install pnpm manually (instead of using Corepack)
RUN npm install -g pnpm

# Copy package files with app ownership
COPY package.json pnpm-lock.yaml ./

# Ensure /app directory is owned by app (critical for write access)
# RUN chown -R app:app /app

# # Switch to app user
# USER app

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy app files with app ownership
COPY . .

# Expose port (frontend dev server)
EXPOSE 8000

# Run application (dev mode)
CMD ["pnpm", "start"]

# FROM node:20-alpine
# # RUN addgroup app && adduser -S -G app app
# # USER app
# WORKDIR /app
# COPY . /app
# COPY . .
# CMD ["node", "hello.js"]

# FROM node:20-slim AS base
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
# COPY . /app
# WORKDIR /app

# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# FROM base AS build
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# RUN pnpm run build

# FROM base
# COPY --from=prod-deps /app/node_modules /app/node_modules
# COPY --from=build /app/dist /app/dist
# EXPOSE 8000
# CMD [ "pnpm", "start" ]
