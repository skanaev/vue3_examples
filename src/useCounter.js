import { ref, computed} from 'vue'
export default function useCounter () {
    let counter = ref(0)
    const counterUp = () => {counter.value ++}
    const counterX2 = computed(() => counter.value * 2)
    return {
        counter, counterUp, counterX2
    }
}
