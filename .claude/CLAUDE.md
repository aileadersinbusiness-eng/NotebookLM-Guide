# Claude Development Guide

## Project Overview

NotebookLM Interactive Business Guide - A premium web application that helps users discover how to use NotebookLM through an immersive, animated experience with personalized recommendations.

## Current Implementation Status

✅ **Completed:**
- Next.js + TypeScript + Tailwind + Framer Motion setup
- Dark theme with glassmorphism and neon accents
- Hero section with floating document animations
- 4-step Knowledge Opportunity Scanner questionnaire
- Personalized action plan generation algorithm
- 10 business use cases with detailed content
- Use case card grid with role-based filtering
- Action plan results display with ROI metrics
- Footer and CTA sections
- Comprehensive animations system
- Accessibility features (keyboard nav, ARIA, motion preferences)
- Responsive mobile design

⏳ **In Progress / Planned:**
- PDF download functionality
- Email sending for action plans
- Individual use case detail pages
- Video tutorials
- User authentication and plan history
- Analytics integration
- Live chat support

## Key Files to Know

### Core Structure
- `src/app/page.tsx` - Main page (entry point)
- `src/app/layout.tsx` - Root layout with providers
- `src/types/index.ts` - All TypeScript types
- `src/lib/constants.ts` - 10 use cases and configuration
- `src/lib/plan-generator.ts` - Personalization logic

### Components
- `src/components/sections/HeroSection.tsx` - Hero with animations
- `src/components/sections/KnowledgeScanner.tsx` - Quiz component
- `src/components/sections/ActionPlanResults.tsx` - Results display
- `src/components/sections/UseCasesSection.tsx` - Use case grid
- `src/components/animations/` - Reusable animation wrappers

### Styling & Theme
- `src/styles/globals.css` - Global styles + Tailwind config
- `tailwind.config.ts` - Accent colors, animations, plugins
- `src/lib/animations.ts` - Framer Motion presets

### Utilities
- `src/hooks/` - Custom React hooks
- `src/lib/utils.ts` - Helper functions
- `src/components/providers/PersonalizationProvider.tsx` - Context

## Development Workflow

### Running Locally
```bash
npm run dev      # Start dev server on :3000
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check code style
npm run type-check  # TypeScript check
npm run format   # Auto-format code
```

### Git Workflow
1. Changes are made on branch `claude/fervent-mayer-z6cb9z`
2. Commit with clear, descriptive messages
3. Push to origin
4. Never force-push unless absolutely necessary

### Building & Testing
- Always run `npm run build` before committing
- Build must succeed with no warnings
- Test responsive design at 375px, 768px, 1024px
- Test animations in dev server, not just build
- Test keyboard navigation

## Code Conventions

### TypeScript
- Use strict mode (already enabled)
- Export types from `src/types/index.ts`
- Avoid `any` types
- Create interfaces for component props

### Components
- Prefer functional components with hooks
- Keep components focused and reusable
- Use `'use client'` for client-side components
- Co-locate styles with components using Tailwind
- Export both named and default for common components

### Animation
- Always wrap animations with `usePrefersReducedMotion`
- Use reusable variants from `lib/animations.ts`
- Test animations at reduced motion setting
- GPU-accelerated transforms only (no layout changes)

### Styling
- Use Tailwind classes (no CSS files for styling)
- Use glass-effect and glass-card utility classes
- Text gradient: `text-gradient` + gradient color classes
- Use `cn()` utility for conditional classes

## Common Tasks

### Adding a New Use Case
1. Edit `src/lib/constants.ts` in USE_CASES array
2. Follow existing structure: id, title, description, problem, solution, metrics, etc.
3. Update types if needed in `src/types/index.ts`
4. Card will auto-render in UseCasesSection

### Customizing Animations
1. Modify presets in `src/lib/animations.ts`
2. Use in components like: `<motion.div variants={slideUpVariants}>`
3. Test with `prefers-reduced-motion: reduce` in DevTools
4. All animations must respect this preference

### Adding a New Form Field
1. Add to `KnowledgeScanner` component
2. Update `QuizResponse` type in `src/types/index.ts`
3. Add to plan generator logic in `src/lib/plan-generator.ts`
4. Test with all paths through the quiz

### Responsive Design
1. Mobile-first: write for `sm` breakpoint first
2. Override with `md:`, `lg:` for larger screens
3. Test at: 375px, 768px, 1024px, 1280px
4. Ensure touch targets are ≥48px
5. Test on actual mobile device if possible

## Deployment

### To Vercel
The project is Vercel-ready. Simply push to the repository:
```bash
git push
# Vercel auto-deploys from the branch
```

### Environment Variables
None required for MVP. Add later:
- `NEXT_PUBLIC_API_URL` - for PDF/email endpoints
- `EMAIL_API_KEY` - for sending action plans
- `ANALYTICS_ID` - for tracking

## Performance Targets

- ✅ Lighthouse Performance: >90
- ✅ Lighthouse Accessibility: >95
- ✅ Lighthouse Best Practices: >90
- ✅ First Load JS: <150KB (currently ~145KB)
- ✅ TTI: <2s on 3G
- ✅ Smooth animations: 60fps

## Known Limitations & Workarounds

1. **Radix UI not used** - Dependencies had conflicts with React 18. Using custom components instead. If needed, can upgrade to compatible versions.

2. **PDF/Email not implemented** - API routes created but logic not complete. Can use `jspdf` for PDFs and `resend` for email.

3. **No form submissions** - Action plan downloads/emails are placeholders. Implement in `/api/download-pdf` and `/api/send-email` routes.

## Testing Checklist

Before committing:
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Tested on mobile (375px)
- [ ] Tested on tablet (768px)
- [ ] Tested keyboard navigation (Tab, Enter, Escape)
- [ ] Tested with `prefers-reduced-motion: reduce`
- [ ] Animations are smooth at 60fps
- [ ] Text is readable (contrast > 4.5:1)
- [ ] All interactive elements have focus states

## Future Work Priority

1. **High Priority:**
   - PDF download functionality
   - Email integration
   - User authentication
   - Analytics tracking

2. **Medium Priority:**
   - Detailed use case pages
   - Video tutorials
   - A/B testing framework
   - Plan history

3. **Low Priority:**
   - Dark/light theme toggle
   - Multi-language support
   - Live chat
   - Advanced user dashboard

## Questions or Issues?

- Check README.md for detailed documentation
- Review existing components for patterns
- Run `npm run build` to catch type errors early
- Test animations in slow-motion (DevTools > Rendering)

---

Last updated: 2026-06-16
Current branch: `claude/fervent-mayer-z6cb9z`
