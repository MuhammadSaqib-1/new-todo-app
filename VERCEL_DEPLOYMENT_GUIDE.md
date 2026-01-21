# Vercel Deployment Guide for Todo App Frontend

## Overview
This guide explains how to deploy the Next.js frontend to Vercel with proper integration to the backend hosted on Hugging Face.

## Current Configuration

### Vercel Configuration (`vercel.json`)
The project is configured with:
- API rewrites that proxy `/api/*` requests to the backend at `https://itzsaqib-full-stack-todo-app.hf.space`
- CORS headers configured for API requests

### Backend Integration
- Frontend makes API calls to `/api/*` endpoints
- Vercel proxies these requests to the actual backend
- Authentication tokens are handled via localStorage and Axios interceptors

## Deployment Steps

### 1. Install Vercel CLI (if not already installed)
```bash
npm install -g vercel
```

### 2. Navigate to the frontend directory and deploy
```bash
cd frontend
vercel --prod
```

Or for automatic confirmation:
```bash
vercel --prod --yes
```

When prompted for the project settings, make sure to:
- Set the Root Directory to `.` (current directory) since you're already in the frontend directory
- Accept the default build settings

### 3. Configure Environment Variables (if needed)
After deployment, you may need to set environment variables in the Vercel dashboard:
- `NEXT_PUBLIC_BACKEND_API_URL`: Should remain as default or can be set to `/api` for Vercel proxy

## Important Notes

1. **API Proxy Setup**: The `vercel.json` file is configured to proxy all `/api/*` requests to the backend at `https://itzsaqib-full-stack-todo-app.hf.space`, which matches the backend deployed on Hugging Face.

2. **CORS Headers**: Appropriate CORS headers are configured in `vercel.json` to allow cross-origin requests.

3. **Frontend API Calls**: The frontend application is configured to make requests to `/api/*` paths, which will be handled by Vercel's proxy rules.

## Troubleshooting

### Common Issues:
- If API calls fail after deployment, check that the vercel.json rewrites are working correctly
- Verify that the backend API is accessible at https://itzsaqib-full-stack-todo-app.hf.space
- Make sure authentication flows work properly between frontend and backend

### Testing the Deployed Application:
1. Access the deployed frontend URL provided by Vercel
2. Try signing up/logging in to test auth flows
3. Create, update, and delete todos to test full CRUD functionality
4. Verify that all data is properly synchronized with the backend

## Files Modified for Vercel Deployment
- `vercel.json` (in root): Configured API proxy rules
- `frontend/next.config.js`: Maintains local development proxy configuration