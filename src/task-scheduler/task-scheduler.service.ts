import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';

@Injectable()
export class TaskSchedulerService {
  // constructor() {
  //   //   // this.scheduleTasks();
  // }

  scheduleTasks() {
    // Schedule a task to run every day at 2:00 AM
    cron.schedule('* * * * *', () => {
      this.dailyTask();
    });

    // Add more scheduled tasks as needed
  }

  private dailyTask() {
    // Implement your task logic here
    console.log('Running daily task...');
  }
}

// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *
