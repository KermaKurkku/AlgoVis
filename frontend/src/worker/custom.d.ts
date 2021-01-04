declare module 'comlink-loader!*' {
  class WebpackWorker extends Worker {
    constructor()

    quickSortRedux(): Promise<void>
  }

  export = WebpackWorker
}
  