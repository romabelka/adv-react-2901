import { List, OrderedMap } from 'immutable'

export function generateId() {
  return Date.now()
}

export function fbToEntities(values, DataRecord) {
  return new List(
    Object.entries(values).map(
      ([id, value]) => new DataRecord({ id, ...value })
    )
  )
}

export function fbToMapEntities(docs, DataRecord) {
  return new OrderedMap(
    Object.entries(docs).reduce(
      (res, [id, doc]) => ({ ...res, [id]: new DataRecord({ id, ...doc }) }),
      {}
    )
  )
}
