<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  // components: {
  //   Home, Metodo
  // },
  data: function() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
   nav {
    position: absolute; top: 0; left: 0;
    background-image: linear-gradient(to right top, #0b36d3 45%, #65FBD2); 
    color: #fff;
    width: 100%;
    padding: 30px 0 56px 0;

    section {
      max-width: 800px;
      margin: 0 auto;

      h1,h2,h3,p { color: #fff; font-family: 'Source Sans Pro'; font-weight: 900; margin-bottom: 0; margin-top: 0;}

      h2 { font-size: 2.6em; }
      h3 { font-size: 1.7em; padding-right: 30%; margin-bottom: 1em;}
      p { font-size: 1.25em; font-weight: 400; opacity: .7;}
      a { color: #fff; text-decoration: underline;}
    }
   }

  .logo {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 3em;
  }

  .logo-wrapper {
    display: inline-flex;
    align-items: center;
    // background-color: rgba(246, 127, 114, .11%); 
    background-color: rgba(0,0,0, .11%); // @todo the colo change with the word color!
    padding: 0px 16px;
    border-radius: 30px;
    cursor: pointer;
    transition: .3s all;

    &:hover {
      background-color: rgba(0,0,0, .29%); 
    }

    .title {
      margin-left: 1em;
      text-transform: uppercase;
    }
  }

  .subtitle {
      margin-left: .4em;
      display: flex;
      align-items: center;

      svg {
        margin-right: .2em;
      }
  }

  p {
    margin: 1em 0;
  }

  main.words {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    margin-top: 31em;

    .word {
      width: 48%;
      height: 220px;
      box-shadow: 1px 1px 5px rgba(0,0,0, .2);
      border-radius: 6px;
      transition: .3s all;
      margin-bottom: 2em;
      position: relative;

      order: 0; // needed for order "starred" flex items

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
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 3px rgba(0,0,0, .2), 0px 0px 18px rgba(0,0,0, .1);
      }

      &:focus, &:active {
        transform: scale(1.03);
        box-shadow: 0px 0px 3px rgba(0,0,0, .2), 0px 0px 18px rgba(0,0,0, .1);
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
</style>
