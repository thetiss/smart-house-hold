import pointsMall from './point-mall.js'

const json = {
	pointsMall,
}

export default (name) => new Promise((resolve, reject) => name && resolve(json[name]), 500)
