import { newE2EPage } from '@stencil/core/testing';

describe('kaier-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kaier-counter></kaier-counter>');

    const element = await page.find('kaier-counter');
    expect(element).toHaveClass('hydrated');
  });
});
