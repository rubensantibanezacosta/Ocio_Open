1. Las respuestas a las acciones del usuario son las debidas para lo que quiere.
2. Los colores y fuente lo hacen agradable.
3. Es rápido, con buena velocidad, ya que solo nos enseña lo necesario.
4. Al tener botones evita errores accidentales.
5. Posibilita la reversebilidad.
6. Escritura facilmente legible.
7. Colores facilmente visibles, icluso para usuarios con discapacidad.
8. Elementos claramente separados para facilidad de navegacion.
9. Desde un primer momento el usuario se adapta y le es fácil de entender.
10. Cuenta con un menú con distintas opciones para el usuario
11. Contraste de colores para visibilidad en poca iluminacion.
12. Facil uso para reducir al minimo el entrenamiento del personal.
 Motivos de porqué está mal:
1. Es una simple lista de aspectos.
2. Sin justificación, ni apoyo ( no hay imágenes de las intefaces, ni código que
demuestre lo que dices).
3. Las frases son muy cortas y no están desarrolladas.
A continuación … algo mejor...
1


Aspectos de Usabilidad:
- Los usuarios consideran que es una aplicación elegante en su diseño, y que esto
ayuda a que el usuario final se sienta atraido, prueba de ello es:
Los colores suaves que se utilizan en sus interfaces.
La homogeneidad de colores que se repiten en todas las intefaces.


[[Imagen generalista]]


- Como se puede observar en la imagen anterior, se trata de un diseño además de
elgante, simple, en la que se evita la sobrecarga. Esto ayuda al su buen
funcionamiento, y a centrar la atención del usuario que la maneja en los aspectos
necesarios que usará.


- Dispone de menús visibles en todo momento, que facilitan que el usuario
encuentre lo que necesita sin desplazamientos hacia atrás o hacia delante através
de menús, a solo un clic de ratón. A continuación una muestra de estos menús.

[[imagen de menús]]

- El usuario recibe feedBack de los errores que puedan surgir en ventanas emergentes cuando se producen

[[Imagen de error]]

. La aplicación tiene una curva de aprendizaje muy liviana, ya que dispone de varios caminos para acceder a la información.

[[imagen eventos]] [[imagen calendario]]


- Los iconos te dan pistas te las funciones que se pueden realizar haciendo click en ellos.

[[iconos]]


- En cuanto a la seguridad, se utiliza el siguiente flujo:

    1. Autencicación con Google Oauth 2.0
    2. Recepción de datos de Google, y creación de jason web token propio. En el se incluyen firma privada, username, permisos, y caducidad del token.
    3. En cada petición se valida el token, y el permiso necesario para realizar la petición, tanto en el frontend como en el backend.

    [[login]] [[estructura del token]]

- En cuanto a elementos multimedia, se ha optado por asociar una imagen a cada evento, y utilizar un calendario similar a los calendarios de Google. En el calendario, se pueden diferenciar con colores los estados del evento referentes al usuario. También facilita la busqueda del evento haciendo click en el día seleccionado del calendario.

    1. Asistiré (Verde)
    2. No asistiré (Rojo)
    3. No he contestado (gris)

    [[calendario]] [[evento]]

