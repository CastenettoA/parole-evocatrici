<template>
  <div class="home-view">
    <nav>
      <section>
        <HeaderLogo></HeaderLogo>

      <h1>Aggiungi una nuova parola.</h1>
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
        la parola che hai aggiunto adesso.</p>
    </div>  
        
<FooterMain></FooterMain>
  </div>
</template>

<script>
export default {
  name: 'NewWord',
  data: function() {
    return {
      newWord: null,
      basicWords: ["Concentrazione","Leggerezza", "Perseveranza", "Contemplazione", "Riflessione", "Rispetto", "Sacralità",  "Elevazione", "Vigilanza", "Accettazione", "Consacrazione", "Equilibrio", "Persistenza", "Reverenza", "Solidarietà", "Ammirazione", "Apprezzamento", "Attenzione", "Bellezza", "Beatitudine", "Calma", "Compassione", "Collaborazione", "Coraggio", "Creatività", "Audacia", "Energia", "Decisione", "Distacco", "Determinazione", "Discernimento", "Disciplina", "Entusiasmo", "Eternità", "Fede", "Libertà", "Amicizia", "Generosità", "Bontà", "Volontà buona", "Gratitudine", "Armonia", "Umorismo", "Inclusività", "Infinito", "Iniziativa", "Integrazione", "Gioia", "Liberazione", "Luce", "Amore", "Ordine", "Pazienza", "Pace", "Costanza", "Positività", "Forza", "Prontezza", "Quiete", "Realtà", "Rinnovamento", "Risolutezza", "Serenità", "Servizio", "Silenzio", "Semplicità", "Sintesi", "Tenacia", "Verità", "Comprensione", "Universalità", "Vitalità", "Interezza", "Volontà", "Saggezza", "Stupore"].sort( () => .5 - Math.random() ), // randomized array folks
      currentColor: '#71f285'
    }
  },
  created: function() {
    document.title = 'Parole Evocatrici - Aggiungi una nuova parola';
    document.getElementsByTagName('meta')["description"].content = 'In questa pagina puoi aggiungere una nuova parola con la quale potrai praticare la tecnica.';

    window.scrollTo(0,0); // needed because the windwos was not to top... try to belive it
  },
  methods: {
    openDonationInfoBox: function() {
      this.$swal({
        title: "🌟 Supporta questo progetto", 
        html:  "Questo progetto è gratuito, ma se vuoi puoi contribuire ai suoi costi di sviluppo e di mantenimento, nonchè ai progetti che svilupperò in futuro.",
         showCloseButton: true,
          showCancelButton: true,
        focusConfirm: true,
        confirmButtonText:
          'Si, effettuo una donazione 🚀',
        cancelButtonText: 'No, grazie.'
      }).then(function(r) {
        if(r.isConfirmed)
          location.href = 'https://paypal.me/pools/c/8bFReaiLUk';
      });
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
        this.basicWords.push(...userWords); // la inserisco nelle parole predefinite
      
      if(userWords && this.basicWords.includes(this.newWord)) { // la parola esiste gia, mostro l'errore
        this.$swal('La parola esiste già.', 'La parola ' + this.newWord + ' esite già nel sito; prova con una parola differente', 'warning');

      } else { // aggiungo la parola
          let w = localStorage.getItem('userWords') ? localStorage.getItem('userWords').split(',') : '';

          if(w == '') {
            localStorage.setItem('userWords', this.newWord);
          } else {
            localStorage.setItem('userWords', w + ',' + this.newWord);
          }

          this.addToFavorites(this.newWord); // aggiungo la p. ai favoriti

          // mostro un alert di conferma
          this.$swal('Parola Aggiunta.', "La parola " + this.newWord + ' è stata aggiunta correttamente.','success').then(() => {
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
    font-weight: 300;
  }

  
</style>