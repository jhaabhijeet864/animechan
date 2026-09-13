import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' }}>
        Animechan
      </span>
    ),
  },
  links: [
    { text: 'Home', url: '/' },
    { text: 'Pricing', url: '/pricing' },
    {
      text: 'GitHub',
      url: 'https://github.com/AnimechanOrg/animechan',
      external: true,
    },
  ],
};
