// src/utils/date.ts
// Date formatting utilities

export function formatDate(date: Date, format: 'short' | 'long' = 'long'): string {
  const options: Intl.DateTimeFormatOptions = 
    format === 'long' 
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { year: '2-digit', month: '2-digit', day: '2-digit' };
  
  return new Date(date).toLocaleDateString('en-US', options);
}

export function formatDateISO(date: Date): string {
  return new Date(date).toISOString().split('T')[0];
}
