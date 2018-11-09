# IronDance
## Es un divertido juego que combina ritmo y agilidad. 

Durante este, 4 flechas direccionales permaneceran estáticas en la parte superior de la pantalla. Otras flechas se desplazan desde la parte inferior de la pantalla hasta las flechas estáticas en la parte superior. El jugador debe ser uno con la musica, clickeando las flechas marcadas en la superficie del teclado. En algunas ocasiones dos o más flechas deben ser pulsadas al mismo tiempo, lo que obliga al jugador a actuar con mayor rapidez.

Dependiendo del ritmo y la agilidad de cada click, en la pantalla aparecen valoraciones tales como "Perfect", "Great", "Early" y "Miss". Tanto Perfect como Great suman puntos y Early y Miss restan. Con el objetivo de marear al jugador, el fondo se mueve y cambia cada unos segundos.

Que comience la fiesta!

## Preguntas 
### 1) Porción del proyecto de la cual me siento más orgullosa
  De lo que estoy más orgullosa en el proyecto es la coordinación de todos los elementos que "interactuan" entre ellos, como las flechas que se mueven e interactuan con las flechas estáticas y las valoraciones en la patalla. Tambien estoy contenta porque pude simplificar/refactorizar el código, para que sea más compacto y "limpio", ya que previo a que se vea asi,  había el cuadruple de líneas escritas, todas diciendo lo mismo.
```
    document.onkeydown = function (e) {
        e.preventDefault(); {
            if ((e.keyCode == left || e.keyCode == up || e.keyCode == down || e.keyCode == right)) {
                if (this.yArrows < 35 && this.yArrows >= 15 && this.xArrows > 0) {
                    document.getElementById("perfect").style.display = "inline"

                    setTimeout(function () {
                        document.getElementById("perfect").style.display = "none";
                    }, 550);
                    document.getElementById("num").innerHTML = this.score += 5;
                }
```

### 2) Si volviera al 1er dia del proyecto, que cambiaría
  Antes de empezar el proyecto, me hubiese puesto a pensarlo y planificarlo, para luego, a lo largo de le ejecución no tener problemas de organización o para tener que refactorizar menos durante. 

### 3) Si tuviera mas tiempo que cambiaria o que agregaria a futuro
   Agregaría más jugadores, y para aumentar la dificultad agregaría fleches en diagonal (asi serían 8 flechas) y a medida que avanza el juego cambiaría la dirección para que, en vez de que siempre suban, a veces bajen y a veces suban (o también para que algunas suben mientras otras bajan)

### 4) Porción del proyecto que me haya costado
  Lo que me ha costado más fue la implemntación e interrelación de los conocimientos y superar el síndrome de la página en blanco, al no tener necesarimanete un trabajo de referncia, uno se pone se nervioso y no sabe como empezar.
