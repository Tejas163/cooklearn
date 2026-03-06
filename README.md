# CookLearn AI - Project Documentation

## Overview
- **Project Name:** CookLearn AI
- **Type:** Micro SaaS - Meal Planning & Cooking Education Platform
- **Tech Stack:** Mealie (Docker), Self-hosted
- **Launch Target:** 1 month
- **Monetization:** Freemium + Premium Meal Plans

## Revenue Model

### Free Tier ($0/month)
- 3 meal plans per week
- 50 basic recipes
- 10 cooking tips/month
- Basic grocery lists

### Premium Tier ($9.99/month)
- Unlimited meal plans
- 500+ premium recipes
- Unlimited cooking tips
- AI-powered suggestions
- Priority support

### Premium Meal Plans (One-time purchases)
| Package | Price | Description |
|---------|-------|-------------|
| Starter | $9.99 | 1 Week Plan (7 meals) |
| Popular | $29.99 | 4 Week Plan (28 meals) |
| Complete | $79.99 | 12 Week Plan (84 meals) |

### Custom Services
- Custom Meal Plan: From $49
- Recipe Development: From $19
- Cooking Lessons: $30/hour

## Current Status

### Running Services
- **Mealie App:** http://localhost:9925
- **Landing Page:** http://localhost:8080 (when running)

### Files
```
cooklearn-ai/
├── index.html       # Landing page
├── premium.html     # Premium plans page
├── start.bat       # Start Mealie
├── serve.bat       # Start web server for landing page
└── README.md       # This file
```

## Quick Start

### 1. Start Mealie (Recipe App)
```bash
docker start mealie
# Access: http://localhost:9925
```

### 2. Start Landing Page
Double-click `serve.bat` or:
```bash
cd cooklearn-ai
python -m http.server 8080
# Access: http://localhost:8080
```

## Monetization Setup

### Step 1: Get Payment Ready
1. Create a **Ko-fi** account (kofi.com) - Free, takes payments
2. Or create a **Patreon** (patreon.com)
3. Or use **Stripe** (stripe.com) for custom integration

### Step 2: Update Contact Email
Edit `premium.html` and replace:
- `orders@cooklearn.ai` with your actual email

### Step 3: Launch
1. Deploy landing page (Netlify/Vercel - Free)
2. Share link on social media
3. Start taking orders!

## Deployment Options

### Free Hosting
| Platform | What | URL |
|----------|------|-----|
| Netlify | Landing pages | netlify.com |
| Vercel | Landing pages | vercel.com |
| Railway | Mealie app | railway.app |

### Recommended Setup
1. **Landing Page:** Deploy `index.html` + `premium.html` to Netlify (free)
2. **App:** Host Mealie on Railway or local for demo

## How to Receive Payments (Coming Soon)
- Currently: Email orders to process manually
- Next: Integrate Ko-fi/Patron buttons
- Later: Full Stripe integration

## Tech Stack
| Component | Tool |
|-----------|------|
| App | Mealie (Docker) |
| Database | SQLite (built-in) |
| Hosting | Local (Docker Desktop) |
| Landing Page | Static HTML |
| Port | 9925 (Mealie), 8080 (Web) |

## Getting Started

### Prerequisites
- Docker Desktop installed
- At least 4GB RAM available

### Running the App

```bash
# Start Mealie
docker start mealie

# Access at http://localhost:9925
```

### Stopping the App
```bash
docker stop mealie
```

## Future Enhancements
- Payment integration (Stripe/Ko-fi)
- User authentication tiers
- AI-powered recipe suggestions
- Video cooking lessons

## Support
- Mealie Docs: https://docs.mealie.io
- GitHub: https://github.com/mealie-recipes/mealie
