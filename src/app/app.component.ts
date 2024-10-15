import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEditorComponent } from './components/ngx-editor/ngx-editor.component';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { SyncfusionTextEditorComponent } from './components/syncfusion-text-editor/syncfusion-text-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    QuillEditorComponent,
    NgxEditorComponent,
    SyncfusionTextEditorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'text-editor-showcase';
  editorContent: string = '';
  ngxEditorContent: string = '';
  syncEditorContent: string = '';
}
