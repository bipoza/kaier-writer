import { newSpecPage } from '@stencil/core/testing';
import { KaierEditor } from './kaier-editor';

describe('kaier-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KaierEditor],
      html: `<kaier-editor></kaier-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <kaier-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kaier-editor>
    `);
  });
});
