parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"79Wc":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(t,i){"object"===("undefined"==typeof exports?"undefined":r(exports))&&"undefined"!=typeof module?i(exports):"function"==typeof e&&e.amd?e(["exports"],i):i(t.THREE_GPU_ParticleSystem={})}(this,function(e){"use strict";var t=[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]];var r=new Float32Array(112);function i(){this.numParticles=1,this.numFrames=1,this.frameDuration=1,this.frameStart=0,this.frameStartRange=0,this.timeRange=99999999,this.startTime=null,this.lifeTime=1,this.lifeTimeRange=0,this.startSize=1,this.startSizeRange=0,this.endSize=1,this.endSizeRange=0,this.position=[0,0,0],this.positionRange=[0,0,0],this.velocity=[0,0,0],this.velocityRange=[0,0,0],this.acceleration=[0,0,0],this.accelerationRange=[0,0,0],this.spinStart=0,this.spinStartRange=0,this.spinSpeed=0,this.spinSpeedRange=0,this.colorMult=[1,1,1,1],this.colorMultRange=[0,0,0,0],this.worldVelocity=[0,0,0],this.worldAcceleration=[0,0,0],this.billboard=!0,this.orientation=[0,0,0,1]}function a(e,t){THREE.Mesh.call(this),this.emitter_=e.clone(),this.scene=t,this.world_=new THREE.Matrix4,this.tempWorld_=new THREE.Matrix4,this.timeOffset_=0,this.visible_=!1;var r=e.particleSystem,i=r.drawables_.indexOf(this.emitter_);i>=0&&r.drawables_.splice(i,1),r.drawables_.push(this)}a.prototype=Object.create(THREE.Mesh.prototype),a.prototype.constructor=a,a.prototype.trigger=function(e){this.visible_||this.scene.add(this.emitter_),e&&this.emitter_.position.copy((new THREE.Vector3).fromArray(e)),this.visible_=!0,this.timeOffset_=this.emitter_.timeSource_()},a.prototype.draw=function(e,t,r){this.visible_&&this.emitter_.draw(this.world_,t,this.timeOffset_)};function n(e,t,r){THREE.Mesh.call(this),r=r||e.timeSource_,this.particleBuffer_=new THREE.InstancedBufferGeometry,this.interleavedBuffer=new THREE.InterleavedBuffer,this.numParticles_=0,this.rampTexture_=e.defaultRampTexture,this.colorTexture_=t||e.defaultColorTexture,this.particleSystem=e,this.timeSource_=r,this.setState(THREE.NormalBlending)}function o(e,t,r,i,a,o){n.call(this,e,i,o),this.allocateParticles_(t,r),this.validateParameters(r),this.parameters=r,this.perParticleParamSetter=a,this.birthIndex_=0,this.maxParticles_=t}n.prototype=Object.create(THREE.Mesh.prototype),n.prototype.constructor=n,n.prototype.setTranslation=function(e,t,r){this.position.x=e,this.position.y=t,this.position.z=r},n.prototype.setState=function(e){this.blendFunc_=e},n.prototype.setColorRamp=function(e){var t=e.length/4;if(t%1!=0)throw"colorRamp must have multiple of 4 entries";this.rampTexture_==this.particleSystem.defaultRampTexture&&(this.rampTexture_=null),this.rampTexture_=this.particleSystem.createTextureFromFloats(t,1,e,this.rampTexture_)},n.prototype.validateParameters=function(e){var t=new i;for(var r in e)if(void 0===t[r])throw'unknown particle parameter "'+r+'"';for(var r in t)void 0===e[r]&&(e[r]=t[r])},n.prototype.createParticles_=function(e,r,i,a){var n=this.interleavedBuffer.array;this.billboard_=i.billboard;for(var o=this.particleSystem.randomFunction_,l=function(e){return(o()-.5)*e*2},s=function(e){for(var t=[],r=0;r<e.length;++r)t.push(l(e[r]));return t},c=0;c<r;++c){a&&a(c,i);for(var u=i.lifeTime,m=null===i.startTime?c*i.lifeTime/r:i.startTime,f=i.frameStart+l(i.frameStartRange),p=(new THREE.Vector3).addVectors((new THREE.Vector3).fromArray(i.position),(new THREE.Vector3).fromArray(s(i.positionRange))),d=(new THREE.Vector3).addVectors((new THREE.Vector3).fromArray(i.velocity),(new THREE.Vector3).fromArray(s(i.velocityRange))),h=(new THREE.Vector3).addVectors((new THREE.Vector3).fromArray(i.acceleration),(new THREE.Vector3).fromArray(s(i.accelerationRange))),v=(new THREE.Vector4).addVectors((new THREE.Vector4).fromArray(i.colorMult),(new THREE.Vector4).fromArray(s(i.colorMultRange))),y=i.spinStart+l(i.spinStartRange),S=i.spinSpeed+l(i.spinSpeedRange),T=i.startSize+l(i.startSizeRange),x=i.endSize+l(i.endSizeRange),w=(new THREE.Vector4).fromArray(i.orientation),E=0;E<1;++E){var b=28*E+28*c*4+28*e*4,_=b+1,R=b+2,g=b+3;n[0+b]=p.x,n[0+_]=p.y,n[0+R]=p.z,n[0+g]=m,n[4+b]=t[E][0],n[4+_]=t[E][1],n[4+R]=u,n[4+g]=f,n[8+b]=d.x,n[8+_]=d.y,n[8+R]=d.z,n[8+g]=T,n[12+b]=h.x,n[12+_]=h.y,n[12+R]=h.z,n[12+g]=x,n[16+b]=y,n[16+_]=S,n[16+R]=0,n[16+g]=0,n[20+b]=w.x,n[20+_]=w.y,n[20+R]=w.z,n[20+g]=w.w,n[24+b]=v.x,n[24+_]=v.y,n[24+R]=v.z,n[24+g]=v.w}}this.interleavedBuffer.needsUpdate=!0,this.material.uniforms.worldVelocity.value=new THREE.Vector3(i.worldVelocity[0],i.worldVelocity[1],i.worldVelocity[2]),this.material.uniforms.worldAcceleration.value=new THREE.Vector3(i.worldAcceleration[0],i.worldAcceleration[1],i.worldAcceleration[2]),this.material.uniforms.timeRange.value=i.timeRange,this.material.uniforms.frameDuration.value=i.frameDuration,this.material.uniforms.numFrames.value=i.numFrames,this.material.uniforms.rampSampler.value=this.rampTexture_,this.material.uniforms.colorSampler.value=this.colorTexture_,this.material.blending=this.blendFunc_},n.prototype.allocateParticles_=function(e,t){if(this.numParticles_!=e){if(6*e>65536&&THREE.BufferGeometry.MaxIndex<65536)throw"can't have more than 10922 particles per emitter";var i=new THREE.InterleavedBuffer(new Float32Array([0,0,0,0,-.5,-.5,0,0,0,0,0,0,.5,-.5,0,0,0,0,0,0,.5,.5,0,0,0,0,0,0,-.5,.5,0,0]),8),a=new THREE.InterleavedBufferAttribute(i,3,0);this.particleBuffer_.addAttribute("position",a);var n=new THREE.InterleavedBufferAttribute(i,2,4);this.particleBuffer_.addAttribute("uv",n);var o=new Uint16Array([0,1,2,0,2,3]);this.particleBuffer_.setIndex(new THREE.BufferAttribute(o,1)),this.numParticles_=e,this.interleavedBuffer=new THREE.InstancedInterleavedBuffer(new Float32Array(e*r.byteLength),28,1).setDynamic(!0),this.particleBuffer_.addAttribute("position",new THREE.InterleavedBufferAttribute(this.interleavedBuffer,3,0)),this.particleBuffer_.addAttribute("startTime",new THREE.InterleavedBufferAttribute(this.interleavedBuffer,1,3)),this.particleBuffer_.addAttribute("uvLifeTimeFrameStart",new THREE.InterleavedBufferAttribute(this.interleavedBuffer,4,4)),this.particleBuffer_.addAttribute("velocityStartSize",new THREE.InterleavedBufferAttribute(this.interleavedBuffer,4,8)),this.particleBuffer_.addAttribute("accelerationEndSize",new THREE.InterleavedBufferAttribute(this.interleavedBuffer,4,12)),this.particleBuffer_.addAttribute("spinStartSpinSpeed",new THREE.InterleavedBufferAttribute(this.interleavedBuffer,4,16)),this.particleBuffer_.addAttribute("orientation",new THREE.InterleavedBufferAttribute(this.interleavedBuffer,4,20)),this.particleBuffer_.addAttribute("colorMult",new THREE.InterleavedBufferAttribute(this.interleavedBuffer,4,24)),this.particleBuffer_.boundingSphere=new THREE.Sphere;var l={viewInverse:{type:"m4",value:this.particleSystem.camera.matrixWorld},worldVelocity:{type:"v3",value:null},worldAcceleration:{type:"v3",value:null},timeRange:{type:"f",value:null},time:{type:"f",value:null},timeOffset:{type:"f",value:null},frameDuration:{type:"f",value:null},numFrames:{type:"f",value:null},rampSampler:{type:"t",value:this.rampTexture_},colorSampler:{type:"t",value:this.colorTexture_}},s=new THREE.ShaderMaterial({uniforms:l,vertexShader:t.billboard?"// source: https://github.com/greggman/tdl/blob/master/tdl/particles.js#L154\r\n\r\nuniform mat4 viewInverse;\r\nuniform vec3 worldVelocity;\r\nuniform vec3 worldAcceleration;\r\nuniform float timeRange;\r\nuniform float time;\r\nuniform float timeOffset;\r\nuniform float frameDuration;\r\nuniform float numFrames;\r\n\r\n// Incoming vertex attributes\r\nattribute vec4 uvLifeTimeFrameStart;\r\nattribute float startTime;\r\nattribute vec4 velocityStartSize;\r\nattribute vec4 accelerationEndSize;\r\nattribute vec4 spinStartSpinSpeed;\r\nattribute vec4 colorMult;\r\n\r\n// Outgoing variables to fragment shader\r\nvarying vec2 outputTexcoord;\r\nvarying float outputPercentLife;\r\nvarying vec4 outputColorMult;\r\n\r\nvoid main() {\r\n    float lifeTime = uvLifeTimeFrameStart.z;\r\n    float frameStart = uvLifeTimeFrameStart.w;\r\n    vec3 velocity = (modelMatrix * vec4(velocityStartSize.xyz,\r\n                                 0.)).xyz + worldVelocity;\r\n    float startSize = velocityStartSize.w;\r\n    vec3 acceleration = (modelMatrix * vec4(accelerationEndSize.xyz,\r\n                                     0)).xyz + worldAcceleration;\r\n    float endSize = accelerationEndSize.w;\r\n    float spinStart = spinStartSpinSpeed.x;\r\n    float spinSpeed = spinStartSpinSpeed.y;\r\n\r\n    float localTime = mod((time - timeOffset - startTime), timeRange);\r\n    float percentLife = localTime / lifeTime;\r\n\r\n    float frame = mod(floor(localTime / frameDuration + frameStart),\r\n                     numFrames);\r\n    float uOffset = frame / numFrames;\r\n    float u = uOffset + (uv.x + 0.5) * (1. / numFrames);\r\n\r\n    outputTexcoord = vec2(u, uv.y + 0.5);\r\n    outputColorMult = colorMult;\r\n\r\n    vec3 basisX = viewInverse[0].xyz;\r\n    vec3 basisZ = viewInverse[1].xyz;\r\n    vec4 vertexWorld = modelMatrix * vec4(position, 1.0);\r\n\r\n    float size = mix(startSize, endSize, percentLife);\r\n    size = (percentLife < 0. || percentLife > 1.) ? 0. : size;\r\n    float s = sin(spinStart + spinSpeed * localTime);\r\n    float c = cos(spinStart + spinSpeed * localTime);\r\n\r\n    vec2 rotatedPoint = vec2(uv.x * c + uv.y * s, -uv.x * s + uv.y * c);\r\n    vec3 localPosition = vec3(basisX * rotatedPoint.x + basisZ * rotatedPoint.y) * size +\r\n                        velocity * localTime +\r\n                        acceleration * localTime * localTime +\r\n                        vertexWorld.xyz;\r\n\r\n    outputPercentLife = percentLife;\r\n    gl_Position = projectionMatrix * viewMatrix * vec4(localPosition, 1.);\r\n\r\n}":"// source: https://github.com/greggman/tdl/blob/master/tdl/particles.js#L63\r\n\r\n// 3D (oriented) vertex shader\r\nuniform mat4 worldViewProjection;\r\nuniform mat4 world;\r\nuniform vec3 worldVelocity;\r\nuniform vec3 worldAcceleration;\r\nuniform float timeRange;\r\nuniform float time;\r\nuniform float timeOffset;\r\nuniform float frameDuration;\r\nuniform float numFrames;\r\n\r\n// Incoming vertex attributes\r\nattribute vec3 offset;\r\nattribute vec4 uvLifeTimeFrameStart; // uv, lifeTime, frameStart\r\nattribute float startTime;    // position.xyz, startTime\r\nattribute vec4 velocityStartSize;    // velocity.xyz, startSize\r\nattribute vec4 accelerationEndSize;  // acceleration.xyz, endSize\r\nattribute vec4 spinStartSpinSpeed;   // spinStart.x, spinSpeed.y\r\nattribute vec4 orientation;          // orientation quaternion\r\nattribute vec4 colorMult;            // multiplies color and ramp textures\r\n\r\n// Outgoing variables to fragment shader\r\nvarying vec2 outputTexcoord;\r\nvarying float outputPercentLife;\r\nvarying vec4 outputColorMult;\r\nvoid main() {\r\nfloat lifeTime = uvLifeTimeFrameStart.z;\r\nfloat frameStart = uvLifeTimeFrameStart.w;\r\nvec3 velocity = (world * vec4(velocityStartSize.xyz,\r\n                              0.)).xyz + worldVelocity;\r\nfloat startSize = velocityStartSize.w;\r\nvec3 acceleration = (world * vec4(accelerationEndSize.xyz,\r\n                                  0)).xyz + worldAcceleration;\r\nfloat endSize = accelerationEndSize.w;\r\nfloat spinStart = spinStartSpinSpeed.x;\r\nfloat spinSpeed = spinStartSpinSpeed.y;\r\n\r\nfloat localTime = mod((time - timeOffset - startTime), timeRange);\r\nfloat percentLife = localTime / lifeTime;\r\n\r\nfloat frame = mod(floor(localTime / frameDuration + frameStart),\r\n                  numFrames);\r\nfloat uOffset = frame / numFrames;\r\nfloat u = uOffset + (uv.x + 0.5) * (1. / numFrames);\r\n\r\noutputTexcoord = vec2(u, uv.y + 0.5);\r\noutputColorMult = colorMult;\r\n\r\nfloat size = mix(startSize, endSize, percentLife);\r\nsize = (percentLife < 0. || percentLife > 1.) ? 0. : size;\r\nfloat s = sin(spinStart + spinSpeed * localTime);\r\nfloat c = cos(spinStart + spinSpeed * localTime);\r\n\r\nvec4 rotatedPoint = vec4((uv.x * c + uv.y * s) * size, 0.,\r\n                         (uv.x * s - uv.y * c) * size, 1.);\r\nvec3 center = velocity * localTime +\r\n              acceleration * localTime * localTime +\r\n              position +offset;\r\n\r\nvec4 q2 = orientation + orientation;\r\nvec4 qx = orientation.xxxw * q2.xyzx;\r\nvec4 qy = orientation.xyyw * q2.xyzy;\r\nvec4 qz = orientation.xxzw * q2.xxzz;\r\n\r\nmat4 localMatrix = mat4(\r\n    (1.0 - qy.y) - qz.z,\r\n    qx.y + qz.w,\r\n    qx.z - qy.w,\r\n    0,\r\n\r\n    qx.y - qz.w,\r\n    (1.0 - qx.x) - qz.z,\r\n    qy.z + qx.w,\r\n    0,\r\n\r\n    qx.z + qy.w,\r\n    qy.z - qx.w,\r\n    (1.0 - qx.x) - qy.y,\r\n    0,\r\n\r\n    center.x, center.y, center.z, 1);\r\nrotatedPoint = localMatrix * rotatedPoint;\r\noutputPercentLife = percentLife;\r\ngl_Position = projectionMatrix * modelViewMatrix * rotatedPoint;\r\n}",fragmentShader:"// source: https://github.com/greggman/tdl/blob/master/tdl/particles.js#L225\r\n\r\n#ifdef GL_ES\r\nprecision mediump float;\r\n#endif\r\nuniform sampler2D rampSampler;\r\nuniform sampler2D colorSampler;\r\n\r\n// Incoming variables from vertex shader\r\nvarying vec2 outputTexcoord;\r\nvarying float outputPercentLife;\r\nvarying vec4 outputColorMult;\r\n\r\nvoid main() {\r\n    vec4 colorMult = texture2D(rampSampler, vec2(outputPercentLife, 0.5)) * outputColorMult;\r\n    gl_FragColor = texture2D(colorSampler, outputTexcoord) * colorMult;\r\n    // For debugging: requires setup of some uniforms and vertex\r\n    // attributes to be commented out to avoid GL errors\r\n    //gl_FragColor = vec4(1., 0., 0., 1.);\r\n}",side:this.billboard_?THREE.DoubleSide:THREE.FrontSide,blending:this.blendFunc_,depthTest:!0,depthWrite:!1,transparent:!0});this.geometry=this.particleBuffer_,this.material=s}},n.prototype.setParameters=function(e,t){this.validateParameters(e);var r=e.numParticles;this.allocateParticles_(r,e),this.createParticles_(0,r,e,t)},n.prototype.draw=function(e,t,r){var i=this.material.uniforms;i.time.value=this.timeSource_(),i.timeOffset.value=r},n.prototype.createOneShot=function(){return new a(this,this.particleSystem.scene)},n.prototype.clone=function(e){return void 0===e&&(e=this.particleSystem.createParticleEmitter(this.colorTexture_,this.timeSource_)),e.geometry=this.geometry,e.material=this.material.clone(),e.material.uniforms.viewInverse.value=this.particleSystem.camera.matrixWorld,e.material.uniforms.rampSampler.value=this.rampTexture_,e.material.uniforms.colorSampler.value=this.colorTexture_,THREE.Mesh.prototype.clone.call(this,e),e},o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.prototype.birthParticles=function(e){var t=this.parameters.numParticles;for(this.parameters.startTime=this.timeSource_(),this.parameters.position=e;this.birthIndex_+t>=this.maxParticles_;){var r=this.maxParticles_-this.birthIndex_;this.createParticles_(this.birthIndex_,r,this.parameters,this.perParticleParamSetter),t-=r,this.birthIndex_=0}this.createParticles_(this.birthIndex_,t,this.parameters,this.perParticleParamSetter),0===this.birthIndex_&&this.particleSystem.scene.add(this),this.birthIndex_+=t},THREE.ParticleSystem=function(e,t,r,i){this.scene=e,this.camera=t,this.drawables_=[];for(var a=[0,.2,.7,1,.7,.2,0,0],n=[],o=0;o<8;++o)for(var l=0;l<8;++l){var s=a[l]*a[o];n.push(s,s,s,s)}var c,u=this.createTextureFromFloats(8,8,n),m=this.createTextureFromFloats(2,1,[1,1,1,1,1,1,1,0]);this.now_=new Date,this.timeBase_=new Date,this.timeSource_=r||(c=this,function(){var e=c.now_,t=c.timeBase_;return(e.getTime()-t.getTime())/1e3}),this.randomFunction_=i||function(){return Math.random()},this.defaultColorTexture=u,this.defaultRampTexture=m},THREE.ParticleSystem.prototype.createTextureFromFloats=function(e,t,r,i){var a=null;if(null==i){for(var n,o=new Uint8Array(r.length),l=0;l<r.length;l++)n=255*r[l],o[l]=n;return(a=new THREE.DataTexture(o,e,t,THREE.RGBAFormat)).minFilter=THREE.LinearFilter,a.magFilter=THREE.LinearFilter,a.needsUpdate=!0,a}return a=i},THREE.ParticleSystem.prototype.createParticleEmitter=function(e,t){var r=new n(this,e,t);return this.drawables_.push(r),r},THREE.ParticleSystem.prototype.createTrail=function(e,t,r,i,a){var n=new o(this,e,t,r,i,a);return this.drawables_.push(n),n},THREE.ParticleSystem.prototype.draw=function(e,t,r){this.now_=new Date;for(var i=0;i<this.drawables_.length;++i)this.drawables_[i].draw(t,e,0)}});
},{}]},{},["79Wc"], null)
//# sourceMappingURL=/threejs-gpu-particle-system.js.map