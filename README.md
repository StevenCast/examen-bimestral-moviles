# Book Proyecto

## Pantalla principal
### 1. Libros e imagenes
- Lista el nombre de 10 libros, los cuales son consumidos a traves del siguiente endpoint
`https://gutendex.com/books/?ids=1,2,3,4,5,6,7,8,9,10`
- Cada libro está acompañado de una imagen generada de manera dinámica

<img src="https://github.com/user-attachments/assets/ec4f1bbc-ee7f-44ea-89f6-afd82aecf883" alt="drawing" width="500"/>

<img src="https://github.com/user-attachments/assets/531f9e9a-fe9b-4d0b-98c3-3d77a65b0a0d" alt="drawing" width="500"/>

### 2. Guardar la información en la Firestore
- Los datos de cada libro (nombre y URL de la imagen) se pueden almacenar en Firestore
- Las imágenes asociadas son generadas por el servicio: `https://robohash.org/` 
<img src="https://github.com/user-attachments/assets/09a744b1-7cf9-4cd4-977a-a295bf3e12ad" alt="drawing" width="500"/>

## Colección en Firestore
- Los datos se guardan en la base de datos Firestore en el siguiente formato:

![image](https://github.com/user-attachments/assets/e2fdc60e-1b07-4dad-8c79-fdb835e3e59c)
