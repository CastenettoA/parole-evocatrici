<template>
  <div class="home-view docs">
    <nav>
      <section>
        <HeaderLogo></HeaderLogo>

        <h1>Introduzione alla tecnica delle parole evocatrici</h1>
        <p class="summary">Una tecnica semplice ed efficace per migliorare le tue qualità interiori.</p>
      </section>
    </nav>

    <main class="pratica">
      <div class="info-section">
        <h3>Che cos'è questa tecnica?</h3>
        <p>Questa è una semplice ma efficiente tecnica psicologica utilizzata per evocare uno stato interiore
          desiderato.
          Essa utilizza il potere dinamico delle parole che come una medicina o uno stimolante agiscono sulla nostra
          psiche e
          sulla nostra fisiologia evocando uno stato desiderato o scacciando uno stato negativo non gradito.</p>
      </div>

      <div class="info-section">
        <h3>Le sue origini</h3>
        <p>La tecnica è descritta nel libro <i>L'Atto di Volontà</i> di Roberto Assagioli, psichiatra del 1900 fondatore della
          Psicosintesi.</p>
        <p>Essa utilizza il potere delle parole per evocare o modificare uno stato d'animo interiore così che possiamo a
          seconda
          della situazione in cui ci troviamo trasformare uno stato negativo oppure evocare un particolare stato
          interiore positivo.
        </p>
      </div>

      <div class="info-section">
        <h3>Il potere delle parole</h3>
        <p>L'influenza di certe parole, come <i class="highlight">semplicità, intuizione, entusiasmo, creatività</i>
          sul nostro stato d'animo e le nostre idee è stato ampiamente dimostrato e verificato.
          Tutte le parole sono simboli che oltre a
          rappresentare un oggetto o fatto psicologico posseggono anche la capacità di attivare e stimolare il
          significato ad esse associato. Esse tendono manifestare e rendere operativi i significati che rappresentano;
          tendono a produrre le azioni e gli atti corrispondenti.</p>
      </div>

      <div class="info-section">              
        <h3>Come utilizzarla</h3>
        <p>Ci sono vari modi per utilizzare questa tecnica.. Su questa applicazione scoprirai e ti eserciterai nei metodi fondamentali.</p>
        <p>Dopo che avrai praticato per un po queste tecniche potrai iniziare a modificarle liberamente adattandole
          alle tue preferenze ed alla tua giornata. Buon divertimento.
        </p>
      </div>

    </main>


    <FooterMain></FooterMain>
  </div>
</template>

<script>

export default {
  name: 'Tecnica',
  data: function () {
    return {
    }
  },

  created: function () {
    document.title = 'Introduzione alla Tecnica delle parole evocatrici.';
    document.getElementsByTagName('meta')["description"].content = 'La tecnica delle parole evocatrici di Roberto Assagioli spiegata in modo semplice.';
    // window.scrollTo(0,0); //// needed because the windwos was not to top... try to belive it
  },

  methods: {
    goToHome: function (w) {
      if (this.$route.name != 'Home')
        this.$router.push({ name: "Home" });
    },
    openDonationInfoBox: function () {
      this.$swal({
        title: "🌟 Supporta questo progetto",
        html: "Questo progetto è gratuito, ma se vuoi puoi contribuire ai suoi costi di sviluppo e di mantenimento, nonchè ai progetti che svilupperò in futuro.",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: true,
        confirmButtonText:
          'Si, effettuo una donazione 🚀',
        cancelButtonText: 'No, grazie.'
      }).then(function (r) {
        if (r.isConfirmed)
          location.href = 'https://paypal.me/pools/c/8bFReaiLUk';
      });
    },

    goToinfoPage: function (w) {
      if (this.$route.name != 'Help')
        this.$router.push({ name: "Help" });
    },
  }
}
</script>

<style lang="scss">
</style>