/**
 * 消息订阅
 */

interface EventListener {
  (payload: any): void
}

const events: {[name: string]: EventListener[]} = {}

export function subscribe(eventName: string, listener: EventListener) {
  if (!events[eventName]) events[eventName] = []
  events[eventName].push(listener)
}

export function unsubscribe(eventName: string, listener: EventListener) {
  const eventListeners = events[eventName]
  if (!eventListeners) throw new Error(`there are no subscribes on "${eventName}"`)
  const index = eventListeners.indexOf(listener)
  if (index >= 0) eventListeners.splice(index, 1)
  else console.warn(`the listener not exists in ${eventName}`, listener)
}

export function clearSubscribe(eventName: string) {
  events[eventName] = []
}

export function trigger(eventName: string, payload: any) {
  const eventListeners = events[eventName]
  if (eventListeners) {
    eventListeners.forEach(listener => listener(payload))
  }
}
