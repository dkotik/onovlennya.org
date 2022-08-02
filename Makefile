default:
	npm run dev
build:
	npm run build
	rm -rf dist/en.html
	rm -rf dist/ru.html
