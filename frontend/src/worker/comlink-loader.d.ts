declare module 'comlink-loader!*' {
  class WebWorker extends Worker {
    constructor()

    quickSort(): Promise<void>
  }

  export = WebWorker
}
  