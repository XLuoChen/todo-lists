class Event{
  constructor(activeEvents = [],completedEvents = []){
    this.activeEvents = this.activeEvents.concat(activeEvents);
    this.completedEvents = this.completedEvents.concat(completedEvents);
    this.allEvents = this.activeEvents.concat(this.completedEvents);
  }
}

module.exports = Event;
