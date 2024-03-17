class SuperPlaceholder
{
    constructor(options) {
        this.options = options;
        this.element = options.element
        this.placeholderIdx = 0;
        this.charIdx = 0;
    }

    setPlaceholder() {
        var placeholder = this.options.placeholders[this.placeholderIdx];
        var placeholderChunk = placeholder.substring(0, this.charIdx + 1);
        document.querySelector(this.element).setAttribute("placeholder", this.options.preText + " " + placeholderChunk)
    };

    onTickReverse (afterReverse) {
        if (this.charIdx === 0) {
            afterReverse.bind(this)();
            clearInterval(this.intervalId);
            this.init();
        } else {
            this.setPlaceholder();
            this.charIdx--;
        }
    };

    goReverse () {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.onTickReverse.bind(this, function () {
            this.charIdx = 0;
            this.placeholderIdx++;
            if (this.placeholderIdx === this.options.placeholders.length) {
                this.placeholderIdx = 0;
            }
        }), this.options.speed)
    };

    onTick () {
        var placeholder = this.options.placeholders[this.placeholderIdx];
        if (this.charIdx === placeholder.length) {
            setTimeout(this.goReverse.bind(this), this.options.stay);
        }

        this.setPlaceholder();
        this.charIdx++;
    }

    init () {
        this.intervalId = setInterval(this.onTick.bind(this), this.options.speed);
    }

    kill () {
        clearInterval(this.intervalId);
    }
}


export {
    SuperPlaceholder
};
