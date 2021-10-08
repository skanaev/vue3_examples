<template>
  <div v-for="(item, index) in list" :key="index"> {{item}}</div>
  <br>
  <input type="button" @click="addItem('test')" value="Добавить итем">
  <br>

  <br> <br>
  <div>счётчик: {{counter}}</div>
  <div>счётчик удвоенный:  {{counterX2}}</div>
  <br>
  <input type="button" @click="counterUp()" value="Увеличь счётчик" style="marginRight: 10px">
  <input type="button" @click="modalOpen = !modalOpen" value="Открой модалку, телепортнув её в body">

  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        Я телепортированное модальное окно!
        (Мой родитель "body")
        <button type="button" @click="modalOpen = false">
          Закрыть
        </button>
      </div>
    </div>
  </teleport>

</template>

<script>
import { ref, onMounted, watch} from 'vue'
import useCounter from '../useCounter'
export default {
  setup () {
    let modalOpen = ref(false)
    let list = ref(['1','2','3','4','5'])
    // let counter = ref(0)
    // const counterUp = () => {
    //   counter.value ++
    // }
    // const counterX2 = computed(() => counter.value * 2)

    const addItem = (text) => {
      list.value.push(text)
    }

    watch(counter, (newValue) => {
      console.log('Изменение counter: ', newValue)
    })

    onMounted(() => {console.log('mounted хук во Vue3 Composition Api')})

    const {counter, counterUp, counterX2} = useCounter()

    return {
      list, addItem, counter, counterUp, counterX2, modalOpen
    }
  }
}
</script>

<style scoped>
  .description {
    color: #757575;
    margin-top: 20px;
  }
  .green {
    color: #00a533;
  }
  .border {
    margin-top: 50px;
    border: 3px solid #00a533 !important;
  }
  .list-group {
    display: inline-block;
  }
  .modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}

</style>