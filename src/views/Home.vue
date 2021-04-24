<template>
  <div class="home-view">
    <nav>
      <section>
        <div class="logo">
          <div class="logo-wrapper" @click="goToHome()">
          <div class="img">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="salmon" class="bi bi-spellcheck" viewBox="0 0 16 16">
                <path d="M8.217 11.068c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401zm-5.583 1.035c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552.527 0 .864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582zm.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864zm8.897.567c-.577-.4-.9-1.088-.9-1.983v-.65c0-1.42.894-2.338 2.305-2.338 1.352 0 2.119.82 2.139 1.806h-1.187c-.04-.351-.283-.776-.918-.776-.674 0-1.045.517-1.045 1.328v.625c0 .468.121.834.343 1.067l-.737.92z"/>
                <path d="M14.469 9.414a.75.75 0 0 1 .117 1.055l-4 5a.75.75 0 0 1-1.116.061l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.908 1.907 3.476-4.346a.75.75 0 0 1 1.055-.117z"/>
              </svg>
            </div>
            <div class="title">Parole Evocatrici</div>
          </div>

        </div>

        <h2>Risveglia le tue qualità</h2>
        <h3>con una tecnica semplice, facile da applicare, ed allo stesso tempo molto efficace.</h3>
        <p class="summary">Questa tecnica fa uso delle parole per trasformare il nostro stato psichico ed è basata su fatti molto concreti che riguardano la nostra psiche. 
          Se non conosci questa tecnica, prima di cominciare, ti consiglio di leggere l'<a href="#intro">introduzione alla tecnica delle parole evocatrici.</a>
        <br><br>
        <p>Seleziona una parola oppure scegline una casualmente. (puoi anche aggiungere una nuova parola, se preferisci).</p>
      </section>
    </nav>


    <main class="words" v-if="words">
      <div class="word" v-bind:key="key" v-for="singleWord, key in words" :style="{backgroundColor: singleWord.color}">
         {{singleWord}}
       <div class="star">
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star" viewBox="0 0 18 18">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
          </svg>
         <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 18 18">
           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
         </svg> -->
       </div>
        <p class="main-word" disabled>{{singleWord.word}}</p>
        <p class="button" v-on:click="goToWord(singleWord.word, singleWord.color)">Pratica con questa parola</p>
      </div>
    </main>



    <footer>Puoi sostenere questo progetto con una <a href="https://paypal.me/pools/c/8bFReaiLUk">donazione</a>.<br> Se vuoi inviarmi un feedback fallo via <a href="mailto:castenetto.andrea@gmail.com">email</a>. <br> <a href="#top">Torna su ⬆</a> • <a href="https://castenettoa.com" title="creato da Andrea Castenetto">castenettoa.com</a></footer>
  </div>
</template>

<script>
// 'Ammirazione Apprezzamento Attenzione Bellezza Beatitudine Calma Compassione Comprensione Collaborazione Coraggio Creatività Audacia Decisione Distacco Determinazione Discernimento Disciplina Energia Decisione Distacco Determinazione Discernimento Disciplina Energia Entusiasmo Eternità Fede Libertà Amicizia Generosità Bontà Volontà buona Gratitudine Armonia Umorismo Inclusività Infinito Iniziativa Integrazione Gioia Liberazione Luce Amore Ordine Pazienza Pace Costanza Positività Forza Prontezza Quiete Realtà Rinnovamento Risolutezza Serenità Servizio Silenzio Semplicità Sintesi Tenacia Verità Comprensione Universalità Vitalità Interezza Volontà Saggezza Stupore'

import randomColor from 'randomcolor'
export default {
  name: 'Home',
  data: function() {
    return {
      basicWords: ["Ammirazione", "Apprezzamento", "Attenzione", "Bellezza", "Beatitudine", "Calma", "Compassione", "Comprensione", "Collaborazione", "Coraggio", "Creatività", "Audacia", "Decisione", "Distacco", "Determinazione", "Discernimento", "Disciplina", "Energia", "Decisione", "Distacco", "Determinazione", "Discernimento", "Disciplina", "Energia", "Entusiasmo", "Eternità", "Fede", "Libertà", "Amicizia", "Generosità", "Bontà", "Volontà buona", "Gratitudine", "Armonia", "Umorismo", "Inclusività", "Infinito", "Iniziativa", "Integrazione", "Gioia", "Liberazione", "Luce", "Amore", "Ordine", "Pazienza", "Pace", "Costanza", "Positività", "Forza", "Prontezza", "Quiete", "Realtà", "Rinnovamento", "Risolutezza", "Serenità", "Servizio", "Silenzio", "Semplicità", "Sintesi", "Tenacia", "Verità", "Comprensione", "Universalità", "Vitalità", "Interezza", "Volontà", "Saggezza", "Stupore"].sort( () => .5 - Math.random() ), // randomized array folks
      words: [],
      colors: []
    }
  },
  created: function() {
    this.colors = randomColor({ luminosity: 'light', hue: 'green', count: this.words.length });

    // why random color return an observer?

    console.log(this.colors);

    let w = [], self = this;
    this.basicWords.map(function(el, i, arr) {
      console.log(self.colors, i)
      w.push({ word: el, color: self.colors[i], order: 1, starred: false });
    });

    console.log(w);
    this.words = w;
  },
  methods: {
    goToWord: function(w, c) {
      this.$router.push({ name: "Word", params: { word: w, color: c } });
    },

    goToHome: function(w) { 
      console.log(this.$route);
      if(this.$route.name != 'Home')
        this.$router.push({ name: "Home" });
    }
  }
}
</script>
