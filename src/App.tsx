import "@dauth/dauth-provider/dist/style.css";
import "@dauth/dauth-provider/dist/tailwind.css";
import { Button } from "@dauth/dauth-provider";
import ReactJson from 'react-json-view'
import DAuth from "@dauth/core";
import { useState } from "react";
import { IOtpConfirmReturn } from "@dauth/core/dist/types";
const dauth = new DAuth('https://dev-api.dauth.network/dauth/sdk/v1.1/')
function App() {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [res, setRes] = useState<IOtpConfirmReturn>()
  const authOtp = async () => {
    try {
      await dauth.service.authOpt({
        account: email,
        account_type: 'email',
        request_id: 'test'
      })
    } catch (error) {
      console.log(error)
    }
  }
  const authOtpConfirm = async () => {
    try {
      const res = await dauth.service.authOptConfirm({
        code,
        request_id: 'test'
      })
      console.log(res)
      setRes(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App p-10">
      <h2 className="text-xl pb-4">@DAuth/core example</h2> 
      <div>
        <div className="flex justify-between items-center"> <span className="w-16 inline-block">email:</span>
          <input className=" py-2 border-2 w-56 rounded-sm	" value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" />
          <Button onClick={authOtp} className="w-40 ml-10">
            get otp
          </Button></div>
        <br />
        <div className="flex justify-between items-center">
          <span className="w-16 inline-block">otp: </span>
          <input className=" py-2 border-2 w-56	" value={code} onChange={(e) => { setCode(e.target.value) }} type="text" />

          <Button onClick={authOtpConfirm} className="w-40 ml-10">
            confirm otp
          </Button>
        </div>
        <div>
          <div>
            {res && <ReactJson src={res!} />}
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;

