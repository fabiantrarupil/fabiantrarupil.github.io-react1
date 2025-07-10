export const pizzas = [
  {
    id: 'P001', // Usamos el id de tu archivo original
    nombre: 'Napolitana', // Cambiado de 'name' a 'nombre'
    precio: 5950,
    ingredientes: ['mozzarella', 'tomates', 'jamón', 'orégano'], // Cambiado de 'ingredients' a 'ingredientes'
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c', // Cambiado de 'img' a 'imagen'
  },
  {
    id: 'P002',
    nombre: 'Española',
    precio: 6950,
    ingredientes: ['mozzarella', 'gorgonzola', 'parmesano', 'provolone'],
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab',
  },
  {
    id: 'P003',
    nombre: 'Pepperoni', // Cambiado de 'Salame' a 'Pepperoni' para coincidir con mi sugerencia original
    precio: 6950, // Precio original de Pepperoni
    ingredientes: ['mozzarella', 'pepperoni', 'orégano'], // Ingredientes de Pepperoni
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3',
  },
  {
    id: 'P004', // Nuevo id, ya que tu original tenía "cuatro estaciones"
    nombre: 'Barbacoa',
    precio: 7500,
    ingredientes: ['pollo', 'cebolla', 'salsa barbacoa', 'mozzarella'],
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-3007395_640_com.jpg?alt=media&token=7c8d7b3a-5f9c-4f1e-8e6f-5e9a4f7b6c2c',
  },
  {
    id: 'P005', // Nuevo id
    nombre: 'Hawaiana',
    precio: 6200,
    ingredientes: ['piña', 'jamón', 'mozzarella'],
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2802334_640_com.jpg?alt=media&token=2a0f8b3c-0e9f-4d0a-9e1a-8c3f4d7a8b9c',
  },
  {
    id: 'P006', // Nuevo id
    nombre: 'Vegetariana',
    precio: 6500,
    ingredientes: ['pimientos', 'cebolla', 'champiñones', 'tomate', 'mozzarella'],
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000612_640_com.jpg?alt=media&token=3b8a3c2d-1e4f-4d5e-9f0a-7c6d5b8a9f0e',
  },
];

export const pizzaCart = [
  {
    id: 'P001',
    nombre: 'Napolitana', // Cambiado de 'name' a 'nombre'
    precio: 5950,
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c', // Cambiado de 'img' a 'imagen'
    cantidad: 1, // Cambiado de 'count' a 'cantidad'
  },
  {
    id: 'P002',
    nombre: 'Española',
    precio: 7250,
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab',
    cantidad: 1,
  },
  {
    id: 'P003',
    nombre: 'Salame',
    precio: 5990,
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3',
    cantidad: 1,
  },
];