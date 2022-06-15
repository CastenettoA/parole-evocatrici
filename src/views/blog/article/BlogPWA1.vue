<template>
  <div class="home-view docs">
    <nav>
      <section>
        <div class="logo">
          <div class="logo-wrapper" @click="goToHome()">
          <div class="img">
              <svg xmlns="http://www.w3.org/2000/svg"  fill="#fdd835" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <div class="title">Parole Evocatrici</div>
          </div>

          <div class="header-menu">

                <div class="donation" v-on:click="openDonationInfoBox()">
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="#fff" class="bi bi-gift-fill" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"/>
                  </svg>
                </div>



                <div class="donation question" v-on:click="goToinfoPage()">
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-question" viewBox="0 0 16 16">
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                  </svg>
                </div>
          </div>
        </div>

      <!-- <p class="summary t-center">"Per crescere interiormente non importa tanto fare cose più spirituali, quanto farle più spiritualmente; non si richiede di cambiare occupazioni, ma di cambiare anima." &mdash; Roberto Assagioli</p> -->
      </section>
    </nav>

    <main class="pratica">
      <h1>Siamo una Progressive Web Application (PWA) 🚀</h1>
      <small>Scritto da <a href="https://www.castenettoa.com">Andrea Castenetto</a> il 14/06/2022</small>
      <!-- <small>Nel blog troveragli gli ultimi aggiornamenti di questa applicazione, nonchè consigli e tecniche differenti per utilizzare le <b>parole evocatrici</b> ed altri metodi. Vuoi proporre un tuo articolo? Invia una email a <a href="mailto:castenetto.andrea@gmail.com">castenetto.andrea@gmail.com</a></small> -->
      
      <!-- <h3>Ultimi Articoli</h3> -->

      <!-- olny the first h3 is margin-top: 0 -->
      <p>Ebbene si, parole-evocatrici.com ora è una <a href="https://it.wikipedia.org/wiki/Progressive_Web_App">Progressive Web Application</a> <i>(PWA)</i>.</p>
      <p>Cosa significa? Beh, che ora tutte le funzionalità di questa applicazione web possono essere utilizzate anche <b>offline</b>, cioè senza un connessione internet.</p>
       <p>Ma anche che questa applicazione ora <b>può essere installata sul tuo dispositivo</b> preferito, sia esso uno smartphone, un tablet o un pc, ed essere utilizzata come se fosse 
        un applicazione.</p>

        <h3>Per chi vuole saperne di più 😉</h3>
        <p>Ma da dove nasce il concetto di PWA (Progressive Web Application) e quali sono le caratteristiche di applicazione web che si basa su questi principi?</p>
        <p><b>PWA</b> è un termine coniato in origine dagli sviluppatori Frances Berriman e Alex Russell (Google Chrome Team) per descrivere 
            dei siti internet che si comportano (e quindi sembrano) come applicazioni native e che utilizzano parte delle più recenti tecnologie web.
        </p>

        <p>Questo è un elenco delle caratteristiche tipiche (ma non obbligatorie) di una applicazione web che vuole essere una PWA:</p>
        <ul>
            <li>Progressiva. Pensate cioè per funzionare su qualunque tipo di browser e di utente utilizzando il principio del <i>miglioramento progressivo</i></li>
            <li>Responsiva. Si adattano a ogni tipo di schermo e dispositivo (pc, tablet, tv) </li>
            <li>Funzionano anche offline</li>
            <li>App-like. Simili ad applicazioni native.</li>
            <li>Sicure. Servite su connessione HTTPS.</li>
            <li>Installabili. (sul proprio dispositivo come un applicazione nativa)</li>
            <li>"Linkabili". Facilmente raggiungibili e condivisibili tramite URL</li>
        </ul>
    </main>

        
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

export default {
  name: 'BlogPWA1',
  data: function() {
    return {
    }
  },
  created: function() {
    document.title = 'Siamo una Progressive Web Application (PWA) 🚀';
    document.getElementsByTagName('meta')["description"].content = 'Ebbene si, parole-evocatrici.com ora è una Progressive Web Applicatio (PWA) che funziona anche offline e può essere installata sul dispositivo.';
    // window.scrollTo(0,0); //// needed because the windwos was not to top... try to belive it
  },
  methods: {
    goToHome: function(w) { 
      if(this.$route.name != 'Home')
        this.$router.push({ name: "Home" });
    },
    
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
  }
}
</script>

<style lang="scss">
 
</style>