var e,f=require("gltf-transform"),r=(e=require("buffer-splice"))&&"object"==typeof e&&"default"in e?e.default:e;exports.split=function(e,t){var u=e.json,n=f.GLTFUtil.createLogger("gltf-transform-split",f.LoggerVerbosity.INFO);u.buffers.forEach(function(e,r){if(e.uri&&e.uri.match(/^data:/)){var t=e.uri;return e.uri="buffer"+r+".bin",void(e._buffer=f.GLTFUtil.createBufferFromDataURI(t))}throw new Error("Only buffers using Data URIs are currently supported")});var i={};return u.meshes.forEach(function(e){-1!==t.indexOf(e.name)&&e.primitives.forEach(function(f){function r(f){if(void 0===i[f.bufferView])i[f.bufferView]=e.name;else if(i[f.bufferView]!==e.name)throw new Error("Not implemented: Two meshes share a bufferview.")}f.indices&&r(u.accessors[f.indices]),Object.keys(f.attributes).forEach(function(e){r(u.accessors[f.attributes[e]])})})}),t.forEach(function(e){var t=f.GLTFUtil.createBuffer();n.info("📦  "+e),u.bufferViews.forEach(function(f,b){if(i[b]===e){n.info(e+":"+b),n.info("original before: "+u.buffers[f.buffer]._buffer.byteLength+" w/ offset "+f.byteOffset+" and length "+f.byteLength);var s={buffer:u.buffers[f.buffer]._buffer},o=r(s,f.byteOffset,f.byteLength);n.info("spliced: "+o.byteLength),u.buffers[f.buffer]._buffer=s.buffer,n.info("original after: "+u.buffers[f.buffer]._buffer.byteLength);var a=f.byteOffset+f.byteLength,c=f.buffer;f.byteOffset=t.byteLength,f.buffer=u.buffers.length,t=r(t,null,null,o),u.bufferViews.forEach(function(e){e.buffer===c&&e.byteOffset>=a&&(e.byteOffset-=f.byteLength)})}});var b={uri:e+".bin",byteLength:void 0};b._buffer=t,u.buffers.push(b)}),u.buffers=u.buffers.filter(function(e,f){return e.byteLength=e._buffer.byteLength,delete e._buffer,e.byteLength>0||(u.bufferViews.forEach(function(e){e.buffer>=f&&e.buffer--}),!1)}),e};
//# sourceMappingURL=gltf-transform-split.js.map
