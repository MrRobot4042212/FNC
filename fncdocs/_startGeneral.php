<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> <?= $titulo ?> </title>
    <link rel="stylesheet" href="../css/styles.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

</head>

<body>
    <main class="estructuraPrincipal">
        <!-- HEADER DE LA PAGINA, aqui mostraremos el nombre de la empresa y el logo -->
        <header class="header">
            <a href="./index.html">
                <section class="fnc">
                    <h1 class="f">Films</h1><br>
                    <h1 class="n">N</h1>
                    <h1 class="c">critics</h1>
                </section>
            </a>
            <h2> <?= $slogan ?> </h2>
        </header>
        <!-- FIN HEADER DE LA PAGINA -->

        <!--BARRA DE NAVEGACIÓN~, aqui mostraremos la barra de navegación, esta tendra luego funcionalidad de menu Hamburguesa -->
        <div class="bNavegacion">
            <nav class="links">
                <ul>
                    <li class="despegable"><a href="./_index.php">Inicio</a></li>
                    <li class="despegable"><a href="./_peliculas.php">Películas</a></li>
                    <li class="despegable"><a href="./_directores.php">Directores</a></li>
                    <li class="despegable"><a href="./_productores.php">Productores</a></li>
                    <li class="despegable"><a href="./_actores.php">Actores</a></li> 
                    <li class="despegable"><a href="./_premios.php">Premios</a></li>
                    <li class="despegable"><a href="./_login.php">Login</a></li>
                    <li class="despegable"><a href="./_registro.php">Registro</a></li> 
                    <li class="despegable"><a href="./_contacto2.php">Contacto </a></li> 
                </ul>
            </nav>
        </div>
        <!--FIN DE LA BARRA DE NAVEGACIÓN -->