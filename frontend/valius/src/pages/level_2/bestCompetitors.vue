<template>

    <div class="best-competitors">
        <div class="container container--exlg">
            <information-banner
                type="danger"
            >
                <h1>Ποιοί είναι οι πιο σημαντικοί ανταγωνιστές σου?</h1>
                <p>Απάντησε στις ερωτήσεις που γνωρίζεις συμπληρώνοντας τα παρακάτω κενά.</p>
            </information-banner>

            <form
                class="best-competitors__form"
                @submit="nextPage"
            >
                <div class="row">
                    <div class="column--left">
                        <div class="chessIcon">
                            <img class="chessIcon__panel" :src="chessPanel">
                            <img class="chessIcon__piece":src="chessPiece">
                        </div>
                    </div>
                    <div class="column--right">
                            <md-field
                                class="input-field"
                            >
                                <md-input
                                    name="name"
                                    placeholder="Name:  e.g. Lucozade"
                                    v-model="competitors.competitor1.name" ></md-input>
                                <span class="md-helper-text" v-show="errors.has('name')"></span>
                            </md-field>

                            <md-field
                                class="input-field"
                            >
                                <md-textarea
                                    name="name"
                                    placeholder="Profile:  e.g. Lucozade is a soft drink manufactured by the Japanese company Suntory and marketed as a range of sports and energy drinks."
                                    v-validate="'required'"
                                    v-model="competitors.competitor1.profile" ></md-textarea>
                                <span class="md-helper-text"></span>
                            </md-field>
                    </div>
                </div>
                <div class="row">
                    <div class="column--left--big">
                        <div class="chessIcon">
                            <img class="chessIcon__panel" :src="chessPanel">
                            <img class="chessIcon__piece":src="chessPiece">
                        </div>
                    </div>
                    <div class="column--right--small">
                            <md-field
                                class="input-field"
                            >
                                <md-input
                                    name="name"
                                    placeholder="Name:  e.g. Lucozade"
                                    v-model="competitors.competitor2.name" ></md-input>
                                <span class="md-helper-text" v-show="errors.has('name')"></span>
                            </md-field>

                            <md-field
                                class="input-field"
                            >
                                <md-textarea
                                    name="name"
                                    placeholder="Profile:  e.g. Lucozade is a soft drink manufactured by the Japanese company Suntory and marketed as a range of sports and energy drinks."
                                    v-validate="'required'"
                                    v-model="competitors.competitor2.profile" ></md-textarea>
                                <span class="md-helper-text"></span>
                            </md-field>
                    </div>
                </div>
                <div class="row">
                    <div class="column--left">
                        <div class="chessIcon">
                            <img class="chessIcon__panel" :src="chessPanel">
                            <img class="chessIcon__piece":src="chessPiece">
                        </div>
                    </div>
                    <div class="column--right">
                            <md-field
                                class="input-field"
                            >
                                <md-input
                                    name="name"
                                    placeholder="Name:  e.g. Lucozade"
                                    v-model="competitors.competitor3.name" ></md-input>
                                <span class="md-helper-text" v-show="errors.has('name')"></span>
                            </md-field>

                            <md-field
                                class="input-field"
                            >
                                <md-textarea
                                    name="name"
                                    placeholder="Profile:  e.g. Lucozade is a soft drink manufactured by the Japanese company Suntory and marketed as a range of sports and energy drinks."
                                    v-validate="'required'"
                                    v-model="competitors.competitor3.profile" ></md-textarea>
                                <span class="md-helper-text"></span>
                            </md-field>
                    </div>
                </div>

                <button
                    type="submit"
                    class="best-competitors__submit"
                >
                    Got it!
                </button>
            </form>
        </div>
    </div>

</template>



<script>
    import InformationBanner from './../../components/InformationBanner';
    import chessPanel from './../../assets/images/chess-panel.png';
    import chessPiece from './../../assets/images/chess-piece.png';

    export default {
        name: 'Best-Competitors',
        props: [

        ],
        data(){
            return {
                levels : this.$store.getters.levels,
                currentLevel : this.$store.getters.currentLevel,
                chessPanel: chessPanel,
                chessPiece: chessPiece,
                competitors: this.$store.getters.competitors
            }
        },
        components:{
            InformationBanner: InformationBanner

        },
        computed:{

        },
        methods: {
            nextPage(event) {
                event.preventDefault();
                this.$store.commit('updateCompetitors', this.competitors);
                this.levels.landscapeIdentification.subLevels.competitors.completed = true;
                this.levels.landscapeIdentification.subLevels.competitors.rating = 3;
                this.levels.landscapeIdentification.subLevels.marketObjective.locked = false;
                this.$store.dispatch('setLevels',this.levels).then(()=>{
                    this.$router.push('game-navigation');
                });
            }
        }
    }
</script>

