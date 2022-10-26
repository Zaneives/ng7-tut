import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm!: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }

    this.success = true;
  }



  // constructor(private formBuilder: FormBuilder) { }

  // ngOnInit(): void {
  //   this.messageForm = this.formBuilder.group({
  //     name: ["", Validators.required],
  //     email: ["", Validators.required],
  //   })
  // }

  // messageForm!: FormGroup;
  // submitted: boolean = false;
  // success: boolean = false;

  // onSubmit(): void {
  //   this.submitted = true;
  //   if (this.messageForm.invalid) {return}
  //   this.success = true;
  // }


}
