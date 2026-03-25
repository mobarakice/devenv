# Use official k6 image as base
FROM grafana/k6:latest

# Set working directory
WORKDIR /scripts

# Copy your test files into container
COPY test.js .

# Copy entrypoint script
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
USER root
# Make sure it’s executable
RUN chmod +x /usr/local/bin/entrypoint.sh
USER k6

# Set entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
