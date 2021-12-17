import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  form!: FormGroup;
  fullname: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  message: FormControl = new FormControl('', [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(''); //used to prevent spam
  submitted: boolean = false; //show and hide the success message
  isLoading: boolean = false; //disable the submit button if we're loading
  responseMessage!: string; //the response message to show to the user

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 
      this.form = this.formBuilder.group({
          fullname: this.fullname,
          email: this.email,
          message: this.message,
          honeypot: this.honeypot
      })
  }

  ngOnInit(): void {
  }

//  onSubmit(value: any) {
//      console.log(value);
//  }

  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
        this.form.disable(); // disable the form if it's valid to disable multiple submissions
        var formData: any = new FormData();
        formData.append("fullname", this.form.get("fullname")!.value);
        formData.append("email", this.form.get("email")!.value);
        formData.append("message", this.form.get("message")!.value);
        this.isLoading = true; // sending the post request async so it's in progress
        this.submitted = false; // hide the response message on multiple submits
        this.http.post("YOUR GOOGLE WEB APP URL HERE", formData).subscribe(
          (response: any) => {
            // choose the response message
            if (response["result"] == "success") {
              this.responseMessage = "Thanks for the message! I'll get back to you soon!";
            } else {
              this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
            }
            this.form.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            this.isLoading = false; // re enable the submit button
            console.log(response);
          },
          (error) => {
            this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
            this.form.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            this.isLoading = false; // re enable the submit button
            console.log(error);
          }
        );
      } 
  }

}
