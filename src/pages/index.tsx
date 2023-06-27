import { Button } from "@dauth/dauth-provider";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()

    return (
        <div>

            <div>
                <Button onClick={() => {
                    navigate("/sdk");
                }}>SDK DEMO</Button>
                <Button onClick={() => {
                    navigate("/stress");
                }}>Stress test</Button>
            </div>

        </div>
    )
}
