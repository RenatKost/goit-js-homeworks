class CountdownTimer {
    constructor({
        selector,
        targetDate
    }) {
        this.elem = document.querySelector(selector);
        this.targetDate = targetDate;
        this.refs = {
            dayValue: this.elem.querySelector("[data-value=days]"),
            hoursValue: this.elem.querySelector("[data-value=hours]"),
            minsValue: this.elem.querySelector("[data-value=mins]"),
            secsValue: this.elem.querySelector("[data-value=secs]")
        };
    }

    timeFunc(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.refs.dayValue.innerHTML = String(days).padStart(2, "0");
        this.refs.hoursValue.innerHTML = String(hours).padStart(2, "0");
        this.refs.minsValue.innerHTML = String(mins).padStart(2, "0");
        this.refs.secsValue.innerHTML = String(secs).padStart(2, "0");
    }

    start() {
        this.timerId = setInterval(() => {
            const time = this.targetDate - Date.now();
            this.timeFunc(time);
        }, 1000);
    }
}

const contTimer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2020")
});

contTimer.start();