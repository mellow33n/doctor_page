import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const pageText = {
  header: "Реєстрація успішна!",
  body: "Реєстрація вашого акаунту пройшла успішна",
  footer: "Ви можете увійти до свого акаунту використовуючи кнопку нижче, або повернутись на головну сторніку",
};

export default function RegistrationSucces(props) {
  const navigate = useNavigate();

  return (
    <section>
      <h3>{pageText.header}</h3>
      <p>{pageText.body}</p>
      <p>{pageText.footer}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/login")}
        >
          Увійти
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          На головну
        </Button>
    </section>
  );
}
