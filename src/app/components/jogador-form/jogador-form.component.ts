import { Categoria, CategoriaMapping } from './../../models/enums/categoria';
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
  jogadorForm!: FormGroup;
  public CategoriaMapping = CategoriaMapping;
  public categorias = Object.values(Categoria);


  constructor(private jogadorService: JogadorService) {}

  ngOnInit(): void {
    this.jogadorForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
    });
  }

  get nome() {
    return this.jogadorForm.get('nome')!;
  }
  get sobrenome() {
    return this.jogadorForm.get('sobrenome')!;
  }
  get categoria() {
    return this.jogadorForm.get('categoria')!;
  }

  submit() {
    if (this.jogadorForm.invalid) {
      return;
    }
    console.log(this.jogadorForm.value);

    this.onSubmit.emit(this.jogadorForm.value);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.jogadorForm.patchValue({ image: file });
  }
}
