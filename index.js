// add event listener to the two methods
document.addEventListener('DOMContentLoaded', ()=>{
      business();
      picha();
})
// fetch data to convert to js object
function business (){
      fetch('http://localhost:3000/Business').then((resp)=> resp.json())
      .then(data => {
            // segment the object to a sigle variable
            data.forEach(element => {
                  disp(element);
            });
            
      })
} 

function disp (element){
      const card = document.createElement('div')
      const buttonn = document.createElement("button")
      buttonn.innerHTML = "More";
      buttonn.id = 'elementId'
      card.innerHTML = `
      <div class="card swiper-slide">
            <div class="card_image">
                    <img src="/assets/0591f6a25bf827f1959e0dbe760c6c1c.jpg" alt="">
            </div>
            <div class="card_content" >
                   <span class="card_title">${element.title}</span>
                    <p class="card_text">${element.description}</p>
            </div> 
      </div>`
                   card.append(buttonn)
                  const btn = document.getElementById('card_id1').append(card)
            buttonn.addEventListener('click', ()=>{
               clicking(element)   
            })
                 
      }
function clicking (element){
      console.log(element)
      document.getElementById('title').innerHTML = element.title
      document.getElementById('disc').innerHTML = element.category

}
