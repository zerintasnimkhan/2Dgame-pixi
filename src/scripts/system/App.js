import * as PIXI from "pixi.js";

class Application {
  run(config) {
    this.config = config;
    this.app = new PIXI.Application({ resizeTo: window });
    document.body.appendChild(this.app.view);
    this.loader = new Loader(this.app.loader, this.config);
    this.loader.preload().then(() => this.start());
  }
  start() {}
}

export const App = new Application();

// (async () =>
// {
// const app = new Application();

// await app.init({ resizeTo: window });

// document.body.appendChild(app.canvas);
// })
