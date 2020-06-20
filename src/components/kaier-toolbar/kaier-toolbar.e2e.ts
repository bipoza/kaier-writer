import { newE2EPage } from '@stencil/core/testing';

describe('kaier-toolbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kaier-toolbar></kaier-toolbar>');

    const element = await page.find('kaier-toolbar');
    expect(element).toHaveClass('hydrated');
  });
});
