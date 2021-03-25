import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancelletionEmail';

const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {};
    this.init();
  }
  init() {

  }
}

export default new Queue;