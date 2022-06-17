$(document).ready(function(){
    $('.mySlider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
  });

  const api = [{
    name: 'John',
    age: 18,
    img: 'https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x',
    job:'Freelancer'
    
},
{
    name: 'David',
    age: 25,
    img: 'https://pbs.twimg.com/profile_images/606196213369720832/lSvWN_q-_400x400.jpg',
    job:'Programmer'
},
{
    name: 'Alice',
    age: 23,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oNqnXQP4-i-snZY1Lz2ETNq1AfGDeTHlw6DeRWw8I6OKk-7U4GRUeV0RmkVr9N8M2_s&usqp=CAU',
    job:'Game Dev'
},
{
    name: 'Leo',
    age: 19,
    img: 'https://www.henrimar.com.br/wp-content/uploads/2017/06/random-user-13.jpg',
    job:'Seller'
},
{
    name: 'Cristian',
    age: 32,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14AWl0DCXMJisXY0KxFHI0FGxYb61T1gr8JaEBq7aJ9Ai9NpQMfSvNnM0SzP2SQ2ez4E&usqp=CAU',
    job:'SEO'
},
{
    name: 'Ronald',
    age: 26,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ92-QmsrGKSJOPlsZ7ywBGJQA1oVd2qajRbsIqIIa3lIdaAOL_0OHpI32O2JegHXV2d8&usqp=CAU',
    job:'Barman'
},

]

const mySlider = document.querySelector('.mySlider')


api.map(el=>{
    const box = document.createElement('div')
    const image = document.createElement('img')
    image.src = el.img
    mySlider.append(box)
    box.append(image)
})
 