import { mypostPlantilla } from "./mypost-content-view.js"

const wallContentDesktop = `
<div id="header" class="head">
    <img src="img/logo.png" alt="logo" class="logo">    
    <span id="show-signout"><i class="fas fa-bars bar"></i></span>
</div>
<div id="sign-out" class="signout hide"><i class="fas fa-sign-out-alt"></i><span> Cerrar Sesion</span></div>
<div> 
<i class="fas fa-search lupa"></i>
</div>

<!-- profile -->
<section id="info-viajero">
    <div>
       <img src="img/islandia.jpg" alt="Foto perfil" class="img-profile">     
    </div>
    <div>
        <p class="user-name"> Viajera frecuente </p>
        <p class="user-info"> Me gusta la naturaleza y el sonido del mar </p>
        <span class="user-info"><i class="fas fa-map-marker-alt"></i> Santiago de Chile</span>
</section>

<section id="icons-profile">
    <div id="iconos">
        <i class="fas fa-suitcase-rolling iconos-profile"></i> <!--maleta-->
        <i class="fas fa-bed iconos-profile"></i> <!-- cama -->
        <i class="fas fa-taxi iconos-profile"></i> <!-- taxi -->
        <i class="fas fa-utensils iconos-profile"></i> <!--comida-->
        <i class="fas fa-hiking iconos-profile"></i> <!--guia-->
    </div>
</section>

<section id="intereses">
    <div id="interes-title">
       <h5> America </h5> 
       <h5> Comida </h5>
    </div>
</section>
 
<section id="freinds">
    <h2> Mis Amigos </h2>
    <div id="mostrar-amigos">  
        <img src="img/costa-rica.jpg" id="picture-myfreinds" alt="Foto perfil">
        <img src="img/colombia.jpg" id="picture-myfreinds" alt="Foto perfil">
        <img src="img/brasil.jpg" id="picture-myfreinds" alt="Foto perfil">   
    </div> 
</section>

<section id= "container-mypost">
    <div id="boxmypost">
    ${ mypostPlantilla } 
    ${ mypostPlantilla } 
    ${ mypostPlantilla } 
    </div>
</section>

<!-- post-->
</section>
<section id= "container-post">
</section>

<!-- destiny -->
<section id="destiny">

    <section>
        <span id="back"><i class="fas fa-chevron-left lupa"></i><span>
        <div id="destiny-title">
            <i class="fas fa-map-marked-alt icon"></i>
            <h2 id="destacado"> Destinos destacados </h2>
        </div>
        <p class="text"> Aqui te presentamos una seleccion de los destinos top del momento </p>
        </section>
    <section id="destinos">
        <div id="box">
            <img src="img/mexico.jpg" id="destiny-img">
            <span id="destiny-name">México</span>
        </div>
        <div id="box">
            <img src="img/costa-rica.jpg" id="destiny-img">
            <span id="destiny-name">Costa Rica</span>
        </div>
        <div id="box">
            <img src="img/colombia.jpg" id="destiny-img">
            <span id="destiny-name">Colombia</span>
        </div>
        <div id="box">
            <img src="img/peru.jpg" id="destiny-img">
            <span id="destiny-name">Perú</span>
        </div>
        <div id="box">
            <img src="img/islandia.jpg" id="destiny-img">
            <span id="destiny-name">Islandia</span>
        </div>
        <div id="box">
            <img src="img/brasil.jpg" id="destiny-img">
            <span id="destiny-name">Brasil</span>
        </div>
    </section>

</section>

<footer id="barra-inferior">
    <div id="barra">
        <span id="home"><i class="fas fa-home iconos-barra"></i></span>
        <i class="fas fa-star iconos-barra"></i>
        <span id="profile"><i class="fas fa-user iconos-barra"></i></span>
    </div>
</footer>
`;

export { wallContentDesktop };