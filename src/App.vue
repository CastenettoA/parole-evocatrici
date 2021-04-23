<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <nav>
      <div class="logo">
        <div class="img">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="salmon" class="bi bi-spellcheck" viewBox="0 0 16 16">
  <path d="M8.217 11.068c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401zm-5.583 1.035c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552.527 0 .864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582zm.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864zm8.897.567c-.577-.4-.9-1.088-.9-1.983v-.65c0-1.42.894-2.338 2.305-2.338 1.352 0 2.119.82 2.139 1.806h-1.187c-.04-.351-.283-.776-.918-.776-.674 0-1.045.517-1.045 1.328v.625c0 .468.121.834.343 1.067l-.737.92z"/>
  <path d="M14.469 9.414a.75.75 0 0 1 .117 1.055l-4 5a.75.75 0 0 1-1.116.061l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.908 1.907 3.476-4.346a.75.75 0 0 1 1.055-.117z"/>
</svg>
        </div>
        <div class="title">Parole Evocatrici</div>
      </div>

      <p class="summary">
        La psicosintesi completa, in cui tutti gli elementi della psiche vengono coordinati e stabilmente uniti, è un termine ideale a cui dobbiamo cercare di avvicinarci il più possibile, ma che non si può attuare in modo perfetto. In molti casi possiamo e dobbiamo accontentarci di meno. 
      </p>

      <p>Se è la prima volta che senti parlare di questa tecnica, <a href="#tutorial">ti consiglio di approfondirla</a>. Altrimenti puoi passare già alla pratica e selezionare una delle parole che trovi qui sotto.</p>

      <hr>
    </nav>

    <main class="words">
      <div class="word" v-bind:key="key" v-for="word, key in words" :style="{backgroundColor: randomColor(word)}">
        <p>{{word}}</p>
      </div>
    </main>

    <!-- <router-view/> -->
  </div>
</template>

<script>
import randomColor from 'randomcolor'
// 'Ammirazione Apprezzamento Attenzione Bellezza Beatitudine Calma Compassione Comprensione Collaborazione Coraggio Creatività Audacia Decisione Distacco Determinazione Discernimento Disciplina Energia Decisione Distacco Determinazione Discernimento Disciplina Energia Entusiasmo Eternità Fede Libertà Amicizia Generosità Bontà Volontà buona Gratitudine Armonia Umorismo Inclusività Infinito Iniziativa Integrazione Gioia Liberazione Luce Amore Ordine Pazienza Pace Costanza Positività Forza Prontezza Quiete Realtà Rinnovamento Risolutezza Serenità Servizio Silenzio Semplicità Sintesi Tenacia Verità Comprensione Universalità Vitalità Interezza Volontà Saggezza Stupore'
export default {
  name: 'App',
  data: function() {
    return {
      words: ["Ammirazione", "Apprezzamento", "Attenzione", "Bellezza", "Beatitudine", "Calma", "Compassione", "Comprensione", "Collaborazione", "Coraggio", "Creatività", "Audacia", "Decisione", "Distacco", "Determinazione", "Discernimento", "Disciplina", "Energia", "Decisione", "Distacco", "Determinazione", "Discernimento", "Disciplina", "Energia", "Entusiasmo", "Eternità", "Fede", "Libertà", "Amicizia", "Generosità", "Bontà", "Volontà buona", "Gratitudine", "Armonia", "Umorismo", "Inclusività", "Infinito", "Iniziativa", "Integrazione", "Gioia", "Liberazione", "Luce", "Amore", "Ordine", "Pazienza", "Pace", "Costanza", "Positività", "Forza", "Prontezza", "Quiete", "Realtà", "Rinnovamento", "Risolutezza", "Serenità", "Servizio", "Silenzio", "Semplicità", "Sintesi", "Tenacia", "Verità", "Comprensione", "Universalità", "Vitalità", "Interezza", "Volontà", "Saggezza", "Stupore"]
    }
  },
  methods: {
    randomColor: function(uId) {
      return randomColor({
        luminosity: 'light',
        hue: 'green'
        });
    }
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
      cursor: pointer;
      transition: .3s all;
      margin-bottom: 2em;

      display: flex;
      justify-content: center; align-items: center;

      p {
        font-size: 1.8em;
        letter-spacing: 3px;
        font-family: 'Rock Salt';
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 3px rgba(0,0,0, .2), 0px 0px 18px rgba(0,0,0, .1), 0px 0px 0px 6px inset rgba(0,0,0, .1),
      }

      &:focus, &:active {
        transform: scale(1.03);
        box-shadow: 0px 0px 3px rgba(0,0,0, .2), 0px 0px 18px rgba(0,0,0, .1), 0px 0px 0px 7px inset rgba(0,0,0, .1),
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
      }
      .word p {
        font-size: 1.1em;
      }
    }
  }

    @media screen and (max-width: 500px) {
    main.words {
      .word {
        width: 100%;
      }
      .word p {
        font-size: 1.6em;
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
