# BrokerFlow - Insurance Renewal Management

A modern React application for managing insurance policy renewals with AI-powered analysis.

## Features

- **Executive Dashboard** - Overview of renewal pipeline and key metrics
- **Renewal Pipeline** - Prioritized list of upcoming policy expirations  
- **AI Copilot** - Gemini-powered analysis and strategy recommendations
- **Priority Engine** - Configurable scoring algorithm for renewal urgency

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm start
```

3. **Build for production:**
```bash
npm run build
```

## Deployment

### Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel --prod
```

### Alternative Hosting

The app builds to static files in the `build/` folder. You can deploy this to:
- Netlify
- GitHub Pages  
- AWS S3 + CloudFront
- Any static hosting service

## Configuration

### Gemini API (Optional)
- Add your Gemini API key in Settings for real-time AI analysis
- Without an API key, the app uses mock data for demonstrations

### Priority Weights
- Adjust the scoring algorithm in Settings
- Premium Value: Weight for revenue impact
- Time Urgency: Weight for days until expiration  
- Risk Penalty: Negative weight for claims history

## Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Local Storage** for data persistence
- **Gemini AI** for analysis (optional)

## Project Structure

```
src/
├── App.tsx          # Main application component
├── index.tsx        # React entry point
├── index.css        # Global styles with Tailwind
└── ...

public/
├── index.html       # HTML template
└── ...

build/               # Production build output
```

## License

MIT License - feel free to use for personal or commercial projects.