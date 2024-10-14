import { Component, Input, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-ngx-editor',
  standalone: true,
  imports: [CardModule, FormsModule, NgxEditorModule],
  templateUrl: './ngx-editor.component.html',
  styleUrl: './ngx-editor.component.scss'
})
export class NgxEditorComponent implements OnDestroy {
  @Input() ngxEditorContent: string = '';
  ngxEditor: Editor = new Editor();
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];


  ngOnDestroy(): void {
    this.ngxEditor.destroy();
}
}
