<script setup lang="ts">
import type { BulletPointList, BulletPoint } from '~/types/bulletPointList';


const props = defineProps<{
    bulletPointList: BulletPointList;
}>();



const groupArrayByColumns = (inputArray: BulletPoint[], colNumber: number) => {
    const result = [];
    const colSize = Math.floor(inputArray.length / colNumber);
    const extraElements = inputArray.length % colNumber;

    let currentIndex = 0;

    for (let i = 0; i < colNumber; i++) {
        const currentColumn = [];

        // Determine the number of elements for this column
        const columnSize = i < extraElements ? colSize + 1 : colSize;

        for (let j = 0; j < columnSize; j++) {
            currentColumn.push(inputArray[currentIndex]);
            currentIndex++;
        }

        result.push(currentColumn);
    }

    return result;
};

const getGroupArrayByColumns = groupArrayByColumns(props.bulletPointList.bulletPoints, props.bulletPointList.colNum)





</script>

<template>
    <div
        :class="[bulletPointList.singleColSize !== '' ? `flex flex-col ${bulletPointList.singleColSize}:flex-row ` : 'flex']">
        <ul v-for="(  column, columnIndex  ) in   getGroupArrayByColumns  " :key="columnIndex" class=" flex-1 block">
            <li v-for="(  bulletPoint, index  ) in   column  " :key="index"
                class="mt-7  bg-clip-text font-sans text-base leading-relaxed antialiased">
                <NuxtLink :to="bulletPoint?.link" class="group">
                    <div class="inline-flex items-center" :class="[bulletPoint.color, bulletPointList.textStyle]">
                        <div :class="bulletPointList.listDiscStyle"></div>
                        {{ bulletPoint?.text }}
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
