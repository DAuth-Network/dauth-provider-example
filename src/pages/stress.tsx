import { Button } from "@dauth/dauth-provider";
import { dauth, sleep } from "../utils";
import { useCounter, useRequest } from 'ahooks'
const Dev = () => {
    const [success, { inc: incSuc }] = useCounter(0);
    const [fail, { inc: incFail }] = useCounter(0);
    const authEmailOtp = async () => {
        await dauth.service.sendOtp({
            account: 'scott001110@gmail.com',
            account_type: 'email',
            request_id: 'test'
        })
    }

    const authOtpConfirm = async () => {
        await dauth.service.authOptConfirm({
            code: "123456",
            request_id: 'test',
            mode: 'jwt',
            auth_type: 'email'
        })
    }
    const task = async () => {
        try {
            await authEmailOtp()
            await sleep(200)
            await authOtpConfirm()
            incSuc()
        } catch (error) {
            incFail()

        }
    }
    const { run, cancel } = useRequest(task, {
        manual: true,
        pollingInterval: 1000,

    });

    return (
        <div className="">
            <Button onClick={run}>Start</Button>
            <Button onClick={cancel}>Stop</Button>
            <div>
                成功: {success} 次<br />
                失败: {fail} 次<br />
            </div>
        </div>
    )
}

export default Dev