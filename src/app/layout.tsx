import type { Metadata } from 'next';
import { PersonalizationProvider } from '@/components/providers/PersonalizationProvider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: '10 Practical Business Uses for NotebookLM',
  description:
    'Discover how to turn your documents, reports, and resources into searchable, interactive knowledge bases with NotebookLM.',
  openGraph: {
    title: '10 Practical Business Uses for NotebookLM',
    description:
      'Transform scattered resources into a practical knowledge system. Get personalized recommendations and an action plan.',
    type: 'website',
    url: 'https://notebooklm-guide.vercel.app',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-slate-950 text-slate-50">
        <PersonalizationProvider>{children}</PersonalizationProvider>
      </body>
    </html>
  );
}
