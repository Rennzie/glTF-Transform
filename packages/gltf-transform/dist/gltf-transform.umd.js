!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(e.gltfTransform={})}(this,function(e){var r,n=function(){function e(e,r){this.json=e,this.resources=r}return e.prototype.resolveURI=function(e){return this.resources[e]},e.addImage=function(e,r,n,t){var o,i;switch(t){case"image/jpeg":o=r+".jpg",i="image/jpeg";break;case"image/png":o=r+".png",i="image/png";break;default:throw new Error('Unsupported image type, "'+t+'".')}return e.json.images.push({name:r,mimeType:i,uri:o}),e.resources[o]=n,e},e.removeImage=function(e,r){var n=e.json.textures.filter(function(e){return e.source===r});if(n.length)throw new Error("Image is in use by "+n.length+" textures and cannot be removed.");if(!e.resolveURI(e.json.images[r].uri))throw new Error("No such image, or image is embedded.");return e.json.images.splice(r,1),e.json.textures.forEach(function(e){e.source>r&&e.source--}),e},e.addBuffer=function(e,r,n){var t=r+".bin";return e.json.buffers.push({name:r,uri:t,byteLength:n.byteLength}),e.resources[t]=n,e},e.removeBuffer=function(e,r){var n=e.json.bufferViews.filter(function(e){return e.buffer===r});if(n.length)throw new Error("Buffer is in use by "+n.length+" bufferViews and cannot be removed.");var t=e.json.buffers[r];return e.json.buffers.splice(r,1),delete e.resources[t.uri],e},e}();(r=e.LoggerVerbosity||(e.LoggerVerbosity={}))[r.NONE=3]="NONE",r[r.ERROR=2]="ERROR",r[r.WARNING=1]="WARNING",r[r.INFO=0]="INFO";var t=function(){function r(e,r){this.name=e,this.verbosity=r}return r.prototype.info=function(r){this.verbosity>=e.LoggerVerbosity.INFO&&console.log(this.name+": "+r)},r.prototype.warn=function(r){this.verbosity>=e.LoggerVerbosity.WARNING&&console.warn(this.name+": "+r)},r.prototype.error=function(r){this.verbosity>=e.LoggerVerbosity.ERROR&&console.error(this.name+": "+r)},r}(),o=function(){function e(){}return e.wrapGLTF=function(e,r){return new n(e,r)},e.wrapGLB=function(e){throw new Error("Not implemented.")},e.bundleGLTF=function(e){return{json:e.json,resources:e.resources}},e.bundleGLB=function(e){throw new Error("Not implemented.")},e.createBuffer=function(){return"undefined"==typeof Buffer?new ArrayBuffer(0):new Buffer([])},e.createBufferFromDataURI=function(e){if("undefined"==typeof Buffer){for(var r=atob(e.split(",")[1]),n=new Uint8Array(r.length),t=0;t<r.length;t++)n[t]=r.charCodeAt(t);return n.buffer}return new Buffer(e.split(",")[1],"base64")},e.createLogger=function(e,r){return new t(e,r)},e}();e.GLTFUtil=o,e.GLTFContainer=n,e.Logger=t});
//# sourceMappingURL=gltf-transform.umd.js.map
