import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): task[] {
    return this.taskService.getAllTasks();
  }
}
