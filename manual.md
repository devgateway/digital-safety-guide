# Digital Safety Guide - Platform Manual

This manual provides comprehensive documentation on the Digital Safety Guide platform, covering its architecture, installation, and instructions for managing content.

## 1. Installation and Deployment

The project is divided into a React frontend client and an Express backend server that serves the built client statically.

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/devgateway/digital-safety-guide.git
   cd digital-safety-guide
   ```

2. **Setup Client**:
   Navigate to the client directory and install dependencies:
   ```bash
   cd client
   npm install
   ```

3. **Setup Server**:
   Navigate to the server directory and install dependencies:
   ```bash
   cd ../server
   npm install
   ```

### Running Locally for Development

To run the application in development mode with hot-reloading:

```bash
cd client
npm run dev
```
The application will be accessible via the Vite development server (usually `http://localhost:5173`).

### Production Build and Deployment

The platform uses a stateless architecture with a static site served by an Express backend.

1. **Build the Client**:
   Compile the React frontend into static assets:
   ```bash
   cd client
   npm run build
   ```
   This generates the production files in the `client/dist` directory.

2. **Run the Server**:
   Start the Express server to serve the built static site:
   ```bash
   cd ../server
   node server.js
   ```
   The application will be accessible at `http://localhost:3000`. In a production environment, you can use process managers like PM2 or Dockerize the application.

---

## 2. Technical Information

The platform is built using a modern JavaScript stack, emphasizing performance and local data processing for enhanced privacy.

### Tech Stack Details

- **Frontend Framework**: **React 19**
- **Build Tool / Bundler**: **Vite**
- **Routing**: **React Router DOM** (v7.10) for client-side navigation.
- **Icons**: **Lucide React** for UI iconography.
- **PDF Generation**: **jsPDF** used for downloading offline response plans and localized guides.
- **Backend / Delivery**: **Express** (Node.js) serves as a simple static file server for the built frontend.

### Architecture Highlights
- **Stateless & Privacy-First**: The application does not rely on a backend database to store user inputs. Logic trees and wizard workflows are pre-compiled into static JSON files. User interactions and selections are kept entirely in the browser memory and cleared when the session ends.
- **Data Driven**: The workflow and content are driven by local JSON and JS files, making it easy to update without touching complex React component logic.

---

## 3. Updating the Data

The platform's content is separated from its logic. This allows administrators or editors to update contact information, translation strings, and the wizard's logic branches directly from data files.

### 3.1 Updating Contact Information

Support organizations, hotlines, and counseling resources are stored in JavaScript arrays exported from the `client/src/data/` directory.

- **Counseling Resources**: `client/src/data/counselingResources.js`
- **Global Resources**: `client/src/data/globalResources.js`
- **Platform/Tech Resources**: `client/src/data/platformResources.js`

**How to Update:**
1. Open the relevant file in the `client/src/data/` folder.
2. Edit existing objects or append a new object to the array. Example format:
   ```javascript
   {
       id: 'example_org',
       name: 'Example Organization',
       description: 'Provides 24/7 crisis support.',
       phones: [
           { label: 'Globe', number: '0917-000-0000' }
       ],
       email: 'help@example.org',
       tags: ['support', '24/7']
   }
   ```
3. Save the file. The frontend will automatically reflect these updates when rebuilt or running in dev mode.

### 3.2 Updating Translations

The application uses local JSON files for internationalization (i18n), stored under `client/src/locales/`. The primary source of truth is the English (`en`) file.

**Primary Locale File**: `client/src/locales/en/content.json`

**How to Update/Add Translations:**
1. First, add new UI text keys and values to the English locale: `client/src/locales/en/content.json`.
2. To synchronize these keys across all other supported languages (e.g., `tl`, `ceb`, `hil`, etc.), run the synchronization script from the project root:
   ```bash
   node sync-i18n.js
   ```
3. This script will automatically traverse the `en/content.json` file. Any keys missing in the other language files will be inserted with the default English text prefixed by `[TRANSLATE] `.
4. A markdown report `missing_translations_report.md` will be generated in the root directory detailing all the added keys.
5. Open the respective language's `content.json` file (e.g., `client/src/locales/tl/content.json`), search for `[TRANSLATE]`, and replace it with the accurate translation.

### 3.3 Updating the Wizard Structure

The interactive logic tree (the wizard) dictates the flow of questions and the final actionable recommendations.

**Source File**: `client/src/data/logicTrees.json`

**How to Update:**
1. Open `client/src/data/logicTrees.json`. This file contains the node-based structure under `LOGIC_TREES.UNIFIED_FLOW.nodes`.
2. You can edit the text, add new logic branches, or modify options (which map to `nextId` pointers).
3. **Important:** After making any changes to `logicTrees.json`, you must unroll the workflow to generate the optimized data map for the public bundle. Run the following command from the `client` directory:
   ```bash
   npm run generate-data
   ```
   *(Alternatively, run from root: `node client/scripts/unroll_workflow.cjs`)*

4. The script will process the source file, handle URL mapping (generating short codes), resolve node collisions, and save the production-ready data to `client/public/data/logicTrees.json` and `client/public/data/urlMap.json`.
