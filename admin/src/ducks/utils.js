import { runSaga } from 'redux-saga'

export function generateId() {
  return Date.now()
}

export async function recordSaga(saga, initialAction, initialState) {
  const dispatched = []

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
      getState: () => initialState || {}
    },
    saga,
    initialAction
  ).done

  return dispatched
}
