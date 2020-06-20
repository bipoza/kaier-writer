import { newSpecPage } from '@stencil/core/testing';
import { KaierToolbar } from './kaier-toolbar';

describe('kaier-toolbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KaierToolbar],
      html: `<kaier-toolbar></kaier-toolbar>`,
    });
    expect(page.root).toEqualHtml(`
      <kaier-toolbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kaier-toolbar>
    `);
  });
});
