<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import rawQuotes from '~/assets/json/quotes.json';
import { interval } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { QuoteType, type Quote } from '~/types/quote';
import { Subject } from 'rxjs';

const props = defineProps({
    quote: {
        type: String,
        default: '',
    },
    author: {
        type: String,
        default: '',
    },
    handle: {
        type: String,
        default: '',
    },
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

const quoteBlock =
    ref<Quote | null>(null);

const destroy$ = new Subject<boolean>();

function getRandomQuote(quotes: Quote[]): Quote {
    const applicableQuotes = props.randomQuote
        ? quotes.filter(quote => props.randomQuoteTypes.includes(quote.quoteType))
        : quotes;

    const randomIndex = Math.floor(Math.random() * applicableQuotes.length);
    return applicableQuotes[randomIndex] || {
        quote: props.quote,
        author: props.author,
        handle: props.handle,
        quoteType: QuoteType.marriageCounseling
    };
}

watch(() => props.randomQuote, (newValue) => {
    if (newValue) {
        const quotes: Quote[] = rawQuotes as Quote[];
        quoteBlock.value = getRandomQuote(quotes);
    }
});

onMounted(() => {
    if (props.randomQuote) {
        interval(45000)
            .pipe(
                startWith(0),
                switchMap(async () => getRandomQuote(rawQuotes as Quote[])),
                takeUntil(destroy$)
            )
            .subscribe(quote => {
                quoteBlock.value = quote;
            });
    }
});

onUnmounted(() => {
    destroy$.next(true);
    destroy$.complete();
});

</script>


<template>
    <section>
        <div class="bg-secondary flex items-center justify-center px-5 py-16 ">
            <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
                 style="max-width: 500px">
                <div class="w-full mb-10">
                    <div class="text-3xl text-secondary text-left leading-tight h-3">
                        <icon name="bxs:quote-left"
                              size="1em"
                              class="flex-none min-w-8">
                        </icon>
                    </div>
                    <p class="text-sm text-gray-600 text-center px-8">
                        {{
                            quoteBlock &&
                            quoteBlock.quote
                        }}
                    </p>
                    <div class="text-3xl text-secondary text-right leading-tight h-3 -mt-3">
                        <icon name="bxs:quote-right"
                              size="1em"
                              class="flex-none min-w-8">
                        </icon>
                    </div>
                </div>
                <div class="w-full">
                    <p class="text-md text-gray-600 font-bold text-center">
                        {{
                            quoteBlock &&
                            quoteBlock.author
                        }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>