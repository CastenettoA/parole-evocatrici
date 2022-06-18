<template>
  <div class="home-view">
    <nav>
      <section>
        <HeaderLogo></HeaderLogo>

        <h1>La tua parola generata casualmente è
          <span class="currentWord" v-if="currentWord">
            <span class="word">{{ currentWord }}</span>.
            <span class="bottom-line" :style="{ 'border-bottom': '6px solid ' + currentColor }"></span>
          </span>
        </h1>
      <p class="summary"> Se preferisci scegliere un altra parola casuale, aggiorna questa pagina.</p>
      </section>
    </nav>

        <main class="words single">
       <div class="word" :style="{backgroundColor: currentColor}">
       <div class="star" v-on:click="addToFavorites(currentWord); isStarred = !isStarred" title="Aggiungi-Rimuovi dai preferiti">
         <svg v-if="!isStarred" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star" viewBox="0 0 18 18">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
          </svg>
         <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffeb3b" class="bi bi-star-fill" viewBox="0 0 18 18">
           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
         </svg>
       </div>
        <p class="main-word">{{currentWord}}</p>
      </div>

      <div class="quotes">
        <p>&ldquo;{{RAquotes[0]}}&rdquo; &mdash; <small>Roberto Assagioli</small></p>
      </div>
    </main>

        

    <div class="pratica">
      <h2>Pratica</h2>
      
      <!-- <@todo: check if delete button is in all pages -->
      <button class="danger" v-if="userAddedWord" v-on:click="deleteWord()">Elimina questa parola.</button>

      <div class="info-section tecnica-cartoncino" v-on:click="open_m1_dialog">

        <div class="content">
          <h3 class="sub">Tecnica 1</h3>
          <h3 class="title">La Tecnica del Cartoncino</h3>
          <p>Pratica Ora →</p>
        </div>

        <div class="image">
          <img src="@/assets/img/word/tecnica-cartoncino-1.svg">
        </div>

      </div>

      <div class="info-section tecnica-composta" v-on:click="open_m2_dialog">

        <div class="content">
          <h3 class="sub">Tecnica 2</h3>
          <h3 class="title">La Tecnica Composta</h3>
          <p>Pratica Ora →</p>
        </div>

        <div class="image">
          <img src="@/assets/img/word/tecnica-composta-2.svg">
        </div>

      </div>

      <details>
        <summary>Condividi la pratica 🥳🎉🎉</summary>
        <p>Se anche tu pensi che questa tecnica sia utile e che porti benefici concreti potresti condividerla con i tuoi
          conoscenti, amici e familiari. Magari
          dedicandoli una parola in particolare; io stesso lo sto facendo, qui a casa e con i miei amici, e noto con
          piacere che le parole sono sempre ben accette!</p>
        <h4>Come condividere?</h4>
        <p>Puoi farlo semplicemente condividendo il link di questa parola evocatrice, oppure puoi sceglierne una in
          particolare da dedicare e condividerla.</p>
      </details>

      <details>
        <summary>Ogni quanto devo praticare? 🕒</summary>
        <p>Non c'è una risposta univoca uguale per tutti. Il tempo dedicato alla pratica varia a seconda dello scopo che
          ti sei prefissato
          e vari altri fattori.</p>

        <p>Puo essere utile, all'inizio, definire un orario preciso ed un numero di volte definito in cui praticare
          (bastano pochi minuti al giorno), così inizierai
          ad entrare nella pratica <i>velocemente</i>.
        </p>

        <p>Come <b>ritmo</b> puoi adottare quello di utilizzare una parola per un intervallo di tempo più o meno lungo
          (ad es. 1 giorno, settimana mese, o più)
          seguito da una ripetizione dopo una pausa, oppure puoi utilizzare una parola al giorno a rotazione.</p>
        <p><b>La pratica ci farà capire qual'è il ritmo e la modalità più efficiente</b> che certamente variano anche a
          seconda del nostro tipo psicologico
          (per un approfondimento dei tipi psicologici vedi a pagina p.183, capitolo "Psicologia Differenziale" del
          libro <a href="https://amzn.to/3nmT7JA">L'atto di Volontà</a> di Roberto Assagioli).</p>


      </details>

    </div>


    <FooterMain></FooterMain>
  </div>
</template>

<script>

import randomColor from 'randomcolor'
export default {
  name: 'Home',
  data: function() {
    return {
      RAquotes: [ // citazioni libere di roberto assagioli da mostrare affianco alla parola
          'Ogni giorno, si potrebbe dire ogni ora, la vita ci offre delle opportunità, ci pone davanti a scelte, sta a noi riconoscerle e utilizzarle.',
          'Quello che più conta è l’atteggiamento interno. In un certo senso le vacanze sono “uno stato d’animo”.',
          'L’uomo umile è eroico perché malgrado la sua fragilità, procede nel cammino e tenta la scalata.',
          'Con la virtuosa energia dell’umiltà (l\'uomo) realizza se stesso: non bada al giudizio altrui e alla sua reputazione, non ha bisogno di compiere sforzi per difenderle e può così liberare energie psichiche per i suoi progetti.',
          'La crisi è l’inizio del cambiamento, è la prima attivazione di una nuova aspirazione, la prova tangibile della possibilità di spostarsi da un punto stabile',
          'Siamo dominati da tutto ciò con cui ci identifichiamo, possiamo dominare tutto ciò da cui ci siamo disidentificati.',
          'Tre cose soprattutto l\'uomo moderno deve apprendere per divenire sano e completo: l\'arte del riposo, l\'arte della contemplazione, l\'arte del riso e del sorriso.',
          'La meditazione è un uso positivo e creativo della mente che collega attivamente il mondo interno e il mondo esterno.',
          'Di ogni nostro pensiero, sforzo, atto buono viene tenuto conto dalla Grande Legge che regge gli atomi, gli uomini ed i mondi.',
          'Liberarsi per liberare',
          'Il grande mezzo per progredire spiritualmente è lo sforzo attivo e continuo di bene, voluto, amato ed offerto.',
          
     ].sort( () => .5 - Math.random() ),
      visibleMethod: null,

      basicWords: ["Perseveranza", "Contemplazione", "Riflessione", "Rispetto", "Sacralità",  "Elevazione", "Vigilanza", "Accettazione", "Consacrazione", "Equilibrio", "Persistenza", "Reverenza", "Solidarietà", "Ammirazione", "Apprezzamento", "Attenzione", "Bellezza", "Beatitudine", "Calma", "Compassione", "Collaborazione", "Coraggio", "Creatività", "Audacia", "Energia", "Decisione", "Distacco", "Determinazione", "Discernimento", "Disciplina", "Entusiasmo", "Eternità", "Fede", "Libertà", "Amicizia", "Generosità", "Bontà", "Volontà buona", "Gratitudine", "Armonia", "Umorismo", "Inclusività", "Infinito", "Iniziativa", "Integrazione", "Gioia", "Liberazione", "Luce", "Amore", "Ordine", "Pazienza", "Pace", "Costanza", "Positività", "Forza", "Prontezza", "Quiete", "Realtà", "Rinnovamento", "Risolutezza", "Serenità", "Servizio", "Silenzio", "Semplicità", "Sintesi", "Tenacia", "Verità", "Comprensione", "Universalità", "Vitalità", "Interezza", "Volontà", "Saggezza", "Stupore"].sort( () => .5 - Math.random() ), // randomized array folks
      currentWord: [],
      currentColor: '#71f285', 
      isStarred: false
    }
  },
  created: function() { // random word, color, and check favorite
    document.title = 'Parole Evocatrici - Parola Casuale.';
    document.getElementsByTagName('meta')["description"].content = 'Con questa pagina generi una parola evocatrice casuale con cui esercitarti.';
    // window.scrollTo(0,0); //// needed because the windwos was not to top... try to belive it

    // (1) controllo se l'utente ha aggiunto delle parole (2) inserisco le parole nella lista (3) mescolo nuovamente le parole
    let userNewWords = localStorage.getItem('userWords') ? localStorage.getItem('userWords').split(',') : '';
    if(userNewWords != '')
      this.basicWords.push(...userNewWords);

    // (3) rimescolo le parole
    this.basicWords.sort( () => .5 - Math.random() );

    this.currentColor = randomColor({ luminosity: 'light', hue: 'green', count: 1 }); // random color on any page load folks!
    
    let favoriteWords = localStorage.getItem('favoriteWords');
    favoriteWords = favoriteWords ? favoriteWords.split(',') : null;

    if(favoriteWords && favoriteWords.includes(this.basicWords[0])) 
        this.isStarred = true;

    this.currentWord = this.basicWords[0];
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

        open_m1_dialog: function() {
      this.$swal.mixin({
        // input: 'text',
        // confirmButtonText: 'Next &rarr;',
        // showCancelButton: true,
        // progressSteps: ['1']
        
      }).queue([
        {
          title: 'Il metodo del cartoncino',
          html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord +  `</p>
          <br><br><small style="display: inline-block;">Questo metodo è molto semplice da applicare eppure molto efficace.</small> 

          <p><b>Istruzioni</b> &mdash; Ora ritaglia un foglietto di carta e scrivi sopra di esso la parola che hai scelto. 
                  Successivamente posiziona il cartoncino in un luogo che frequenti spesso (come la scrivania, un tavolo, una parete, ecc).</p>
                  <small>Per ottenere un effetto comulativo, puoi creare più foglietti e distribuirli in luoghi diversi. Niente ti vieta di scrivere su un cartoncino una 
                    frase simbolo della qualità che vuoi evocare oppure scriverla su un cartoncino molto grande che attiri subito la tua attenzione.</small>
           </div>`,
          confirmButtonText: 'Concludi l\'esercizio &rarr;', showCloseButton: true,
          progressSteps: ['1'], currentProgressStep: 0,

       
       
        },
        // {
        //   title: 'Question 2',
        //   text: 'Chaining swal2 modals is easy',
        //   confirmButtonText: 'next &rarr;', showCloseButton: true,
        //   progressSteps: ['1', '2', '3'], currentProgressStep: 1,
        // },
        // {
        //   title: 'Question 3',
        //   text: 'Chaining swal2 modals is easy',
        //   confirmButtonText: 'next &rarr;', showCloseButton: true,
        //   progressSteps: ['1', '2', '3'], currentProgressStep: 2,
        // },
      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          this.$swal.fire({
             showCloseButton: true,
            title: 'Congratulazioni! 🎊',
            html: ` <div style="text-align: left;">
              <small>Ora che hai concluso la pratica puoi provare il <b>secondo metodo</b> oppure leggere più in basso dei consigli pratici 
              sul ritmo con cui eseguire questa pratica.</small>
              </div>
            `,
            confirmButtonText: 'Torna al sito'
          })
        }
      })
    },

    open_m2_dialog: function() {
      this.$swal.mixin().queue([
        {
          title: 'Il metodo dell\'attenzione cosciente',
          html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord +  `</p>
           <p style="font-size: 15px;">Prestare coscientemente attenzione alla parola reppresenta un metodo ancora più efficace. Ora puoi rilassarti e seguire questi step:</p>
          
           <p>Assumi una posizione di rilasciamento ed osserva la parola con attenzione per un periodo di 1 o 2 minuti. <small>Se preferisci puoi scrivere la parola su un cartoncino, e osservarlo.</small></p>
           <p>Se dall'inconscio emergono idee ed immagini collegate alla parola, lasciale affiorare e prendine nota.</p>
           </div>`,
          confirmButtonText: 'Prossimo Step &rarr;', showCloseButton: true, progressSteps: ['1','2','3','4','5'], currentProgressStep: 0,
        },
        {
          title: 'Il metodo dell\'attenzione cosciente',
          html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord +  `</p>
          
           
           <p>Rifletti sul significato della parola e annota i risultati.</p>
           </div>`,
          confirmButtonText: 'Prossimo Step &rarr;', showCloseButton: true, progressSteps: ['1','2','3','4','5'], currentProgressStep: 1,
        },
        {
          title: 'Il metodo dell\'attenzione cosciente',
          html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord +  `</p>
           
           <p>Cerca di "sentire" la qualità psicologica contenuta nella parola, lasciatene permeare, se possibile fino ad arrivare ad identificarti con essa.</p>
           </div>`,
          confirmButtonText: 'Prossimo Step &rarr;', showCloseButton: true, progressSteps: ['1','2','3','4','5'], currentProgressStep: 2,
        },
        {
          title: 'Il metodo dell\'attenzione cosciente',
          html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord +  `</p>
           
           <p>Mentre osservi la parola, pronunciala ad alta voce, o mormorala.</p>
           </div>`,
          confirmButtonText: 'Prossimo Step &rarr;', showCloseButton: true, progressSteps: ['1','2','3','4','5'], currentProgressStep: 3,
        },
        {
          title: 'Il metodo dell\'attenzione cosciente',
          html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord +  `</p>
           
           <p>Scrivi la parola diverse volte.</p>
           </div>`,
          confirmButtonText: 'Concludi Esercizio &rarr;', showCloseButton: true, progressSteps: ['1','2','3','4','5'], currentProgressStep: 4,
        },

      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          this.$swal.fire({
             showCloseButton: true,
            title: 'Congratulazioni! 🎊',
            html: ` <div style="text-align: left;">
              <p>Ora che hai concluso l'esercizio ti consiglio vivamente di <b>organizzare una pratica giornaliera</b> (sono sufficenti anche 2 minuti al giorno) in un momento prestabilito della tua giornata.</p>
              <p>La pratica regolare ti consentirà di conoscere ed approfondire maggiormente questo medoto e sentirai maggiori benefici.</p>
              <p>Per conoscere i meccanismi psicologici su cui si basa questa tecnica puoi leggere <a href="/spiegazione-tecnica-parole-evocatrici">L'introduzione alla tecnica</a> 
              oppure puoi farlo direttamente leggendo il libro del suo ideatore <a href="https://amzn.to/3nmT7JA">Roberto Assagioli</a>.</p>
              </div>
            `,
            confirmButtonText: 'Torna al sito'
          })
        }
      })
    },
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/info-section.scss';
</style>