
const random = require('../../utils/random')
const asyncUtil = require('../../utils/asyncUtil')

const MAX = 1000
const MAX_OFFSET = 2

const origin = random.getRandomInt(100, MAX - 100)

class World {
    constructor (max, ...robots) {
        this.max = max
        this.robots = robots
        this.tick = 1
    }

    checkMeetRobots () {
        const { robots } = this
        return robots
            .map(robot => robot.getPosition())
            .reduce(
                (set, position) => set.add(position),
                new Set())
            .size !== robots.length
    }

    generateTickMessage () {
        return `[#${this.tick} 번째 시간]`
    }

    generateRobotNames () {
        return this.robots.map(robot => robot.getName()).join('와 ')
    }

    log (message) {
        const tickMessage = this.generateTickMessage()
        console.log(`${tickMessage} ${message}`)
    }

    show () {
        const { robots } = this
        const positionMessage = robot => robot.checkTouchOrigin() ?
            `${robot.name}는 지금 ${robot.getPosition()} 지점에서 기다리고 있다.` :
            `${robot.name}는 지금 ${robot.getPosition()} 지점에 있다.`

        robots.forEach(robot => this.log(positionMessage(robot)))
    }

    async nextTick () {
        const { robots } = this
        await asyncUtil.delay(33)

        robots.forEach(robot => robot.moveToOrigin())
        this.tick += 1

        return  this.checkMeetRobots()
    }

    async run () {
        const met = await this.nextTick()
        this.show()

        if (met) {
            const robotNames = this.generateRobotNames()
            const metMessage = `${robotNames}는 드디어 ${this.robots[0].getPosition()} 지점에서 만나게 되었다.`
            return this.log(metMessage)
        }

        await this.run()
    }
}

class Robot {
    constructor (name, position, origin) {
        this.name = name
        this.position = position
        this.origin = origin
    }

    //  로봇이 세상을 바라보는 관점으로 만들어야 하나 🤔
    //  세상이 로봇을 바라보는 관점으로 만들어야 하나 🤔

    checkTouchOrigin () {
        const { position, origin } = this
        return position === origin
    }

    //  두 로봇이 원점을 바라보면서 움직인다면 언젠간 만나지 않을까?
    moveToOrigin () {
        const { position, origin } = this

        //  표식을 알아볼 수 있다는것, 멈출 수 있따는건 원점에서 기다리는 로봇을 만들어라는것이 아닐까? 🤔
        const touchOrigin = this.checkTouchOrigin()
        if (touchOrigin) {
            return
        }

        //  원점을 찾지 못했다면 원점을 향해서 움직여주자.
        const offset = Math.min(Math.abs(origin - position), MAX_OFFSET)
        const direction = position - origin > 0 ? -1 : 1
        this.position += offset * direction
    }

    getPosition () {
        return this.position
    }

    getName () {
        return this.name
    }
}

const robotA = new Robot('로봇돌이', random.getRandomInt(0, origin - 1), origin)
const robotB = new Robot('로봇순이', random.getRandomInt(origin, MAX - 1), origin)
const world = new World(MAX, robotA, robotB)

world.run()

