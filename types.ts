export interface Contradiction {
  id: string;
  title: string;
  category: 'quran-vs-hadith' | 'internal-conflicts' | 'character-issues' | 'scientific';
  severity: 'high' | 'medium' | 'low';
  quranSource?: string;
  quranText?: string;
  hadithSource?: string;
  hadithText?: string;
  description: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'practice' | 'authority' | 'theology';
  difficulty: 'easy' | 'medium' | 'hard';
  highlights: { icon: string; text: string }[];
  quote?: { text: string; cite: string };
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'article' | 'video' | 'community';
  link: string;
  meta: string;
  isComingSoon?: boolean;
}