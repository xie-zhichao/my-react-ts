/**
 * state model sessionStore持久化
 */

const recoverStore = (key: string) => {
  try {
    const item = window.sessionStorage.getItem(key)
    return typeof item === 'string' ? JSON.parse(item) : item
  } catch (error) {
    console.warn('query model error', key, error)
    return undefined
  }
}

const persistStore = (key: string, val: any) => {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(val))
  } catch (error) {
    console.warn('persist model error', key, val, error)
  }
}

function SessionStorePersister(persistName: string): IModelProviderPersist {
  return {
    persistName,
    recoverModel: (initial: IModelState) => { 
      const persistState = recoverStore(persistName)
      return {
        ...initial,
        ...persistState
      }
    },
    persistModel: payload => {
      persistStore(persistName, payload)
    }
  }
}

export default SessionStorePersister
