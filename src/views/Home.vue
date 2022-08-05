<template>
  <div class="home-view-real">
    <nav>
      <section class="homepage">
        <HeaderLogo></HeaderLogo>

        <h1>Sviluppa le tue qualità</h1>
        <h3 class="subtitle">con una tecnica semplice, facile da applicare, ed allo stesso tempo molto efficace.</h3>
        <h3 class="last"> Per praticare seleziona una parola sotto, oppure <a href="/random">ottienine una casuale</a> o <a href="/newWord">aggiungine una nuova</a>.
        <small style="text-transform: uppercase; font-weight: bold; font-style: italic; opacity: .5; margin-left: .3em;">Let's Go!</small></h3>
      </section>
    </nav>


    <main class="words" v-if="words">
      <div class="word" v-bind:key="key" v-for="currentWord, key in words" :style="{backgroundColor: currentWord.color, order: currentWord.order}">
       <div class="star" v-on:click="addToFavorites(currentWord.word); currentWord.starred = !currentWord.starred" title="Aggiungi-Rimuovi dai preferiti">
         <svg v-if="!currentWord.starred" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star" viewBox="0 0 18 18">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
          </svg>
         <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffeb3b" class="bi bi-star-fill" viewBox="0 0 18 18">
           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
         </svg>
       </div>
        <p class="main-word">{{currentWord.word}}</p>
        <router-link :to="{ name: 'Word', params: { word: currentWord.word, color: currentWord.color, starred: currentWord.starred }}" class="button" style="text-decoration: none;">
          <span>Pratica con questa parola</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </router-link>
      </div>
    </main>




  <FooterMain></FooterMain>
  </div>
</template>

<script>

import randomColor from 'randomcolor'
export default {
  name: 'Home',
  data: function() {
    return {
      // todo: remove duplicates from array!
      basicWords: ["Concentrazione","Leggerezza", "Perseveranza", "Contemplazione", "Riflessione", "Rispetto", "Sacralità",  "Elevazione", "Vigilanza", "Accettazione", "Consacrazione", "Equilibrio", "Persistenza", "Reverenza", "Solidarietà", "Ammirazione", "Apprezzamento", "Attenzione", "Bellezza", "Beatitudine", "Calma", "Compassione", "Collaborazione", "Coraggio", "Creatività", "Audacia", "Energia", "Decisione", "Distacco", "Determinazione", "Discernimento", "Disciplina", "Entusiasmo", "Eternità", "Fede", "Libertà", "Amicizia", "Generosità", "Bontà", "Volontà buona", "Gratitudine", "Armonia", "Umorismo", "Inclusività", "Infinito", "Iniziativa", "Integrazione", "Gioia", "Liberazione", "Luce", "Amore", "Ordine", "Pazienza", "Pace", "Costanza", "Positività", "Forza", "Prontezza", "Quiete", "Realtà", "Rinnovamento", "Risolutezza", "Serenità", "Servizio", "Silenzio", "Semplicità", "Sintesi", "Tenacia", "Verità", "Comprensione", "Universalità", "Vitalità", "Interezza", "Volontà", "Saggezza", "Stupore"].sort( () => .5 - Math.random() ), // randomized array folks
      words: [],
    }
  },
  created: function() {
    let arr = [];
    console.log(this.basicWords.length);
    this.basicWords.forEach(function(val, index, num) {
      // https://parole-evocatrici.com/word/Infinito
      arr.push('https://parole-evocatrici.com/word/' + val);
    })

    

    console.log(arr);

    document.title = 'Parole Evocatrici - Risveglia e sviluppa le tue qualità latenti.';
    document.getElementsByTagName('meta')["description"].content = 'parole-evocatrici.com è un servizio che ti permette di allenare e stimolare le tue qualità interiori direttamente online.';
    window.scrollTo(0,0); // needed because the windwos was not to top... try to belive it

    // (1) controllo se l'utente ha aggiunto delle parole (2) inserisco le parole nella lista
    let userNewWords = localStorage.getItem('userWords') ? localStorage.getItem('userWords').split(',') : '';
    if(userNewWords != '')
      this.basicWords.push(...userNewWords);


    let c = randomColor({ luminosity: 'light', hue: 'green', count: this.basicWords.length }); // random color on any page load folks!

    let favoriteWords = localStorage.getItem('favoriteWords');
    favoriteWords = favoriteWords ? favoriteWords.split(',') : null;


    let w = [];
    this.basicWords.map(function(el, i, arr) {

      let starred = false, order = 0;
      if(favoriteWords && favoriteWords.includes(el)) {
        starred = true;
        order = -1;
      }

      w.push({ word: el, color: c[i], order, starred });
    });

    this.words = w;
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
    openIstitutoInfoBox: function() {
      this.$swal({
        title: "🌟 La Psicosintesi",
        html:  "Questa tecnica, sviluppando le qualità e funzioni limitate e gli aspetti superiori della psiche contribuisce alla formazione armonica ed integrale della personalità, la propria psicosintesi. <br><br> La Psicosintesi è un metodo sviluppato da Roberto Assagioli che, citandolo testualmente, 'può e deve essere applicato da ognuno a se stesso, promuovendo ed accelerando lo sviluppo interno ed il dominio di se, che dovrebbero costituire la meta di tutti'. <br><br>Naturalmente un grande aiuto può essere dato dalla <i>psicosintesi didattica</i>; perciò ti lascio qui in basso un link per andare sul sito web ufficiale dell'Istituto di Psicosintesi.",
         showCloseButton: true,
          showCancelButton: true,
        focusConfirm: true,
        confirmButtonText:
          'Vai su psicosintesi.it 🚀',
        cancelButtonText: 'No, grazie.'
      }).then(function(r) {
        if(r.isConfirmed)
          location.href = 'http://www.psicosintesi.it';
      });
    },
    goToinfoPage: function(w) {
      if(this.$route.name != 'Help')
        this.$router.push({ name: "Help" });
    },

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
