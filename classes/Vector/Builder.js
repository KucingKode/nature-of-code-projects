import Vector from './Vector.js'

class VectorBuilder {
    vector = new Vector()
    vecMag = null

    // Position
    withPosition(x, y) {
        this.vector.x = x
        this.vector.y = y
        return this
    }
    withX(x) {
        this.vector.x = x
        return this
    }
    withY(y) {
        this.vector.y = y
        return this
    }
    
    // Random
    withRandom2D() {
        const randomV = p5.Vector.random2D()
        this.vector.x = randomV.x
        this.vector.y = randomV.y
        return this
    }
    withRandomX() {
        const randomV = p5.Vector.random2D()
        this.vector.x = randomV.x
        return this
    }
    withRandomY() {
        const randomV = p5.Vector.random2D()
        this.vector.y = randomV.y
        return this
    }

    // Unit
    withAngleUnit(unit) {
        this.vector.angleUnit = unit
        return this
    }
    withMag(mag) {
        this.vecMag = mag
        return this
    }
    withMagSq(mag) {
        this.vecMag = mag * mag
        return this
    }

    // Limit
    withLimit(limit) {
        this.vector.limit = limit
        return this
    }
    
    // from vector
    fromSub(vec1, vec2) {
        this.vector.x = vec1.x - vec2.x
        this.vector.y = vec1.y - vec2.y
        return this
    }
    fromAdd(vec1, vec2) {
        this.vector.x = vec1.x + vec2.x
        this.vector.y = vec1.y + vec2.y
        return this
    }
    fromMult(vec1, n) {
        this.vector.x = vec1.x * n
        this.vector.y = vec1.y * n  
        return this
    }
    fromDiv(vec1, n) {
        this.vector.x = vec1.x / n
        this.vector.y = vec1.y / n
        return this
    }
    fromMag(vec, newMag) {
        vec.setMag(newMag)
        this.vector = vec
        return this
    }
    fromCopy(vector) {
        this.vector.x = vector.x
        this.vector.y = vector.y
        this.vector.limit = vector.limit
        return this
    }
    fromAngle(angle, unit = this.vector.angleUnit) {
        if(unit == 'RADIAN') {
            const a = angle
            this.vector.x = cos(a)
            this.vector.y = sin(a)
        }
        if(unit == 'DEGREE') {
            const a = angle * Math.PI / 180
            this.vector.x = cos(a)
            this.vector.y = sin(a)
        }
        return this
    }

    // BUILD
    build() {
        if(this.vecMag) {
            this.vector.setMag(this.vecMag)
        }
        return this.vector
    }
}

export default VectorBuilder