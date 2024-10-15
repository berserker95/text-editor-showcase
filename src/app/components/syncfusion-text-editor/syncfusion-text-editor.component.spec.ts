import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncfusionTextEditorComponent } from './syncfusion-text-editor.component';

describe('SyncfusionTextEditorComponent', () => {
  let component: SyncfusionTextEditorComponent;
  let fixture: ComponentFixture<SyncfusionTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncfusionTextEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncfusionTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
