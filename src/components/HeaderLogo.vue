<template>
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
</template>

<script>
import HeaderLogo from '@/components/HeaderLogo.vue';
// 'Ammirazione Apprezzamento Attenzione Bellezza Beatitudine Calma Compassione Comprensione Collaborazione Coraggio Creatività Audacia Decisione Distacco Determinazione Discernimento Disciplina Energia Decisione Distacco Determinazione Discernimento Disciplina Energia Entusiasmo Eternità Fede Libertà Amicizia Generosità Bontà Volontà buona Gratitudine Armonia Umorismo Inclusività Infinito Iniziativa Integrazione Gioia Liberazione Luce Amore Ordine Pazienza Pace Costanza Positività Forza Prontezza Quiete Realtà Rinnovamento Risolutezza Serenità Servizio Silenzio Semplicità Sintesi Tenacia Verità Comprensione Universalità Vitalità Interezza Volontà Saggezza Stupore'

export default {
  name: "HeaderLogo",
  data: function () {
    return {
    };
  },
  methods: {
    openDonationInfoBox: function () {
      this.$swal({
        title: "🌟 Supporta questo progetto",
        html: "Questo progetto è gratuito, ma se vuoi puoi contribuire ai suoi costi di sviluppo e di mantenimento, nonchè ai progetti che svilupperò in futuro.",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: true,
        confirmButtonText: "Si, effettuo una donazione 🚀",
        cancelButtonText: "No, grazie."
      }).then(function (r) {
        if (r.isConfirmed)
          location.href = "https://paypal.me/pools/c/8bFReaiLUk";
      });
    },
    goToinfoPage: function (w) {
      if (this.$route.name != "Help")
        this.$router.push({ name: "Help" });
    },

    goToHome: function (w) {
      if (this.$route.name != "Home")
        this.$router.push({ name: "Home" });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
