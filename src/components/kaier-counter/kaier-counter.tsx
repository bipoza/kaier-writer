import { Component, Host, h, Prop, Element } from '@stencil/core';
import {characterCount, wordCount} from '@utils';
@Component({
  tag: 'kaier-counter',
  styleUrl: 'kaier-counter.css',
  shadow: true,
})
export class KaierCounter {
  @Element() private element: HTMLElement;
  @Prop() character_counter: number = 0;
  @Prop() word_counter: number = 0;


  componentDidLoad() {
    const kaier_editor = this.element.parentElement.querySelector('kaier-editor');
    kaier_editor.addEventListener("contextTextChanges", res => {
      console.log("RESPONSE toolbar: ", res['detail']['text'].length);
      // DO SOMETHING WITH THE RESPONSE TEXT
      this.character_counter = characterCount(res['detail']['text']);
      this.word_counter = wordCount(res['detail']['text']);


    });
  }

  render() {
    return (
      <Host>
        <slot>
          <span id="counter">
            {this.character_counter} character
            <br/>
            {this.word_counter} word
            </span>
        </slot>
      </Host>
    );
  }

}
