import { newSpecPage } from '@stencil/core/testing';
import { KaierCounter } from './kaier-counter';

describe('kaier-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KaierCounter],
      html: `<kaier-counter></kaier-counter>`,
    });
    expect(page.root).toEqualHtml(`
      <kaier-counter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kaier-counter>
    `);
  });
});
