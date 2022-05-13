import axios from 'axios'
import { takeEvery } from 'redux-saga/effects'
import { URL } from '../../common-components/utils'

export function saveChangesFC(payload: any): void {
  const { account, history } = payload
  axios
    .post(`${URL}/saveChanges`, payload)
    .then(res => {
      if (res.statusText == 'Logged in') {
        history.push('./account')
        alert('Successful Login')
      }
    })
    .catch(err => {
      alert(err.response)
    })
}

function saveChanges(action: any) {
  saveChangesFC(action.payload)
}

export default function* accountSaga(): any {
  yield takeEvery('SAVE_CHANGES', saveChanges) //? pot sa fac call-ul de cate ori vreau
  //   yield all([sagaGenerators()]); //? pot sa fac un singur call
  //? OK cauta ce si de ce
}
