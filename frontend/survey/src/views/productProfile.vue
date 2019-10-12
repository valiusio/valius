<template>
    <div class="container container--exlg">
        <information-banner
            type="success"
        >
            <h1>{{state.productProfile.headerQuestion}}</h1>
        </information-banner>

        <div class="wrapper">
            <div class="hearts-status">
                <div>Κατανέμετε 10 ❤️ με βάση τη σημαντικότητα των παρακάτω στοιχείων για εσάς</div>
                <div class="total-hearts">
                    <img v-for="i in (totalHearts - totalRated)" :src="heartImg">
                </div>
            </div>

            <div class="criteria-rating">
                <section class="criteria-row" v-for="item in Object.keys(state.productProfile.criteria)">
                    <div class="criteria-item">
                        <span
                            v-if="+state.productProfile.criteria[item].value > 0 "
                            class="minus"
                            @click="remove(state.productProfile.criteria[item])"
                        >-</span>
                        <span
                            v-if="+totalRated < 10"
                            class="plus"
                            @click="add(state.productProfile.criteria[item])">+</span>
                        <img class="logo" :src="getFactorImg(state.productProfile.criteria[item].name)"/>
                    </div>
                    <span class="criteria-label">{{getFactorName(state.productProfile.criteria[item].name)}}</span>
                    <div class="item--rating">
                        <img v-for="i in +state.productProfile.criteria[item].value"
                             :src="heartImg"/>
                    </div>
                </section>
            </div>
        </div>

        <button v-if="+totalRated > 0" @click="next">
            Επόμενο
        </button>
    </div>
</template>

<script>
    import informationBanner from '../components/InformationBanner';
    import heartImg from '../assets/heart.png';
    import AttractiveCriteria from '../../../valius/src/services/AttractivenessCriteria';

    export default {
        name: 'productProfile',
        components: {
            informationBanner: informationBanner
        },
        data() {
            return {
                state: this.$store.getters.state,
                heartImg,
                totalHearts: 10
            }
        },
        computed: {
            totalRated() {
                return +this.state.productProfile.criteria[1].value +
                       +this.state.productProfile.criteria[2].value +
                       +this.state.productProfile.criteria[3].value +
                       +this.state.productProfile.criteria[4].value;
            }
        },
        methods: {
            add(item) {
                if(this.totalRated < 10) {
                    item.value = +item.value + 1;
                }
            },
            remove(item) {
                if(+item.value > 0) {
                    item.value = +item.value - 1;
                }
            },
            getFactorName(factorName) {
                let criteria = AttractiveCriteria.AttractivenessCriteria.filter((factor) => {
                    return factor.name === factorName
                })[0];

                return criteria && criteria.label;
            },
            getFactorImg(i) {
                console.log(i)
                let img = '';
                try {
                    img = require('../../../valius/src/assets/images/attractivenessCriteria/'+i+'.png');
                }catch (e) {
                    img = ''
                }
                return img;
            },
            next() {
                this.state.level++;
                this.$store.dispatch('state', this.state);
                this.$router.push('/map');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .information-banner h1 {
        font-size: 25px;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        width: 900px;
        margin: 50px auto 0 auto;
    }

    .hearts-status {
        margin: 0 auto 0 auto;
        height: 85px;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .criteria-rating {
        margin: 50px 0 0 0;
        display: flex;
        flex-direction: column;
    }

    .criteria-row {
        display: flex;
        margin: 20px 0 0 0;

        .criteria-item {
            position: relative;
            width: 100px;
            height: 100px;

            .logo {
                position: absolute;
                left: 15px;
                width: 70px;
                height: 70px;
                background-color: yellow;
                border-radius: 50%;
                z-index: 2;
            }

            .plus {
                position: absolute;
                z-index: 3;
                bottom: 18px;
                right: 10px;
                width: 25px;
                height: 25px;
                display: flex;
                background-color: #17b5f0;
                color: white;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                font-weight: bold;

                &:hover {
                    cursor: pointer;
                }
            }
            .minus {
                position: absolute;
                z-index: 3;
                bottom: 18px;
                left: 10px;
                width: 25px;
                height: 25px;
                display: flex;
                background-color: #17b5f0;
                color: white;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                font-weight: bold;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        .item--rating {
            margin: 0 0 0 50px;
            display: flex;
            align-items: center;

            img {
                margin: 0 15px 0 0;
                width: 30px;
                height: 30px;
            }
        }

        .criteria-label {
            display: flex;
            width: 200px;
            justify-content: center;
            align-items: center;
            color: gray;
            font-size: 12px;
        }
    }

    .total-hearts {
        margin: 20px auto 0 auto;
        img {
            width: 40px;
            margin: 0 10px 0 0;
        }
    }
    button {
        width: 200px;
        height: 50px;
        border-radius: 4px;
        background-color: #17B5F0;
        color: white;
        font-size: 18px;
        margin: 20px auto 50px auto;
        display: block;
    }
</style>
