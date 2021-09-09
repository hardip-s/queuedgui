import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IncompleteQueue } from './incompletequeue';
import { IncompletequeueService } from './incompletequeue.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  
  public incompletequeueData: IncompleteQueue[] = []; 

  constructor(private incompletequeueService: IncompletequeueService){
    
  }

  ngOnInit(): void {
    this.getIncompleteQueue();
  }

  public getIncompleteQueue(): void {
    this.incompletequeueService.getIncompleteQueue().subscribe(
     (response : IncompleteQueue[]) => {
          this.incompletequeueData=response;
          console.log(response);
     },
     (error: HttpErrorResponse) =>{
      console.log(error)
     }

    )
  }
}
