import { Component, ComponentInterface, Prop, Host, getAssetPath, h, Element } from '@stencil/core';
// import 'ionicons';
import 'ionicons';
import { DEFAULT_ICONS } from '@constants'
@Component({
  tag: 'kaier-toolbar',
  styleUrl: 'kaier-toolbar.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class KaierToolbar implements ComponentInterface {
  @Element() private element: HTMLElement;
  @Prop() icons = DEFAULT_ICONS;
  // @Prop() counter:number = 0;
  componentDidLoad() {
    this.documentEditor();
  }

  documentEditor() {
    this.element.shadowRoot.querySelectorAll('[data-edit]').forEach(btn =>
      btn.addEventListener('click', edit)
    );
    function edit(ev) {
      ev.preventDefault();
      const cmd_val = this.getAttribute('data-edit').split(':');
      document.execCommand(cmd_val[0], false, cmd_val[1]);
    }
  }


  // Insert Link //

  insertLink() {
    const selection = document.getSelection();
    let value = selection.toString();
    if (value.slice(0, 4) != 'http') {
      value = 'https://' + value;
    }
  
    document.execCommand('createLink', false, value);
// document.execCommand('contentReadOnly', false, 'false')
    // atag.setAttribute("contenteditable", "false");
  }


  render() {
    return (
      <Host>
        <slot>
          <i class="fa fa-bold"></i>
          <div class="toolbar">
            <div class="popup">
              <button type="button" class="popup-button toolbar-button first"><img src={getAssetPath(this.icons.heading)} /></button>
              <div class="popup-window">
                <button title="Heading format" class="popup-item Heading" data-edit="formatBlock:h1">Heading</button>
                <button title="Subheading format" class="popup-item Subheading" data-edit="formatBlock:h2">Subheading</button>
                <button title="Body format" class="popup-item Body" data-edit="formatBlock:p">Body</button>
                <button title="Caption format" class="popup-item Caption" data-edit="formatBlock:h5">Caption</button>
              </div>

            </div>


            <button title="Bold" class="toolbar-button" data-edit="bold"><img src={getAssetPath(this.icons.bold)} /></button>
            <button title="Italic" class="toolbar-button" data-edit="italic"><img src={getAssetPath(this.icons.italic)} /></button>
            <button title="Underline" class="toolbar-button" data-edit="underline"><img src={getAssetPath(this.icons.underline)} /></button>
            <button title="Quote" class="toolbar-button" data-edit="formatBlock:blockquote"><img src={getAssetPath(this.icons.quote_right)} /></button>


            <button title="Unordered list" class="toolbar-button" data-edit="insertUnorderedList"><img src={getAssetPath(this.icons.list_ul)} /></button>
            <button title="Ordered list" class="toolbar-button" data-edit="insertOrderedList"><img src={getAssetPath(this.icons.list_ol)} /></button>

            <button title="Insert link" class="toolbar-button" type="button" data-edt="createLink:insertLink" onClick={() => this.insertLink()}><img src={getAssetPath(this.icons.link)} /></button>
            {/* <div class="popup">
              <button title="Image" type="button" class="popup-button toolbar-button no-caret last"><i class="fas fa-image"></i></button>
              <div class="popup-window">
                <label class="popup-button"><i class="fas fa-arrow-circle-up"></i>&nbsp; Upload Image</label>
                <input type="file" name="imageUpload" hidden id="imageUpload" accept=".gif,.jpg,.jpeg,.png" />

              </div>
            </div> */}
            {/* <span id="counter">{this.counter}</span> */}
          </div>
        </slot>
      </Host>
    );
  }

}
