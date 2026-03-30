
import checkedShirt from "../assets/images/checked-shirt.png"
import formalShirt from "../assets/images/formal-shirt.png"
import causalShirt from "../assets/images/causal-shirt.png"
import blueJean from "../assets/images/blue-jean.png"
import blackJean from "../assets/images/black-jean.png"
import baggyJean from "../assets/images/baggy-jean.png"
import overSized from "../assets/images/oversized-tshirt.png"
import collarNeck from "../assets/images/collarneck-tshirt.png"
import sleeveless from "../assets/images/sleeveless-tshirt.png"
import pulloverHoodie from "../assets/images/pullover-hoodie.png"
import graphic from "../assets/images/graphic-hoodie.png"
import halfZip from "../assets/images/halfzip-hoodie.png"
import kurtiTop from "../assets/images/kurti-top.png"
import PartyDress from "../assets/images/party-dress.png"
import GreciiLook from "../assets/images/greciilook-dress.png"
import BlueGirlJean from "../assets/images/bluegirl-jean.png"
import BlackToneJean from "../assets/images/blacktone-jean.png"
import BaggyGirlJean from "../assets/images/baggygirl-jean.png"
import CottonSilk from "../assets/images/cottonsilk-saree.png"
import LinenCotton from "../assets/images/linencotton-saree.png"
import HalfSaree from "../assets/images/half-saree.png"

const products = [
  {
    id: 1,
    title: "Formal Shirt",
    price: 999,
    image:formalShirt,
    category: "men",
    type: "shirt",
    sale: false
  },
  
  {
  id: 2,
  title: "Casual Shirt",
  price: 1099,
  image:causalShirt,
  category: "men",
  type: "shirt",
  sale: false
},
{
  id: 3,
  title: "Checked Shirt",
  price: 1199,
  image:checkedShirt,
  category: "men",
  type: "shirt",
  sale: false
},
  {
    id: 4,
    title: "Blue Jean",
    price: 1499,
    image: blueJean,
    category: "men",
    type: "jeans",
    sale: true
  },
  {
  id: 5,
  title: "Black Jean",
  price: 1599,
  image: blackJean,
  category: "men",
  type: "jeans",
  sale: false
},
{
  id: 6,
  title: "Baggy Jean",
  price: 1699,
  image: baggyJean,
  category: "men",
  type: "jeans",
  sale: true
},
{
  id: 7,
  title: "OverSized T-Shirt",
  price: 899,
  image: overSized,
  category: "men",
  type: "tshirt",
  sale: false
},
{
  id: 8,
  title: "Collar Neck T-Shirt",
  price: 999,
  image: collarNeck,
  category: "men",
  type: "tshirt",
  sale: false
},
{
    id: 9,
    title: "Sleeveless T-Shirt",
    price: 799,
    image: sleeveless,
    category: "men",
    type: "tshirt",
    sale: false
  },
  {
    id: 10,
    title: "Pullover Hoodie",
    price: 1299,
    image: pulloverHoodie,
    category: "men",
    type: "hoodie",
    sale: false
  },
  {
  id: 11,
  title: "Graphic Hoodie",
  price: 1399,
  image: graphic,
  category: "men",
  type: "hoodie",
  sale: false
},
{
  id: 12,
  title: "Half-Zip Hoodie",
  price: 1499,
  image: halfZip,
  category: "men",
  type: "hoodie",
  sale: false
},


  {
    id: 13,
    title: "Kurti Top",
    price: 1999,
    image: kurtiTop,
    category: "women",
    type: "dress",
    sale: false
  },
  {
  id: 14,
  title: "GreciiLook Stylish Dress",
  price: 2199,
  image: GreciiLook,
  category: "women",
  type: "dress",
  sale: false
},
{
  id: 15,
  title: "Party Dress",
  price: 2499,
  image: PartyDress,
  category: "women",
  type: "dress",
  sale: false
},
  {
    id: 16,
    title: "Blue Jean",
    price: 1599,
    image:BlueGirlJean,
    category: "women",
    type: "jeans",
    sale: true
  },
  {
  id: 17,
  title: "Black Tone Jean",
  price: 1699,
  image: BlackToneJean,
  category: "women",
  type: "jeans",
  sale: false
},
{
  id: 18,
  title: "Baggy Jeans",
  price: 1799,
  image: BaggyGirlJean,
  category: "women",
  type: "jeans",
  sale: true
},
{
  id: 19,
  title: "Cotton Silk Saree",
  price: 999,
  image: CottonSilk,
  category: "women",
  type: "Sarees",
  sale: false
},
{
  id: 20,
  title: "Linen Cotton Saree",
  price: 899,
  image: LinenCotton,
  category: "women",
  type: "Sarees",
  sale: false
},
{
  id: 21,
  title: "Half Saree",
  price: 1099,
  image: HalfSaree,
  category: "women",
  type: "Sarees",
  sale: false
},
];

export default products;