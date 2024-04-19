class Countdown {
  initCountDown() {
    const eventCountDown = new Date("Jan 1, 2025 16:37:52").getTime();
    const now = new Date().getTime();
    let timeleft = eventCountDown - now;

    // Check immediately if the event has already passed
    if (timeleft < 0) {
      this.displayTimeOver(); // Display the message or zeros immediately
      return; // Stop the function here if the date has passed
    }

    // Otherwise, start the countdown
    const myfunc = setInterval(() => {
      const now = new Date().getTime();
      timeleft = eventCountDown - now;

      if (timeleft < 0) {
        clearInterval(myfunc);
        this.displayTimeOver();
      } else {
        this.updateDisplay(timeleft);
      }
    }, 1000);
  }

  updateDisplay(timeleft) {
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    this.safeInnerHTML("days", days);
    this.safeInnerHTML("hours", hours);
    this.safeInnerHTML("minutes", minutes);
    this.safeInnerHTML("seconds", seconds);
  }

  displayTimeOver() {
    this.safeInnerHTML("days", "00");
    this.safeInnerHTML("hours", "00");
    this.safeInnerHTML("minutes", "00");
    this.safeInnerHTML("seconds", "00");
    this.safeInnerHTML("end", "00:00:00:00");
  }

  safeInnerHTML(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = value;
    }
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initCountDown();
    });
  }
}

new Countdown().init();
