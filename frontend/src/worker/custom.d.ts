declare module 'comlink-loader!*' {
  class SortWorker extends Worker {
    constructor()

    quickSort(): Promise<void>
  }

  export = SortWorker
}
  