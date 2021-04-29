<template>
  <div class="home-view">
    <nav>
      <section>
        <div class="logo">
          <div class="logo-wrapper" @click="goToHome()">
          <div class="img">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#fdd835" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <div class="title">Parole Evocatrici</div>
          </div>

          <div class="header-menu">

                <div class="donation" v-on:click="openDonationInfoBox()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" class="bi bi-gift-fill" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"/>
                  </svg>
                </div>

                <div class="istituto" v-on:click="openIstitutoInfoBox()">
                  <!-- <img src="@/assets/istituto-psico-sintesi.png"> -->
                  <img :src="require('@/assets/img/istituto-psicosintesi-white.png')"/>
                </div>

                <div class="donation question" v-on:click="goToinfoPage()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-question" viewBox="0 0 16 16">
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                  </svg>
                </div>
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

    <div class="pratica">
      <p>Nota: non essendoci un sistema di registrazione in questa applicazione, 
        le parole che aggiungi vengono salvate nel tuo Browser Web. Se accedi all'applicazione con un altro browser non troverai 
        la parola che hai aggiunto adesso. <br><br>Inoltre, sebbene le parole che hai aggiunto dovrebbero persistere 'per sempre', non posso
         garantirti la durata effettiva nel tuo browser web.<br> <br> Detto questo, buona pratica :)</p>
    </div>  
    <footer>Puoi sostenere questo progetto e futuri sviluppi con una <a href="https://www.patreon.com/castenettoa">donazione ❤️</a>.<br> Se vuoi inviarmi un feedback fallo via <a href="mailto:castenetto.andrea@gmail.com">email</a>. <br> <a href="#top">Torna su ⬆</a> • <a href="https://castenettoa.com" title="creato da Andrea Castenetto">castenettoa.com</a></footer>
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
        openDonationInfoBox: function() {
      this.$alert(
        "Questo progetto è gratuito, ma se vuoi puoi contribuire ai suoi costi di sviluppo e di mantenimento, nonchè ai progetti che svilupperò in futuro.",
       "🌟 Supporta questo progetto 🌟", 
       "info", 
         { confirmButtonText: '<a href="https://www.patreon.com/castenettoa" style="color: #fff">Supportami su Patreon 🚀</a>' }
      );
    },
    openIstitutoInfoBox: function() {
      this.$alert(
        "Questo metodo, sviluppando le qualità e funzioni deficienti e gli aspetti superiori della psiche contribuisce alla formazione armonica ed integrale della personalità, la propria psicosintesi. La Psicosintesi è un metodo sviluppato da Roberto Assagioli che, citandolo testualmente, 'può e deve essere applicato da ognuno a se stesso, promuovendo ed accelerando lo sviluppo interno ed il dominio di se, che dovrebbero costituire la meta di tutti'. Naturalmente un grande aiuto può essere dato dalla <<psicosintesi didattica>>; perciò ti lascio qui in basso un link per andare sul sito web ufficiale dell'Istituto di Psicosintesi.",
       "🌟 La Psicosintesi 🌟", 
       "info", 
         { confirmButtonText: '<a href="http://www.psicosintesi.it/" style="color: #fff">Vai su psicosintesi.it 🚀</a>' }
      );
    },
    goToinfoPage: function(w) { 
      if(this.$route.name != 'Help')
        this.$router.push({ name: "Help" });
    },
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
          this.$alert("La parola" + this.newWord + ' è stata aggiunta correttamente.', 'Parola Aggiunta.','success').then(() => {
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