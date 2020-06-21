import { Component, Host, h, Prop, Element } from '@stencil/core';
import { characterCount, wordCount, stripHtml } from '@utils';
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


    this.textContextEventListener();
  }

  textContextEventListener() {
    const kaier_editor = this.element.parentElement.querySelector('kaier-editor');
    let initial_content = stripHtml(kaier_editor.shadowRoot.getElementById('content'));
    console.log("initial_content: ", initial_content);
    this.character_counter = characterCount(initial_content);
    this.word_counter = wordCount(initial_content);
    kaier_editor.addEventListener("contextTextChanges", res => {
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
            <br />
            {this.word_counter} word
            </span>
        </slot>
      </Host>
    );
  }

}
