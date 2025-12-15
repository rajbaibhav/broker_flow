# BrokerFlow - Insurance Renewal Management

A modern React application for managing insurance policy renewals with AI-powered analysis.

## Features

- **Executive Dashboard** - Overview of renewal pipeline and key metrics
- **Renewal Pipeline** - Prioritized list of upcoming policy expirations  
- **AI Copilot** - Gemini-powered analysis and strategy recommendations
- **Priority Engine** - Configurable scoring algorithm for renewal urgency

## Architecture Overview

BrokerFlow follows a frontend-first, connector-inspired architecture designed for renewal orchestration rather than data storage.

- The application is a React + TypeScript single-page application.

- Renewal data is represented as structured objects suitable for broker workflows.

- The Priority Engine computes renewal urgency using configurable, explainable weights.

- The AI Copilot generates insights on-demand from structured renewal context.

- No documents are uploaded, indexed, or persisted in any external database.

This architecture focuses on decision support and workflow orchestration, not record duplication.

## Security & Privacy Notes
BrokerFlow is designed with insurance data sensitivity in mind.

- No policy documents, emails, or attachments are stored by the application.

- AI analysis runs only when explicitly triggered by the user.

- API keys (e.g., Gemini) are entered at runtime and are not committed to the repository.

- The application avoids background data ingestion and long-term storage.

- All generated insights are ephemeral and session-based.

This approach reduces data exposure and aligns with strict compliance requirements.


## Connector-First & AI Usage Statement
# Important Compliance Statement

BrokerFlow does not use document ingestion, RAG (Retrieval-Augmented Generation), embeddings, or vector databases.

The AI Copilot operates using a connector-first, in-context synthesis approach, where:

- Only structured, user-visible renewal data is used as input

- No external documents are read, stored, or indexed

- AI outputs are generated in real time and discarded after use

This design ensures transparency, explainability, and regulatory safety.


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
