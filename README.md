# factuPyme-producto

Este proyecto está desarrollado en lenguaje Java usando el Framework Spring boot. Se realiza un crud de los productos.

## GET

### Listar producto

Request

http://localhost:8090/api/facturacion/producto/

Response
```
[
    {
        "codigo": 0,
        "nombre": "Colchon",
        "descripcion": "Colchon doble cama",
        "valor_unitario": 1500,
        "unidad_medida": "colchon",
        "porcentaje_descuento": 0.5,
        "iva": 0.19,
        "estado": true
    },
    {
        "codigo": 1,
        "nombre": "Lapicero",
        "descripcion": "Lapicero negro Faber Castel",
        "valor_unitario": 1000,
        "unidad_medida": "Lapicero",
        "porcentaje_descuento": 0.0,
        "iva": 0.19,
        "estado": true
    },
    {
        "codigo": 2,
        "nombre": "Lapiz",
        "descripcion": "Lapiz #2",
        "valor_unitario": 500,
        "unidad_medida": "Lapiz",
        "porcentaje_descuento": 0.0,
        "iva": 0.19,
        "estado": true
    },
    {
        "codigo": 3,
        "nombre": "Cuaderno",
        "descripcion": "Cuaderno cuadriculado 80 hojas",
        "valor_unitario": 3000,
        "unidad_medida": "Cuaderno",
        "porcentaje_descuento": 0.0,
        "iva": 0.19,
        "estado": false
    },
    {
        "codigo": 4,
        "nombre": "Marcador",
        "descripcion": "Marcador color rojo",
        "valor_unitario": 2000,
        "unidad_medida": "Marcador",
        "porcentaje_descuento": 0.0,
        "iva": 19.0,
        "estado": true
    },
    {
        "codigo": 5,
        "nombre": "Lapicero",
        "descripcion": "Lapicero rojo",
        "valor_unitario": 1000,
        "unidad_medida": "lapicero",
        "porcentaje_descuento": 0.0,
        "iva": 19.0,
        "estado": true
    }
]
```
### Listar producto por código

Request

http://localhost:8090/api/facturacion/producto/listar-codigo/4

Response
```
{
    "codigo": 4,
    "nombre": "Marcador",
    "descripcion": "Marcador color rojo",
    "valor_unitario": 2000,
    "unidad_medida": "Marcador",
    "porcentaje_descuento": 0.0,
    "iva": 19.0,
    "estado": true
}
```
## POST 

Request

http://localhost:8090/api/facturacion/producto/
```
{
    "codigo": 6,
    "nombre": "Cuaderno pequeño",
    "descripcion": "Cuaderno pequeño cuadriculado",
    "valor_unitario": 2500,
    "unidad_medida": "cuaderno",
    "porcentaje_descuento": 0.15,
    "iva": 0.19,
    "estado":true
}
```
## PUT

Request

http://localhost:8090/api/facturacion/producto/
```
{
    "codigo": 6,
    "nombre": "Cuaderno grande",
    "descripcion": "Cuaderno pequeño cuadriculado",
    "valor_unitario": 2500,
    "unidad_medida": "cuaderno",
    "porcentaje_descuento": 0.15,
    "iva": 0.19,
    "estado":true
}
```
## DELETE

Request

http://localhost:8090/api/facturacion/producto/6
