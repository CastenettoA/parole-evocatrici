<template>
  <div class="home-view docs">
    <nav>
      <section>
      <div class="logo">
        <div class="logo-wrapper" @click="goToHome()">
          <div class="img">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="salmon" class="bi bi-spellcheck" viewBox="0 0 16 16">
              <path d="M8.217 11.068c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401zm-5.583 1.035c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552.527 0 .864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582zm.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864zm8.897.567c-.577-.4-.9-1.088-.9-1.983v-.65c0-1.42.894-2.338 2.305-2.338 1.352 0 2.119.82 2.139 1.806h-1.187c-.04-.351-.283-.776-.918-.776-.674 0-1.045.517-1.045 1.328v.625c0 .468.121.834.343 1.067l-.737.92z"/>
              <path d="M14.469 9.414a.75.75 0 0 1 .117 1.055l-4 5a.75.75 0 0 1-1.116.061l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.908 1.907 3.476-4.346a.75.75 0 0 1 1.055-.117z"/>
            </svg>
          </div>
          <div class="title">Parole Evocatrici</div>
        </div>
    </div>

      <p class="summary">Breve introduzione alla tecnica della parole evocatrici di <b>Roberto Assagioli</b>.</p>
      </section>
    </nav>

    <main class="pratica">
      <h1>La tecnica delle parole evocatrici</h1>
      
      <p>L'influenza di certe parole, come <i class="highlight">semplicità, intuizione, entusiasmo, creatività</i> sul nostro stato d'animo e le nostre idee è stato ampiamente 
      dimostrato e verificato. Tutte le parole sono simboli che oltre a rappresentare un oggetto o fatto psicologico posseggono anche la capacità di attivare e stimolare
      il significato ad esse associato. 
      Esse tendono manifestare e rendere operativi i significati che rappresentano; tendono a produrre le azioni e gli atti corrispondenti.</p>

      <p>In accordo con le <a href="#">Leggi Psicologiche</a> enunciate da Roberto A., (Leggi I-III, VI e VIII), ogni idea tende a produrre le azioni esterne corrispondenti,
       nonchè evoca i sentimenti ad essa associati; L'attenzione e la ripetizione poi, rafforzano le idee e le immagini corrispondenti; infine, gli effetti 
       dell'idea o dell'immagine (cioè l'attivazione di ciò che essa significa) si realizzano senza che noi c'è ne rendiamo conto.</p>

      <p>Ora che siamo consapevoli di queste leggi e dell'importanza delle <i>parole</i>, possiamo utilizzare la tecnica delle parole evocatrici sotto la 
      direzione della nostra volontà e così influenzarci positivamente nella direzione che riteniamo più opportuna o evocando 
      quelle qualità che in noi sentiamo meno sviluppate.</p>      

      <h3>I metodi</h3>
      <p>Una volta compreso il meccanismo alla base di questa tecnica, è possibile adattarla alla propria situazione di vita come meglio crediamo.
         Il metodo più semplice è quello di scrivere su un cartoncino la parola che descrive la qualità che vogliamo evocare e sviluppare, e poi 
         mettere questo cartoncino in un luogo in cui sarà facilmente visibile (come la scrivania o su una parete).
      </p>

      <p>Per approfondire gli altri metodi ti rimando a questo semplice articolo: <a href="/metodi">I vari metodi per utilizzare le parole evocatrici</a>.</p>
      <p>La tecnica delle parole evocatrici è descritta nel libro di Roberto Assagioli chiamato <a href="https://amzn.to/3nmT7JA">L'atto di Volontà</a> (p. 62)</p>
      <p>Se ti senti pronto puoi <a href="/">tornare alla homepage</a> ed iniziare a praticare.</p>
     
    </main>

    <footer>Puoi sostenere questo progetto con una <a href="https://paypal.me/pools/c/8bFReaiLUk">donazione</a>.<br> Se vuoi inviarmi un feedback fallo via <a href="mailto:castenetto.andrea@gmail.com">email</a>. <br> <a href="#top">Torna su ⬆</a> • <a href="https://castenettoa.com" title="creato da Andrea Castenetto">castenettoa.com</a></footer>
  </div>
</template>

<script>

export default {
  name: 'Tecnica',
  data: function() {
    return {
    }
  },

  created: function() {
  document.title = 'Parole Evocatrici - Introduzione alla Tecnica delle parole evocatrici.';
  document.getElementsByTagName('meta')["description"].content = 'La tecnica delle parole evocatrici di Roberto Assagioli, facilmente accessibile online. Lasciati ispirare e inizia a sviluppare le qualità che senti carenti in te o che vuoi deliberatamente sviluppare.';
  // window.scrollTo(0,0); //// needed because the windwos was not to top... try to belive it
  },

  methods: {
    goToHome: function(w) { 
      if(this.$route.name != 'Home')
        this.$router.push({ name: "Home" });
    },
  }
}
</script>

<style lang="scss">

</style>