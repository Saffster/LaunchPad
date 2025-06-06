# React + Vite + Supabase App

This is a React application built with Vite and integrated with Supabase for backend services.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Update the `.env` file with your Supabase credentials:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous/public key

You can find these values in your Supabase dashboard:

- Go to Settings → API
- Copy the "Project URL" and "anon public" key

### 3. Run the Development Server

```bash
npm run dev
```

## Environment Variables

The following environment variables are required:

- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

See `.env.example` for the required format.

## Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Backend**: Supabase
- **Build Tool**: Vite

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
