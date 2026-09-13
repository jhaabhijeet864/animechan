import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        Animechan
      </>
    ),
  },
  links: [
    { text: 'Home', url: '/' },
    { text: 'Documentation', url: '/docs' },
    { text: 'Pricing', url: '/pricing' }
  ],
  githubUrl: 'https://github.com/Animechan-API/animechan',
};
