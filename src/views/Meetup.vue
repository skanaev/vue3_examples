<template>
    <!-- ----------------------------------------------------------------> 
  <div>
     <h1 style="marginTop: 5px; marginBottom: 25px;"> v-model input</h1>
    <div>
      <input
        v-model="text"
        placeholder="Enter your name"
        size="lg"
        class="container sm"
      />
      <div class="mt-2">V-model magic value: {{ text }}</div>
    </div>

    <h2 style="marginTop: 25px; marginBottom: 15px;"> v-model radio button </h2>
    <div>
      <input type="radio" id="one" value="Один" v-model="picked"> &nbsp;
      <label for="one">Один</label>
      <br> 
      <input type="radio" id="two" value="Два" v-model="picked"> &nbsp; 
      <label for="two">Два</label> 
      <br>
      <span>Выбрано: {{ picked }}</span>
    </div>
     
    <h2 style="marginTop: 15px; marginBottom: 15px;"> v-model checkbox</h2>
    <input type="checkbox" id="checkbox" v-model="checked"> &nbsp; 
    <label for="checkbox">{{ checked }}</label>

    <div class="border" />

    <h1 style="marginTop: 15px; marginBottom: 25px;"> Директивы v-if и v-show </h1>
    <div> 
      <button type="button" class="btn btn-primary" @click="showDescription= !showDescription"> Show information about Vue </button>
      <div v-if="showDescription" class="description"> <strong> v-if </strong> Vue (произносится /vjuː/, примерно как view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов, Vue создан пригодным для постепенного внедрения. Его ядро в первую очередь решает задачи уровня представления (view), что упрощает интеграцию с другими библиотеками и существующими проектами. С другой стороны, Vue полностью подходит и для создания сложных одностраничных приложений (SPA, Single-Page Applications), если использовать его совместно с современными инструментами и дополнительными библиотеками. </div>
      <div v-show="showDescription" class="description"> <strong> v-show </strong> Vue (произносится /vjuː/, примерно как view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов, Vue создан пригодным для постепенного внедрения. Его ядро в первую очередь решает задачи уровня представления (view), что упрощает интеграцию с другими библиотеками и существующими проектами. С другой стороны, Vue полностью подходит и для создания сложных одностраничных приложений (SPA, Single-Page Applications), если использовать его совместно с современными инструментами и дополнительными библиотеками. </div>
    </div>
    <div class="border" />
    <!------------------------------------------------------------------>
 
    <h1 style="marginTop: 15px; marginBottom: 25px;"> Директива v-bind: или сокращённо : </h1>
    <input type="text" class="container sm form-control form-control-sm" v-model="url" />
    <a :href="url" target="_blank">{{url}}</a> &nbsp; &nbsp; &nbsp;       
    <div class="border" />

    <h2 style="marginTop: 15px; marginBottom: 25px;"> Директива v-bind: Динамически изменяем тип инпута </h2>
    <input :type="inputType" class="container sm form-control form-control-sm" v-model="password" />
    <button type="button" class="btn btn-primary" style="marginTop: 10px" @click="inputType = inputType === 'password' ? 'text': 'password'"> Поменять тип inputа на password </button>
    <div class="border" />

     <!------------------------------------------------------------------>
    <h1 style="marginTop: 15px; marginBottom: 25px;"> Модификаторы: форма </h1>
    <form @submit.prevent="sendRequest($event)">
      <input v-model="message" placeholder="отредактируй меня">
      <p>Введённое сообщение: {{ message }}</p>
    </form>
    
    <h2 style="marginTop: 15px; marginBottom: 25px;"> Модификаторы: всплытие события </h2>
    <div @click="clickParentMethod()"> 
       <div @click.stop="clickChildMethod()"> Кликни на меня </div> 
    </div>

    <h2 style="marginTop: 15px; marginBottom: 25px;"> Модификаторы для v-model (lazy и другие)</h2>
    <form @submit="sendRequest()">
      <input v-model.lazy="message2" placeholder="отредактируй меня">
      <p>Введённое сообщение: {{ message2 }}</p>
    </form>

    <div class="border" />
<!------------------------------------------------------------------>

    <h1 style="marginTop: 25px; marginBottom: 5px;"> Развеиваем магию v-model </h1>
    <div style="marginTop: 15px; marginBottom: 25px;">
      <input
        :value="text2" 
        @input="text2 = $event.target.value"
        placeholder="Enter your name"
        class="container sm form-control form-control-lg"
      />
      <div class="mt-2"> Native input value: {{ text2 }}</div>
    </div>
    <div class="border" />
    

    <!------------------------------------------------------------------>
    <h1 style="marginTop: 25px; marginBottom: 5px;"> Methods, Computed, Watch </h1>
    <h2 style="marginTop: 45px; marginBottom: 25px;"> computed - вычисляемые свойства </h2>
    <div>
      <button type="button" class="btn btn-primary" @click="counterUp"> Кликни на меня  </button>
      <button type="button" class="btn btn-primary" style="marginLeft: 10px" @click="counter = 0"> Очистить </button>
      <!-- <div class="description" :class="{'green': сounterMoreThan5()}"> Использум method: Кол-во кликов: {{counter}} </div> -->
      <div class="description" :class="{'green': сounterIsGreen}"> Использум computed: Кол-во кликов: {{counter}} </div>
    </div>
    <div class="border" />

    <!------------------------------------------------------------------>

    <h1 style="marginTop: 45px; marginBottom: 25px;"> Директива v-for </h1>
    <ul class="list-group">
      <li
        v-for="item in list"
        :key="item.id" 
        class="list-group-item"
        >
          {{item.text}} 
      </li>
    </ul>
    <div class="border" />

    <!------------------------------------------------------------------>
    <h1 style="marginTop: 45px; marginBottom: 25px;"> Директива v-for + слушатель события. Проблемы с реактивностью</h1>
    <div class="list-group">
        <custom-form
          title="add Todo"
          class="list-group-item"
          @addTodo="addNewTodo"
        />
    </div>

    <li v-for="todo in todos" :key="todo.id" class="list-group-item">
        {{todo.text}}
    </li>
  
    <!-- <div> Отфильтрованные todo: {{filteredTodos}}</div>  -->
    <button type="button" class="btn btn-primary" style="margin: 10px" @click="todos = []"> Очистить список  </button> 

    <!-- Проблемы с реактивностью объектов -->
    <div v-if="additionalData.counter !== undefined" @click="additionalData.counter = additionalData.counter + 1">Кликай, чтобы увеличить счётчик {{additionalData.counter}} </div>

    <div class="border" />

     <!------------------------------------------------------------------>

    <h1 style="marginTop: 45px; marginBottom: 25px;"> Проблемы реактивности у массивов </h1>
    <ul class="list-group">
      <li
        v-for="(item, index) in arrList"
        :key="index"
        class="list-group-item"
        >
          {{item}} 
      </li>
    </ul>
    <br>
                                                                       <!-- @click="arrList.length = 1" -->
    <button type="button" class="btn btn-primary" style="margin: 10px" @click="arrList.length = 1"> Сократить список до 1 элемента </button> 
    <button type="button" class="btn btn-primary" style="margin: 10px" @click="arrList[1] = 'x'"> Изменить значение 1 элемента на 'x' </button> 
    <br>
    <button type="button" class="btn btn-primary" style="margin: 10px" @click="arrList.splice(1)"> Реактивно сократить список до 1 элемента </button> 
    <button type="button" class="btn btn-primary" style="margin: 10px" @click="$set(arrList, 1, 'x')"> Реактивно изменить значение 1 элемента на 'x' </button> 
    <br>
    <button type="button" class="btn btn-primary" style="margin: 10px" @click="arrList = ['a', 'b', 'c']"> Восстановить исходные </button> 
    <div class="border" />


    <!------------------------------------------------------------------>

  </div>
</template>

<script>
import CustomForm from './CustomForm.vue'
export default {
  components: {
    CustomForm, 
  },
  data () {
    return {
      additionalData: {},
      inputType: 'text',
      checked: null,
      picked: null,
      message: '',
      message2: '',
      url: 'https://google.com',
      password: null,
      text: '',
      text2: '',
      showDescription: false,
      counter: 0,
      list: [
        {id: '1', text: "check code for frontend meetup"},
        {id: '2', text: "help parents"},
        {id: '3', text: "buy bread"},
        {id: '4', text: "go for a walk"},
        {id: '5', text: "learn Vue"},
        {id: '6', text: "play computer"}
      ],
      todos: [],
      arrList: ['a', 'b', 'c']
    }
  },
  methods: {
    changeInputType() {
      if (this.inputType === 'password') this.inputType = 'text'
      else if (this.inputType === 'text') this.inputType = 'password'
    },
    clickChildMethod () {
      console.log('childMethod handler')
    },
    clickParentMethod () {
      console.log('parentMethod handler')
    },
    sendRequest () {
      alert('Hello All!')
    },
    counterUp () {
      this.counter++
    },
    сounterMoreThan5 () {
      console.log('сounterMoreThan5 method call')
      return this.counter > 5
    },
    addNewTodo (todo) {
      const id = +new Date()
      this.todos.push({id: id, text: todo})

      // START Проблема реактивности у объектов
      if (this.todos.length === 5) {
        this.additionalData.counter = 0
      // Как пофиксить: 
          // this.$set(this.additionalData, 'counter', 0) 
      }
      // END Проблема реактивности у объектов
    },                                                               
  },
  computed: {
    сounterIsGreen () {
      console.log('сounterIsGreen method call')
      return this.counter > 5
    },
    filteredTodos () {
      return this.todos.filter (todo => todo.text.length > 15)
    }
  },
  watch: {
    counter: function (newValue) {
      console.log('watch, новое значение в поле counter', newValue)
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
</style>