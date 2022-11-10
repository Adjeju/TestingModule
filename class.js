class TTime {
  constructor(hours, minutes) {
    this._hours = hours;
    this._minutes = minutes;
  }

  addHours(h) {
    this._hours = this._hours + h;
    if (this._hours >= 24) {
      this._hours = this._hours % 24;
    }
    return this;
  }

  removeHours(h) {
    this._hours = this._hours - h;
    if (this._hours >= 24) {
      this._hours = this._hours % 24;
    }
    return this;
  }

  addMinutes(m) {
    this._minutes = this._minutes + m;
    if (this._minutes >= 60) {
      this._minutes = this._minutes % 60;
    }
    return this;
  }

  removeMinutes(m) {
    this._minutes = this._minutes - m;
    if (this._minutes >= 60) {
      this._minutes = this._minutes % 60;
    }
    return this;
  }

  showTime() {
    return `${this._hours}:${this._minutes}`;
  }
}

module.exports = TTime;
