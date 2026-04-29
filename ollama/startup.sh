#!/bin/bash

# Start the Ollama server in the background
ollama serve &

# Wait for the server to start (use a simple sleep or check the server status)
sleep 5

# Download the llama3.2 model by running it once
ollama run qwen3.6:35b
#ollama run llama3.2

# Keep the container running by bringing the Ollama server to the foreground
wait