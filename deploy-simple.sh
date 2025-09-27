#!/bin/bash

echo "🚀 Deploying Spelling Bee App to Netlify..."

# Build the app
echo "📦 Building the app..."
npm run build

# Check if dist folder exists
if [ -d "dist" ]; then
    echo "✅ Build successful! dist folder created."
    echo "📁 dist folder location: $(pwd)/dist"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Go to https://app.netlify.com"
    echo "2. Look for the drag & drop area"
    echo "3. Drag the 'dist' folder to deploy your app!"
    echo ""
    echo "📂 The dist folder is ready at:"
    echo "$(pwd)/dist"
else
    echo "❌ Build failed! dist folder not found."
    exit 1
fi
