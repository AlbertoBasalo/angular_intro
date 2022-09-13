# CLI journal

## 0. Application, module, and root component.

```bash
# Install Angular CLI globally
npm i @angular/cli

# Generate a new minimal application
ng new angular-intro --minimal=true --routing=true --style=css

# 🧙🏼‍♂️ Alternatively, you can skip global installation by running
npx @angular/cli new angular-intro --minimal=true --routing=true --style=css

# run
npm start

# Add a bit of style
npm install @picocss/pico
# angular.json : "./node_modules/@picocss/pico/css/pico.fluid.classless.min.css",

```

## 1. Templates

## 2. Modules

```bash
# Generate new component Header
ng g c header --flat

# Generate new component Footer with flat true on angular.json
ng g c footer


# Generate new module Home
ng g m home

# Generate new component home
# (needs to be exported in the module Home)
ng g c home
ng g c home/agencies
ng g c home/trips


# Generate a Shared module
ng g m shared
# Generate an exported component
ng g c shared/reloading --export

# 🧙🏼‍♂️ Alternatively Generate a Core module
ng g m core
## Move header and footer to core module

# 🦸🏼 Improvement: Generate a Page component for Home
ng g c home/home --export --type=page
```
