# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with auto-reloading
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint linting
- `npm run preview` - Preview production build locally

## Project Architecture

This is an Azure certification exam preparation app built with Vite + React + TypeScript + shadcn/ui + Tailwind CSS.

### Core Architecture

- **Single Page Application**: Uses React Router for navigation between Dashboard and LearningSession views
- **State Management**: Local React state with useState hooks; uses TanStack Query for server state
- **UI Framework**: shadcn/ui components with Radix UI primitives and Tailwind CSS styling
- **Routing**: Simple view-based routing handled in `src/pages/Index.tsx`

### Key Application Flow

1. **Entry Point**: `src/main.tsx` → `src/App.tsx` → `src/pages/Index.tsx`
2. **Main Views**: 
   - Dashboard (`src/pages/Dashboard.tsx`) - certification overview and progress tracking
   - LearningSession (`src/pages/LearningSession.tsx`) - interactive study sessions
3. **Navigation**: State-driven view switching between dashboard and learning modes

### Component Structure

- **UI Components**: Located in `src/components/ui/` - shadcn/ui components
- **Custom Components**: 
  - `CertificationCard.tsx` - displays individual certification progress and actions
  - `ContentManager.tsx` - manages learning content
  - `QuestionCard.tsx` - interactive question/answer interface
- **Pages**: Dashboard, Index (router), LearningSession, NotFound

### Styling System

- **Theme**: Custom terminal/cyberpunk theme with gradient backgrounds
- **CSS Classes**: Uses Tailwind with custom classes like `bg-gradient-dark`, `border-terminal`, `text-terminal`
- **Components**: All styled using shadcn/ui variant system with custom variants like `variant="terminal"` and `variant="hero"`

### Data Structure

- Certifications are hardcoded in Dashboard.tsx with structure:
  - `code` (AZ-104, AZ-305, AZ-400)
  - `title`, `description`, `progress`, `totalQuestions`, `completedQuestions`, `estimatedTime`

### Key Dependencies

- **React Router DOM**: Client-side routing
- **TanStack Query**: Server state management (though currently using local state)
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Pre-built component library

### Development Notes

- TypeScript strict mode enabled
- ESLint configured with React hooks and refresh plugins  
- No backend integration currently - all data is mock/static
- Uses Vite for fast development and building
- Terminal/cyberpunk aesthetic throughout with consistent color scheme