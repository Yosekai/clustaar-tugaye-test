import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-simple-intents-dialog',
  templateUrl: './simple-intents-dialog.component.html',
  styleUrls: ['./simple-intents-dialog.component.scss']
})
export class SimpleIntentsDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  formulations: string[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      formulations: new FormControl(null, [Validators.required]),
      response: new FormControl(null, [Validators.required]),
    });
  }

  submitIntent(): void {
    this.form.markAllAsTouched();
    console.log(this.form)
    if(this.form.valid) {
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.formulations.push(value);
    }
  }

  remove(formulation: string): void {
    const index = this.formulations.indexOf(formulation);

    if (index >= 0) {
      this.formulations.splice(index, 1);
    }
  }
}
