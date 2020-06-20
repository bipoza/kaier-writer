import { newE2EPage } from '@stencil/core/testing';

describe('kaier-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kaier-editor></kaier-editor>');

    const element = await page.find('kaier-editor');
    expect(element).toHaveClass('hydrated');
  });
});
