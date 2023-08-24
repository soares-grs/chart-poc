<template>
    <canvas style="height: 500px; width: 500px;" id="myChart"></canvas>
</template>

<script setup>
import { Chart } from 'chart.js/auto';
import { onMounted, ref } from 'vue';
import { injector } from "../utils/injector"


const props = defineProps(["data","labels","type"]);
let charactereArray = ref([])

const mockedData = {
    data1: [ 12, 19, 3, 5, 2, 3 ],
    data2: [ 22, 80, 3, 5, 10, 2 ],
}

async function getAllCharactere(page){
    let response = await injector.characters.get(page)

    if(response.data.info.next){
        charactereArray.value = charactereArray.value.concat(response.data.results);
        console.log(charactereArray.value)
        getAllCharactere(page+1)
    }
} 

onMounted(async () => {
    getAllCharactere(1);
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