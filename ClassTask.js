// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.
//P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.

// function Clock({ template }) {
  
//         let timer;
      
//         function render() {
//           let date = new Date();
      
//           let hours = date.getHours();
//           if (hours < 10) hours = '0' + hours;
      
//           let mins = date.getMinutes();
//           if (mins < 10) mins = '0' + mins;
      
//           let secs = date.getSeconds();
//           if (secs < 10) secs = '0' + secs;
      
//           let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
      
//           console.log(output);
//         }
      
//         this.stop = function() {
//           clearInterval(timer);
//         };
      
//         this.start = function() {
//           render();
//           timer = setInterval(render, 1000);
//         };
      
//       }
      
//       let clock = new Clock({template: 'h:m:s'});
//       clock.start();


class rewritedClock{
  constructor(template){
    this.template = template;
    this.timer
  }
  render(){
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
  }
  start(){
    this.render();
    function binding(){
      this.render();
    }
    this.timer = setInterval(binding.bind(clock), 1000);
  }
  stop(){
   clearInterval(this.timer);       
  }
}

let clock = new rewritedClock("h:m:s");
clock.start();