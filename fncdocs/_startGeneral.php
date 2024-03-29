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
            <a href="./_index.php">
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
        <?php require("./_menu.php") ?> 
        <!--FIN DE LA BARRA DE NAVEGACIÓN -->