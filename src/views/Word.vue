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

      <p class="summary">Hai scelto di praticare con la parola {{currentWord}}. Ora segui le istruzioni che trovi sotto e inizia la tua pratica.</p>
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
      <button class="danger" v-if="userAddedWord" v-on:click="deleteWord()">Elimina questa parola.</button>
      <hr>
      
      <h1>Scegli un metodo ed inizia a praticare</h1>
      
      <p>Dopo avere letto <a href="/tecnica">come funziona la tecnica</a> non ti resta che <b>praticare</b> utilizzando uno dei metodi che trovi sotto.</p>


      <div class="methods">
        <div class="method">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-flower3" viewBox="0 0 16 16">
              <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268zM9 4a1.468 1.468 0 0 1-.045.205c-.039.132-.1.295-.183.484a12.88 12.88 0 0 1-.637 1.223L8 6.142a21.73 21.73 0 0 1-.135-.23 12.88 12.88 0 0 1-.637-1.223 4.216 4.216 0 0 1-.183-.484A1.473 1.473 0 0 1 7 4a1 1 0 1 1 2 0zM3.67 5.5a1 1 0 0 1 1.366-.366 1.472 1.472 0 0 1 .156.142c.094.1.204.233.326.4.245.333.502.747.742 1.163l.13.232a21.86 21.86 0 0 1-.265.002 12.88 12.88 0 0 1-1.379-.06 4.214 4.214 0 0 1-.51-.083 1.47 1.47 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5zm1.366 5.366a1 1 0 0 1-1-1.732c.001 0 .016-.008.047-.02.037-.013.087-.028.153-.044.134-.032.305-.06.51-.083a12.88 12.88 0 0 1 1.379-.06c.09 0 .178 0 .266.002a21.82 21.82 0 0 1-.131.232c-.24.416-.497.83-.742 1.163a4.1 4.1 0 0 1-.327.4 1.483 1.483 0 0 1-.155.142zM9 12a1 1 0 0 1-2 0 1.476 1.476 0 0 1 .045-.206c.039-.131.1-.294.183-.483.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223.083.19.144.352.183.484A1.338 1.338 0 0 1 9 12zm3.33-6.5a1 1 0 0 1-.366 1.366 1.478 1.478 0 0 1-.2.064c-.134.032-.305.06-.51.083-.412.045-.898.061-1.379.06-.09 0-.178 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4.1 4.1 0 0 1 .327-.4c.046-.05.085-.086.114-.11.026-.022.04-.03.041-.032a1 1 0 0 1 1.366.366zm-1.366 5.366a1.494 1.494 0 0 1-.155-.141 4.225 4.225 0 0 1-.327-.4A12.88 12.88 0 0 1 9.74 9.16a22 22 0 0 1-.13-.232l.265-.002c.48-.001.967.015 1.379.06.205.023.376.051.51.083.066.016.116.031.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
          </div>

          <div class="content">
            <h3>#1 Metodo del cartoncino</h3>
            <p>E' il metodo più semplice per iniziare a praticare la tecnica delle parole evocatrici.</p>
            <button v-on:click="open_m1_dialog()">pratica con questo metodo <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
          </svg></button>
          </div>
        </div>

        <div class="method">
          <div class="icon">
           <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fff" class="bi bi-flower1" viewBox="0 0 16 16">
              <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1zM2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2zm7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0zm-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
           </svg>
          </div>

          <div class="content">
            <h3>#2 Metodo dell'attenzione cosciente</h3>
            <p>Questo metodo, dove prestiamo coscientemente attenzione alla parola, reppresenta un metodo ancora più efficace.</p>
            <button v-on:click="open_m2_dialog()">pratica con questo metodo <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
          </svg></button>
          </div>
        </div>
      </div>

      <details> 
        <summary>Sul condividere la pratica 🥳🎉🎉</summary>       
        <p>Se anche tu pensi che questa tecnica sia utile e che porti benefici concreti potresti condividerla con i tuoi conoscenti, amici e familiari. Magari 
          dedicandoli una parola in particolare; io stesso lo sto facendo, qui a casa e con i miei amici, e noto con piacere che le parole sono sempre ben accette!</p>
          <h4>Come condividere?</h4>
          <p>Puoi farlo semplicemente condividendo il link di questa parola evocatrice, oppure puoi sceglierne una in particolare da dedicare e condividerla.</p>
        </details>

      <details> 
        <summary>Ogni quanto devo praticare? 🕒</summary>    
        <p>Non c'è una risposta univoca uguale per tutti. Il tempo dedicato alla pratica varia a seconda dello scopo che ti sei prefissato 
          e vari altri fattori.</p>

          <p>Puo essere utile, all'inizio, definire un orario preciso ed un numero di volte definito in cui praticare (bastano pochi minuti al giorno), così inizierai 
            ad entrare nella pratica <i>velocemente</i>.
          </p>

         <p>Come <b>ritmo</b> puoi adottare quello di utilizzare una parola per un intervallo di tempo più o meno lungo (ad es. 1 giorno, settimana mese, o più) 
        seguito da una ripetizione dopo una pausa, oppure puoi utilizzare una parola al giorno a rotazione.</p>
        <p><b>La pratica ci farà capire qual'è il ritmo e la modalità più efficiente</b> che certamente variano anche a seconda del nostro tipo psicologico 
        (per un approfondimento dei tipi psicologici vedi a pagina p.183, capitolo "Psicologia Differenziale" del libro <a href="https://amzn.to/3nmT7JA">L'atto di Volontà</a> di Roberto Assagioli).</p>
   
       
        </details>
             
    </div>

        
<footer>Puoi sostenere questo progetto e futuri sviluppi con una 
      <a href="https://www.patreon.com/castenettoa">donazione ❤️</a>.<br> Se vuoi inviarmi un feedback fallo 
      via <a href="mailto:castenetto.andrea@gmail.com">email</a>. 
      <br> <a href="#top">Torna su ⬆</a> • <a href="https://castenettoa.com" title="creato da Andrea Castenetto">castenettoa.com</a>
      <br><br><small>Un grande grazie va tutto il 'movimento psicosintetico', a psicosintesi.it, a Roberto Assagioli,
         e al suo libro <a href="https://amzn.to/3nmT7JA">L'Atto di volontà</a>.</small>
      </footer>
  </div>
</template>

<script>
// 'Ammirazione Apprezzamento Attenzione Bellezza Beatitudine Calma Compassione Comprensione Collaborazione Coraggio Creatività Audacia Decisione Distacco Determinazione Discernimento Disciplina Energia Decisione Distacco Determinazione Discernimento Disciplina Energia Entusiasmo Eternità Fede Libertà Amicizia Generosità Bontà Volontà buona Gratitudine Armonia Umorismo Inclusività Infinito Iniziativa Integrazione Gioia Liberazione Luce Amore Ordine Pazienza Pace Costanza Positività Forza Prontezza Quiete Realtà Rinnovamento Risolutezza Serenità Servizio Silenzio Semplicità Sintesi Tenacia Verità Comprensione Universalità Vitalità Interezza Volontà Saggezza Stupore'

export default {
  name: 'Word',
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


      currentWord: this.$route.params.word, // todo: check for vulnerability
      currentColor: '#71f285', 
      isStarred: this.$route.params.starred,
      userAddedWord: false
    }
  },
  created: function() {
    document.title = 'Parole Evocatrici - ' + this.currentWord;
    window.scrollTo(0,0); // needed because the windwos was not to top... try to belive it

    if(this.$route.params.color)
      this.currentColor = this.$route.params.color;

    // check if the word is added by user
    let userWords = localStorage.getItem('userWords') ? localStorage.getItem('userWords').split(',') : null;
    if(userWords && userWords.includes(this.currentWord)) {
      this.userAddedWord = true;
    }
  },
  methods: {
    openDonationInfoBox: function() {
      this.$swal({
        title: "🌟 Supporta questo progetto 🌟", 
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
        title: "🌟 La Psicosintesi 🌟", 
        html:  "Questo metodo, sviluppando le qualità e funzioni deficienti e gli aspetti superiori della psiche contribuisce alla formazione armonica ed integrale della personalità, la propria psicosintesi. <br><br> La Psicosintesi è un metodo sviluppato da Roberto Assagioli che, citandolo testualmente, 'può e deve essere applicato da ognuno a se stesso, promuovendo ed accelerando lo sviluppo interno ed il dominio di se, che dovrebbero costituire la meta di tutti'. <br><br>Naturalmente un grande aiuto può essere dato dalla <i>psicosintesi didattica</i>; perciò ti lascio qui in basso un link per andare sul sito web ufficiale dell'Istituto di Psicosintesi.",
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
    deleteWord() {
      // rimuovo la parola dal localstorage (2) la rimuovo dai preferiti
      let userWords = localStorage.getItem('userWords') ? localStorage.getItem('userWords').split(',') : null;
      userWords.splice(userWords.indexOf(this.currentWord), 1);
      localStorage.setItem('userWords', userWords);


      // rimuovo dai preferiti
      let favWord = localStorage.getItem('favoriteWords') ? localStorage.getItem('favoriteWords').split(',') : null;
      favWord.splice(favWord.indexOf(this.currentWord), 1);
      localStorage.setItem('favoriteWords', favWord);

      // mostro alert
      this.$alert('La parola ' + this.currentWord + ' è stata eliminata correttamente', 'Parola Eliminata.','success').then(() => {
        this.goToHome(); // reindirizzo l'utente alla home page dopo l'infobox
      });
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

          <p><b>Istruzioni</b> &mdash; Ora ritaglia un foglietto di carta e scrivici sopra di esso la parola che hai scelto. 
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
           <p style="font-size: 15px;">Concentrarti e prestare attenzione coscientemente alla parola reppresenta un metodo ancora più efficace. Ora puoi rilassarti e seguire questi step:</p>
          
           <p>Assumi una posizione di rilasciamento ed osserva la parola con attenzione per un periodo di 1 o 2 minuti.</p>
           <p>Se dall'inconscio emergono idee ed immagini collegate alla parola, lasciala affiorare e prendine nota.</p>
           </div>`,
          confirmButtonText: 'Sprossimo Step &rarr;', showCloseButton: true, progressSteps: ['1','2','3','4','5'], currentProgressStep: 0,
        },
        {
          title: 'Il metodo dell\'attenzione cosciente',
          html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord +  `</p>
          
           
           <p>Rifletti sul significato della parola, e annota i risultati.</p>
           </div>`,
          confirmButtonText: 'Sprossimo Step &rarr;', showCloseButton: true, progressSteps: ['1','2','3','4','5'], currentProgressStep: 1,
        },
        {
          title: 'Il metodo dell\'attenzione cosciente',
          html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord +  `</p>
             <p style="font-size: 15px;">Concentrarti e prestare attenzione coscientemente alla parola reppresenta un metodo ancora più efficace. Ora puoi rilassarti e seguire questi step:</p>
           <p><b>Step 3</b></p><hr>
           <p>Cerca di "sentire" la qualità psicologica contenuta nella parola, lasciatene permeare, se possibile fino ad arrivare ad identificarti con essa.</p>
           </div>`,
          confirmButtonText: 'Sprossimo Step &rarr;', showCloseButton: true, progressSteps: ['1','2','3','4','5'], currentProgressStep: 2,
        },
        {
          title: 'Il metodo dell\'attenzione cosciente',
          html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord +  `</p>
             <p style="font-size: 15px;">Concentrarti e prestare attenzione coscientemente alla parola reppresenta un metodo ancora più efficace. Ora puoi rilassarti e seguire questi step:</p>
           <p><b>Step 4</b></p><hr>
           <p>Mentre osservi la parola, pronunciala ad alta voce, o mormorala.</p>
           </div>`,
          confirmButtonText: 'Sprossimo Step &rarr;', showCloseButton: true, progressSteps: ['1','2','3','4','5'], currentProgressStep: 3,
        },
        {
          title: 'Il metodo dell\'attenzione cosciente',
          html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord +  `</p>
             <p style="font-size: 15px;">Concentrarti e prestare attenzione coscientemente alla parola reppresenta un metodo ancora più efficace. Ora puoi rilassarti e seguire questi step:</p>
           <p><b>Step 5</b></p><hr>
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
              <small>Ora che hai concluso la pratica puoi provare il <b>secondo metodo</b> oppure leggere più in basso dei consigli pratici 
              sul ritmo con cui eseguire questa pratica.</small>
              </div>
            `,
            confirmButtonText: 'Torna al sito'
          })
        }
      })
    },
    goToHome: function(w) { 
      if(this.$route.name != 'Home')
        this.$router.push({ name: "Home" });
    },
  }
}
</script>

<style lang="scss">

.fade-enter-active {
  transition: opacity .3s;
}

.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

  .quotes {
    width: 48%;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
  }

  .methods {
    .method {
      display: flex;
      margin-bottom: 1em;

      background: #2196F3; color: #fff;
      border-radius: 6px;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

      .icon {
        width: 110px;
        display: flex; justify-content: center; align-items: center;
        background: #1976D2;
        border-radius: 6px 0 0 6px;
      }

      .content {
        flex: 1;
        padding: 1.2em;

        h3 { color: #fff; margin: 0; }
        p { margin: .4em 0; }
        button {
          padding: 6px 12px; margin-top: 1em;
          display: flex; align-items: center;
          font-family: Arial; font-size: 0.9em; letter-spacing: normal;
          color: #fff; font-weight: bold; text-transform: uppercase;
          background-color: #3F51B5;
          border-radius: 6px;
          transition: .3s all;
          cursor: pointer;
        }
      }
    }
  }

  .open-method {
    background-color: #eee; border: 1px solid #ddd;
    padding: .5em 1em; margin-bottom: 1em;
    border-radius: 6px;
  }


</style>