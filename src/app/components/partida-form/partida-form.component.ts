import { PartidaService } from './../../services/partida.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-partida-form',
  templateUrl: './partida-form.component.html',
  styleUrls: ['./partida-form.component.css'],
})
export class PartidaFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<FormGroup>();
  @Input() btnText!: string;
  adversariosForm!: FormGroup;
  quantidadeGames = [1, 3, 5, 7, 9];

  @ViewChild('teams') teams!: ElementRef;
	selectedGames = '';
	onSelected():void {
		this.selectedGames = this.teams.nativeElement.value;
	}

  constructor(private partidaService: PartidaService) {}

  ngOnInit(): void {
    this.adversariosForm = new FormGroup({
      jogadorA: new FormControl('', [Validators.required]),
      jogadorB: new FormControl('', [Validators.required]),
      games: new FormControl('', [Validators.required]),
    });
    this.adversariosForm.controls['games'].setValue(5);
  }

  get jogadorA() {
    return this.adversariosForm.get('jogadorA')!;
  }

  get jogadorB() {
    return this.adversariosForm.get('jogadorB')!;
  }

  get games() {
    return this.adversariosForm.get('games')!;
  }

  submit() {
    if (this.adversariosForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.adversariosForm);
  }
}