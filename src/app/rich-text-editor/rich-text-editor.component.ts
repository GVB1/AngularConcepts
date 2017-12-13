import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.css']
})
export class RichTextEditorComponent implements OnInit {
 public editorContent: any;

  public options: Object = { 
  placeholderText: 'Rahuls Editor, Type Here!',
  imageUploadURL: '/upload_image'
}

  constructor() { }

  ngOnInit() {
  }

  showData(){
    console.log(this.editorContent);
  }
 
}
