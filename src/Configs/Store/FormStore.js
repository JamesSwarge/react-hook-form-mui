import { makeAutoObservable } from "mobx"

class FormStore {
  isLocalHost = false
  constructor() {
    makeAutoObservable(this)
  }

  setLocalHost = (data) => (this.isLocalHost = data)
}

export default new FormStore()
