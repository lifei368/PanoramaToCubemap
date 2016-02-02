// ViewSkybox.js

import alfrid from './libs/alfrid.min.js';
let GL = alfrid.GL;
var glslify = require("glslify");

class ViewSkybox extends alfrid.View {
	
	constructor() {
		super(glslify('../shaders/cubemap.vert'), glslify('../shaders/cubemap.frag'));
	}


	_init() {
		this.mesh = alfrid.Geom.skybox(12);
	}


	render(texture) {
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		texture.bind(0);
		GL.draw(this.mesh);
	}


}


export default ViewSkybox;