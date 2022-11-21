# Burger Queen

## Índice

* [1. Resumen del proyecto](#2-resumen-del-proyecto)
* [2. Objetivo principal](#4-consideraciones-generales)
* [3. Historias de usuario](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [4. Prototipo de alta fidelidad](#5-criterios-de-aceptación-mínimos-del-proyecto)

***

## 1. Resumen del proyecto

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una tablet, y enviarlos
a la cocina para que se preparen ordenada y eficientemente.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)


La interfaz mostrará diferentes categorías, cada una con todos sus productos. El usuario debe poder ir eligiendo qué productos agregar y la interfaz debe ir mostrando el resumen del pedido con el costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

### 2. Objetivo principal

El objetivo principal de este proyecto es construir una interfaz web
usando React, manteniendo la interfaz y el estado sincronizados. 

### 3. Historias de usuario
#### [Historia de usuario 1] Mesero/a debe poder tomar el pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Definición de terminado HU1

* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Anotar nombre de cliente, número de mesa y notas (si es necesario).
* Enviar pedido a cocina
* Se ve y funciona bien en una tablet

***

#### [Historia de usuario 2] Chef debe ver los pedidos

Yo como chef quiero ver los pedidos de los clientes en orden y marcar cuáles están en preparación y/o listos para servir al cliente.

##### Definición de terminado

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado, están en preparación o listos para    servirse.

***

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están listos para servir a los clientes.

##### Definición de terminado

* Ver listado de pedidos listos para servir.
* Eliminar pedidos que han sido entregados.

### 4. Prototipo de alta fidelidad

