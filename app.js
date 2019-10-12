Vue.component('octacondeveloper-title',{
    template: `
    <section class="hero is-success">
        <div class="hero-body">
            <div class="container">
                <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
                <ul>
                <li><a href="#">OctaconDeveloper</a></li>
                <li><a href="#">VueJS</a></li>
                <li><a href="#">Simple Calculator</a></li>
                </ul>
                </nav>
            </div>
        </div>
    </section>`

});

Vue.component('octacondeveloper-body',{
    template: `
    `

});



Vue.component('octacondeveloper-button',{
    template: `
    <a class="button is-large"> 
        <h1>
            <slot></slot>
        </h1>
    </a>`,
    

});


new Vue({
    el :'#root',
    data: {
        first: 0,
        second: '',
        operator: '',
        result: '',
    },
    methods: {
        lis(msg) {
            if(this.result!=''){
                this.first = 0;
                this.second = '';
                this.result = '';
                this.operator = '';
                this.first += ''+msg;
            }else{
                if(this.operator== ''){
                    if(this.first == 0){ this.first='';}
                    this.first += ''+msg;
                }else{
                    this.second += ''+msg;
                }
            }
        },
        ops(e) {
            if(this.second==''){
                this.operator=e
            }
           
        },
        del(){
            if(this.operator== ''){
                if(this.first==0){
                    this.first = 0;
                }else{
                    this.first = this.first.slice(0, -1);
                }
            }else{
                if(this.second==''){
                    this.second = 0;
                }else{
                    this.second = this.second.slice(0, -1);
                }
            }
        },
        cls(){
            this.first = 0;
            this.second = '';
            this.result = '';
            this.operator = '';
        },
        calculate(){
            this.result = eval(Number(this.first)+this.operator+Number(this.second));
        }
    }
   
});