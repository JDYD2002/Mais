const resultados = [
  {
    categoria: "O mais tiltado",
    vencedor: "Braga",
    avatar: "324c7143-5335-43f9-a06c-c031b88dbb77.jpg",
    grafico: "[ Gráfico de votos aqui ]"
  },
  {
    categoria: "O mais engraçado",
    vencedor: "Igor",
    avatar: "324c7143-5335-43f9-a06c-c031b88dbb77.jpg",
    grafico: "[ Gráfico de votos aqui ]"
  },
  {
    categoria: "O mais coach",
    vencedor: "Lucas",
    avatar: "324c7143-5335-43f9-a06c-c031b88dbb77.jpg",
    grafico: "[ Gráfico de votos aqui ]"
  }
];

let index = 0;

function mostrarCategoria() {
  const atual = resultados[index];
  document.getElementById("categoria").textContent = `Categoria: ${atual.categoria}`;
  document.getElementById("vencedor-section").style.display = "none";
}

function mostrarVencedor() {
  const atual = resultados[index];
  document.getElementById("vencedor").textContent = `🏆 Vencedor: ${atual.vencedor}`;
  document.getElementById("avatar").src = atual.avatar;
  document.getElementById("vencedor-section").style.display = "block";
  document.getElementById("applause").play();
}

function proximaCategoria() {
  index = (index + 1) % resultados.length;
  mostrarCategoria();
}

window.onload = mostrarCategoria;
