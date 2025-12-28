#!/bin/bash
# Start script for Render deployment with static export
PORT=${PORT:-10000}
serve out -l $PORT

