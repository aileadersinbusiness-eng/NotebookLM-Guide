'use client';

import { usePersonalizationContext } from '@/components/providers/PersonalizationProvider';

export function usePersonalization() {
  return usePersonalizationContext();
}
