var app = new Vue({
    el: '#app',
    data: {
        arrayDischi : [],
        arrayGeneri : [],
        selectGenere: ''
    },
    mounted() {
        axios.get('./api/index.php')
        .then((res) => {

          this.arrayDischi = res.data
          console.log(this.arrayDischi)

          this.arrayDischi.forEach((elem) => {

            console.log(elem)
  
            //condizione
            if (!this.arrayGeneri.includes(elem.genre)) {
              this.arrayGeneri.push(elem.genre);
            }
  
          })
  
        })
      
    },
    beforeUpdate() {
  
    },
    methods: {
        ricercaProdotti() {
            axios.get(`./api/index.php?genre=${this.selectGenere}`)
            .then((res) => {
              this.arrayDischi = res.data
            })
          }
    }
  })