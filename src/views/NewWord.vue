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

      <p class="summary">Modifica il testo della card sottostante e poi clicca su <b>Aggiungi Parola</b> per inserire una nuova parola nel tuo spazio personale.</p>
      </section>
    </nav>

    <main class="words single">
       <div class="word" :style="{backgroundColor: currentColor}">
        <input type="text" v-model="newWord" class="main-word" style="text-align: center" placeholder="Inserisci qui la tua parola">
      </div>

      <div class="quotes" style="flex-flow: column;">
        <p>Modifica il testo che trovi a sinistra <small>con almeno 3 lettere</small>, poi clicca su <i>Aggiungi Parola</i> qui sotto:</p>
        <button v-on:click="addWord()" :disabled="!newWord || newWord.length < 3">Aggiungi Parola</button>
      </div>
    </main>

    <footer>Puoi sostenere questo progetto con una <a href="https://paypal.me/pools/c/8bFReaiLUk">donazione</a>.<br> Se vuoi inviarmi un feedback fallo via <a href="mailto:castenetto.andrea@gmail.com">email</a>. <br> <a href="#top">Torna su ⬆</a> • <a href="https://castenettoa.com" title="creato da Andrea Castenetto">castenettoa.com</a></footer>
  </div>
</template>

<script>
// 'Ammirazione Apprezzamento Attenzione Bellezza Beatitudine Calma Compassione Comprensione Collaborazione Coraggio Creatività Audacia Decisione Distacco Determinazione Discernimento Disciplina Energia Decisione Distacco Determinazione Discernimento Disciplina Energia Entusiasmo Eternità Fede Libertà Amicizia Generosità Bontà Volontà buona Gratitudine Armonia Umorismo Inclusività Infinito Iniziativa Integrazione Gioia Liberazione Luce Amore Ordine Pazienza Pace Costanza Positività Forza Prontezza Quiete Realtà Rinnovamento Risolutezza Serenità Servizio Silenzio Semplicità Sintesi Tenacia Verità Comprensione Universalità Vitalità Interezza Volontà Saggezza Stupore'

export default {
  name: 'NewWord',
  data: function() {
    return {
      newWord: null,
      basicWords: ["Perseveranza", "Contemplazione", "Riflessione", "Rispetto", "Sacralità",  "Elevazione", "Vigilanza", "Accettazione", "Consacrazione", "Equilibrio", "Persistenza", "Reverenza", "Solidarietà", "Ammirazione", "Apprezzamento", "Attenzione", "Bellezza", "Beatitudine", "Calma", "Compassione", "Collaborazione", "Coraggio", "Creatività", "Audacia", "Energia", "Decisione", "Distacco", "Determinazione", "Discernimento", "Disciplina", "Entusiasmo", "Eternità", "Fede", "Libertà", "Amicizia", "Generosità", "Bontà", "Volontà buona", "Gratitudine", "Armonia", "Umorismo", "Inclusività", "Infinito", "Iniziativa", "Integrazione", "Gioia", "Liberazione", "Luce", "Amore", "Ordine", "Pazienza", "Pace", "Costanza", "Positività", "Forza", "Prontezza", "Quiete", "Realtà", "Rinnovamento", "Risolutezza", "Serenità", "Servizio", "Silenzio", "Semplicità", "Sintesi", "Tenacia", "Verità", "Comprensione", "Universalità", "Vitalità", "Interezza", "Volontà", "Saggezza", "Stupore"].sort( () => .5 - Math.random() ), // randomized array folks
      currentColor: '#71f285'
    }
  },
  created: function() {
    document.title = 'Parole Evocatrici - Aggiungi una nuova parola personale';
    window.scrollTo(0,0); // needed because the windwos was not to top... try to belive it
  },
  methods: {
    goToHome: function() { 
      if(this.$route.name != 'Home')
        this.$router.push({ name: "Home" });
    },

    addWord: function() { // funzione per aggiungere la parola allo spazio personale

      // capitalizzo la parola
      this.newWord.trim();
      this.newWord = this.newWord.toLowerCase();
      this.newWord = this.newWord.charAt(0).toUpperCase() + this.newWord.slice(1);
      this.newWord = this.newWord.split(',').join(''); // se la parola ha qualche virgola qui viene tolta

      // 1 - controllo se la parola esite già nelle parole dall'app e dell'utente; se esiste mostro un errore
      let userWords = localStorage.getItem('userWords') ? localStorage.getItem('userWords').split(',') : null;

      if(userWords)
        this.basicWords.push(...userWords);

      
      if(userWords && userWords.includes(this.newWord)) { // la parola esiste gia, mostro l'errore
        this.$alert('La parola ' + this.newWord + ' esite già nel sito; prova con una parola differente', 'La parola esiste già.', 'warning');

      } else { // aggiungo la parola
          let w = localStorage.getItem('userWords') ? localStorage.getItem('userWords').split(',') : '';

          if(w == '') {
            localStorage.setItem('userWords', this.newWord);
          } else {
            localStorage.setItem('userWords', w + ',' + this.newWord);
          }

          this.addToFavorites(this.newWord); // aggiungo la p. ai favoriti

          // mostro un alert di conferma
          this.$alert('La parola ' + this.newWord + ' è stata aggiunta correttamente', 'Parola Aggiunta.','success').then(() => {
            this.goToHome(); // reindirizzo l'utente alla home page dopo l'infobox
          });
      }
      
      // check testo vuoto
      // 2 - aggiungo la parola > la aggiungo ai favoriti > redirect alla homepage > messaggio 
    },

    addToFavorites: function(word) { 
      let favoriteWords = localStorage.getItem('favoriteWords');

      if (!favoriteWords) { // se non ci sono faviriti aggiungo la parola ai favoriti
          localStorage.setItem('favoriteWords', word);
      } else if (!favoriteWords.split(',').includes(word) ) { // se l'elemento non è già nei favoriti, lo aggiungo. Devo fare toString in quanto la local storage lavora in STRINGHE
         localStorage.setItem('favoriteWords', favoriteWords + ',' + word);
      } else if (favoriteWords.split(',').includes(word)) { // se la parola è presente, la rimuovo dai favoriti
         let f = favoriteWords.split(',');
         f.splice(f.indexOf(word), 1);
         localStorage.setItem('favoriteWords', f);
      }
    }
  }
}
</script>

<style lang="scss">
  .quotes {
    width: 48%;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
  }

  
</style>