class Vector {
    limit = null
    angleUnit = 'RADIAN'
    x
    y

    /**
     * @private
    */
    update() {
        if(isNaN(this.x)) {
            this.x = 0
        }
        if(isNaN(this.x)) {
            this.y = 0
        }
        if(isNaN(this.mag())) {
            this.setMag(0)
        }
        if(this.limit) {
            if(Math.floor(this.mag()) > this.limit) {
                this.setMag(this.limit)
            }
        }
    }

    // Basic
    add(x, y) {
        this.x = this.x + x
        this.y = this.y + y
        this.update()
    }
    sub(x, y) {
        this.x = this.x - x
        this.y = this.y - y
        this.update()
    }
    set(x, y) {
        this.x = x
        this.y = y
        this.update()
    }
    mult(n) {
        this.x = this.x * n
        this.y = this.y * n
        this.update()
    }
    div(n) {
        this.x = this.x / n
        this.y = this.y / n
        this.update()
    }

    // Basic Vector
    addVec(vec) {
        this.x = this.x + vec.x
        this.y = this.y + vec.y
        this.update()
    }
    subVec(vec) {
        this.x = this.x - vec.x
        this.y = this.y - vec.y
        this.update()
    }
    
    // Magnitude
    mag() {
        return Math.sqrt(
            (Math.abs(this.x) ** 2) +
            (Math.abs(this.y) ** 2)
        )
    }    
    setMag(newMag) {
        if(newMag == 0) {
            this.set(0, 0)
            return
        }
        this.mult(newMag / this.mag())
        this.update()
    }

    // Trigonometry
    angle() {
        const a = Math.atan2(this.y, this.x)
        if(this.angleUnit == 'RADIAN') {
            return a
        }
        if(this.angleUnit == 'DEGREE') {
            return a * 180 / Math.PI
        }
    }
    rotate(angle) {
        const L = this.mag()
        let a, b

        if(this.angleUnit == 'RADIAN') {
            a = this.angle()
            b = angle
        }
        if(this.angleUnit == 'DEGREE') {
            a = this.angle() * Math.PI / 180
            b = angle * Math.PI / 180
        }
        this.x = L * Math.cos(a + b)
        this.y = L * Math.sin(a + b)
    }

    // Specials
    normalize() {
        // create the length of vector to 1
        this.setMag(1)
    }

}

export default Vector