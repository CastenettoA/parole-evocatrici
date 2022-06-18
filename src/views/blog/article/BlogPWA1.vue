<template>
  <div class="home-view docs">
    <nav>
      <section>
        <HeaderLogo></HeaderLogo>

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

        
<FooterMain></FooterMain>
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