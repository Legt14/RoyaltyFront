const app = document.getElementById("app");

app.innerHTML = `
<section class="w-full h-full p-6 flex flex-col gap-7 items-center justify-center">
  <h1 class="text-6xl font-bold" >Franchisee</h1>
  <form action="POST" class='w-full h-full flex gap-14 items-start justify-center' id='form'>
    <section class='flex flex-col gap-4'>
    <label for="location" class='flex flex-col'>
      <span>Location</span>
      <input type="text" name="location" id="location" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none' />
    </label>
    <label for="address" class='flex flex-col'>
      <span>Address</span>
      <input type="text" name="address" id="address" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'/>
    </label>
    <label for="owner" class='flex flex-col'>
      <span>Owner</span>
      <input type="text" name="owner" id="owner" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'/>
    </label>
    <label for="address2" class='flex flex-col'>
      <span>Address</span>
      <input type="text" name="address2" id="address2" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'/>
    </label>
    <label for="dateStart" class='flex flex-col'>
      <span>Date Start</span>
      <input type="date" name="dateStart" id="dateStart" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'/>
    </label>
    </section>
    <section class='flex flex-col gap-4'>

    <label for="bankName" class='flex flex-col'>
      <span>Bank Name</span>
      <input type="text" name="bankName" id="bankName" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'/>
    </label>
    <label for="debitCard" class='flex flex-col'>
      <span>Debit Card Nro</span>
      <input type="text" name="debitCard" id='debitCard' class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'/>
    </label>
    <label for="dateInit" class='flex flex-col'>
      <span>Date Init</span>
      <input type="text" name="dateInit" id="dateInit" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'/>
    </label>
    <label for="dateEnd" class='flex flex-col'>
      <span>Date End</span>
      <input type="text" name="dateEnd" id="dateEnd" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'/>
    </label>
    </section>
  </form>
    <button type="submit" id='btnSubmit' class="font-bold w-20 h-8 border-2 border-bluewood rounded-md transition duration-300 delay-75 ease-in hover:scale-110 hover:bg-bluewood hover:text-porcelain uppercase" >Add</button>
</section>

`;

// you have two options, 1: get data one by one. 2: get data from form

// option 1
const location = document.getElementById("location").value;
const address = document.getElementById("address").value;
const ower = document.getElementById("owner").value;
const address2 = document.getElementById("address2").value;
const dateStart = document.getElementById("dateStart").value;
const bankName = document.getElementById("bankName").value;
const debitCard = document.getElementById("debitCard").value;
const dateInit = document.getElementById("dateInit").value;
const dateEnd = document.getElementById("dateEnd").value;

// option 2
const btnSubmit = document
  .getElementById("btnSubmit")
  .addEventListener("click", (e) => {
    e.preventDefault();
    var formData = new FormData(form);
    console.log(Object.fromEntries(formData));

    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  });
