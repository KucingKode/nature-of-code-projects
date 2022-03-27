class Wave {
    amplitude
    period
    phase

    constructor(amplitude, period, phase) {
        this.amplitude = amplitude
        this.period = period
        this.phase = phase
    }

    calculate(x) {
        return sin(this.phase + (Math.PI * 2 * x) / this.period) * this.amplitude
    }
}

export default Wave