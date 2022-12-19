import { PartidaService } from './../../services/partida.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-partida-form',
  templateUrl: './partida-form.component.html',
  styleUrls: ['./partida-form.component.css'],
})
export class PartidaFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<FormGroup>();
  @Input() btnText!: string;
  adversariosForm!: FormGroup;

  constructor(private partidaService: PartidaService) {}

  ngOnInit(): void {
    this.adversariosForm = new FormGroup({
      jogadorA: new FormControl('', [Validators.required]),
      jogadorB: new FormControl('', [Validators.required]),
    });
  }

  get jogadorA() {
    return this.adversariosForm.get('jogadorA')!;
  }

  get jogadorB() {
    return this.adversariosForm.get('jogadorB')!;
  }

  submit() {
    if (this.adversariosForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.adversariosForm);
  }
}