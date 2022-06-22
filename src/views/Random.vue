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
      <div :style="{ backgroundColor: currentColor }" :class="{goFullScreen:goFullScreen, word:true}">
        <div class="fullscreen" v-on:click="fullScreenCard()" title="Apri parola a schermo intero">
          <svg height="14px" version="1.1" viewBox="0 0 14 14" width="14px">
            <path
              d="M2,9 L0,9 L0,14 L5,14 L5,12 L2,12 L2,9 L2,9 Z M0,5 L2,5 L2,2 L5,2 L5,0 L0,0 L0,5 L0,5 Z M12,12 L9,12 L9,14 L14,14 L14,9 L12,9 L12,12 L12,12 Z M9,0 L9,2 L12,2 L12,5 L14,5 L14,0 L9,0 L9,0 Z"
              id="Shape" />

          </svg>
        </div>
        <div class="star" v-on:click="addToFavorites(currentWord); isStarred = !isStarred"
          title="Aggiungi-Rimuovi dai preferiti">
          <svg v-if="!isStarred" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
            class="bi bi-star" viewBox="0 0 18 18">
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffeb3b" class="bi bi-star-fill"
            viewBox="0 0 18 18">
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </div>
        <p class="main-word">{{ currentWord }}</p>
      </div>

      <div class="quotes">
        <p>&ldquo;{{ RAquotes[0] }}&rdquo; &mdash; <small>Roberto Assagioli</small></p>
      </div>
    </main>

        

    <div class="pratica">
      <button class="danger" v-if="userAddedWord" v-on:click="deleteWord()">Elimina questa parola.</button>

      <h2 class="pratica-title">Pratica</h2>
      <p class="pratica-smalltext">Prima di ogni tecnica, dedica qualche istante al rilassamento del corpo e della mente. Permettiti di entrare nella 
        nuova attività senza fretta. 
        <!-- Inoltre mentre ti eserciti tieni a mente <a href="/blog/">i consigli pratici</a> sulle tecniche. -->
      </p>

      <!-- 1° tecnica, il cartoncino -->
      <div class="info-section tecnica-cartoncino" v-on:click="open_cartoncino_dialog">

        <div class="content">
          <h3 class="sub">Tecnica 1</h3>
          <h3 class="title">Il Cartoncino</h3>
          <p>Pratica Ora →</p>
        </div>

        <div class="image">
          <img src="@/assets/img/word/tecnica-cartoncino-1.svg">
        </div>

      </div>

      <!-- 2° tecnica, osservare la parola -->
      <div class="info-section tecnica-osservare" v-on:click="open_osservare_dialog">
        <div class="content">
          <h3 class="sub">Tecnica 2</h3>
          <h3 class="title">La Osservazione Diretta</h3>
          <p>Pratica Ora →</p>
        </div>

        <div class="image">
          <img src="@/assets/img/word/tecnica-osservare.svg">
        </div>

      </div>

      <!-- 3° tecnica, scrivere la parola -->
      <div class="info-section tecnica-scrivere" v-on:click="open_scrivere_dialog">
        <div class="content">
          <h3 class="sub">Tecnica 3</h3>
          <h3 class="title">Lo Scrivere</h3>
          <p>Pratica Ora →</p>
        </div>

        <div class="image">
          <img src="@/assets/img/word/tecnica-scrivere.svg">
        </div>

      </div>

      <!-- 4° tecnica, riflettere sulla parola -->
      <div class="info-section tecnica-riflettere" v-on:click="open_riflettere_dialog">
        <div class="content">
          <h3 class="sub">Tecnica 4</h3>
          <h3 class="title">La Riflessione Attiva</h3>
          <p>Pratica Ora →</p>
        </div>

        <div class="image">
          <img src="@/assets/img/word/tecnica-riflettere.svg">
        </div>

      </div>

      <!-- 5° tecnica, sentire la parola -->
      <div class="info-section tecnica-sentire" v-on:click="open_sentire_dialog">
        <div class="content">
          <h3 class="sub">Tecnica 5</h3>
          <h3 class="title">Il Sentire</h3>
          <p>Pratica Ora →</p>
        </div>

        <div class="image">
          <img src="@/assets/img/word/tecnica-sentire.svg">
        </div>

      </div>

      <!-- 6° tecnica, ripetere mentalmente la parola -->
      <div class="info-section tecnica-ripetizione" v-on:click="open_ripetizione_dialog">
        <div class="content">
          <h3 class="sub">Tecnica 6</h3>
          <h3 class="title">La Ripetizione Mentale</h3>
          <p>Pratica Ora →</p>
        </div>

        <div class="image">
          <img src="@/assets/img/word/tecnica-ripetizione.svg">
        </div>

      </div>

      <!-- 7° tecnica, leggere un libro -->
      <div class="info-section tecnica-leggere" v-on:click="open_leggere_dialog">
        <div class="content">
          <h3 class="sub">Tecnica 7</h3>
          <h3 class="title">La Lettura</h3>
          <p>Pratica Ora →</p>
        </div>

        <div class="image">
          <img src="@/assets/img/word/tecnica-leggere.svg">
        </div>

      </div>
      
      <!-- 8° tecnica, leggere un composta -->
      <div class="info-section tecnica-composta" v-on:click="open_composta_dialog">
        <div class="content">
          <h3 class="sub">Tecnica 8</h3>
          <h3 class="title">La Tecnica Composta</h3>
          <p>Pratica Ora →</p>
        </div>

        <div class="image">
          <img src="@/assets/img/word/tecnica-composta-2.svg">
        </div>

      </div>

      <!-- <div class="methods">
        <div class="method">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-flower3" viewBox="0 0 16 16">
              <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268zM9 4a1.468 1.468 0 0 1-.045.205c-.039.132-.1.295-.183.484a12.88 12.88 0 0 1-.637 1.223L8 6.142a21.73 21.73 0 0 1-.135-.23 12.88 12.88 0 0 1-.637-1.223 4.216 4.216 0 0 1-.183-.484A1.473 1.473 0 0 1 7 4a1 1 0 1 1 2 0zM3.67 5.5a1 1 0 0 1 1.366-.366 1.472 1.472 0 0 1 .156.142c.094.1.204.233.326.4.245.333.502.747.742 1.163l.13.232a21.86 21.86 0 0 1-.265.002 12.88 12.88 0 0 1-1.379-.06 4.214 4.214 0 0 1-.51-.083 1.47 1.47 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5zm1.366 5.366a1 1 0 0 1-1-1.732c.001 0 .016-.008.047-.02.037-.013.087-.028.153-.044.134-.032.305-.06.51-.083a12.88 12.88 0 0 1 1.379-.06c.09 0 .178 0 .266.002a21.82 21.82 0 0 1-.131.232c-.24.416-.497.83-.742 1.163a4.1 4.1 0 0 1-.327.4 1.483 1.483 0 0 1-.155.142zM9 12a1 1 0 0 1-2 0 1.476 1.476 0 0 1 .045-.206c.039-.131.1-.294.183-.483.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223.083.19.144.352.183.484A1.338 1.338 0 0 1 9 12zm3.33-6.5a1 1 0 0 1-.366 1.366 1.478 1.478 0 0 1-.2.064c-.134.032-.305.06-.51.083-.412.045-.898.061-1.379.06-.09 0-.178 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4.1 4.1 0 0 1 .327-.4c.046-.05.085-.086.114-.11.026-.022.04-.03.041-.032a1 1 0 0 1 1.366.366zm-1.366 5.366a1.494 1.494 0 0 1-.155-.141 4.225 4.225 0 0 1-.327-.4A12.88 12.88 0 0 1 9.74 9.16a22 22 0 0 1-.13-.232l.265-.002c.48-.001.967.015 1.379.06.205.023.376.051.51.083.066.016.116.031.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
          </div>

          <div class="content">
            <h3>#1 la tecnica del cartoncino</h3>
            <p>E' La tecnica più semplice per iniziare a praticare la tecnica delle parole evocatrici.</p>
            <button v-on:click="open_m1_dialog()">pratica con questo la tecnica <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
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
            <h3>#2 la tecnica dell'attenzione cosciente</h3>
            <p>Questa tecnica, dove prestiamo coscientemente attenzione alla parola, reppresenta un metodo ancora più efficace.</p>
            <button v-on:click="open_m2_dialog()">pratica con questo metodo <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
          </svg></button>
          </div>
        </div>
      </div> -->

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
      goFullScreen: false, // class bind for fullscreen word
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

      basicWords: ["Concentrazione","Leggerezza", "Perseveranza", "Contemplazione", "Riflessione", "Rispetto", "Sacralità",  "Elevazione", "Vigilanza", "Accettazione", "Consacrazione", "Equilibrio", "Persistenza", "Reverenza", "Solidarietà", "Ammirazione", "Apprezzamento", "Attenzione", "Bellezza", "Beatitudine", "Calma", "Compassione", "Collaborazione", "Coraggio", "Creatività", "Audacia", "Energia", "Decisione", "Distacco", "Determinazione", "Discernimento", "Disciplina", "Entusiasmo", "Eternità", "Fede", "Libertà", "Amicizia", "Generosità", "Bontà", "Volontà buona", "Gratitudine", "Armonia", "Umorismo", "Inclusività", "Infinito", "Iniziativa", "Integrazione", "Gioia", "Liberazione", "Luce", "Amore", "Ordine", "Pazienza", "Pace", "Costanza", "Positività", "Forza", "Prontezza", "Quiete", "Realtà", "Rinnovamento", "Risolutezza", "Serenità", "Servizio", "Silenzio", "Semplicità", "Sintesi", "Tenacia", "Verità", "Comprensione", "Universalità", "Vitalità", "Interezza", "Volontà", "Saggezza", "Stupore"].sort( () => .5 - Math.random() ), // randomized array folks
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

    fullScreenCard: function() {
      // open the current word in full screen mode
      this.goFullScreen = !this.goFullScreen;
    },

    open_cartoncino_dialog: function () {
      let w1 = this.$swal;
      this.$swal({
        title: "La tecnica del cartoncino",
        html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>

          <h3>Istruzioni</h3>
          <p>Ritaglia un foglietto di carta e <b>scrivi sopra di esso la parola</b> che hai scelto. <br><br>
                  Successivamente posiziona il cartoncino in un luogo che frequenti spesso (come la scrivania, un tavolo, una parete, ecc).</p>

          <p>Il solo vedere quella parola una volta ogni tanto, anche inconsciamente, quindi senza la tua attenzione diretta 
          favorirà l'emergere della parola che hai scelto nel tuo ambiente psicologico. <br>
          Comincerai quindi a sentire la parola, o i suoi effetti, grazie al fatto che l'inconscio assorbe la parola. Per 
          questa tecnica quasi non serve sforzarsi, eppure mantiene la sua efficacia.</p>

                  <p>Per ottenere un effetto comulativo, puoi creare più foglietti e distribuirli in luoghi diversi. Niente ti vieta di scrivere su un cartoncino una 
                    frase simbolo della qualità che vuoi evocare oppure scriverla su un cartoncino molto grande che attiri subito la tua attenzione.</p>
           </div>`,
        confirmButtonText: "Concludi l'esercizio &rarr;",
        showCloseButton: true
      }).then(function (r) {
        console.log(r);
        w1.fire({
          showCloseButton: true,
          title: "Congratulazioni! 🎊",
          html: ` <div style="text-align: left;">
              <small>Ora che hai concluso la pratica puoi provare un altra tecnica <b>tecnica</b> oppure leggere più in basso dei consigli pratici 
              sul ritmo con cui integrare questa pratica nella tua vita.</small>
              </div>
            `,
          confirmButtonText: "Torna al sito"
        });
      });
    },
    open_osservare_dialog: function () {
      let w1 = this.$swal;
      this.$swal({
        title: "La tecnica dell'osservazione diretta",
        html: `  
          <div style="text-align: left;">
                        <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>
            <h3>Istruzioni</h3>
            <p>Come le altre tecniche anche questa funziona meglio se viene utilizzata con costanza, cioè se la tecnica 
            viene integrata nella vita di ogni giorno. <br><br>Di per sé la spiegazione è molto semplice, ciò che devi fare è <b>scrivere la parola che vuoi evocare da 
            qualche parte ed osservarla</b> fino a 2-3 minuti.

            <p>Con questo <i>atto di volontà</i> osserviamo la parola per un breve lasso di tempo, e visto che ogni parola è una potenziale forza attiva come un simbolo, ed esprime 
            almeno un significato, stimoleremo l'evocazione di questa parola al nostro interno.</p>
            
            
            <p>Ciò che importa poi è sviluppare l’arte di utilizzarla 
            in vari momenti durante la nostra giornata tipo. La tua fantasia ti potrà aiutare. <br><br>Puoi ad es. lasciare un 
            cartoncino in un luogo dove passi spesso e ogni tanto fermarti per osservare la parola.
             Oppure puoi dedicare 
            un momento specifico della giornata a questo piccolo esercizio.</p>
          </div>`,
        confirmButtonText: "Concludi l'esercizio &rarr;",
        showCloseButton: true
      }).then(function (r) {
        console.log(r);
        w1.fire({
          showCloseButton: true,
          title: "Congratulazioni! 🎊",
          html: ` <div style="text-align: left;">
              <small>Ora che hai concluso la pratica puoi provare un altra tecnica <b>tecnica</b> oppure leggere più in basso dei consigli pratici 
              sul ritmo con cui integrare questa pratica nella tua vita.</small>
              </div>
            `,
          confirmButtonText: "Torna al sito"
        });
      });
    },
    open_scrivere_dialog: function () {
      let w1 = this.$swal;
      this.$swal({
        title: "La tecnica dello scrivere",
        html: `  
          <div style="text-align: left;">
                        <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>
            <h3>Istruzioni</h3>
            <p> Per evocare la parola desiderata scrivila molte volte su di un foglio di carta. <br><br>Puoi ripetere tante volte la stessa parola, puoi scrivere tutti i sinonimi e i termini che colleghi alla qualità che vuoi evocare. Oppure puoi scrivere tutte le varie qualità di cui hai bisogno in un dato momento o anche scrivere delle frasi che ti ricordano la qualità interiore. <br><br>Anche qui, è bene includere questa tecnica nella nostra vita attraverso la nostra creatività ricordandoci l’essenza della tecnica, cioè l’evocazione dello stato interiore desiderato.</p>
          </div>`,
        confirmButtonText: "Concludi l'esercizio &rarr;",
        showCloseButton: true
      }).then(function (r) {
        console.log(r);
        w1.fire({
          showCloseButton: true,
          title: "Congratulazioni! 🎊",
          html: ` <div style="text-align: left;">
              <small>Ora che hai concluso la pratica puoi provare un altra tecnica <b>tecnica</b> oppure leggere più in basso dei consigli pratici 
              sul ritmo con cui integrare questa pratica nella tua vita.</small>
              </div>
            `,
          confirmButtonText: "Torna al sito"
        });
      });
    },
    open_riflettere_dialog: function () {
      let w1 = this.$swal;
      this.$swal({
        title: "La tecnica della riflessione attiva",
        html: `  
          <div style="text-align: left;">
                        <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>
<h3>Istruzioni</h3>
            <p>Utilizza la tua capacità di riflettere ed immaginare per approfondire il senso ed il significato della parola che vuoi evocare internamente.<br><br>
             Prenditi un po 'di tempo, qualche minuto o anche più facendo una camminata e <b>rifletti con il tuo pensiero</b> sulla parola. <br><br>
             Avere chiaro il significato di qualcosa è molto utile e la riflessione contribuirà ad <b>evocare la parola scelta interiormente</b>. <br><br>
             Come le altre tecniche si ottengono buoni risultati quando usiamo questo esercizio con ritmo su più giorni. Cerchiamo quindi di stabilire un semplice piano di allenamento.</p>
          </div>`,
        confirmButtonText: "Concludi l'esercizio &rarr;",
        showCloseButton: true
      }).then(function (r) {
        console.log(r);
        w1.fire({
          showCloseButton: true,
          title: "Congratulazioni! 🎊",
          html: ` <div style="text-align: left;">
              <small>Ora che hai concluso la pratica puoi provare un altra tecnica <b>tecnica</b> oppure leggere più in basso dei consigli pratici 
              sul ritmo con cui integrare questa pratica nella tua vita.</small>
              </div>
            `,
          confirmButtonText: "Torna al sito"
        });
      });
    },
        open_sentire_dialog: function () {
      let w1 = this.$swal;
      this.$swal({
        title: "La tecnica del sentire",
        html: `  
          <div style="text-align: left;">
                        <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>
           <h3>Istruzioni</h3>
            <p> Scrivi la parola su un foglio di carta e mettila davanti ai tuoi occhi. 
            <br><br>Osserva la parola e questa volta cerca di <b>sentire</b> interiormente il suo significato, il suo senso, la sua energia. 
            <br> Aiutati ripetendo la parola mentalmente, evocando delle immagini collegate, o recitando una frase creata da te che ti ricorda la qualità. <br><br>
            Non scoraggiarti se durante i primi tentativi non senti nulla. <br>Attraverso una pratica regolare svilupperai le tue capacità interiori; 
            dopo un po di tempo, qualcosa di nuovo crescerà in te.</div>`,
        confirmButtonText: "Concludi l'esercizio &rarr;",
        showCloseButton: true
      }).then(function (r) {
        console.log(r);
        w1.fire({
          showCloseButton: true,
          title: "Congratulazioni! 🎊",
          html: ` <div style="text-align: left;">
              <small>Ora che hai concluso la pratica puoi provare un altra tecnica <b>tecnica</b> oppure leggere più in basso dei consigli pratici 
              sul ritmo con cui integrare questa pratica nella tua vita.</small>
              </div>
            `,
          confirmButtonText: "Torna al sito"
        });
      });
    },
        open_ripetizione_dialog: function () {
      let w1 = this.$swal;
      this.$swal({
        title: "La tecnica della ripetizione",
        html: `  
          <div style="text-align: left;">
                        <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>
<h3>Istruzioni</h3>
<p> Per evocare interiormente l’energia della parola di cui hai bisogno ripetila mentalmente o a bassa voce per varie volte.<br><br>
             Qualche volta capiterà che non avrai con te un foglio dove scrivere la parola, o tempo sufficiente per rifletterci su.
              Oppure più semplicemente, non avrai voglia di utilizzare una tecnica più complicata.
               Ecco allora un ottima occasione utilizzare un metodo più semplice: <b>ripetere la parola mentalmente</b> per un certo numero di volte (3,9,12 volte, ecc). <br><br>   
Oltre a ripetere mentalmente la parola molte volte puoi creare una frase o un mantra dove la tua parola è inclusa e ripeterlo un numero stabilito di volte.</p>
        <p>Sentiti libero di unire questa tecnica ad una di quelle precedenti, per esempio a quella del sentire.</p>
          </div>`,
        confirmButtonText: "Concludi l'esercizio &rarr;",
        showCloseButton: true
      }).then(function (r) {
        console.log(r);
        w1.fire({
          showCloseButton: true,
          title: "Congratulazioni! 🎊",
          html: ` <div style="text-align: left;">
              <small>Ora che hai concluso la pratica puoi provare un altra tecnica <b>tecnica</b> oppure leggere più in basso dei consigli pratici 
              sul ritmo con cui integrare questa pratica nella tua vita.</small>
              </div>
            `,
          confirmButtonText: "Torna al sito"
        });
      });
    },
        open_leggere_dialog: function () {
      let w1 = this.$swal;
      this.$swal({
        title: "La tecnica della lettura",
        html: `  
          <div style="text-align: left;">
                        <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>
            <h3>Istruzioni</h3>
            <p>Per evocare una qualità interiore, possiamo scriverla su un cartoncino, ripeterla mentalmente più volte oppure possiamo anche <b>leggere un libro o un articolo</b> che parla dell'argomento che vogliamo evocare,
            e così, leggendo con interesse, evocheremo interiormente la qualità desiderata. 
             (questa tecnica se usata creativamente, ed è il nostro scopo… è potenzialmente infinita. )<br><br>
              Quindi ora scegli un libro, un pdf un articolo sulla parola che vuoi evocare e immergiti. 
          </div>`,
        confirmButtonText: "Concludi l'esercizio &rarr;",
        showCloseButton: true
      }).then(function (r) {
        console.log(r);
        w1.fire({
          showCloseButton: true,
          title: "Congratulazioni! 🎊",
          html: ` <div style="text-align: left;">
              <small>Ora che hai concluso la pratica puoi provare un altra tecnica <b>tecnica</b> oppure leggere più in basso dei consigli pratici 
              sul ritmo con cui integrare questa pratica nella tua vita.</small>
              </div>
            `,
          confirmButtonText: "Torna al sito"
        });
      });
    },
    async open_composta_dialog() {
      const steps = ["1", "2", "3"];
      const Queue = this.$swal.mixin({
        progressSteps: steps,
        confirmButtonText: "Next >",
        // optional classes to avoid backdrop blinking between steps
        showClass: { backdrop: "swal2-noanimation" },
        hideClass: { backdrop: "swal2-noanimation" }
      });
      await Queue.fire({
        title: "La tecnica dell'attenzione cosciente",
        html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>

           <p>Questa tecnica è un unione di più tecniche. Avrai un esempio di quello che può significare 
           unire più tecniche fra loro. In futuro, quando ti sentirai pronto, potrai farlo anche tu.</p>
           </div>`,
        confirmButtonText: "Prossimo Step &rarr;",
        progressSteps: ["1", "2", "3", "4", "5" ,"6"],
        currentProgressStep: 0,
        // optional class to show fade-in backdrop animation which was disabled in Queue mixin
        showClass: { backdrop: "swal2-noanimation" },
      });
      await Queue.fire({
        title: "La tecnica dell'attenzione cosciente",
        html: `  
          <div style="text-align: left;">
            <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
          <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>
           <h3>Istruzioni</h3>
           <p>Prestare coscientemente attenzione alla parola reppresenta una tecnica ancora più efficace. Ora puoi rilassarti e seguire questi step:</p>
          
           <p>Assumi una posizione di rilasciamento ed osserva la parola con attenzione per un periodo di 1 o 2 minuti. <small>Se preferisci puoi scrivere la parola su un cartoncino, e osservarlo.</small></p>
           <p>Se dall'inconscio emergono idee ed immagini collegate alla parola, lasciale affiorare e prendine nota.</p>
           </div>`,
        confirmButtonText: "Prossimo Step &rarr;",
        progressSteps: ["1", "2", "3", "4", "5" ,"6"],
        currentProgressStep: 0,
        // optional class to show fade-in backdrop animation which was disabled in Queue mixin
        showClass: { backdrop: "swal2-noanimation" },
      });
      await Queue.fire({
        html: `  
        <div style="text-align: left;">
          <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
        <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>
        
          
          <p>Rifletti sul significato della parola e annota i risultati.</p>
          </div>`,
        confirmButtonText: "Prossimo Step &rarr;",
        progressSteps: ["1", "2", "3", "4", "5" ,"6"],
        currentProgressStep: 1,
        showClass: { backdrop: "swal2-noanimation" },
      });
      await Queue.fire({
        title: "La tecnica dell'attenzione cosciente",
        html: `  
        <div style="text-align: left;">
          <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
        <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>
          
          <p>Cerca di "sentire" la qualità psicologica contenuta nella parola, lasciatene permeare, se possibile fino ad arrivare ad identificarti con essa.</p>
          </div>`,
        confirmButtonText: "Prossimo Step &rarr;",
        progressSteps: ["1", "2", "3", "4", "5" ,"6"],
        currentProgressStep: 2,
        showClass: { backdrop: "swal2-noanimation" },
      });
      await Queue.fire({
        title: "La tecnica dell'attenzione cosciente",
        html: `  
        <div style="text-align: left;">
          <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
        <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>
          
          <p>Mentre osservi la parola, pronunciala ad alta voce, o mormorala.</p>
          </div>`,
        confirmButtonText: "Prossimo Step &rarr;",
        progressSteps: ["1", "2", "3", "4", "5" ,"6"],
        currentProgressStep: 3,
        showClass: { backdrop: "swal2-noanimation" },
      });
      await Queue.fire({
        title: "La tecnica dell'attenzione cosciente",
        html: `  
        <div style="text-align: left;">
          <p style="display: inline; font-size: 14px; text-transform: uppercase; font-weight: bold; opacity: .7; padding-right: 6px;">Parola scelta <span style="font-size: 25px">&rarr;</span></p>
        <p style="background-color: ` + this.currentColor + `;  display: inline-block; padding: 3px 10px; margin: 0; border-radius: 6px; font-weight: bold;">` + this.currentWord + `</p>
          
          <p>Scrivi la parola diverse volte.</p>
          </div>`,
        confirmButtonText: "Concludi Esercizio &rarr;",
        progressSteps: ["1", "2", "3", "4", "5" ,"6"],
        currentProgressStep: 4,
        showClass: { backdrop: "swal2-noanimation" },
      });
      await Queue.fire({
        title: "Congratulazioni! 🎊",
        html: ` <div style="text-align: left;">
              <p>Ora che hai concluso l'esercizio ti consiglio vivamente di <b>organizzare una pratica giornaliera</b> (sono sufficenti anche 2 minuti al giorno) in un momento prestabilito della tua giornata.</p>
              <p>La pratica regolare ti consentirà di conoscere ed approfondire maggiormente questo medoto e sentirai maggiori benefici.</p>
              <p>Per conoscere i meccanismi psicologici su cui si basa questa tecnica puoi leggere <a href="/spiegazione-tecnica-parole-evocatrici">L'introduzione alla tecnica</a> 
              oppure puoi farlo direttamente leggendo il libro del suo ideatore <a href="https://amzn.to/3nmT7JA">Roberto Assagioli</a>.</p>
              </div>
            `,
        confirmButtonText: "Torna al sito &rarr;",
        progressSteps: ["1", "2", "3", "4", "5" ,"6"],
        currentProgressStep: 4,
        showClass: { backdrop: "swal2-noanimation" },
      });
    },
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/info-section.scss';
</style>