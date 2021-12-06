class EventBus {
  public listeners: { [key: string]: ((props?: any) => void)[] };

  constructor() {
    this.listeners = {};
  }

  public on(event: string, callback) {
    if (this.listeners[event]) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  }

  public off(event: string, callback) {
    if (this.listeners[event]) {
      const newArray = this.listeners[event].filter(
        (listener) => listener !== callback
      );
      this.listeners[event] = newArray;
    } else {
      throw new Error(`off: Нет события: ${event}`);
    }
  }

  public emit(event: string, ...args: string[]) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener) => {
        listener(...args);
      });
    } else {
      throw new Error(`emit: Нет события: ${event}`);
    }
  }
}

export default EventBus;
