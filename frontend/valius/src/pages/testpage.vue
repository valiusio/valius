<template>
    <div>
        <vslider
            v-model="value"
        ></vslider>{{value}}
    </div>
</template>

<script>
import Vslider from './../components/Vslider';

export default {
    name: 'test',
    props: [

    ],
    components : {
        Vslider : Vslider
    },
    data() {
        return {
            value : 5
        }
    },
    created(){
    },
    methods: {
    }

}
</script>

