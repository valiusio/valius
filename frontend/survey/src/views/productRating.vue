<template>
    <div class="container container--exlg">
        <information-banner
            type="blue"
        >
            <h1>Πόσο ελκυστική είναι για εσάς η εικόνα της μάρκας των προϊόντων που ακολουθούν;</h1>
            <p>Σε μια κλίμακα από 1 -10 δώσε ένα σκορ σε κάθε ένα από αυτά</p>
        </information-banner>

        <div class="wrapper">
            <img class="criteria-logo" :src="getFactorImg(criteria)">
            <div class="ruler">
                <span>Low score(1-3)</span>
                <span>Medium score(4-7)</span>
                <span>High score (8-10)</span>
            </div>
            <div v-for="attractiveKey in Object.keys(state.productProfile.criteria[criteriaIndex].productsBrandsAttractiveness)"
                 class="item-row">
                <div class="name">
                    {{ state.productProfile.criteria[criteriaIndex].productsBrandsAttractiveness[attractiveKey].name}}
                </div>
                <section class="heart-container">
                    <img v-for="i in 10"
                         :src="getStarImg(state.productProfile.criteria[criteriaIndex].productsBrandsAttractiveness[attractiveKey],i)"
                         @click="rate(state.productProfile.criteria[criteriaIndex].productsBrandsAttractiveness[attractiveKey], i)"
                    />
                </section>
            </div>
        </div>

        <button @click="next" v-if="isRatingComplete">
            Επόμενο
        </button>
    </div>
</template>

<script>
    import informationBanner from '../components/InformationBanner';
    import starGreen from '../assets/stars/star--green.png';
    import starRed from '../assets/stars/star--red.png';
    import starWhite from '../assets/stars/star--white.png';
    import starYellow from '../assets/stars/star--yellow.png';
    import AttractiveCriteria from '../../../valius/src/services/AttractivenessCriteria';

    export default {
        name: 'productRating',
        components: {
            informationBanner: informationBanner
        },
        data() {
            return {
                state: this.$store.getters.state,
                criteria: undefined,
                criteriaIndex: undefined
            }
        },
        computed: {
            isRatingComplete() {
                return this.state.productProfile.criteria[this.criteriaIndex].productsBrandsAttractiveness["1"].value
                && this.state.productProfile.criteria[this.criteriaIndex].productsBrandsAttractiveness["2"].value
                && this.state.productProfile.criteria[this.criteriaIndex].productsBrandsAttractiveness["3"].value
                && this.state.productProfile.criteria[this.criteriaIndex].productsBrandsAttractiveness["4"].value
            }
        },
        created () {
             this.criteria = this.$route.params.criteria;
             this.criteriaIndex = Object.keys(this.state.productProfile.criteria)
                 .find(key => {
                    return  this.state.productProfile.criteria[key].name === this.criteria
                 });

        },
        methods: {
            getStarImg(obj, index) {
                let rating = obj.value;

                if(rating === 0) {
                    return starWhite;
                }else if(rating >= 1 && rating <= 3 && rating >= index){
                    return starRed
                }else if(rating >= 4 && rating <= 7 && rating >= index){
                    return starYellow
                }else if(rating >= 8 && rating >= index){
                    return starGreen
                }else {
                    return starWhite
                }
            },
            rate(item, value) {
                item.value = value;
            },
            getFactorName(factorName) {
                let criteria = AttractiveCriteria.AttractivenessCriteria.filter((factor) => {
                    return factor.name === factorName
                })[0];

                return criteria && criteria.label;
            },
            getFactorImg(i) {
                let img = '';
                try {
                    img = require('../../../valius/src/assets/images/attractivenessCriteria/'+i+'.png');
                }catch (e) {
                    img = ''
                }
                return img;
            },
            next() {
                this.$store.dispatch('state', this.state);
                this.$router.push('/marketProductsRating');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .information-banner h1 {
        font-size: 18px;
    }

    .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 900px;
        margin: 100px auto 0 auto;
    }

    .criteria-logo {
        width: 50px;
        height: 50px;
        position: absolute;
        top: -30px;
        right: -100px;
    }

    .ruler {
        display: flex;
        align-items: flex-end;
        font-size: 18px;
        margin: 100px 0 10px 0;
        :nth-child(1) {
            margin-left: auto;
            margin-right: 100px;
        }
        :nth-child(2) {
            margin-right: 160px;
        }
        :nth-child(3) {
            margin-right: 40px;
        }
    }
    .item-row {
        margin: 0 0 20px 0;
        padding: 20px 0;
        display: flex;
        align-items: center;
        background-color: #E7E7E7;
        border-radius: 4px;
        .name {
            min-width: 200px;
            font-size: 20px;
            padding: 0 0 0 10px;
            font-weight: bold;
        }
    }
    .heart-container {
        display: flex;

        img {
            margin: 0 20px 0 0;
            width: 50px;
            height: 50px;
            &:hover {
                cursor: pointer;
            }
        }
    }
    button {
        width: 200px;
        height: 50px;
        border-radius: 4px;
        background-color: #17B5F0;
        color: white;
        font-size: 18px;
        margin: 100px auto 0 auto;
        display: block;
    }
</style>
