let DEFAULT_HOST = 'localhost'
let DEFAULT_PORT = 8300

let DEFAULT_CONFIG = {
	listeners:{
		"*.8300":{
			application:"app"
		}
	},
	applications:{
		app:{
			type:'nodejs',
			workers:1,
			root:'/var/www/app',
			index:'server.js'
		}
	}
}

class SCNginxUnit {
	constructor(...args) {
		this._run(...args)
	}

	static attach(...args) {
		return new SCNginxUnit(...args);
	}

	_run(server,options = {}) {

		this.nginxUnitHost = options.nginxUnitHost || DEFAULT_HOST
		this.nginxUnitPort = options.nginxUnitPort || DEFAULT_PORT

		

	}
}

module.exports = SCNginxUnit