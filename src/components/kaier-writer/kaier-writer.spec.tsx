import { newSpecPage } from '@stencil/core/testing';
import { KaierWriter } from './kaier-writer';

describe('kaier-writer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KaierWriter],
      html: `<kaier-writer></kaier-writer>`,
    });
    expect(page.root).toEqualHtml(`
      <kaier-writer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kaier-writer>
    `);
  });
});
