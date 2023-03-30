const { createApp } = Vue;

createApp({
    data() {
        return {
            toDo : [
                {
                    text: "fare la spesa",
                    done: true
                },
                {
                    text: "dar da mangiare al cane",
                    done: true
                },
                {
                    text: "fare i compiti",
                    done: false
                },
                {
                    text: "spolverare",
                    done: true
                },
            ]
        }
    },
    methods : {
        finished(){
            if (this.done === true) {
               this.text.add("done");
               console.log(this);
            }
            
        }
    }

}).mount("#app");