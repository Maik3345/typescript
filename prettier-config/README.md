# Prettier Config

create the following `.prettierrc` file in the root of your project

```json
"@rimurugroup/prettier-config"
```

add the script in the `package.json`

```json
{
  "scripts": {
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json}\"",
  },
  "devDependencies": {
		"@rimurugroup/prettier-config": "^1.x.x"
	},
}
```
