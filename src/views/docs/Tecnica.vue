<template>
  <div class="home-view docs">
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

      <p class="summary t-center">Breve introduzione alla tecnica della parole evocatrici di <b>Roberto Assagioli</b>.</p>
      </section>
    </nav>

    <main class="pratica">
      <h1>La tecnica delle parole evocatrici</h1>
      
      <p>L'influenza di certe parole, come <i class="highlight">semplicità, intuizione, entusiasmo, creatività</i> sul nostro stato d'animo e le nostre idee è stato ampiamente 
      dimostrato e verificato. Tutte le parole sono simboli che oltre a rappresentare un oggetto o fatto psicologico posseggono anche la capacità di attivare e stimolare
      il significato ad esse associato. 
      Esse tendono manifestare e rendere operativi i significati che rappresentano; tendono a produrre le azioni e gli atti corrispondenti.</p>

      <p>In accordo con le <a href="/leggi-psicologiche">Leggi Psicologiche</a> enunciate da Roberto A., (Leggi I-III, VI e VIII), ogni idea tende a produrre le azioni esterne corrispondenti,
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
      <p>La tecnica delle parole evocatrici è descritta nel libro di Roberto Assagioli chiamato <a href="https://amzn.to/3nmT7JA">L'atto di Volontà</a> (p. 62). Se non lo conosci 
      ti consiglio vivamente di acquistarlo, personalmente vi ho trovato molti spunti, grandi lezioni di saggezza nonchè l'ispirazione per questa applicazione.</p>
      <p>Se ti senti pronto puoi <a href="/">tornare alla homepage</a> ed iniziare a praticare.</p>

      <h3>Confezioni parole evocatrici 💖</h3>
      <p>Puoi acquistare un edizione fisica delle parole evocatrici nel sito ufficiale di <a href="http://www.psicosintesi.it/pubblicazioni/opuscoli">psicosintesi.it</a></p>
    
     
    </main>

    <footer>Puoi sostenere questo progetto e futuri sviluppi con una <a href="https://www.patreon.com/castenettoa">donazione ❤️</a>.<br> Se vuoi inviarmi un feedback fallo via <a href="mailto:castenetto.andrea@gmail.com">email</a>. <br> <a href="#top">Torna su ⬆</a> • <a href="https://castenettoa.com" title="creato da Andrea Castenetto">castenettoa.com</a></footer>
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
        openDonationInfoBox: function() {
      this.$alert(
        "Questo progetto è gratuito, ma se vuoi puoi contribuire ai suoi costi di sviluppo e di mantenimento, nonchè ai progetti che svilupperò in futuro.",
       "🌟 Supporta questo progetto 🌟", 
       "info", 
         { confirmButtonText: '<a href="https://www.patreon.com/castenettoa" style="color: #fff">Supportami su Patreon 🚀</a>' }
      );
    },
    openIstitutoInfoBox: function() {
      this.$alert(
        "Questo metodo, sviluppando le qualità e funzioni deficienti e gli aspetti superiori della psiche contribuisce alla formazione armonica ed integrale della personalità, la propria psicosintesi. La Psicosintesi è un metodo sviluppato da Roberto Assagioli che, citandolo testualmente, 'può e deve essere applicato da ognuno a se stesso, promuovendo ed accelerando lo sviluppo interno ed il dominio di se, che dovrebbero costituire la meta di tutti'. Naturalmente un grande aiuto può essere dato dalla <<psicosintesi didattica>>; perciò ti lascio qui in basso un link per andare sul sito web ufficiale dell'Istituto di Psicosintesi.",
       "🌟 La Psicosintesi 🌟", 
       "info", 
         { confirmButtonText: '<a href="http://www.psicosintesi.it/" style="color: #fff">Vai su psicosintesi.it 🚀</a>' }
      );
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