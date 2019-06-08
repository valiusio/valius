<template>
    <div class="container container--exlg">
        <information-banner
            type="blue"
        >
            <h1>Καλώς ήρθατε!</h1>
        </information-banner>

        <div class="welcome-wrapper">
            <h2>Έχετε επιλεγεί να συμμετάσχετε στο Exclusive Feedback Club της ______ !!</h2>
            <p>Σκοπός του Club είναι να φέρει τους πελάτες στο επίκεντρo,
                δίνοντας τους τη δυνατότητα να αξιολογήσουν και να βελτιώνουν προϊόντα που χρησιμοποιούν!
            </p>
            <p>
                Με αυτή τη συμμετοχή σας μπορείτε:
            </p>
            <p>
                Να παίξετε ένα εικονικό παιχνίδι απατώντας κάποιες ερωτήσεις
            </p>
            <p>
                Να εκφράσετε την άποψη σας για τα διάφορα προϊόντα που χρησιμοποιείτε
            </p>
            <p>
                Να λάβετε μοναδικές εκπλήξεις στο τέλος της διαδικασίας!
            </p>
        </div>
    </div>
</template>

<script>
import informationBanner from './../components/InformationBanner';

export default {
  name: 'welcome',
  components: {
        informationBanner : informationBanner
  }
}
</script>
<style lang="scss" scoped>
    .information-banner h1 {
        font-size: 32px;
    }

    .welcome-wrapper {
        width: 800px;
        margin: 150px auto 0 auto;

        h2 {
            font-size: 24px;
            color: #0070C0;
        }
    }
</style>
