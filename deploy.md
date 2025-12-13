# Deploy to Vercel

## Quick Deploy

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Build the project**:
```bash
npm run build
```

3. **Deploy to Vercel**:
```bash
vercel --prod
```

## Alternative: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import this Git repository
4. Vercel will automatically detect it's a React app
5. Click "Deploy"

## Environment Variables (Optional)

If you want to set a default Gemini API key:
- In Vercel dashboard, go to Project Settings > Environment Variables
- Add `REACT_APP_GEMINI_API_KEY` with your key

## Build Configuration

The project is already configured with:
- `vercel.json` for routing
- Proper build scripts in `package.json`
- Static file optimization

## Live URL

After deployment, you'll get a URL like:
`https://brokerflow-app-xxx.vercel.app`