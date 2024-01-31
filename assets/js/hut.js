/** @format */

class Hut {
  constructor(center) {
    this.center = center
    this.size = {
      width: 120,
      hegiht: 60,
    }
  }

  static size() {
    return this.size
  }
}

export default Hut
