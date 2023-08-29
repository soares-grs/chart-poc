<template>
    <canvas style="height: 500px; width: 500px;" id="myChart"></canvas>
</template>

<script setup>
import { Chart } from 'chart.js/auto';
import { onMounted } from 'vue';


const props = defineProps(["data","labels","type"]);

const mockedData = {
    data1: [ 99, 1 ],
}

onMounted(async () => {
    const ctx = document.getElementById('myChart')

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Deu certo', 'Deu ruim'],
            datasets: [
                {
                backgroundColor:[ 'green', 'red'],
                label: 'Load',
                data: mockedData.data1,
                borderWidth: 0
                },
        ]
        },
        options: {
            cutout: 220
        }
    });
})

</script>

<style></style>