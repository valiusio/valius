<template>
    <div class="container container--exlg">
        <div class="wrapper">
            <img :src="getLevelImg">
            <div class="level level--1" :class="isLevelAccepted(1)?'level--active':''" @click="gotoLevel(1)"></div>
            <div class="level level--2" :class="isLevelAccepted(2)?'level--active':''" @click="gotoLevel(2)"></div>
            <div class="level level--3" :class="isLevelAccepted(3)?'level--active':''" @click="gotoLevel(3)"></div>
            <div class="level level--4" :class="isLevelAccepted(4)?'level--active':''" @click="gotoLevel(4)"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'map',
        components: {},
        computed: {
            getLevelImg() {
                return require(`./../assets/map/map__level--${this.level}.png`);
            }
        },
        created() {
        },
        data() {
            return {
                level: this.$store.getters.state.level > 4
                    ? 4
                    : this.$store.getters.state.level,
                levelLinks: {
                    1: '/description',
                    2: '/marketProfile',
                    3: '/productProfile',
                    4: '/marketProductsRating',
                }
            }
        },
        methods: {
            next() {
                this.$router.push('/questionnaire');
            },
            isLevelAccepted(level) {
                return level <= this.level;
            },
            gotoLevel(level) {
                (level <= this.level)
                && this.$router.push(this.levelLinks[level])
            }
        }
    }
</script>
<style lang="scss" scoped>
    .wrapper {
        position: relative;
        margin: 51px auto 0 auto;
        width: 1000px;
        height: 737px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .level {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;

        &--active {
            &:hover {
                cursor: pointer;
                border: 2px solid yellow;
            }
        }


        &--1 {
            bottom: 143px;
            right: 799px;
        }

        &--2 {
            bottom: 172px;
            right: 300px;
        }

        &--3 {
            bottom: 358px;
            right: 819px;
        }

        &--4 {
            bottom: 398px;
            right: 227px;
        }
    }

</style>
