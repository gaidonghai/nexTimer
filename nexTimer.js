class nexTimer {
    constructor() {
        this.start = Date.now();
    }

    done() {
        this.end = Date.now();
    }

    get startedAt() {
        return new Date(this.start).toLocaleString();
    }

    get endedAt() {
        if (this.end) return new Date(this.end).toLocaleString();
    }

    get duration() {
        return this.end - this.start
    }

    toString() {
        return JSON.stringify(this.toJSON());
    }
    toJSON() {
        let info = {
            start: this.start,
            startAt: this.startedAt,
        }
        if (this.end) {
            info.end=this.end;
            info.endedAt = this.endedAt;
            info.duration = this.duration;
        }
        return info;
    }
}

if (require.main === module) {
    let t = new nexTimer();
    console.log(t);
    console.log(`${t}`);

    setTimeout(function () {
        t.done()
        console.log(t);
        console.log(`${t}`);
    }, 1500)
}

module.exports=nexTimer;