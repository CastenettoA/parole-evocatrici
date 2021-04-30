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

      <p class="summary t-center">Le 10 leggi psicologiche di <b>Roberto Assagioli</b>.</p>
      </section>
    </nav>

    <main class="pratica">
      <h1>Le leggi psicologiche</h1>
       <p>Così come il mondo fisico esistono delle leggi, anche il nostro funzionamento psichico è governato da altrettante <i>leggi psicologiche</i>.</p>
       <p>Conoscere queste leggi significa innanzitutto essere più coscienti dei nostri meccanismi interni e 
         ci consente di utilizzare queste stesse leggi a nostro favore; ad esempio, la <a href="/tecnica">tecnica delle parole evocatrici</a> fa largo uso di queste leggi.</p>
         <p>Verranno ora qui elencate e brevemente descritte queste leggi; se il lettore vuole approfindire 
           trova una più dettagliata spegazione nel libro <a href="https://amzn.to/3nmT7JA">L'atto di volontà di Roberto Assagioli.</a> a partire da pagina 44 (cap. volontà sapiente).</p>

        <h3>1° legge: Le immagini o figure mentali e le idee tendono a produrre le condizioni fisiche e gli atti esterni ad esse corrispondenti.</h3>
        <p>Ogni idea è un azione allo stato latente e questa legge è provata ampiamente dagli effetti dell'influsso ipnotico e, nell'ordinario stato di veglia
           dalla suggestione, dall'autosuggestione, e dalla suggestione di massa. E' alla base degli effetti psicosomatici sia patologici che terapeutici ed è sfruttata 
           largamente da pubblicitari, uomini politici e da tutti i "persuasori".</p>
           <p>La volontà quindi, può e deve utilizzare questa legge, mobilitando le energie dell'immaginazione e del pensiero utilizzandole per raggiungere i nostri scopi. (con le parole evocatrici facciamo proprio questo, dirigiamo tramite la volontà le nostre forze psicologiche coscientemente sulla qualità che vogliamo sviluppare)</p>
   
   
        <h3>2° legge: Gli atteggiamenti, i movimenti e le azioni tendono ad evocare le immagini e le idee corrispondenti; queste, a loro volta (2° legge) evocano o rendono più intensi le emozioni e i sentimenti.</h3>
        <p>Conoscendo questa legge, con la volontà possiamo muovere il nostro corpo e quindi evocare immagini e idee corrispondenti che poi susciteranno emozioni e sentimenti. Uno dei possibili scopi è quello 
          evocare e rafforzare stati interiori positivi attraverso movimenti coscienti. (praticare un movimento associato con la parola che vogliamo evocare stimolerà il nostro stato interiore corrispondente)
        </p>

        <h3>3° legge: Le idee e le immagini tendono a suscitare le emozioni ed i sentimenti ad esse corrispondenti.</h3>
        <p>Ad es. praticare la tecnica delle parole evocatrici con la parola <b>Gioia</b> evocherà in noi le emozioni ed i sentimeti ad essa collegati.</p>
        <p>Sempre tramite la volontà possiamo usare sapientemente questa legge per evocare in noi gli stati interni desiderati.</p>

        <h3>4° legge: Le emozioni e le impressioni tendono a suscitare ed a intensificare le idee e le immagini ad esse corrispondenti o collegate.</h3>
        <p>Le emozioni, a loro volta, tendono a intensificare le idee ad esse collegate. Qui assistiamo ad un processo di feedback che può agire positivamente (parole evocatrici) o negativamente (paura di una malattia che genera immagini mentali nefaste)</p>

        <h3>5° legge: I bisogno, gli istinti, gli impulsi e i desideri tendono a produrre le immagini, le idee e le emozioni corrispondenti. Immagini ed idee, a loro volta (1° legge) suggeriscono le azioni corrispondenti.</h3>
        <p>E' bene essere consapevoli i nostri impulsi e desideri più ardenti spingono per trovare ragioni o pseudo-ragioni (razionalizzazione) per realizzarsi; è nostra responsabilità 
          vigilare per individuare possibili illusioni mentali ed emotive nei nostri pensieri. Quindi diventare più consapevoli di dove i nostri istinti, impulsi e desideri vogliono portarci.
        </p>

        <h3>6° legge: L'attenzione, l'interesse, l'affermazione e la ripetizione rafforzano le idee, le immagini e le formazioni psicologiche su cui si accentrano.</h3>
        <p>Prestare attenzione per qualche minuto ad una <b>parola evocatrice</b> significa esattamente questo, potenziare l'immagine mentale e ne aumenta l'efficacia. Tecnica utilizzata molto bene dai pubblicitari e dai "persuasori".</p>
        <p>E' bene notare che noi possiamo utilizzare anche la 6° legge in senso opposto, ritirando l'attenzione da un contenuto psicologico sgradito, riducendone così l'energia e l'attività.</p>

        <h3>7° legge: La ripetizione degli atti intensifica la tendenza a compierli e rende più faile e migliore la loro esecuzione, fino a che si arriva a poterli compiere inconsciamente.</h3>
        <p>Legge che descrive la formazione delle abitudini. Evidenzia la nostra responsabilità nel valutare le nostre abitudini e decidere eventualmente di modificarle o di crearne di nuove.</p>
        <p>Anche se in parte tendono a limitarci e farci percorrere sentieri già battuti è bene sapere che: "La volontà e l'intelletto possono formare abitudini di pensiero e volontà. Noi siamo responsabili delle nostre abitudini di pensiero e anche quando 
          agiamo secondo un'abitudine agiamo liberamente." &mdash; William James</p>

        <h3>8° legge: Tutte la varie funzioni, e le loro molteplici combinazioni in complessi e sub-personalità, mettono in moto la realizzazione dei loro scopi al di fuori della nostra coscienza, e indipendentemente da, e perfino contro, la nostra volontà.</h3>
        <p><a href="https://amzn.to/3nmT7JA">Rimando al libro per maggiori dettagli.</a> pag 50.</p>

        <h3>9° legge: Gli istinti, gli impulsi, i desideri e le emozioni tendono ad esprimersi ed esigono espessione.</h3>
        <p>Come per la legge 5° anche qui è necessaria un attenta valutazione dei nostri impulsi e desideri (osservandoli da una posizione centrale, disidentificata) al fine di lavorare su un problema molto pratico: 
          "Esprimere in modo adeguato e costruttivo, o almeno non dannoso, tutti questi istinti, impulsi, emozioni, ecc".
        </p>
        <p>Non esprimerli potrebbe significare disturbi psicosomatici, stress psichici e nervosi.</p>

        <h3>10° legge: Le energie psichiche si possono esprimere: 
          (1) direttamente (sfogo-catarsi); (2) indirettamente, attraverso un'azione simbolica; (3) con un processo di trasmutazione.</h3>
        <p><a href="https://amzn.to/3nmT7JA">Rimando al libro per ulteriori approfondimenti.</a> pag 51.</p>
   
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
    document.title = 'Parole Evocatrici - Leggi Psicologiche';
    document.getElementsByTagName('meta')["description"].content = 'La tecnica delle parole evocatrici ha vari metodi e campi di applicazione: Personale, Collettivo, Sanitario, Solastico e Psicologico.';
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
         { confirmButtonText: 'Supportami su Patreon 🚀' }
      ).then(function() {
        location.href = 'https://www.patreon.com/castenettoa';
      });
    },
    openIstitutoInfoBox: function() {
      this.$alert(
        "Questo metodo, sviluppando le qualità e funzioni deficienti e gli aspetti superiori della psiche contribuisce alla formazione armonica ed integrale della personalità, la propria psicosintesi. La Psicosintesi è un metodo sviluppato da Roberto Assagioli che, citandolo testualmente, 'può e deve essere applicato da ognuno a se stesso, promuovendo ed accelerando lo sviluppo interno ed il dominio di se, che dovrebbero costituire la meta di tutti'. Naturalmente un grande aiuto può essere dato dalla <<psicosintesi didattica>>; perciò ti lascio qui in basso un link per andare sul sito web ufficiale dell'Istituto di Psicosintesi.",
       "🌟 La Psicosintesi 🌟", 
       "info", 
         { confirmButtonText: 'Vai su psicosintesi.it 🚀' }
      ).then(function() {
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