<script setup lang="ts">
import rawQuotes from '~/assets/json/quotes.json';
import { defineProps } from 'vue';
import { QuoteType, type Quote } from '~/types/quote';

const props = defineProps({
    quote: String,
    author: String,
    handle: String,
    randomQuote: Boolean,
    randomQuoteTypes: {
        type: Array as () => QuoteType[],
        default: () => [
            QuoteType.individualCounseling,
            QuoteType.marriageCounseling,
            QuoteType.psychology,
        ],
    },
});
const quoteBlock = ref<Quote | null>(null);

const getRandomQuote = (quotes: Quote[]) => {
    if (!props.randomQuote) {
        return {
            quote: props.quote ?? '',
            author: props.author ?? '',
            handle: props.handle ?? '',
            quoteType: QuoteType.marriageCounseling,
        };
    }

    const filteredQuotes = quotes.filter((quote: Quote) => props.randomQuoteTypes.includes(quote.quoteType));
    const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];

    return {
        quote: randomQuote.quote,
        author: randomQuote.author,
        handle: randomQuote.handle,
        quoteType: randomQuote.quoteType,
    };
};

onMounted(async () => {
    if (props.randomQuote) {
        const response = await fetch('/assets/json/quotes.json');
        const quotes: Quote[] = rawQuotes as Quote[];
        quoteBlock.value = getRandomQuote(quotes);
    }
});

</script>

<template>
    <div class="bg-gray-200 flex items-center justify-center px-5 py-5 pt-16">
        <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" style="max-width: 500px">
            <div class="w-full mb-10">
                <div class="text-3xl text-secondary text-left leading-tight h-3">
                    <icon name="bxs:quote-left" size="1em" class="flex-none min-w-8"></icon>
                </div>
                <p class="text-sm text-gray-600 text-center px-8">{{ quoteBlock && quoteBlock.quote }}</p>
                <div class="text-3xl text-secondary text-right leading-tight h-3 -mt-3">
                    <icon name="bxs:quote-right" size="1em" class="flex-none min-w-8"></icon>
                </div>
            </div>
            <div class="w-full">
                <p class="text-md text-gray-600 font-bold text-center">{{ quoteBlock && quoteBlock.author }}</p>
                <p class="text-xs text-gray-500 text-center">{{ quoteBlock && quoteBlock.handle }}</p>
            </div>
        </div>
    </div>
</template>