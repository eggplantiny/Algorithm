class Node {
  constructor() {
    this._map = new Map()
    this._end = false
    this._count = 0
  }

  addCount () {
    this._count += 1
  }

  setEnd () {
    this._end = true
  }

  set (input, node) {
    this._map.set(input, node)
  }

  getCount () {
    return this._count
  }

  has (input) {
    return this._map.has(input)
  }

  get (input) {
    return this._map.get(input)
  }

  keys () {
    return this._map.keys()
  }

  isEnd () {
    return this._end
  }
}

class Trie {

  constructor () {
    this.root = new Node()
  }

  add (input, node = this.root) {
    if (input.length === 0) {
      return node.setEnd()
    }

    if (!node.has(input[0])) {
      node.set(input[0], new Node())
    }

    node.addCount()
    return this.add(input.substr(1), node.get(input[0]))
  }

  isSubWord (word) {
    let node = this.root
    while (word.length > 0) {
      if (!node.has(word[0])) {
        return false
      }
      node = node.get(word[0])
      word = word.substr(1)
    }
    return node.getCount() > 0
  }

  isWord (word) {
    let node = this.root
    while (word.length > 1) {
      if (!node.has(word[0])) {
        return false
      }
      node = node.get(word[0])
      word = word.substr(1)
    }
    return node.has(word) && node.get(word).isEnd()
  }

  print () {
    let words = []

    let search = (node = this.root, string) => {
      if (node.keys().size !== 0) {
        for (let letter of node.keys()) {
          search(node.get(letter), string.concat(letter))
        }
        if (node.isEnd()) {
          words.push(string)
        }
      } else {
        string.length > 0 ? words.push(string) : undefined
        return
      }
    }
    search(this.root, '');
    return words.length > 0 ? words : null;
  }
}
