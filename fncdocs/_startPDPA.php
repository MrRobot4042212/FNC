<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=$titulo?></title>
    <link rel="stylesheet" href="../css/styles.css">

</head>
<body >
    <main class="estructuraPDPA">
        <!-- HEADER DE LA PAGINA, aqui mostraremos el nombre de la empresa y el logo -->
        <header class="headerPDPA">
            <a href="./_index.php">
                <section class="fncPDPA">
                    <h1 class="fPDPA">F</h1><br>
                    <h1 class="nPDPA">N</h1>
                    <h1 class="cPDPA">c</h1>
                </section>
            </a>
            <h2><?=$sloganPDPA?></h2>
        </header>
        <!-- FIN HEADER DE LA PAGINA -->

        <!--BARRA DE NAVEGACIÓN~, aqui mostraremos la barra de navegación, esta tendra luego funcionalidad de menu Hamburguesa -->
        <?php require("./_menu.php") ?> 
        <!--FIN DE LA BARRA DE NAVEGACIÓN -->