import { makeRenderLoop, camera, cameraControls, gui, gl } from './init';
import Renderer from './renderers/renderer';
import Scene from './scene';

const renderer = new Renderer();
const scene = new Scene();

camera.position.set(3, 61, 21);
cameraControls.target.set(0, 60, 21);
gl.enable(gl.DEPTH_TEST);
scene.loadTexture();

function render() {
  scene.update();
  renderer.render(camera, scene);
}

makeRenderLoop(render)();