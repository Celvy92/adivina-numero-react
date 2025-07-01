import { useState } from "react";
import Message from "./Message";

function Game() {
  const [numeroSecreto] = useState(Math.floor(Math.random() * 100) + 1);
  const [intento, setIntento] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [acertado, setAcertado] = useState(false);

  const handleChange = (e) => setIntento(e.target.value);

  const verificarNumero = () => {
    const num = parseInt(intento);

    if (isNaN(num)) {
      setMensaje("Por favor, ingresa un número válido.");
    } else if (num === numeroSecreto) {
      setMensaje("¡Felicidades! 🎉 Adivinaste el número.");
      setAcertado(true);
    } else if (num < numeroSecreto) {
      setMensaje("El número es más alto ⬆️");
    } else {
      setMensaje("El número es más bajo ⬇️");
    }
  };

  return (
    <div>
      {!acertado && (
        <>
          <input
            type="number"
            value={intento}
            onChange={handleChange}
            placeholder="Ingresa tu número"
          />
          <button onClick={verificarNumero}>Adivinar</button>
        </>
      )}
      <Message mensaje={mensaje} />
    </div>
  );
}

export default Game;
