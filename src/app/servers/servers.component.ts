import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus= 'No Server was creadted!'
  serverName='';
  serverCreated= false;
  servers=  ['TestServer', 'TestServer 2'];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer= true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServe(){
    this.serverCreationStatus= 'Server was created! Name is '+ this.serverName;
    this.serverCreated= true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName= (<HTMLInputElement>event.target).value;
  }
}
