import { Component, ComponentInterface, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'kaier-writer',
  styleUrl: 'kaier-writer.css',
  shadow: true,
})
export class KaierWriter implements ComponentInterface {
  @Prop() text: string;

  render() {
    return (
      <Host>
        {/* <slot name="top" />
        <slot/>
        <slot name="bottom" /> */}
        <slot />
        <slot />
        <slot />
      </Host>
    );
  }

}
