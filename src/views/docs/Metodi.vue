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
      <h1>Metodi, Modalità e Campi di applicazione della tecnica delle parole evocatrici</h1>
      <p>Questa tecnica può essere utilizzata in vari modi e modificata creativamente per adeguarla alle tue esigenze particolari. 
        Qui sotto trovi i metodi principali estratti dal libro <a href="https://amzn.to/3nmT7JA">L'atto di Volontà</a> di Roberto Assagioli, pagina 62-3.
      </p>

      <h2>Il cartoncino</h2>
      <p>Il più semplice è quello di posizionare un cartoncino nel quale è stampata la parola o qualità che vogliamo "risvegliare", e poi posizionarlo
        in un luogo facilmente visibile e accessibile (la nostra scrivania, una parete, un tavolo, ecc). <br>Per aumentare l'effetto è possibile aumentare
        il numero dei cartoncini. L'immagine visiva si imprime, anche senza che vi prestiamo attenzione nella nostra psiche (inconsio plastico), e opera in essa.
      </p>
      <p>Come variazione, invece di una parola, possiamo scrivere slogan o frasi suggestive che esprimono simbolicamente un messaggio.</p>
      <p> <a href="https://amzn.to/3nmT7JA">Nel libro</a> di Roberto A. vengono suggerite alcune frasi prese 
      dalle iscrizioni sugli stemmi di varie famiglie nobili: Ad sidera vultus (Rivolto alle stelle), Pensa al fine, Bien faire et laisser dire (Agire bene e lasciar dire), Semprer vigilans (Sempre vigile), In tutto armonia.</p>

      <h2>L'attenzione cosciente</h2>
      <p>E' il metodo più efficace consiste nel prestare coscientemente attenzione alla parola scelta, convogliando quindi le proprie energie psicologiche sulla qualità da sviluppare.</p>
      <p>Ciò può essere fatto in vari modi (segliendone uno o più di uno), dopo esserti messo in uno stato di rilassamento mentale e muscolare:</p>
      <ol>
        <li><i>Osservare</i> per qualche minuto la parola (se affiorano dall'inconsio idee o immagini collegate con la parola, lasciarle emergere e poi segnarle).</li>
        <li><i>Meditare, riflettere</i> sul significato della parola, e poi segnare i risultati di tale meditazione</li>
        <li>Cercare di <i>sentire</i> la qualità psicologica contenutaa nella parola, lasciatene permeare, se possibile fino ad arrivare ad identificarti con essa.</li>
        <li>Mentre si osserva la parola, pronunciarla ad alta voce, o mormorala.</li>
        <li>Scrivere la parola diverse volte.</li>
      </ol>   

      <p>Possiamo associare a questi metodi immagini visive, uditive e motorie, aumentando così l'efficacia dell'esercizio.<br>
      Ad esempio ascoltando temi, brani musicali collegati con parole e frasi relative oppure movimenti ritrmici, gesti e danze che ricordano il simbolo associato alla parola.
      </p>

      <h2>Ritmo e scelta</h2>
      <p>Possiamo scegliere deliberatamente la parola da utilizzare a seconda della qualità che vogliamo risvegliare
         o sviluppare oppure scegliere la parola casualmente da un gruppo di parole adatte e adottandola come "parola d'ordine" per quel dato giorno.</p>
      <p>Come ritmo possiamo adottare quello di utilizzare una parola per un intervallo di tempo più o meno lungo (1 giorno, settimana mese, o più) 
        seguito da una ripetizione dopo una pausa, oppure possiamo utilizzare una parola al giorno a rotazione.</p>
        <p>La pratica ci farà capire qual'è il ritmo e le modalità più efficienti che certamente variano a seconda dello scopo che ci siamo prefissati
           e dal nostro tipo psicologico. (per un approfondimento dei tipi psicologici vedi a pagina p.183, capitolo "Psicologia Differenziale" del libro <a href="https://amzn.to/3nmT7JA">L'atto di Volontà</a> di Roberto Assagioli)</p>

      <h2>Le parole evocatrici al lavoro e in famiglia</h2>
      <p>Possiamo certamente utilizzare questa tecnica anche nel nostro ambiente di lavoro ed in famiglia. Coinvolgendo le altre persone in esercizi di gruppo 
        oppure utilizzando l'esercizio del cartoncino, o tramite l'affisione di slogan nei corridoi.</p>
        <p> Un esempio pratico può essere quello di esporre la parola <i>Creatività</i> in una sala 
        riunioni, oppure, perchè no, la parola <i>Calma</i> in ambienti dove spesso la tensione fra i partecipanti si fa sentire. Un altra idea è 
        posizionare grande cartoncino con scritto <i>Serenità</i> nelle aree dedicate al relax, oppure arredare la stanza con quadri che evocano l'idea corrispondente.
      </p>

      <h2>Le parole evocatrici nella società umana</h2>
      <p>Gli esperti della persuasione ci bombardano ogni giorno con publicità (cartelli di grandi dimensioni, frasi suggestive, 
        slogan, immagini affascinanti, ripetizione martellante, brani musicali), spesso per creare in noi il desiderio di acquistare un prodotto 
        non necessario.</p>
      <p>Queste stesse tecniche, che vengono utilizzate così bene per scopi commerciali o politici, potrebbero e dovrebbero venire impiegate per scopi 
        superiori e benefici nei vari livelli della nostra società umana.</p>
      <p>Come dice Assagioli, non sarebbe affatto difficile organizzare una proficua <i>pubblicità psico-spirituale</i> per il miglioramento e l'elevazione 
      individuale e collettiva dell'umanità.</p>
      <p>Personalmente, poco per volta, sto iniziando a regalare dei cartoncini ai miei amici o familiari, spiegando anche la tecnica, e sembrano essere 
        sempre ben accetti.</p>

      <p>E tu? Hai mai condiviso un cartoncino a un tuo conoscente? Se vuoi, puoi condividere questa applicazione e farla conoscere ai tuoi amici.</p>

      <h2>Altri campi di applicazione</h2>
      <h3>Utilizzo individuale</h3>
      <p>Uso individuale per sviluppare le proprie facoltà deficienti e gli aspetti superiori della psiche; in termini psicosintetici per 
        ottenere una formazione armonia e integrale della personalità, fare la <i>propria psicosintesi</i>
      </p>
      <p>La tecnica può essere utilizzata per prepararsi ad un compito particolare o ad una riflessione. Per esempio prima di una meditazione è possibile provare a lavorare 
        sulla parola <i>concentrazione</i> o <i>attenzione</i>, ecc.
      </p>

      <h3>Utilizzo collettivo e psicoterapico</h3>
      <p>I vari campi di applicazione sono molto vasti, qui elenco qualche spunto iniziale:</p>
      <ol>
        <li>In famiglia o nelle scuole (ed anche dai professoli: es: Pazienza, Comprensione)</li>
        <li>Nelle varie attività quotidiane: per prepararci psicologicamente a situazioni che causano stress o paure come competizioni, esami, concerti, eventi sportivi, ecc.</li>
        <li>Nel campo medico. I cartoncini possono essere utilizzati da persona malate che stanno molto tempo a letto (Pazienza, Confidenza, Pace), o per prepararsi a operazioni chilurghie o anche nella preparazione al parto.</li>
        <li>Nelle relazioni interpersonali e sociali (amici, in famiglia, al lavoro, a scuola, alle riunioni di condominio, nelle assemble, ecc)</li>
      </ol>

      <h3>Confezioni parole evocatrici 💖</h3>
      <p>Puoi acquistare un edizione fisica delle parole evocatrici nel sito ufficiale di <a href="http://www.psicosintesi.it/pubblicazioni/opuscoli">psicosintesi.it</a></p>
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
  name: 'Metodi',
  data: function() {
    return {
    }
  },
  created: function() {
    document.title = 'Parole Evocatrici - Introduzione ai metodi pratici';
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
  }
}
</script>

<style lang="scss">
 
</style>