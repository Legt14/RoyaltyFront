const app = document.getElementById("app");
app.innerHTML = `
<section class='flex flex-col p-6 gap-3'>
  <section class="w-full flex items-center justify-center">
  <h1 class="text-6xl font-bold" >Payments</h1>
  </section>
  <form method="POST" class="w-full h-full capitalize flex flex-col items-center justify-center gap-8" >
    <section class="flex flex-col justify-start gap-4 w-full px-9">
    <label for="month" class=" flex items-center gap-4">
      <span>month</span>
      <input type="date" name="month" id="month" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
    </label>
    <label for="file" class="flex items-center gap-4">
      <span>Evidence</span>
      <input type="file" name="file" id="file" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none' >
    </label>
    </section>
    <section class="flex flex-col items-end justify-center gap-4 h-full">

    <label for="pointSaleRevenue" class=" flex items-center gap-4">
      <span>
        Point of Sale Revenue
      </span>
      <input type="text" name="pointSaleRevenue_text" id="pointSaleRevenue_text" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
      <input type="file" name="pointSaleRevenue" id="pointSaleRevenue" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
    </label>
    <label for="careCredit" class="flex items-center justify-end gap-4">
      <span>
        Care Credit
      </span>
      <input type="text" name="careCredit_text" id="careCredit_text" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
      <input type="file" name="careCredit" id="careCredit" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
    </label>
    <label for="docPlay" class='flex items-center gap-4' >
      <span>Doc play</span>
      <input type="text" name="docPlay_text" id="docPlay_text" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
      <input type="file" name="docPlay" id="docPlay" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
    </label>
    <label for="zelle" class="flex items-center gap-4">
      <span>
        Zelle
      </span>
      <input type="text" name="zelle_text" id="zelle_text" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
      <input type="file" name="zelle" id="zelle" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
    </label>
    <label for="cash" class="flex items-center gap-4">
      <span>
        Cash
      </span>
      <input type="text" name="cash_text" id="cash_text" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
      <input type="file" name="cash" id="cash" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
    </label>
    <label for="webPage" class="flex items-center gap-4">
      <span>
        Web Page
      </span>
      <input type="text" name="webPage_text" id="webPage_text" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
      <input type="file" name="webPage" id="webPage" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
    </label >
    <label for="otherApp" class="flex items-center gap-4">
      <span>Other app</span>
      <input type="text" name="otherApp_text" id="otherApp_text" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
      <input type="file" name="otherApp" id="otherApp" class='h-7 rounded-lg bg-gray-500/15 px-2 outline-none'>
    </label>
    </section>
  </form>
  <section class="flex flex-col gap-2 py-5">
  <span class="text-lg font-bold capitalize">total: </span>
  <span class="text-lg font-bold capitalize">Royalty </span>
  <span class="text-lg font-bold capitalize">marketing fee</span>
  </section>
  <section class="w-full flex items-center justify-center">
    <button type="submit" id="btnSubmit">add</button>
  </section>
</section>

`;

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
