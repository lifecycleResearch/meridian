#!/usr/bin/env bash
# build-push.sh — Build Meridian Docker image and push to GHCR.
# Usage: ./build-push.sh [tag]
# Default tag: latest

set -euo pipefail

TAG="${1:-latest}"
IMAGE="ghcr.io/lifecycleresearch/meridian:${TAG}"

echo "═══ Building Meridian ${TAG} ═══"
docker build --platform linux/amd64 -t "${IMAGE}" .

echo ""
echo "═══ Pushing to GHCR ═══"
docker push "${IMAGE}"

echo ""
echo "✅ Done: ${IMAGE}"
echo ""
echo "Run locally:"
echo "  docker run -p 3000:3000 --env-file .env ${IMAGE}"
echo ""
echo "Deploy:"
echo "  docker pull ${IMAGE}"
echo "  docker compose up -d"
