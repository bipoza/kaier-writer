import { newE2EPage } from '@stencil/core/testing';

describe('kaier-writer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kaier-writer></kaier-writer>');

    const element = await page.find('kaier-writer');
    expect(element).toHaveClass('hydrated');
  });
});
