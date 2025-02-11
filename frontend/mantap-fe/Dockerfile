# Use official Node.js image
FROM node:20-slim

# Create user and group for security
RUN addgroup --system app && adduser --system --ingroup app app

# Set working directory (owned by root)
WORKDIR /app

# Install pnpm manually (instead of using Corepack)
RUN npm install -g pnpm

# Copy package files with app ownership
COPY --chown=app:app package.json pnpm-lock.yaml ./

# Ensure /app directory is owned by app (critical for write access)
RUN chown -R app:app /app

# Switch to app user
USER app

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy app files with app ownership
COPY --chown=app:app . .

# Expose port (frontend dev server)
EXPOSE 5173

# Run application (dev mode)
CMD ["pnpm", "run", "dev"]
