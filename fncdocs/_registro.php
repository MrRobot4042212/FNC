<?php
    $titulo ="Registro";
    $fuenteCss ="../css/Registro.css";
?>
<? require_once("./_startHamburgerLoginRegistro.php"); ?>
    <div class="cuadro">

        <form action="./_registroPost.php" method="POST">
            <h1>Regístrate en <br> <font color="red">Films</font>N<font color="red">Critics</font></h1>
            <div class="caja">
                <input name="usuario" type="text" placeholder="Usuario" required>
                <i class='bx bxs-user'></i>
            </div>
            <div class="caja">
                <input name="nick" type="text" placeholder="Nick" required>
                <i class='bx bx-user'></i>
            </div>

            <div class="caja">
                <input name="email" type="text" placeholder="Correo electrónico" required>
                <i class='bx bxs-envelope' ></i>
            </div>

            <div class="caja">
                <input name="telefono" type="text" placeholder="Teléfono" required>
                <i class='bx bxs-phone'></i>
            </div>

            <div class="caja">
                <input name="contraseña" type="password" placeholder="Contraseña" required>
                <i class='bx bxs-lock-alt' ></i>
            </div>

            <div class="caja">
                <input name="ccontraseña" type="password" placeholder="Repita la contraseña" required>
                <i class='bx bxs-lock-alt' ></i>
            </div>
            <button name="submit" type="submit" class="boton">Crear cuenta</button>
        </form>

    </div>

<? require_once("./_endHamburgerLoginRegistro.php"); ?>
