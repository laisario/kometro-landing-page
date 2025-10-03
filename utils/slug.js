export function createSlug(title) {
  return title.toString()
    .toLowerCase() // tudo minúsculo
    .trim() // remove espaços extras no começo/fim
    .normalize('NFD') // separa acentos
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // remove caracteres especiais
    .replace(/\s+/g, '-') // substitui espaços por hífen
    .replace(/-+/g, '-'); // substitui múltiplos hífens por um só
}
