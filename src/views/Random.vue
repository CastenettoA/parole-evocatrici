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
            <div class="title">Parole Evocatrici - parola casuale</div>
          </div>

        </div>

         <p v-if="currentWord">La tua parola generata casualmente è "<b>{{currentWord}}</b>".<br> Se preferisci scegliere un altra parola casuale, aggiorna questa pagina.</p>
      </section>
    </nav>

        <main class="words single">
       <div class="word" :style="{backgroundColor: currentColor}">
       <div class="star" v-on:click="addToFavorites(currentWord); isStarred = !isStarred">
         <svg v-if="!isStarred" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star" viewBox="0 0 18 18">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
          </svg>
         <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffeb3b" class="bi bi-star-fill" viewBox="0 0 18 18">
           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
         </svg>
       </div>
        <p class="main-word" disabled>{{currentWord}}</p>
      </div>

      <div class="quotes">
        <p>Importanza enorme della scelta di ciò a cui prestare attenzione, della direzione, dell'obiettivo che diamo alla nostra attenzione.
           E questa scelta è in potere della nostra volontà. <small>Roberto Assagioli, Appunto manoscritto (AS 6632)</small></p>
      </div>
    </main>

        <hr>

    <div class="pratica">
      <h1>Come utilizzare la tua parola</h1>
      
      <p>Ora non resta che <b>praticare</b> utilizzando uno dei metodi che trovi sotto.</p>

      <h3>#1 Metodo del cartoncino</h3>
        <p>Questo metodo è molto semplice: Ritaglia un foglietto di carta e scrivici sopra di esso la parola che hai scelto. Successivamente posiziona il cartoncino in un luogo che frequenti spesso. <small>Per ottenere un effetto comulativo, puoi creare più foglietti e distribuirli in luoghi diversi.</small> <a target="_blank" href="demo">(esempi e approfondimento)</a></p>

      <hr>
      <h3>#2 Metodo dell'attenzione cosciente</h3>
      <p>Concentrarti e prestare coscientemente attenzione alla parola reppresenta un metodo ancora più efficace. Ora rilassati e segui questi punti:</p>
      <ol>
        <li>Assumi una posizione di rilasciamento ed osserva la parola con attenzione per un periodo di 1 o 2 minuti. 
          <br>Se dall'inconscio emergono idee ed immagini collegate alla parola, lasciala aggiorare e prendine nota.</li><br>
        <li>Rifletti sul significato della parola, e annota i risultati.</li><br>
        <li>Cerca di "sentire" la qualità psicologica contenuta nella parola, lasciatene permeare, se possibile fino ad arrivare ad identificarti con essa.</li><br>
        <li>Mentre osservi la parola, pronunciala ad alta voce, o mormorala.</li><br>
        <li>Scrivi la parola diverse volte.</li>
      </ol>
      <p><a target="_blank" href="demo">(esempi e approfondimento)</a></p>

      <hr>
      <h3>Modalità, Ritmo e approfondimenti.</h3>
      <p>Ogni quanto devo praticare?</p>

      <p>Come promesso all'inizio, <b>la tecnica delle parole evocatrici</b> è molto semplice, dobbiamo solo ricordarcene e metterla in pratica.</p>
        <p>Se vuoi approfondire l'argomento in questa pagina trovi
        una <a href="/metodi">sintesi dei diversi metodi e delle differenti modalità per utilizzare la tecnica delle parole evocatrici</a>.</p>
    </div>


    <footer>Puoi sostenere questo progetto con una <a href="https://paypal.me/pools/c/8bFReaiLUk">donazione</a>.<br> Se vuoi inviarmi un feedback fallo via <a href="mailto:castenetto.andrea@gmail.com">email</a>. <br> <a href="#top">Torna su ⬆</a> • <a href="https://castenettoa.com" title="creato da Andrea Castenetto">castenettoa.com</a></footer>
  </div>
</template>

<script>

import randomColor from 'randomcolor'
export default {
  name: 'Home',
  data: function() {
    return {
      // todo: remove duplicates from array!
      basicWords: ["Perseveranza", "Contemplazione", "Riflessione", "Rispetto", "Sacralità",  "Elevazione", "Vigilanza", "Accettazione", "Consacrazione", "Equilibrio", "Persistenza", "Reverenza", "Solidarietà", "Ammirazione", "Apprezzamento", "Attenzione", "Bellezza", "Beatitudine", "Calma", "Compassione", "Collaborazione", "Coraggio", "Creatività", "Audacia", "Energia", "Decisione", "Distacco", "Determinazione", "Discernimento", "Disciplina", "Entusiasmo", "Eternità", "Fede", "Libertà", "Amicizia", "Generosità", "Bontà", "Volontà buona", "Gratitudine", "Armonia", "Umorismo", "Inclusività", "Infinito", "Iniziativa", "Integrazione", "Gioia", "Liberazione", "Luce", "Amore", "Ordine", "Pazienza", "Pace", "Costanza", "Positività", "Forza", "Prontezza", "Quiete", "Realtà", "Rinnovamento", "Risolutezza", "Serenità", "Servizio", "Silenzio", "Semplicità", "Sintesi", "Tenacia", "Verità", "Comprensione", "Universalità", "Vitalità", "Interezza", "Volontà", "Saggezza", "Stupore"].sort( () => .5 - Math.random() ), // randomized array folks
      currentWord: [],
      currentColor: '#FF7756', 
      isStarred: false
    }
  },
  created: function() { // random word, color, and check favorite
    document.title = 'Parole Evocatrici - Parola Casuale.';
    document.getElementsByTagName('meta')["description"].content = 'Con questa pagina generi una parola evocatrice casuale con cui esercitarti.';
    // window.scrollTo(0,0); //// needed because the windwos was not to top... try to belive it

    this.currentColor = randomColor({ luminosity: 'light', hue: 'green', count: 1 }); // random color on any page load folks!
    
    let favoriteWords = localStorage.getItem('favoriteWords');
    favoriteWords = favoriteWords ? favoriteWords.split(',') : null;

    if(favoriteWords && favoriteWords.includes(this.basicWords[0])) 
        this.isStarred = true;

    this.currentWord = this.basicWords[0];
  },
  methods: {
    goToWord: function(currentWord) {
      this.$router.push({ name: "Word", params: { word: currentWord.word, color: currentWord.color, starred: currentWord.starred } });
    },

    goToHome: function(w) { 
      if(this.$route.name != 'Home')
        this.$router.push({ name: "Home" });
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
    },
  }
}
</script>
