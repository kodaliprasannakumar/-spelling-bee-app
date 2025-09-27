#!/bin/bash

echo "🚀 Deploying Spelling Bee to GitHub and Netlify..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the spelling-bee-app directory"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized"
    exit 1
fi

echo "📦 Building production version..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

echo "📝 Committing changes..."
git add .
git commit -m "Deploy Spelling Bee app to production"

echo "🌐 Ready to push to GitHub!"
echo ""
echo "Next steps:"
echo "1. Create a GitHub repository named 'spelling-bee-app'"
echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/spelling-bee-app.git"
echo "3. Run: git push -u origin main"
echo "4. Deploy to Netlify using the GitHub repository"
echo ""
echo "📋 See deploy-instructions.md for detailed steps"
echo ""
echo "🎯 Your Spelling Bee includes:"
echo "   • Speed Round with voice output"
echo "   • Memory Round (20 rounds, 3 words each)"
echo "   • Surprise Round with riddles"
echo "   • Phonetic pronunciation"
echo "   • Progress tracking"
echo "   • Mobile responsive design"
