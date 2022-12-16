import { Jogador } from './../../models/jogador';
import { JogadorService } from './../../services/jogador.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-jogador-novo',
  templateUrl: './jogador-novo.component.html',
  styleUrls: ['./jogador-novo.component.css'],
})
export class JogadorNovoComponent implements OnInit {
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