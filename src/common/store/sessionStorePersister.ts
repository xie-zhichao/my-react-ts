/**
 * state model sessionStore持久化
 */

const queryModel = (key: string) => {
  try {
    const item = window.sessionStorage.getItem(key)
    return typeof item === 'string' ? JSON.parse(item) : item
  } catch (error) {
    console.warn('query model error', key, error)
    return undefined
  }
}

const persistModel = (key: string, val: any) => {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(val))
  } catch (error) {
    console.warn('persist model error', key, val, error)
  }
  
}

const SessionStorePersister: IModelProviderPersist = {
  queryModel,
  persistModel
}

export default SessionStorePersister
