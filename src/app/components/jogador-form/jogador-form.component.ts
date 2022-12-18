import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Jogador } from 'src/app/models/jogador';
import { JogadorService } from 'src/app/services/jogador.service';

@Component({
  selector: 'app-jogador-form',
  templateUrl: './jogador-form.component.html',
  styleUrls: ['./jogador-form.component.css'],
})
export class JogadorFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Jogador>();
  @Input() btnText!: string;
  momentForm!: FormGroup;

  constructor(private jogadorService: JogadorService) {}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
    });
  }

  get nome() {
    return this.momentForm.get('nome')!;
  }
  get sobrenome() {
    return this.momentForm.get('sobrenome')!;
  }
  get categoria() {
    return this.momentForm.get('categoria')!;
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value);

    this.onSubmit.emit(this.momentForm.value);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.momentForm.patchValue({ image: file });
  }
}
