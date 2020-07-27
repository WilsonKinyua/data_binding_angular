import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
   @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  constructor() { }
  ngOnInit(): void {
  }
  onAddServer(inputServer: HTMLInputElement) {
      console.log(this.serverContentInput);
    this.serverCreated.emit({serverName: inputServer.value, serverContent: this.serverContentInput.nativeElement.value});
  }
  onAddBlueprint(inputServer: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: inputServer.value, serverContent: this.serverContentInput.nativeElement.value});
  }

}
