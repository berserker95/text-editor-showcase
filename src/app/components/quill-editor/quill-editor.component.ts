import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { QuillModule, QuillModules } from 'ngx-quill';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-quill-editor',
  standalone: true,
  imports: [CardModule, QuillModule, FormsModule],
  templateUrl: './quill-editor.component.html',
  styleUrl: './quill-editor.component.scss',
})
export class QuillEditorComponent {
  editorContent: string = '';
  modules: QuillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video', 'formula'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
    ],
  };
}
