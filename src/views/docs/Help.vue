<template>
  <div class="home-view docs">
    <nav>
      <section>
        <HeaderLogo></HeaderLogo>

          <h1>Come utilizzare questa Web App</h1>
        <p class="summary">"La libertà dell'uomo è definitiva ed immediata se così egli vuole; essa non dipende da vittorie esterne ma interne." &mdash; Yogananda Paramahansa</p>
      </section>
    </nav>

    <main class="pratica">
      <p>Qui puoi imparare e praticare la <b>tecnica delle parole evocatrici</b> presentata da Roberto Assagioli nel <a href="https://amzn.to/3nmT7JA">suo libro</a> (pagina 62).</p>
      <h2>Conosci ➡️ Pratica.</h2>
      <p>Per prima cosa, se sei nuovo alla tecnica, ti consiglio di leggere una <a href="/spiegazione-tecnica-parole-evocatrici">breve introduzione alla tecnica</a>; dopo aver digerito la lettura puoi passare alla pratica.</p>
      <p>Come avrai intuito la tecnica e i suoi metodi sono molto semplici e possono essere applicati con altrettanta semplicità. Il metodo più immediato è quello di scrivere su un cartoncino la qualità interiore 
          che vuoi evocare e poi posizionare il cartoncino in un luogo dove attiri la tua attenzione.</p>
      <p>Se vuoi praticare con l'aiuto di questo sito web devi recarti nella <a href="/">homepage</a>, scegliere una parola ed infine scegliere il metodo con cui praticare.</p>
      <p>Se ti "senti fortunato" puoi <a href="/random">scegliere una parola evocatrice casualmente</a> 😁 o anche aggiungere una <a href="/newWord">nuova parola</a>.</p>

      <h4>Perchè ho creato questo sito web?</h4>
      <p>Il sito è nato grazie ad un <i>intuizione</i> ed è stato sviluppato grazie alla mia <i>passione infromatica e creativa</i> nonchè la 
      volontà di <i>suggestionarmi attivamente</i> tramite le parole evocatrici creando questo sito web.</p>

      <p>Inoltre questo sito vuole essere una motivazione in più per chiunque voglia sinceramente praticare questa tecnica; vuole 
        essere uno strumento pratico, un polo di ispirazione, soprattutto per chi inizia, ma anche per chi vuole ravvivare la pratica,
         intensificarla o condividere la tecnica in una maniera più visuale.
      </p>

      <h2>Condividere la pratica</h2>
      <p>Se anche tu pensi che questa tecnica sia utile e che porti benefici concreti potresti condividerla con i tuoi conoscenti, amici e familiari. Magari 
          dedicandoli una parola in particolare; io lo sto facendo, qui a casa e con i miei amici,
           e noto con piacere che le parole sono sempre ben accette!</p>
          <p>Buon lavoro e... buon divertimento!</p>
    </main>

        
<FooterMain></FooterMain>
  </div>
</template>

<script>

export default {
  name: 'Help',
  data: function() {
    return {
    }
  },
  created: function() {
    document.title = 'Come utilizzare questo sito web';
    document.getElementsByTagName('meta')["description"].content = 'La tecnica delle parole evocatrici ha vari metodi e campi di applicazione: Personale, Collettivo, Sanitario, Solastico e Psicologico.';
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