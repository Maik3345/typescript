# Biomejs Config

create the following `biome.json` file in the root of your project

```json
{
	"$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
	"extends": ["@rimurugroup/biomejs-config/biome"]
}
```

add the script in the `package.json`

```json
{
  "scripts": {
    "lint": "biome lint --write ",
    "format": "biome format --write",
    "check": "biome check --write"
  },
  "devDependencies": {
		"@rimurugroup/biomejs-config": "^1.x.x"
	},
}
```
