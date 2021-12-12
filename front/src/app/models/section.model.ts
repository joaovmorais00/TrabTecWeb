import { Task } from './task.model';

export class Section {
  constructor(public name: string, public tasks: Task[] = []) {}
}
