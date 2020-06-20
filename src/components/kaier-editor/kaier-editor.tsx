import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'kaier-editor',
  styleUrl: 'kaier-editor.css',
  shadow: true,
})
export class KaierEditor implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot>
        <div id="editor" class="editor" data-simplebar data-simplebar-auto-hide="false">
            <div id="content" class="content" contenteditable="true">
                <p>Once upon a time...✏️</p>
            </div>
        </div>
        </slot>
      </Host>
    );
  }

}
