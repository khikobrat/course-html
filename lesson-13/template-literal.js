// Список URL изображений
const imageUrls = [
  "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg",
  "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/325045/pexels-photo-325045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/67552/giraffe-tall-mammal-africa-67552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://via.placeholder.com/200/0000FF",
  "https://via.placeholder.com/200/00FF00",
  "https://via.placeholder.com/200/FF0000",
  "https://via.placeholder.com/200/FFFF00",
];

// Получаем элемент галереи
// const gallery = document.getElementById("gallery");

// // Генерируем HTML для изображений
// const generateGalleryHTML = (imageUrls) => {
//   return imageUrls
//     .map(
//       (url, index) => `
//         <div class="item">
//             <img src="${url}" alt="Image">
//         </div>
//     `
//     )
//     .join("");
// };

// Вставляем HTML в галерею
// gallery.innerHTML = generateGalleryHTML(imageUrls);

// Анимируем появление изображений
// const animateImages = () => {
//   const imageContainers = document.querySelectorAll(".image-container");
//   imageContainers.forEach((container, index) => {
//     setTimeout(() => {
//       container.classList.add("show");
//     }, index * 200); // Задержка для последовательного появления
//   });
// };

// Анимируем появление изображений после загрузки страницы
// window.addEventListener("load", animateImages);


// Extracting values from an array
// const numbers = [1, 2, 3, 4, 5];

// const [first, second] = numbers;
// console.log(first);
// console.log(second); 

// Ignoring some values
// const [one, , three, , five] = numbers;
// console.log(one); // Output: 1
// console.log(three); // Output: 3
// console.log(five); // Output: 5

// Ignoring some values
// const [one, , three, , five] = numbers;
// console.log(one); // Output: 1
// console.log(three); // Output: 3
// console.log(five); // Output: 5

// Swapping values using destructuring assignment
// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a); // Output: 2
// console.log(b); // Output: 1

// Destructuring objects
// const person = {
//   name: 'John',
//   age: 30,
//   country: 'USA'
// };

// const { name, age } = person;
// console.log(name); // Output: John
// console.log(age); // Output: 30

// Nested destructuring
// const student = {
//   name: 'Alice',
//   info: {
//     grade: 'A',
//     subjects: ['Math', 'Science']
//   }
// };

// const { name, info: { grade, subjects } } = student;
// console.log(name); // Output: Alice
// console.log(grade); // Output: A
// console.log(subjects); // Output: ['Math', 'Science']

// Function parameter destructuring
// function greet({ name, age }) {
//   console.log(`Hello, ${name}! You are ${age} years old.`);
// }

// const personData = { name: 'Alice', age: 25 };
// greet(personData); // Output: Hello, Alice! You are 25 years old.















function traingle() {
    for (let i = 0; i <=15 ; i++) {
        let line = ''
        for (let j = 0; j < i; j++) {
            line = line+'*'
        }
        console.log(line)
    }
}

// traingle();
function traingleReverced() {
  for (let i = 0; i <= 10; i++) {
    let line = ``;
    for (let j = 10; j >= 0; j--) {
        if(j<i) {
            line = line + "*";
        } else {
            line = line + ` `;
        }
    }
    console.log(line);
  }
}

traingleReverced()
