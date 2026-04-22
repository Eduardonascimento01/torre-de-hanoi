const NOME_DO_CACHE = "hanoi-cache-v1";
const ARQUIVOS_PARA_SALVAR = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./icone.png"
];

// Instala o trabalhador e guarda os arquivos na memória do celular
self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(NOME_DO_CACHE).then((cache) => {
      return cache.addAll(ARQUIVOS_PARA_SALVAR);
    })
  );
});

// Quando o jogo pede um arquivo, ele entrega o que está salvo offline
self.addEventListener("fetch", (evento) => {
  evento.respondWith(
    caches.match(evento.request).then((resposta) => {
      return resposta || fetch(evento.request);
    })
  );
});