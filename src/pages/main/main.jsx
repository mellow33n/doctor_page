import { Button } from "@mui/material";
import { useNavigate } from "react-router";



export default function Main () {
    const navigate = useNavigate();
    return <>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/registration")}
          type="submit"
        >
          Реєстрація
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/calendar")}
          type="submit"
        >
          Calendar
        </Button>
    </>
}