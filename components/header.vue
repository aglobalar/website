<template>
  <header class="fixed z-999 w-100 bg-white" role="banner">
    <div class="container center relative ph3">
      <div id="desktop-menu" class="dn-ms">
        <div class="flex justify-between items-center">
          <a href="/" class="link"><span class="logo"></span></a>
          <nav class="items-center flex tracked">
            <a v-scroll-to="'#nosotros'" class="blue-tr hover-green-tr link f6 ph3 dib ttu">nosotros</a>
            <a v-scroll-to="'#servicios'" class="blue-tr hover-green-tr link f6 ph3 dib ttu">servicios</a>
            <a v-scroll-to="'#contacto'" class="blue-tr hover-green-tr link f6 ph3 dib ttu">contacto</a>
          </nav>
        </div>
      </div>

      <div class="dn-l">
        <div class="flex justify-between items-center pv3">
          <a href="/" class="link"><img src="/aglobal-logo.svg" alt="logo" class="logo-m"></a>

          <div class="dropdown">
            <button class="dropbtn" aria-label="Toggle Menu"><img src="/menu.svg"></button>
            <nav class="dropdown-menu ph3" id="drop-menu">
              <a v-scroll-to="'#nosotros'" class="blue-tr link f6 db ttu pv3">nosotros</a>
              <a v-scroll-to="'#servicios'" class="blue-tr link f6 db ttu pv3">servicios</a>
              <a v-scroll-to="'#contacto'" class="blue-tr link f6 db ttu pv3">contacto</a>
            </nav>
          </div>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
// Dropdown Menu
function menuMob() {
  const toggle = document.querySelector(".dropbtn");
  const topNav = document.querySelector(".dropdown-menu");

  toggle.addEventListener('click', function () {
    topNav.classList.toggle("show");
  }, false);
}

function scrollFunction() {
   const element = document.getElementById("desktop-menu");
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    element.classList.add("w-icon");
  } else {
    element.classList.remove("w-icon");
  }
}

export default {
  mounted () {
    // Esto es un hook de Vue que se ejecuta cuando el componente se monta en el DOM
    // Aca podes obtener de "forma segura" a cualquier elemento el DOM por id, clase, etc.
    // No es la forma pas prolija de agregar vanilla JS o de manipular el DOM, pero es la mas facil (y efectiva) sin tener que meterte mucho en como funciona Vue.
    // Yo despues en todo caso me ocupo de hacerlo mas "Vue friendly"
    // Este patron lo podes repetir en cualquier componente que quieras: `export default {}` con la funcion `mounted` adentro.
    // Si es algo que abarca mas de un componente, por ejemplo tenes una funcionalidad donde tenes que obtener un element que esta en el footer y otro en el header, te recomiendo que lo hagas en el componente principal (en este caso el default).
    // Los componentes se crean y montan en cascada de forma inversa, el primer elemento que se crea es el ultimo que se monta siguiendo la estructura jerarquica en la cual estan definidos.

    window.onscroll = () => scrollFunction()

    menuMob()
  }
}
</script>

<style lang="scss" scoped>
  header {
    .logo-m {
        width: 130px;
        height: 25px;
    }
    nav a {
      cursor: pointer;
    }
    #desktop-menu {
      transition: 0.2s;
      height: 5rem;
      padding: 1.4rem 0 0.7rem;

      .logo {
        width: 155px;
        height: 30px;
        background: url("/aglobal-logo.svg");
        background-size: 155px 30px;
        display: block;
      }

      &.w-icon {
        height: 4rem;
        padding: 1rem 0;

        .logo {
          width: 155px;
          height: 30px;
          background: url("/aglobal-logo.svg");
          background-size: 155px 30px;
        }
      }
    }

    .dropdown {
       .dropbtn {
         position: relative;
         display: block;
         background: transparent;
         border: none;
         width: 25px;
         padding: 0;
       }

       .dropdown-menu {
         font-size: 1.2em;
         display: none;
         position: absolute;
         width: 100%;
         left: 0;
         top: 100%;
         overflow: auto;
         z-index: 2;
         background-color: white;
       }

       #drop-menu.show {
         display: block;
       }
     }
  }
</style>
