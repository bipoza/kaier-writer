import { Component, ComponentInterface, Prop, Host, h, Element, EventEmitter, Event } from '@stencil/core';
import {TEXT_EDITOR} from '@interfaces'
@Component({
  tag: 'kaier-editor',
  styleUrl: 'kaier-editor.css',
  shadow: true,
})
export class KaierEditor implements ComponentInterface {
  @Element() private element: HTMLElement;
  @Prop() content_text: TEXT_EDITOR = {
    text:"",
    html:""
  };
  // @Watch('content_text')
  // onNameChanged(value) {
  //   console.log("newValue: ", value);
  // }
  @Event() contextTextChanges: EventEmitter<TEXT_EDITOR>;
  contextTextChangesHandler(context: TEXT_EDITOR) {
    console.log("context text: ", context)
    this.contextTextChanges.emit(context);
  }
  componentDidLoad() {
    this.contentChangeEvent();
  }
  
  contentChangeEvent() {
    this.element.shadowRoot.getElementById("content").addEventListener("input", (event) => {
      this.content_text.html= event.target['innerHTML'];
      this.content_text.text = event.target['innerText'];

      this.contextTextChangesHandler(this.content_text);
    });
  }
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
