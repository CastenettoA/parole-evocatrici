<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  data: function() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
   .t-center { text-align: center;}
   body {
      max-width: 100%;
      margin: 0; padding: 0;
      font-family: 'Source Sans Pro', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;
   }
   
    main.words, .pratica, footer, nav section {
      max-width: 700px;
      margin: 0 auto;

      @media screen and (max-width: 750px) {
        padding: 0 1em;
      }
   }

   footer { margin-bottom: 2em; }

   .docs nav {
      padding: 30px 0 1em 0; // reduced paddign for only testual page.

      section .logo {
            margin-bottom: 1em;
      }
   }

   nav {
    background-image: linear-gradient(to right top, #0b36d3 45%, #65FBD2); 
    color: #fff;
    width: 100%;
    padding: 30px 0 56px 0;

    section {
      h1,h2,h3,p { color: #fff; font-family: 'Source Sans Pro'; font-weight: 900; margin-bottom: 0; margin-top: 0;}

      h1 { margin-top: 1em; }
      h1 { font-size: 2.4em; }
      h3 { font-size: 1.5em; padding-right: 30%; margin-bottom: 1em;}
      p { font-size: 1.2em; font-weight: 400; }
      a { text-decoration: underline;}

      p,a {
        color: #ccc;
      }
    }
   }

  .logo {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 1.5em;

    .header-menu { // icona donazioni e menu
          display: flex; justify-content: center; align-items: center;
          margin-left: auto;

          .donation {
            margin-right: .3em;
          }

          .istituto {
            img {
              width: 21px; height: 21px;
              min-width: 21px; min-height: 21px;
            }
          }

          .question {
            padding: .105em !important;
          }

          .donation, .istituto, .menu-items {
            margin-right: .35em;
            background-color: rgba(0,0,0, .1);
            padding: .6em;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            transition: .3 all;

            &:hover {
              cursor: pointer;
            background-color: rgba(0,0,0, .2);
            }

            span {
              margin-left: .5em;
              font-weight: 100;
              font-size: .8em;
              text-transform: uppercase;
            }
          }
    }

    @media screen  and (max-width: 480px) { // spacco il menu in mobile
      flex-flow: column;
      justify-content: center;

      .header-menu { margin: .5em 0 0 0; }
    }
  }

  .logo-wrapper {
    display: inline-flex;
    align-items: center;
    // background-color: rgba(246, 127, 114, .11%); 
    background-color: rgba(0,0,0, .11%);
    padding: 0.3em 16px;
    border-radius: 30px;
    cursor: pointer;
    transition: .3s all;

    img { display: flex; justify-content: center; align-items: center;}

    &:hover {
      background-color: rgba(0,0,0, .29%); 
    }

    .title {
      margin-left: 1em;
      text-transform: uppercase;
    }
  }

  p {
    margin: 1em 0;
  }

  main {
    i.highlight {
      background-color: #C8E6C9;
      padding: 2px 8px;
      border-radius: 6px;
    }
  }

  button.danger {
    background-color: #fd7775;
    &:hover {
      background-color: #EF5350;
    }
  }

  main.words {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    margin-top: -2em; // so cool bro, if my friends just seed this... they fall in love

    .word {
      width: 48%;
      height: 220px;
      box-shadow: 1px 1px 5px rgba(0,0,0, .2);
      border-radius: 6px;
      transition: .3s all;
      margin-bottom: 2em;
      position: relative;

      order: 0; // needed for order "starred" flex items

      .main-word { // avoid anoing selection on mobile device
        -webkit-user-select: none;  /* Chrome all / Safari all */
        -moz-user-select: none;     /* Firefox all */
        -ms-user-select: none;      /* IE 10+ */
        user-select: none;          /* Likely future */   
      }

      .star {
        position: absolute;
        top: 6px; right: 6px;
        width: 30px; height: 30px;
        background-color: rgba(0,0,0, .2);
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s all;
        cursor: pointer;

        svg {
            margin: 1px 0 0 2px;
        }

        &:hover {
                  background-color: rgba(0,0,0, .4);
        }
      } 

      .button {
        padding: 4px 12px;
        position: absolute;  bottom: 1em;

        display: flex; align-items: center;

        font-family: Arial; font-size: 0.9em; letter-spacing: normal; color: #fff; font-weight: bold; text-transform: uppercase;
        background-color: #1e88e5;
        border-radius: 6px;
        
        opacity: 0;
        transition: .3s all;
        cursor: pointer;
      }

      &:hover {
        .button {
          animation: pulse 2s infinite; // animation of button boxshadow folks
          opacity: 1;

          &:hover {
            background-color: #3f51b5;
          }
        }
      }

      display: flex;
      justify-content: center; align-items: center;

      p {
        font-size: 1.8em;
        letter-spacing: 3px;
        font-family: 'Rock Salt';
        text-align: center; // also for long word
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 3px rgba(0,0,0, .2), 0px 0px 18px rgba(0,0,0, .1);
        border: 2px solid #3085d6;
      }

      &:focus, &:active {
        transform: scale(1.03);
        box-shadow: 0px 0px 3px rgba(0,0,0, .2), 0px 0px 18px rgba(0,0,0, .1);
        border: 2px solid #3085d6;
      }
    }
  }

  @media screen and (max-width: 800px) {
    main.words {
      .word p {
        font-size: 1.6em;
      }
    }
  }

  @media screen and (max-width: 650px) {
    main.words {
      .word {
        height: 150px;
        margin-bottom: 1em;

        p {
          font-size: 1.1em;
        }

        .main-word {
          margin-bottom: 40px;
        }

        .button {
          margin-top: 1em;
        }
      }
    }
  }

    @media screen and (max-width: 560px) {
      main.words {
        .word {
          width: 100%;

          p {
            font-size: 1.6em;
          }
        }

        .quotes {
          width: 100%;
          height: auto;
        }
      }
    }

      @media screen and (max-width: 400px) {
    main.words {
      .word {

      }
      .word p {
        font-size: 1.3em;
      }
    }
  }

  // animazione all'hover dei bottoni "pratica con questa parola" in homepage
  @-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(30, 136, 229, 0.6);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(30, 136, 229, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(30, 136, 229, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(30, 136, 229, 0.6);
    box-shadow: 0 0 0 0 rgba(30, 136, 229, 0.6);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(30, 136, 229, 0);
      box-shadow: 0 0 0 10px rgba(30, 136, 229, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(30, 136, 229, 0);
      box-shadow: 0 0 0 0 rgba(30, 136, 229, 0);
  }
}


</style>
