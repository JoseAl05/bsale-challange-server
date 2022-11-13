
# BSALE Challange Server Code

En este proyecto se encuentra la API para el consumo de datos de Productos y Categorías.


## Desarrollo

La API fue implementada con NodeJS y Express para la ejecución del servidor y la creación de los endpoints.
Para la conexión y consultas a la base de datos se uso el ORM (Object Relational Mapping) Sequelize.


## Herramientas Utilizadas

 - [NodeJS](https://nodejs.org/en/)
 - [Express](https://expressjs.com/es/)
 - [Sequelize](https://sequelize.org/)
 - [MySQL](https://www.mysql.com/)


## API Reference

### Get All Products

```http
  GET /api/products
```
#### Respuesta

| Nombre Columna | Tipo de Dato | Descripción                                                  |
|----------------|--------------|--------------------------------------------------------------|
| id             | integer      | Identificador del producto                                   |
| name           | string       | Nombre del Producto                                          |
| url_image      | string       | URL de la imagen del producto                                |
| price          | integer      | Precio del producto                                          |
| discount       | integer      | Porcentaje de descuento que dispone el producto              |
| category       | integer      | Identificador de la categoría a la que pertenece el producto |

#### Ejemplo de Respuesta
```json
[
 {
    "id": 21,
    "name": "PISCO TRES ERRES 35º",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/rrr359305.jpg",
    "price": 4590,
    "discount": 20,
    "category": 2
  },
  {
    "id": 22,
    "name": "PISCO TRES ERRES 40º",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/rrr409319.jpg",
    "price": 4990,
    "discount": 20,
    "category": 2
  },
  {
    "id": 23,
    "name": "RON BACARDI AÑEJO",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
    "price": 4990,
    "discount": 0,
    "category": 3
  },
  {
    "id": 24,
    "name": "RON BACARDI 8 AÑOS",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardianejo9463.jpg",
    "price": 5990,
    "discount": 0,
    "category": 3
  },
  .................
]
```


### Get Categories

```http
  GET /api/categories
```

#### Respuesta
| Nombre Columna | Tipo de Dato | Descripción                   |
|----------------|--------------|-------------------------------|
| id             | integer      | Identificador de la categoría |
| name           | string       | Nombre de la categoría        |

#### Ejemplo de Respuesta

```json
[
 {
    "id": 1,
    "name": "bebida energetica"
  },
  {
    "id": 2,
    "name": "pisco"
  },
  {
    "id": 3,
    "name": "ron"
  },
  {
    "id": 4,
    "name": "bebida"
  },
  .................
]
```

### Get Products by Category

```http
  GET /api/productsByCategory/:id
```

#### Parámetros

| Parámetro | Tipo de Dato | Descripción                |
|-----------|--------------|----------------------------|
| id        | integer      | Identificador del producto |

#### Respuesta

| Nombre Columna | Tipo de Dato | Descripción                                                  |
|----------------|--------------|--------------------------------------------------------------|
| id             | integer      | Identificador del producto                                   |
| name           | string       | Nombre del Producto                                          |
| url_image      | string       | URL de la imagen del producto                                |
| price          | integer      | Precio del producto                                          |
| discount       | integer      | Porcentaje de descuento que dispone el producto              |
| category       | integer      | Identificador de la categoría a la que pertenece el producto |

#### Ejemplo de Respuesta /api/productsByCategory/1
```json
[
 {
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "price": 1490,
    "discount": 20,
    "category": 1
  },
  {
    "id": 6,
    "name": "ENERGETICA RED BULL",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
    "price": 1490,
    "discount": 0,
    "category": 1
  },
  {
    "id": 7,
    "name": "ENERGETICA SCORE",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
    "price": 1290,
    "discount": 0,
    "category": 1
  },
  .................
]
```

### Get Products by Search

```http
  GET /api/productsBySearch/:name
```

#### Parámetros

| Parámetro | Tipo de Dato | Descripción                |
|-----------|--------------|----------------------------|
| name        | string      | Texto que ingresa el usuario para buscar producto.  |

#### Respuesta

| Nombre Columna | Tipo de Dato | Descripción                                                  |
|----------------|--------------|--------------------------------------------------------------|
| id             | integer      | Identificador del producto                                   |
| name           | string       | Nombre del Producto                                          |
| url_image      | string       | URL de la imagen del producto                                |
| price          | integer      | Precio del producto                                          |
| discount       | integer      | Porcentaje de descuento que dispone el producto              |
| category       | integer      | Identificador de la categoría a la que pertenece el producto |

#### Ejemplo de Respuesta /api/productsBySearch/Papas%20Fritas

```json
[
 {
    "id": 54,
    "name": "Papas Fritas Lisas Bolsa Grande",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
    "price": 1490,
    "discount": 0,
    "category": 5
  },
  {
    "id": 55,
    "name": "Papas Fritas Bolsa Pequeña",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg",
    "price": 500,
    "discount": 0,
    "category": 5
  },
  {
    "id": 56,
    "name": "Papas Fritas Tarro",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/78028005335657432.jpg",
    "price": 1990,
    "discount": 0,
    "category": 5
  }
]
```

#### Ejemplo de Respuesta /api/productsBySearch/Pisco%20Alto%20del%20Carmen

```json
[
 {
    "id": 8,
    "name": "PISCO ALTO DEL CARMEN 35º",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
    "price": 7990,
    "discount": 10,
    "category": 2
  },
  {
    "id": 9,
    "name": "PISCO ALTO DEL CARMEN 40º ",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto408581.jpg",
    "price": 5990,
    "discount": 0,
    "category": 2
  }
]
```

## Ejecutar Localmente

Clona el projecto

```bash
  git clone https://github.com/JoseAl05/bsale-challange-server.git
```

Ingresa al directorio del proyecto

```bash
  cd my-project
```

Instala las dependencias

```bash
  npm install
```

Inicia el servidor

```bash
  npm run dev
```

Realiza una petición

```bash
  http://localhost:3000/api/products
  http://localhost:3000/api/categories
  http://localhost:3000/api/productsByCategory/:id
  http://localhost:3000/api/productsBySearch/:name
```

Tambien está disponible el siguiente link de producción para utilizar la API.

```bash
  https://bsale-challange-server-production.up.railway.app/api/products
  https://bsale-challange-server-production.up.railway.app/api/categories
  https://bsale-challange-server-production.up.railway.app/api/productsByCategory/:id
  https://bsale-challange-server-production.up.railway.app/api/productsBySearch/:name
```


