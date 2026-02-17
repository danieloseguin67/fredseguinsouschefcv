#!/usr/bin/env pwsh
# Deploy script for Fred Seguin CV website to custom domain

Write-Host "Building Fred Seguin CV for production..." -ForegroundColor Green

# Navigate to the Angular project directory
Set-Location fredseguincv

# Build the Angular application
$buildResult = ng build --configuration=production
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Build completed successfully!" -ForegroundColor Green

# Navigate to docs folder
Set-Location ..\docs

# Copy files from browser subfolder to docs root for custom domain
Write-Host "Copying files to docs root for custom domain..." -ForegroundColor Blue
Copy-Item -Path "browser\*" -Destination "." -Recurse -Force

Write-Host "Files copied successfully!" -ForegroundColor Green

# Navigate back to workspace root
Set-Location ..

# Git operations
Write-Host "Adding changes to git..." -ForegroundColor Blue
git add -A

Write-Host "Committing changes..." -ForegroundColor Blue
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
git commit -m "Deploy update: $timestamp"

Write-Host "Pushing to repository..." -ForegroundColor Blue
git push origin main

Write-Host "Deployment completed! Website available at https://fred.seguin.dev/" -ForegroundColor Green