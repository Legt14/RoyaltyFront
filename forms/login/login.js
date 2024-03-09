import "../../style.css";

const app = document.getElementById("app");

app.innerHTML = `
<section class="flex" >
  <section class="flex flex-col gap-9 min-h-screen w-[32rem] bg-silverSand p-2 items-center justify-center ">
    <figure>
      <img src="#" alt="" class="w-14 h-14 rounded-md bg-bluewood" >
    </figure>
    <form action="POST" class="flex flex-col gap-4">
      <label for="email" class="flex flex-col gap-2" >
        <span class='font-semibold ' >Email</span>
        <input type="email" name="email" id="email" class="outline-none h-7 bg-bluewoodDark/40 border border-bluewood rounded-md px-2 w-64" >
      </label>
      <label for="password" class="flex flex-col gap-2">
        <span class="font-semibold" >Password</span>
        <input type="password" name="password" id="password" class="outline-none h-7 bg-bluewoodDark/40 border border-bluewood rounded-md px-2 w-64" >
      </label>
    </form>
    <section class="flex gap-5 w-ful" >

    <button class="font-bold w-20 h-8 border-2 border-bluewood rounded-md transition duration-300 delay-75 ease-in hover:scale-110 hover:bg-bluewood hover:text-porcelain " >recover password</button>
    <button type=button id='btnLogin' class="font-bold w-20 h-8 border-2 border-bluewood rounded-md transition duration-300 delay-75 ease-in hover:scale-110 hover:bg-bluewood hover:text-porcelain " >Login</button>
    </section>
  </section>
  <section class="w-full min-h-full flex items-center justify-center " >
    <figure class="" >
      <img src="#" alt="" class="w-56 h-56 bg-bluewood rounded-lg " >
    </figure>
  </section>
</section>
`;

const email = document.getElementById("email");
const password = document.getElementById("password");
const btnLogin = document
  .getElementById("btnLogin")
  .addEventListener("click", () => {
    console.log(email.value);
    console.log(password.value);
  });
