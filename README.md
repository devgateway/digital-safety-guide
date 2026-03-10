# Gabay Tech

A comprehensive, multilingual digital safety guide designed to support individuals navigating online harassment and complex digital safety situations. This platform provides actionable advice through logic-based workflows and specialized resources.

## 🚀 Features

- **Multilingual Support**: Available in English and Taglish (Tagalog-English) to ensure accessibility.
- **Interactive Logic Trees**: Guided questionnaires that lead users to specific, actionable advice based on their situation.
- **Resource Repository**: Curated links to hotlines, reporting tools, and support organizations.
- **PDF Generation**: Users can download localized guides and action plans for offline reference.
- **Stateless Architecture**: Simplified deployment with no backend database requirement.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Lucide React (Icons), jsPDF (PDF generation).
- **Backend**: Express (Static file serving and health checks).
- **Tooling**: ESLint, Vite.

## 📂 Project Structure

```text
.
├── client/                 # React Frontend
│   ├── public/             # Static assets (data, images)
│   ├── src/                # Source code
│   │   ├── components/     # UI Components
│   │   ├── locales/        # Translation files (i18n)
│   │   └── utils/          # Helper functions
│   └── scripts/            # Build and data processing scripts
├── server/                 # Express Backend (Static server)
│   └── server.js           # Server configuration
└── analysis.js             # Workflow analysis utility
```

## 🏁 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/devgateway/digital-safety-guide.git
   cd digital-safety-guide
   ```

2. **Setup Client**:
   ```bash
   cd client
   npm install
   ```

3. **Setup Server**:
   ```bash
   cd ../server
   npm install
   ```

### Running Locally

To run the application for development, you typically want to start the client:

```bash
cd client
npm run dev
```

For production-like environment testing, build the client and run the server:

```bash
cd client
npm run build
cd ../server
node server.js
```

The server will be running at `http://localhost:3000`.

## 📜 Deployment

The application is designed to be served as a static site. The Express server in the `server/` directory is configured to serve the built contents of the `client/dist` directory.

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues or pull requests.

## ⚖️ License

All rights reserved by IREX and Development Gateway.
