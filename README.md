# ApiBSale

## Api-Rest desafió Bsale

Este es un servicio api desarrollado en framework Node.js basado en configuraciones para su deploy en servidores Lambda y Api Gateway.
Para la conexión usa driver mysql y para su prueba y deploy se uso el servicio ServerLess.

## Como obtener datos

Tenemos 3 tipos distintos de datos y existen 4 formas de obtenerlos.

```
https://lwg7yig1ta.execute-api.us-east-1.amazonaws.com
```

## Productos y datos cruzados.

Para obtener los datos cruzados entre la tabla product y category de manera ordenada se utilizan los siguientes parámetros adicionales al link anterior.

```
https://... .../dev/product
```

Pero si se buscan solo los datos del producto o búsqueda de algún producto por nombre se deben usar los siguientes parámetros

```
https://... .../dev/product/{name} <= obtienes el o una lista de productos en búsqueda por nombre
https://... .../dev/category/{id}  <= obtienes una lista de productos según la id de la categoría numerada del 1 al 7
```
Para obtener solo las categorías disponibles se deben usar el siguiente parámetro

```
https://... .../dev/category
```
Versiones de la Api [Github Commits](https://github.com/Alderan-Smile/ApiBSale/commits/main)
Api Rest Hosteada por [AWS Api Gateway](https://lwg7yig1ta.execute-api.us-east-1.amazonaws.com/dev/product/)<br/><br/>
Repositorio de api rest [GitHub Repository](https://github.com/Alderan-Smile/BSaleDesafio)<br/>
Web JS Hosteada por [AWS Amplify](https://main.d3fpblgrtdfmry.amplifyapp.com/)