(this.webpackJsonpdemotest=this.webpackJsonpdemotest||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var o=n(7),i=n.n(o),a=n(14),s=n.n(a),r=(n(19),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),o(e),i(e),a(e),s(e)}))}),c=n(0),l=n(3),d=n(1),h=n(2),p=n(6),u=function(e,t){this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new p.q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:p.f.LEFT,MIDDLE:p.f.MIDDLE,RIGHT:p.f.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),r=s.NONE},this.update=function(){var t=new p.q,i=(new p.l).setFromUnitVectors(e.up,new p.q(0,1,0)),a=i.clone().inverse(),b=new p.q,j=new p.l;return function(){var e=n.object.position;return t.copy(e).sub(n.target),t.applyQuaternion(i),l.setFromVector3(t),n.autoRotate&&r===s.NONE&&V(2*Math.PI/60/60*n.autoRotateSpeed),l.theta+=d.theta,l.phi+=d.phi,l.theta=Math.max(n.minAzimuthAngle,Math.min(n.maxAzimuthAngle,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=h,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.target.add(u),t.setFromSpherical(l),t.applyQuaternion(a),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),u.set(0,0,0)),h=1,!!(m||b.distanceToSquared(n.object.position)>c||8*(1-j.dot(n.object.quaternion))>c)&&(n.dispatchEvent(o),b.copy(n.object.position),j.copy(n.object.quaternion),m=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Y,!1),n.domElement.removeEventListener("mousedown",T,!1),n.domElement.removeEventListener("wheel",N,!1),n.domElement.removeEventListener("touchstart",L,!1),n.domElement.removeEventListener("touchend",F,!1),n.domElement.removeEventListener("touchmove",A,!1),document.removeEventListener("mousemove",k,!1),document.removeEventListener("mouseup",I,!1),window.removeEventListener("keydown",H,!1)};var n=this,o={type:"change"},i={type:"start"},a={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY_PAN:4},r=s.NONE,c=1e-6,l=new p.o,d=new p.o,h=1,u=new p.q,m=!1,b=new p.p,j=new p.p,w=new p.p,f=new p.p,y=new p.p,g=new p.p,v=new p.p,x=new p.p,O=new p.p;function E(){return Math.pow(.95,n.zoomSpeed)}function V(e){d.theta-=e}function z(e){d.phi-=e}var M=function(){var e=new p.q;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),u.add(e)}}(),S=function(){var e=new p.q;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),u.add(e)}}(),C=function(){var e=new p.q;return function(t,o){var i=n.domElement===document?n.domElement.body:n.domElement;if(n.object.isPerspectiveCamera){var a=n.object.position;e.copy(a).sub(n.target);var s=e.length();s*=Math.tan(n.object.fov/2*Math.PI/180),M(2*t*s/i.clientHeight,n.object.matrix),S(2*o*s/i.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(M(t*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),S(o*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(e){n.object.isPerspectiveCamera?h/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(e){n.object.isPerspectiveCamera?h*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function P(e){f.set(e.clientX,e.clientY)}function T(e){if(!1!==n.enabled){switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case n.mouseButtons.LEFT:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;P(e),r=s.PAN}else{if(!1===n.enableRotate)return;!function(e){b.set(e.clientX,e.clientY)}(e),r=s.ROTATE}break;case n.mouseButtons.MIDDLE:if(!1===n.enableZoom)return;!function(e){v.set(e.clientX,e.clientY)}(e),r=s.DOLLY;break;case n.mouseButtons.RIGHT:if(!1===n.enablePan)return;P(e),r=s.PAN}r!==s.NONE&&(document.addEventListener("mousemove",k,!1),document.addEventListener("mouseup",I,!1),n.dispatchEvent(i))}}function k(e){if(!1!==n.enabled)switch(e.preventDefault(),r){case s.ROTATE:if(!1===n.enableRotate)return;!function(e){j.set(e.clientX,e.clientY),w.subVectors(j,b).multiplyScalar(n.rotateSpeed);var t=n.domElement===document?n.domElement.body:n.domElement;V(2*Math.PI*w.x/t.clientHeight),z(2*Math.PI*w.y/t.clientHeight),b.copy(j),n.update()}(e);break;case s.DOLLY:if(!1===n.enableZoom)return;!function(e){x.set(e.clientX,e.clientY),O.subVectors(x,v),O.y>0?R(E()):O.y<0&&D(E()),v.copy(x),n.update()}(e);break;case s.PAN:if(!1===n.enablePan)return;!function(e){y.set(e.clientX,e.clientY),g.subVectors(y,f).multiplyScalar(n.panSpeed),C(g.x,g.y),f.copy(y),n.update()}(e)}}function I(e){!1!==n.enabled&&(document.removeEventListener("mousemove",k,!1),document.removeEventListener("mouseup",I,!1),n.dispatchEvent(a),r=s.NONE)}function N(e){!1===n.enabled||!1===n.enableZoom||r!==s.NONE&&r!==s.ROTATE||(e.preventDefault(),e.stopPropagation(),n.dispatchEvent(i),function(e){e.deltaY<0?D(E()):e.deltaY>0&&R(E()),n.update()}(e),n.dispatchEvent(a))}function H(e){!1!==n.enabled&&!1!==n.enableKeys&&!1!==n.enablePan&&function(e){switch(e.preventDefault(),e.keyCode){case n.keys.UP:C(0,n.keyPanSpeed),n.update();break;case n.keys.BOTTOM:C(0,-n.keyPanSpeed),n.update();break;case n.keys.LEFT:C(n.keyPanSpeed,0),n.update();break;case n.keys.RIGHT:C(-n.keyPanSpeed,0),n.update()}}(e)}function L(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:if(!1===n.enableRotate)return;!function(e){b.set(e.touches[0].pageX,e.touches[0].pageY)}(e),r=s.TOUCH_ROTATE;break;case 2:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){if(n.enableZoom){var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,i=Math.sqrt(t*t+o*o);v.set(0,i)}if(n.enablePan){var a=.5*(e.touches[0].pageX+e.touches[1].pageX),s=.5*(e.touches[0].pageY+e.touches[1].pageY);f.set(a,s)}}(e),r=s.TOUCH_DOLLY_PAN;break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(i)}}function A(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(!1===n.enableRotate)return;if(r!==s.TOUCH_ROTATE)return;!function(e){j.set(e.touches[0].pageX,e.touches[0].pageY),w.subVectors(j,b).multiplyScalar(n.rotateSpeed);var t=n.domElement===document?n.domElement.body:n.domElement;V(2*Math.PI*w.x/t.clientHeight),z(2*Math.PI*w.y/t.clientHeight),b.copy(j),n.update()}(e);break;case 2:if(!1===n.enableZoom&&!1===n.enablePan)return;if(r!==s.TOUCH_DOLLY_PAN)return;!function(e){if(n.enableZoom){var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,i=Math.sqrt(t*t+o*o);x.set(0,i),O.set(0,Math.pow(x.y/v.y,n.zoomSpeed)),R(O.y),v.copy(x)}if(n.enablePan){var a=.5*(e.touches[0].pageX+e.touches[1].pageX),s=.5*(e.touches[0].pageY+e.touches[1].pageY);y.set(a,s),g.subVectors(y,f).multiplyScalar(n.panSpeed),C(g.x,g.y),f.copy(y)}n.update()}(e);break;default:r=s.NONE}}function F(e){!1!==n.enabled&&(n.dispatchEvent(a),r=s.NONE)}function Y(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",Y,!1),n.domElement.addEventListener("mousedown",T,!1),n.domElement.addEventListener("wheel",N,!1),n.domElement.addEventListener("touchstart",L,!1),n.domElement.addEventListener("touchend",F,!1),n.domElement.addEventListener("touchmove",A,!1),window.addEventListener("keydown",H,!1),this.update()};(u.prototype=Object.create(p.d.prototype)).constructor=u,Object.defineProperties(u.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}});var m=u,b=n(10),j=n(4),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).getRotate=function(e,t,n){var i={ID:e};switch(e){case 1:i.values={x:"x"===t?Number(n.target.value)/100:o.props.rotationMesh1.x,y:"y"===t?Number(n.target.value)/100:o.props.rotationMesh1.y,z:"z"===t?Number(n.target.value)/100:o.props.rotationMesh1.z},o.setState({rotationMesh1:i.values});break;case 2:i.values={x:"x"===t?Number(n.target.value)/100:o.props.rotationMesh2.x,y:"y"===t?Number(n.target.value)/100:o.props.rotationMesh2.y,z:"z"===t?Number(n.target.value)/100:o.props.rotationMesh2.z},o.setState({rotationMesh2:i.values})}o.props.returnRotation(i)},o.state={rotationMesh1:{x:null,y:null,z:null},rotationMesh2:{x:null,y:null,z:null}},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{style:{width:250,height:200},children:[Object(j.jsx)("div",{style:{padding:10,backgroundColor:"#c1e6e8"},children:"Plain1 Rotation Control"}),Object(j.jsxs)("div",{style:{display:"flex",backgroundColor:"#93d5d9"},children:[Object(j.jsx)("div",{style:{padding:5},children:"X"}),Object(j.jsx)("div",{style:{padding:5,width:40},children:this.state.rotationMesh1.x?this.state.rotationMesh1.x:this.props.rotationMesh1.x}),Object(j.jsx)("input",{style:{padding:5},type:"range",step:"1",min:"0",max:"100",onChange:function(t){return e.getRotate(1,"x",t)},defaultValue:this.props.rotationMesh1.x})]}),Object(j.jsxs)("div",{style:{display:"flex",backgroundColor:"#93d5d9"},children:[Object(j.jsx)("div",{style:{padding:5},children:"Y"}),Object(j.jsx)("div",{style:{padding:5,width:40},children:this.state.rotationMesh1.y?this.state.rotationMesh1.y:this.props.rotationMesh1.y}),Object(j.jsx)("input",{style:{padding:5},type:"range",step:"1",min:"0",max:"100",onChange:function(t){return e.getRotate(1,"y",t)},defaultValue:this.props.rotationMesh1.y})]}),Object(j.jsxs)("div",{style:{display:"flex",backgroundColor:"#93d5d9"},children:[Object(j.jsx)("div",{style:{padding:5},children:"Z"}),Object(j.jsx)("div",{style:{padding:5,width:40},children:this.state.rotationMesh1.z?this.state.rotationMesh1.z:this.props.rotationMesh1.z}),Object(j.jsx)("input",{style:{padding:5},type:"range",step:"1",min:"0",max:"100",onChange:function(t){return e.getRotate(1,"z",t)},defaultValue:this.props.rotationMesh1.z})]}),Object(j.jsx)("div",{style:{padding:10,backgroundColor:"#c1e6e8"},children:"Plain2 Rotation Control"}),Object(j.jsxs)("div",{style:{display:"flex",backgroundColor:"#93d5d9"},children:[Object(j.jsx)("div",{style:{padding:5},children:"X"}),Object(j.jsx)("div",{style:{padding:5,width:40},children:this.state.rotationMesh2.x?this.state.rotationMesh2.x:this.props.rotationMesh2.x}),Object(j.jsx)("input",{style:{padding:5},type:"range",step:"1",min:"0",max:"100",onChange:function(t){return e.getRotate(2,"x",t)},defaultValue:this.props.rotationMesh2.x})]}),Object(j.jsxs)("div",{style:{display:"flex",backgroundColor:"#93d5d9"},children:[Object(j.jsx)("div",{style:{padding:5},children:"Y"}),Object(j.jsx)("div",{style:{padding:5,width:40},children:this.state.rotationMesh2.y?this.state.rotationMesh2.y:this.props.rotationMesh2.y}),Object(j.jsx)("input",{style:{padding:5},type:"range",step:"1",min:"0",max:"100",onChange:function(t){return e.getRotate(2,"y",t)},defaultValue:this.props.rotationMesh2.y})]}),Object(j.jsxs)("div",{style:{display:"flex",backgroundColor:"#93d5d9"},children:[Object(j.jsx)("div",{style:{padding:5},children:"Z"}),Object(j.jsx)("div",{style:{padding:5,width:40},children:this.state.rotationMesh2.z?this.state.rotationMesh2.z:this.props.rotationMesh2.z}),Object(j.jsx)("input",{style:{padding:5},type:"range",step:"1",min:"0",max:"100",onChange:function(t){return e.getRotate(2,"z",t)},defaultValue:this.props.rotationMesh2.z})]})]})}}]),n}(o.Component),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){console.log("SelectedObjInfo render");var e={padding:"10px",backgroundColor:"#c1e6e8"},t={display:"flex",backgroundColor:"#93d5d9"},n={width:"30%",padding:"5px"};return this.props.selectedObjInfo.name?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:e,children:"Object Infomation"}),Object(j.jsxs)("div",{style:t,children:[Object(j.jsx)("div",{style:n,children:"ID"}),Object(j.jsx)("div",{children:this.props.selectedObjInfo.name})]}),Object(j.jsxs)("div",{style:t,children:[Object(j.jsx)("div",{style:n,children:"Type"}),Object(j.jsx)("div",{children:this.props.selectedObjInfo.type})]}),Object(j.jsx)("div",{style:e,children:"Position"}),Object(j.jsxs)("div",{style:t,children:[Object(j.jsx)("div",{style:n,children:"X"}),Object(j.jsx)("div",{children:this.props.selectedObjInfo.position.x})]}),Object(j.jsxs)("div",{style:t,children:[Object(j.jsx)("div",{style:n,children:"Y"}),Object(j.jsx)("div",{children:this.props.selectedObjInfo.position.y})]}),Object(j.jsxs)("div",{style:t,children:[Object(j.jsx)("div",{style:n,children:"Z"}),Object(j.jsx)("div",{children:this.props.selectedObjInfo.position.z})]}),Object(j.jsx)("div",{style:e,children:"Scale"}),Object(j.jsxs)("div",{style:t,children:[Object(j.jsx)("div",{style:n,children:"Width"}),Object(j.jsx)("div",{children:this.props.selectedObjInfo.scale.width})]}),Object(j.jsxs)("div",{style:t,children:[Object(j.jsx)("div",{style:n,children:"Height"}),Object(j.jsx)("div",{children:this.props.selectedObjInfo.scale.height})]}),Object(j.jsxs)("div",{style:t,children:[Object(j.jsx)("div",{style:n,children:"Depth"}),Object(j.jsx)("div",{children:this.props.selectedObjInfo.scale.depth})]})]}):"None object been selected"}}]),n}(o.Component),y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).detectRef=function(){console.log("bodyRef : ",o.mainBody),console.log("mainRef : ",o.mainView),console.log("frontRef : ",o.frontView),console.log("sideRef : ",o.sideView)},o.setMainView=function(){o.mainView&&(o.mainView.appendChild(o.renderer.domElement),o.setState({mainView:1}))},o.resizeFrontView=function(){o.cameraControl2||(o.cameraControl2=new m(o.camera2,o.renderer2.domElement)),o.cameraControl2.enableRotate=!1,o.renderer2.setSize(o.state.frontViewSize.w-1,o.state.frontViewSize.h-1),o.frontView.appendChild(o.renderer2.domElement)},o.resizeSideView=function(){o.cameraControl3||(o.cameraControl3=new m(o.camera3,o.renderer3.domElement)),o.cameraControl3.enableRotate=!1,o.renderer3.setSize(o.state.sideViewSize.w-1,o.state.sideViewSize.h-1),o.sideView.appendChild(o.renderer3.domElement)},o.resizeTopView=function(){o.cameraControl4||(o.cameraControl4=new m(o.camera4,o.renderer4.domElement)),o.cameraControl4.enableRotate=!1,o.renderer4.setSize(o.state.topViewSize.w-1,o.state.topViewSize.h-1),o.topView.appendChild(o.renderer4.domElement)},o.animate=function(){o.frontView?o.frontView.clientWidth===o.state.frontViewSize.w&&o.frontView.clientHeight===o.state.frontViewSize.h||o.setState({frontViewSize:{w:o.frontView.clientWidth,h:o.frontView.clientHeight}}):(o.state.frontViewSize.w||o.state.frontViewSize.h)&&o.setState({frontViewSize:{w:null,h:null}}),o.sideView?o.sideView.clientWidth===o.state.sideViewSize.w&&o.sideView.clientHeight===o.state.sideViewSize.h||o.setState({sideViewSize:{w:o.sideView.clientWidth,h:o.sideView.clientHeight}}):(o.state.sideViewSize.w||o.state.sideViewSize.h)&&o.setState({sideViewSize:{w:null,h:null}}),o.topView?o.topView.clientWidth===o.state.topViewSize.w&&o.topView.clientHeight===o.state.topViewSize.h||o.setState({topViewSize:{w:o.topView.clientWidth,h:o.topView.clientHeight}}):(o.state.topViewSize.w||o.state.topViewSize.h)&&o.setState({topViewSize:{w:null,h:null}}),o.renderer.render(o.scene,o.camera1),o.renderer2.render(o.scene,o.camera2),o.renderer3.render(o.scene,o.camera3),o.renderer4.render(o.scene,o.camera4),o.mesh1.rotation.x+=o.state.rotationMesh1.x,o.mesh1.rotation.y+=o.state.rotationMesh1.y,o.mesh1.rotation.z+=o.state.rotationMesh1.z,o.mesh2.rotation.x+=o.state.rotationMesh2.x,o.mesh2.rotation.y+=o.state.rotationMesh2.y,o.mesh2.rotation.z+=o.state.rotationMesh2.z,window.requestAnimationFrame(o.animate)},o.createPlane=function(e,t,n,i,a,s){var r=new p.i({color:255,side:p.b}),c=new p.k(t,n);switch(e){case 1:o.mesh1=new p.h(c,r),o.mesh1.position.copy(a),o.mesh1.name="plain1",o.scene.add(o.mesh1);break;case 2:o.mesh2=new p.h(c,r),o.mesh2.position.copy(a),o.mesh2.name="plain2",o.scene.add(o.mesh2)}},o.threeDLayerMouseDown=function(e){var t=o.detectObjectSelectedOrNot(e);if(t&&o.state.selectedObjInfo.name===t.name)"plain1"===t.name&&o.selectedObjectPaintedOrNot(o.mesh1,!1);else if(t&&o.state.selectedObjInfo.name!==t.name){"plain1"===t.name?(o.selectedObjectPaintedOrNot(o.mesh1,!0),o.selectedObjectPaintedOrNot(o.mesh2,!1)):(o.selectedObjectPaintedOrNot(o.mesh1,!1),o.selectedObjectPaintedOrNot(o.mesh2,!0));var n={name:t.name,type:t.type,position:{x:t.position.x,y:t.position.y,z:t.position.z},scale:{width:t.geometry.parameters.width,height:t.geometry.parameters.height,depth:t.geometry.parameters.depth?t.geometry.parameters.depth:0}};o.setState({selectedObjInfo:n})}else{o.setState({selectedObjInfo:{name:null,type:null,position:null,scale:null}})}},o.detectObjectSelectedOrNot=function(e){var t,n=new p.m,i=new p.p;if(!o.mainView)return null;t=o.mainView.getBoundingClientRect(),i.x=(e.clientX-t.left)/o.mainView.clientWidth*2-1,i.y=-(e.clientY-t.top)/o.mainView.clientHeight*2+1,n.setFromCamera(i,o.camera1);var a=n.intersectObjects(o.scene.children);if(!(a.length>0))return null;for(var s=0;s<a.length;s++)if("Mesh"===a[s].object.type)return a[s].object},o.getBoxesState=function(e){o.frontView&&o.resizeFrontView()},o.returnRotation=function(e){switch(e.ID){case 1:o.state.rotationMesh1!==e.values&&o.setState({rotationMesh1:e.values});break;case 2:o.state.rotationMesh2!==e.values&&o.setState({rotationMesh2:e.values})}},o.state={mainView:0,frontViewSize:{w:null,h:null},sideViewSize:{w:null,h:null},topViewSize:{w:null,h:null},rotationMesh1:{x:.01,y:0,z:0},rotationMesh2:{x:0,y:.01,z:0},selectedObjInfo:{name:null,type:null,position:null,scale:null}},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.detectRef();this.camera1=new p.j(100,2.4,.1,1e3),this.scene=new p.n,this.camera1.position.set(-20,20,20),this.scene.background=new p.a(15790320),this.createPlane(1,20,20,"chocolate",new p.q(-20,10,0),new p.c(0,-90*p.g.DEG2RAD,0)),this.createPlane(2,10,10,"chocolate",new p.q(20,10,0),new p.c(0,-90*p.g.DEG2RAD,0)),this.renderer=new p.r,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(1920,800),this.sceneGrid=new p.e(50,50),this.scene.add(this.sceneGrid),this.camera2=new p.j(70,1,.1,1e3),this.camera2.position.z=20,this.camera2.position.x=0,this.camera2.position.y=1,this.camera2.lookAt(0,0,0),this.renderer2=new p.r,this.renderer2.setClearColor(15658734,1),this.camera3=new p.j(70,1,.1,1e3),this.camera3.position.z=0,this.camera3.position.x=-20,this.camera3.position.y=1,this.camera3.lookAt(0,0,0),this.renderer3=new p.r,this.renderer3.setClearColor(15658734,1),this.camera4=new p.j(70,1,.1,1e3),this.camera4.position.z=0,this.camera4.position.x=0,this.camera4.position.y=20,this.camera4.lookAt(0,0,0),this.renderer4=new p.r,this.renderer4.setClearColor(15658734,1),this.cameraControl1=new m(this.camera1,this.renderer.domElement),this.animate()}},{key:"componentDidUpdate",value:function(e,t){1!==t.mainView&&this.setMainView(),t.frontViewSize!==this.state.frontViewSize&&this.frontView&&this.resizeFrontView(),t.sideViewSize!==this.state.sideViewSize&&this.sideView&&this.resizeSideView(),t.topViewSize!==this.state.topViewSize&&this.topView&&this.resizeTopView()}},{key:"componentWillUnmount",value:function(){}},{key:"selectedObjectPaintedOrNot",value:function(e,t){t?e.material.color.set(1300287):e.material.color.set(255)}},{key:"render",value:function(){var e=this;console.log("DemoApp render"),console.log("v13");return Object(j.jsx)("div",{ref:function(t){e.mainBody=t},style:{border:"1px solid black"},onMouseDown:this.threeDLayerMouseDown,children:Object(j.jsxs)(b.c,{backgroundColor:"pink",width:1920,height:800,boxColor:"",boxHeaderColor:"",boxTabColor:"",boxHeaderHoverColor:"",boxTabHoverColor:"",boxTabSelectedColor:"",iconHoverColor:"",boxTabRadius:"0px 10px 0px 0px",boxesSetting:[{boxID:"A",width:200,height:200,x:0,y:100},{boxID:"B",width:200,height:200,x:200,y:100},{boxID:"C",width:200,height:200,x:400,y:100},{boxID:"D",width:200,height:200,x:600,y:100},{boxID:"E",width:200,height:200,x:800,y:100}],openContainer:this.state.showContainer,tabHeight:25,getBoxesState:this.getBoxesState,children:[Object(j.jsx)(b.a,{children:Object(j.jsx)("div",{style:{width:"100%",height:"100%"},ref:function(t){e.mainView=t}})}),Object(j.jsx)(b.b,{containerTabTitle:"Front View",containerID:1,boxID:"A",children:Object(j.jsx)("div",{style:{width:"100%",height:"100%",overflow:"hidden"},ref:function(t){e.frontView=t}})}),Object(j.jsx)(b.b,{containerTabTitle:"Side View",containerID:2,boxID:"B",children:Object(j.jsx)("div",{style:{width:"100%",height:"100%",overflow:"hidden"},ref:function(t){e.sideView=t}})}),Object(j.jsx)(b.b,{containerTabTitle:"Top View",containerID:3,boxID:"C",children:Object(j.jsx)("div",{style:{width:"100%",height:"100%",overflow:"hidden"},ref:function(t){e.topView=t}})}),Object(j.jsx)(b.b,{containerTabTitle:"Rotation Speed",containerID:4,boxID:"D",children:Object(j.jsx)(w,{rotationMesh1:this.state.rotationMesh1,rotationMesh2:this.state.rotationMesh2,returnRotation:this.returnRotation})}),Object(j.jsx)(b.b,{containerTabTitle:"Obj Info",containerID:5,boxID:"D",children:Object(j.jsx)(f,{selectedObjInfo:this.state.selectedObjInfo})})]})})}}]),n}(o.Component);s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),r()}},[[22,1,2]]]);
//# sourceMappingURL=main.8a179e60.chunk.js.map