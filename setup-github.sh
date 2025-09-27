#!/bin/bash

echo "🔧 Setting up GitHub repository for Spelling Bee..."

# Get GitHub username
echo "Please enter your GitHub username:"
read GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Error: GitHub username is required"
    exit 1
fi

echo "📝 Adding GitHub remote..."
git remote add origin https://github.com/$GITHUB_USERNAME/spelling-bee-app.git

echo "🚀 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Next steps:"
    echo "1. Go to https://netlify.com"
    echo "2. Sign in with your GitHub account"
    echo "3. Click 'New site from Git'"
    echo "4. Select your 'spelling-bee-app' repository"
    echo "5. Set build command: npm run build"
    echo "6. Set publish directory: dist"
    echo "7. Click 'Deploy site'"
    echo ""
    echo "🎉 Your Spelling Bee will be live at: https://your-app-name.netlify.app"
else
    echo "❌ Failed to push to GitHub. Please check your repository URL and try again."
    echo ""
    echo "Manual steps:"
    echo "1. Create a GitHub repository named 'spelling-bee-app'"
    echo "2. Run: git remote add origin https://github.com/$GITHUB_USERNAME/spelling-bee-app.git"
    echo "3. Run: git push -u origin main"
fi
