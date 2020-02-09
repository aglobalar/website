<template>
  <header id="header" class="fixed z-999 w-100" role="banner">
    <div class="container center relative ph3">
      <div class="flex justify-between items-center">
        <a href="/" class="link">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 311 60"
            style="enable-background:new 0 0 311 60;" xml:space="preserve" class="logo">
              <path d="M104.7,30v1.8c0,1.7-0.1,3.2-0.2,4.8c-0.2,2.3-0.6,4.4-1.2,6.3c-1,3-2.6,5.7-4.8,8.3
			c-5.1,5.8-11.7,8.7-19.6,8.7c-7.7,0-14.4-2.8-19.9-8.4c-3-3.1-5.2-6.5-6.6-10.2l0,0l-6.2,0.6l0,0l7.6,17h-9.1l-7-16.3l-22.1,2
			L9,58.8H0L27.4,0l13.4,29.8l0.1,0.2L33.1,32L33,31.8l-5.7-13.1l-8.4,18.5l40.4-3.6c0.2,2.5,0.9,4.8,1.9,6.8c0,0,0,0,0,0
			c1.1,2.2,2.6,4.2,4.6,6c4.1,3.7,8.6,5.6,13.4,5.6c4.1,0,7.8-1.4,11.1-4.2c3.3-2.8,5.1-6.1,5.5-10v0l0-0.4l-0.1,0L79,38.8l7-7.6
			l18.7-1.7L104.7,30L104.7,30z" />
              <path d="M65,16.3c4-4,8.9-6.1,14.7-6.1c5.1,0,9.7,1.9,13.6,5.6l8.9-2.4c-3.4-3.9-6.9-6.7-10.5-8.5
			c-3.7-1.8-7.8-2.6-12.1-2.6c-8,0-14.9,2.8-20.5,8.4c-4.7,4.6-7.4,10.1-8.2,16.5l9-2.4C60.8,21.6,62.5,18.8,65,16.3z" />
              <path d="M119.3,3.7v47.5h16.3V59h-24.6V3.7H119.3z" />
              <path
                d="M133.8,31.1c0-7.8,2.9-14.5,8.6-20.1c5.7-5.6,12.5-8.4,20.5-8.4c7.9,0,14.6,2.8,20.3,8.5
			c5.7,5.6,8.5,12.4,8.5,20.3c0,8-2.8,14.7-8.5,20.2c-5.7,5.6-12.6,8.3-20.7,8.3c-7.1,0-13.6-2.5-19.2-7.4
			C137,47.1,133.8,40,133.8,31.1z M142.2,31.2c0,6.1,2.1,11.1,6.2,15.1c4.1,3.9,8.8,5.9,14.2,5.9c5.8,0,10.7-2,14.7-6
			c4-4.1,6-9,6-14.8c0-5.9-2-10.8-5.9-14.8c-3.9-4-8.8-6-14.5-6c-5.8,0-10.6,2-14.6,6C144.2,20.5,142.2,25.4,142.2,31.2z" />
              <path d="M197.9,59V3.7h8.3c3.7,0,6.7,0.3,8.8,0.9c2.2,0.6,4.1,1.5,5.6,2.9c1.6,1.4,2.8,3.2,3.7,5.3
			c0.9,2.1,1.4,4.3,1.4,6.4c0,4-1.5,7.3-4.5,10.1c2.9,1,5.3,2.8,6.9,5.3c1.7,2.5,2.6,5.4,2.6,8.7c0,4.3-1.5,8-4.6,11
			c-1.8,1.8-3.9,3.1-6.2,3.8c-2.5,0.7-5.6,1-9.4,1H197.9z M206.3,27.4h2.6c3.1,0,5.4-0.7,6.8-2.1c1.4-1.4,2.2-3.4,2.2-6.1
			c0-2.6-0.7-4.6-2.2-5.9c-1.5-1.3-3.6-2-6.4-2h-2.9V27.4z M206.3,51.2h5.2c3.8,0,6.5-0.7,8.3-2.2c1.9-1.6,2.8-3.6,2.8-6.1
			c0-2.4-0.9-4.4-2.7-6c-1.7-1.6-4.9-2.4-9.3-2.4h-4.2V51.2z" />
              <path d="M256.9,18.9L238.7,59h-9l27.4-58.8L283.5,59h-9.1L256.9,18.9z" />
              <path d="M294.7,3.7v47.5H311V59h-24.6V3.7H294.7z" />
          </svg>
        </a>
        <div id="desktop-menu" class="dn-ms">
          <nav class="items-center flex tracked">
            <a v-scroll-to="'#nosotros'" class="hover-green-tr link f6 ph3 dib ttu">nosotros</a>
            <a v-scroll-to="'#servicios'" class="hover-green-tr link f6 ph3 dib ttu">servicios</a>
            <a v-scroll-to="'#contacto'" class="hover-green-tr link f6 ph3 dib ttu">contacto</a>
          </nav>
        </div>

        <div class="dn-l">
          <div class="dropdown">
            <button class="dropbtn" aria-label="Toggle Menu"><img src="/menu.svg"></button>
            <nav class="dropdown-menu ph3">
              <a v-scroll-to="'#nosotros'" class="link f6 db ttu pv3">nosotros</a>
              <a v-scroll-to="'#servicios'" class="link f6 db ttu pv3">servicios</a>
              <a v-scroll-to="'#contacto'" class="link f6 db ttu pv3">contacto</a>
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
   const element = document.getElementById("header");
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
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
    transition: 0.2s;
    height: 5rem;
    padding: 1.4rem 0 0.7rem;
    @media screen and (max-width: 60em) {
      background-color: #142a84;
    }

    .logo-m {
      width: 130px;
      height: 25px;
    }

    nav a {
      cursor: pointer;
      color: white;
    }

    .logo {
      width: 155px;
      height: 30px;
      fill: white;
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
        margin-top: 0.7rem;
        overflow: auto;
        z-index: 2;
        background-color: #142a84;
        a {
          color: white;
        }
        &.show {
        display: block;
      }
      }

    }
    &.w-icon {
      height: 4rem;
      padding: 1rem 0;
      background-color: white;

      .logo {
        fill: #162d8c;
      }
       nav a {
      color: #162d8c;
    }
    .dropdown {
      .dropdown-menu {
         background-color: white;
                 a {
          color: #162d8c;
        }
      }
    }
    }
  }
</style>
