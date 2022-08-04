<template>
  <div class="home-view docs">
    <nav>
      <section>
        <HeaderLogo></HeaderLogo>

      <!-- <p class="summary t-center">"Per crescere interiormente non importa tanto fare cose più spirituali, quanto farle più spiritualmente; non si richiede di cambiare occupazioni, ma di cambiare anima." &mdash; Roberto Assagioli</p> -->
      </section>
    </nav>

    <main class="pratica">
      <h1>Il blog</h1>
      <small>Nel blog troverai gli ultimi aggiornamenti di questa applicazione, nonchè consigli e tecniche differenti per utilizzare le <b>parole evocatrici</b> ed altri metodi. Vuoi proporre un tuo articolo? Invia una email a <a href="mailto:castenetto.andrea@gmail.com">castenetto.andrea@gmail.com</a></small>
      
      <h3>Ultimi Articoli</h3>

      <!-- olny the first h3 is margin-top: 0 -->
      <h3 style="margin-top: 0;"><a href="/blog/frasi-roberto-assagioli">Frasi selezionate di Roberto Assagioli</a></h3>     
      <h3 style="margin-top: 0;"><a href="/blog/parole-evocatrici.com-e-una-pwa">Siamo una Progressive Web Application (PWA) 🚀</a></h3>     
    </main>

        
<FooterMain></FooterMain>
  </div>
</template>

<script>

export default {
  name: 'Blog',
  data: function() {
    return {
    }
  },
  created: function() {
    document.title = 'Il blog di parole-evocatrici.com';
    document.getElementsByTagName('meta')["description"].content = 'Qui trovi approfondimenti sulle tematiche fondamentali e la descrizione degli aggiornamenti che avvengono nell\'applicazione';
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