#!/bin/sh
set -e

echo "Starting k6 load test..."
exec k6 run /scripts/test.js