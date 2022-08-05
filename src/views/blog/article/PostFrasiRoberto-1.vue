<template>
  <div class="home-view docs">
    <nav>
      <section>
        <HeaderLogo></HeaderLogo>

      <!-- <p class="summary t-center">"Per crescere interiormente non importa tanto fare cose più spirituali, quanto farle più spiritualmente; non si richiede di cambiare occupazioni, ma di cambiare anima." &mdash; Roberto Assagioli</p> -->
      </section>
    </nav>

    <main class="pratica">
      <h1>Frasi selezionate di Roberto Assagioli</h1>
      <small>Scritto da <a href="https://www.castenettoa.com">Andrea Castenetto</a> il 04/08/2022</small>
      <!-- <small>Nel blog troveragli gli ultimi aggiornamenti di questa applicazione, nonchè consigli e tecniche differenti per utilizzare le <b>parole evocatrici</b> ed altri metodi. Vuoi proporre un tuo articolo? Invia una email a <a href="mailto:castenetto.andrea@gmail.com">castenetto.andrea@gmail.com</a></small> -->
      
      <!-- <h3>Ultimi Articoli</h3> -->

      <!-- olny the first h3 is margin-top: 0 -->
      <p>Per rinfrescarci in questo caldo (39°!!) giovedi di Agosto, dopo un bel caffè e qualche bel bicchiere di acqua fresca 
        conviene immergersi nella lettura di queste <b>frasi (citazioni) di Roberto Assagioli</b>, fondatore della Psicosintesi.
        E se poi hai ancora qualche energia, perchè non <a href="/">esercitarti con le parole evocatrici? 😉</a>
      </p>

      <h3>Frasi di Roberto Assagioli</h3>

      <div class="quotesBox">
        <blockquote class="quotesItem font-xl" v-for="(q, key) in RAquotes" :id="'quote-'+(key+1)">
          <div class="quotesItem_buttons">
              <div class="share" title="condividi questa citazione" v-on:click="shareQuote(key)">
                <svg style="width:14px;height:14px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z" />
                </svg>
              </div>
          </div>

          <p><span class="quo ldquo">&ldquo;</span>{{q}}<span class="quo rdquo">&rdquo;</span></p>
        </blockquote>
      </div>

    </main>

        
<FooterMain></FooterMain>
  </div>
</template>

<script>

export default {
  name: 'BlogPWA1',
  data: function() {
    return {
      RAquotes: [
        "Ogni giorno, si potrebbe dire ogni ora, la vita ci offre delle opportunità, ci pone davanti a scelte, sta a noi riconoscerle e utilizzarle.",
        "Quello che più conta è l’atteggiamento interno. In un certo senso le vacanze sono “uno stato d’animo”.",
        "L’uomo umile è eroico perché malgrado la sua fragilità, procede nel cammino e tenta la scalata.",
        "Con la virtuosa energia dell’umiltà (l'uomo) realizza se stesso: non bada al giudizio altrui e alla sua reputazione, non ha bisogno di compiere sforzi per difenderle e può così liberare energie psichiche per i suoi progetti.",
        "La crisi è l’inizio del cambiamento, è la prima attivazione di una nuova aspirazione, la prova tangibile della possibilità di spostarsi da un punto stabile",
        "Siamo dominati da tutto ciò con cui ci identifichiamo, possiamo dominare tutto ciò da cui ci siamo disidentificati.",
        "Tre cose soprattutto l'uomo moderno deve apprendere per divenire sano e completo: l'arte del riposo, l'arte della contemplazione, l'arte del riso e del sorriso.",
        "La meditazione è un uso positivo e creativo della mente che collega attivamente il mondo interno e il mondo esterno.",
        "Di ogni nostro pensiero, sforzo, atto buono viene tenuto conto dalla Grande Legge che regge gli atomi, gli uomini ed i mondi.",
        "Liberarsi per liberare",
        "Il grande mezzo per progredire spiritualmente è lo sforzo attivo e continuo di bene, voluto, amato ed offerto.",
      ]
    }
  },
  created: function() {
    document.title = 'Frasi selezionate di Roberto Assagioli';
    document.getElementsByTagName('meta')["description"].content = 'Per rinfrescarci in questo caldo (39°!!) giovedi di Agosto, dopo un bel caffè e qualche bel bicchiere di acqua fresca conviene immergersi nella lettura di queste frasi (citazioni) di Roberto Assagioli';
    // window.scrollTo(0,0); //// needed because the windwos was not to top... try to belive it
  },
  methods: {
   shareQuote: function(quoteskey) {
        this.$gtag.event('share_quote', { method: 'Google' }); // send event to gAnalitics

        let link = window.location.href + '#quote-' + (quoteskey+1);
        let title = 'Ciao 😊, ho letto questa citazione e ho pensato che ti potrebbe interessare.';
        let content = '...';

          if (navigator.share) { // web share api works!
            navigator.share({
              title: title,
              text: content,
              url: link,
            })
              .then(() => console.log('Successful share'))
              .catch((error) => console.log('Error sharing', error));
          } else {
            // no Web Share APi support, fallback with vue3-clipboard..!
            window.prompt("Copia negli appunti con Ctrl+C, Enter e poi condividi il salmo dove preferisci.", title + " " + link );
          }
    },
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