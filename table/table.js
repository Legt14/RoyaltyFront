const app = document.getElementById("app");

const customData = [
  {
    Franchisee: "1",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "2",
    Location: "New york",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "20000",
    Royalty: "1400",
    Marketing_Fee: "300.00",
    "": "",
  },
  {
    Franchisee: "3",
    Location: "Doral",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "4",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "5",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "6",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "7",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "8",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
  },
  {
    Franchisee: "9",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "10",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "11",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "12",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "13",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "14",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "15",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
    "": "",
  },
  {
    Franchisee: "16",
    Location: "Miami",
    Owner: "Pedro",
    Point_of_Sale_Revenue: "2000",
    Care_Credit: "22",
    DocPay: "22",
    Zelle: "22",
    Cash: "2",
    WebPage: "2",
    Other_Apps: "2",
    Total: "2072",
    Royalty: "145.04",
    Marketing_Fee: "31.08",
  },
];

app.innerHTML = `
<section class="h-full flex  flex-col p-4 gap-4">
  <h1 class="text-6xl font-bold" >PaymentReport</h1>
<section class="w-full grid  grid-cols-13 text-sm capitalize border-b-2 border-bluewood">
  <section class="font-bold">franchisee</section>
  <section class="font-bold">location</section>
  <section class="font-bold">owner</section>
  <section class="font-bold">Point of Sale Revenue</section>
  <section class="font-bold">Care Credit</section>
  <section class="font-bold">DocPay</section>
  <section class="font-bold">Zelle</section>
  <section class="font-bold">Cash</section>
  <section class="font-bold">WebPage</section>
  <section class="font-bold">Other Apps</section>
  <section class="font-bold">Total</section>
  <section class="font-bold">Royalty 7%</section>
  <section class="font-bold">Marketing Fee 1,5%</section>
</section>
  <section id="table" class="grid grid-cols-13 border-b-2 border-bluewood"></section>
    <section id='total' >
    </section>
</section>
`;

let totalSum = 0;
let royaltySum = 0;
let marketingSum = 0;
for (let index = 0; index < customData.length; index++) {
  totalSum += parseInt(customData[index].Total);
  royaltySum += parseInt(customData[index].Royalty);
  marketingSum += parseInt(customData[index].Marketing_Fee);
}
const total = document.getElementById("total");

console.log(totalSum);
if (total) {
  total.innerHTML = `
<section class='grid grid-cols-13 '>
      <span class='col-end-12 self-end'>${totalSum}</span>
      <span>${royaltySum}</span>
      <span>${marketingSum}</span>
<section>
`;
}

const table = document.getElementById("table");
customData.forEach((data) => {
  const franchisee = document.createElement("section");
  franchisee.textContent = data.Franchisee;

  const location = document.createElement("section");
  location.textContent = data.Location;

  const owner = document.createElement("section");
  owner.textContent = data.Owner;

  const point_of_Sale_Revenue = document.createElement("section");
  point_of_Sale_Revenue.textContent = data.Point_of_Sale_Revenue;

  const care_Credit = document.createElement("section");
  care_Credit.textContent = data.Care_Credit;

  const docPay = document.createElement("section");
  docPay.textContent = data.DocPay;

  const zelle = document.createElement("section");
  zelle.textContent = data.Zelle;

  const cash = document.createElement("section");
  cash.textContent = data.Cash;

  const webPage = document.createElement("section");
  webPage.textContent = data.WebPage;

  const other_apps = document.createElement("section");
  other_apps.textContent = data.Other_Apps;

  const total = document.createElement("section");
  total.textContent = data.Total;

  const royalty = document.createElement("section");
  royalty.textContent = data.Royalty;

  const marketing_fee = document.createElement("section");
  marketing_fee.textContent = data.Marketing_Fee;

  table.appendChild(franchisee);
  table.appendChild(location);
  table.appendChild(owner);
  table.appendChild(point_of_Sale_Revenue);
  table.appendChild(care_Credit);
  table.appendChild(docPay);
  table.appendChild(zelle);
  table.appendChild(cash);
  table.appendChild(webPage);
  table.appendChild(other_apps);
  table.appendChild(total);
  table.appendChild(royalty);
  table.appendChild(marketing_fee);
});
