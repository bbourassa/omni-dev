import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  FormData!: UntypedFormGroup;

  constructor(private builder: UntypedFormBuilder, private message: MessageService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
        name: new UntypedFormControl('', [Validators.required]),
        email: new UntypedFormControl('', [Validators.required]),
        message: new UntypedFormControl('', [Validators.required])
    });  
  }

//  onSubmit(FormData: any) {
//    this.message.sendMessage(FormData).subscribe(res => {
//        document.getElementById("messageAlertSuccess")!.style.display = "block";
//        setTimeout(function () {
//            document.getElementById("messageAlertSuccess")!.style.display='none';
//        }, 5000);
//    }, error => {
//        document.getElementById("messageAlertFailure")!.style.display = "block";
//        setTimeout(function () {
//            document.getElementById("messageAlertFailure")!.style.display='none';
//        }, 5000);
//    });
//    console.log('hit');
//    console.log(FormData);
//  }

}
