<template>
    <canvas style="height: 500px; width: 500px;" id="myChart"></canvas>
</template>

<script setup>
import { Chart } from 'chart.js/auto';
import { onMounted } from 'vue';


const props = defineProps(["data","labels","type"]);

const mockedData = {
    data1: [ 12, 19, 3, 5, 2, 3 ],
    data2: [ 22, 80, 3, 5, 10, 2 ],
}

onMounted(async () => {
    const ctx = document.getElementById('myChart')

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                label: 'First Label',
                data: mockedData.data1,
                borderWidth: 1
                },
                {
                label: 'Second Label',
                data:  mockedData.data2,
                borderWidth: 1
                },
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
})

</script>

<style></style>