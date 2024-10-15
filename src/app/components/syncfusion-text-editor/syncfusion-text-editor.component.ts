import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  RichTextEditorAllModule,
  ToolbarService,
  ToolbarSettingsModel
} from '@syncfusion/ej2-angular-richtexteditor';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-syncfusion-text-editor',
  imports: [CardModule, RichTextEditorAllModule, FormsModule],
  standalone: true,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  templateUrl: './syncfusion-text-editor.component.html',
  styleUrl: './syncfusion-text-editor.component.scss',
})
export class SyncfusionTextEditorComponent {

  syncEditorContent: string = '';
  public toolbarSetting: ToolbarSettingsModel = {
    items: [
      'Undo',
      'Redo',
      '|',
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      '|',
      'FontName',
      'FontSize',
      'FontColor',
      'BackgroundColor',
      '|',
      'SubScript',
      'SuperScript',
      '|',
      'LowerCase',
      'UpperCase',
      '|',
      'Formats',
      'Alignments',
      '|',
      'OrderedList',
      'UnorderedList',
      '|',
      'Indent',
      'Outdent',
      '|',
      'CreateLink',
      'Image',
      '|',
      'ClearFormat',
      'Print',
      'SourceCode',
      '|',
      'CreateTable'
    ],
  };
}
