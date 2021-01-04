declare module 'comlink-loader!*' {
  class WebpackWorker extends Worker {
    constructor()

    quickSort(): Promise<void>
  }

  export = WebpackWorker
}
  