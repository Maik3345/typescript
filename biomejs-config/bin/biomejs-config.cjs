#!/usr/bin/env node

const { execSync } = require("child_process");

// Captura los argumentos de la línea de comandos, excluyendo los dos primeros elementos
const args = process.argv.slice(2).join(" ");

try {
  // Ejecuta el comando con los argumentos capturados
  execSync(`npx @biomejs/biome ${args}`, { stdio: "inherit" });
} catch (error) {
  console.error("Error executing biome:", error);
  process.exit(1);
}