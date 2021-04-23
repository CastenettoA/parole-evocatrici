<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->


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

  .logo {
    display: flex;
    align-items: center;

    .title {
      margin-left: 1em;
      font-size: 1.2em;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  p {
    margin: 1em 0;
  }

  main.words {
    margin-top: 2em;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;

    .word {
      width: 48%;
      height: 220px;
      box-shadow: 1px 1px 5px rgba(0,0,0, .2);
      border-radius: 6px;
      transition: .3s all;
      margin-bottom: 2em;
      position: relative;

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
