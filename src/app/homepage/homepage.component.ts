import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  FormData!: FormGroup;

  constructor(private builder: FormBuilder, private message: MessageService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required])
    });  
  }

  onSubmit(FormData: any) {
    this.message.sendMessage(FormData).subscribe(res => {
        document.getElementById("messageAlertSuccess")!.style.display = "block";
        setTimeout(function () {
            document.getElementById("messageAlertSuccess")!.style.display='none';
        }, 5000);
    }, error => {
        document.getElementById("messageAlertFailure")!.style.display = "block";
        setTimeout(function () {
            document.getElementById("messageAlertFailure")!.style.display='none';
        }, 5000);
    });
    console.log('hit');
    console.log(FormData);
  }

}
