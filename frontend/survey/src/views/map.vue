<template>
    <div class="container container--exlg">
        <div class="wrapper">
            <img :src="getLevelImg">
            <div class="level level--1" @click="gotoLevel(1)"></div>
            <div class="level level--2" @click="gotoLevel(2)"></div>
            <div class="level level--3" @click="gotoLevel(3)"></div>
            <div class="level level--4" @click="gotoLevel(4)"></div>
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
        data() {
            return {
                level: 1,
                levelLinks: {
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                }
            }
        },
        methods: {
            next() {
                this.$router.push('/questionnaire');
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
        margin: 50px auto 0 auto;
        width: 800px;
        height: 450px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .level {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;

        &:hover {
            cursor: pointer;
            border: 2px solid yellow;
        }

        &--1 {
            bottom: 85px;
            right: 115px;
        }

        &--2 {
            bottom: 85px;
            right: 486px;
        }

        &--3 {
            bottom: 195px;
            right: 622px;
        }

        &--4 {
            bottom: 265px;
            right: 267px;
        }
    }

</style>
