import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faPlusCircle, faBan, faSave } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-editable-task',
  templateUrl: './editable-task.component.html',
  styleUrls: ['./editable-task.component.css'],
})
export class EditableTaskComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faBan = faBan;
  faSave = faSave;
  @Input() editing: Boolean = true;
  @Input() task!: Task;

  @Output() fechaEdicao = new EventEmitter();

  dadosTask = new FormGroup({
    titulo: new FormControl(''),
    conteudo: new FormControl(''),
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (this.editing) {
      this.dadosTask.setValue({
        titulo: this.task.titulo,
        conteudo: this.task.conteudo,
      });
    }
  }

  enviaTask() {
    if (!this.editing) {
      this.dataService
        .createTask(this.dadosTask.value.titulo, this.dadosTask.value.conteudo)
        .subscribe((response) => {
          this.dadosTask.setValue({ titulo: '', conteudo: '' });
          this.dataService.tasksChanged.next(response);
        });
    } else {
      this.task.titulo = this.dadosTask.value.titulo;
      this.task.conteudo = this.dadosTask.value.conteudo;
      this.dataService.editTask(this.task).subscribe((response) => {
        this.fechaEdicao.emit();
        this.dataService.tasksChanged.next(response);
      });
    }
  }
}
