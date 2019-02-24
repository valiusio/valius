<template>
    <div class="v-slider"  :class="classValue">
        <input
            type="range"
            min="0"
            max="10"
            step="1"
            :value="ratting"
            @input="change"
        >
        <div class="v-slider__ruler">
                <span @click="updateState(1)">1</span>
                <span @click="updateState(2)">2</span>
                <span @click="updateState(3)">3</span>
                <span @click="updateState(4)">4</span>
                <span @click="updateState(5)">5</span>
                <span @click="updateState(6)">6</span>
                <span @click="updateState(7)">7</span>
                <span @click="updateState(8)">8</span>
                <span @click="updateState(9)">9</span>
                <span @click="updateState(10)">10</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'test',
        props: [
            "value"
        ],
        data() {
            return {
                ratting : this.value
            }
        },
        created() {
        },
        methods: {
            updateState(ratting) {
                this.ratting = ratting;
                this.emitEvent();
            },

            change(event) {
                this.ratting = event.target.value;
                this.$emit('input', this.ratting);
            },

            emitEvent() {
                this.$emit('input', this.ratting);
            }
        },
        computed : {
            classValue() {
                if(this.value <= 4) { return 'v-slider--low'}
                if(this.value > 4 && this.value < 8 ) { return 'v-slider--medium'}
                if(this.value >= 8) { return 'v-slider--max'}
            }
        }

    }
</script>

