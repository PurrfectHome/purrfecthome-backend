const usersSeed = [
  {
    "fullname": "John Doe",
    "username": "johndoe",
    "email": "johndoe@mail.com",
    "password": "11111",
    "long": 106.845130,
    "lat": -6.208763,
    "accountType": "regular",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "fullname": "Jane Smith",
    "username": "janesmith",
    "email": "janesmith@mail.com",
    "password": "11111",
    "long": 107.619125,
    "lat": -6.917464,
    "accountType": "regular",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "fullname": "Ahmad Abdullah",
    "username": "ahmadabdullah",
    "email": "ahmadabdullah@mail.com",
    "password": "11111",
    "long": 110.418812,
    "lat": -7.556578,
    "accountType": "regular",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "fullname": "Siti Nurul",
    "username": "sitinurul",
    "email": "sitinurul@mail.com",
    "password": "11111",
    "long": 112.620516,
    "lat": -7.257472,
    "accountType": "regular",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "fullname": "Budi Santoso",
    "username": "budisantoso",
    "email": "budisantoso@mail.com",
    "password": "11111",
    "long": 107.602807,
    "lat": -6.966700,
    "accountType": "regular",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "fullname": "Rina Anggraeni",
    "username": "rinaanggraeni",
    "email": "rinaanggraeni@mail.com",
    "password": "11111",
    "long": 110.373283,
    "lat": -7.795579,
    "accountType": "regular",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "fullname": "Fahmi Setiawan",
    "username": "fahmisetiawan",
    "email": "fahmisetiawan@mail.com",
    "password": "11111",
    "long": 106.827183,
    "lat": -6.208821,
    "accountType": "regular",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "fullname": "Diana Kusuma",
    "username": "dianakusuma",
    "email": "dianakusuma@mail.com",
    "password": "11111",
    "long": 110.388062,
    "lat": -7.767580,
    "accountType": "regular",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "fullname": "Rizki Pratama",
    "username": "rizkipratama",
    "email": "rizkipratama@mail.com",
    "password": "11111",
    "long": 112.751049,
    "lat": -7.274217,
    "accountType": "regular",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "fullname": "Eva Widjaja",
    "username": "evawidjaja",
    "email": "evawidjaja@mail.com",
    "password": "11111",
    "long": 110.425628,
    "lat": -7.782889,
    "accountType": "regular",
    "createdAt": "",
    "updatedAt": ""
  }
];


const postsSeed = [
  {
    "name": "Mittens",
    "size": "small",
    "age": "young",
    "breed": "Maine Coon",
    "gender": "male",
    "color": "gray",
    "description": "Adorable and playful kitten with soft fur. Loves to cuddle.",
    "photo": ["https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/03/maine-coon-cat-breed.jpg", "https://www.thesprucepets.com/thmb/MzKr6fC-v8W4D4oz2p9wWCwAFms=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg"],
    "loc": {
      "type": "Point",
      "coordinates": [
        110.407395, -7.090911
      ]
    },
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Whiskers",
    "size": "medium",
    "age": "adult",
    "breed": "Siamese",
    "gender": "female",
    "color": "cream",
    "description": "Friendly and elegant Siamese cat looking for a new home.",
    "photo": ["https://catastic.pet/wp-content/uploads/2023/03/siamese-cat-price.jpg", "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg?w=3840&q=75&auto=format"],
    "loc": {
      "type": "Point",
      "coordinates": [
        107.607071, -6.920432
      ]
    },
    "status": "adopted",
    "statusPrice": "With Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Fluffy",
    "size": "large",
    "age": "old",
    "breed": "Persian",
    "gender": "male",
    "color": "white",
    "description": "Gentle and wise Persian cat seeking a quiet and loving retirement home.",
    "photo": ["https://www.bubblypet.com/wp-content/uploads/2022/07/Tabby-gray-Persian-cat-playing-in-garden-1200x800.jpg", "https://i.pinimg.com/originals/b4/e7/d4/b4e7d46063c31ae1f5dfb66a6bf30634.jpg"],
    "loc": {
      "type": "Point",
      "coordinates": [
        107.896507, -7.351570
      ]
    },
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Luna",
    "size": "medium",
    "age": "young",
    "breed": "British Shorthair",
    "gender": "female",
    "color": "blue",
    "description": "Playful and curious British Shorthair kitten with striking blue fur.",
    "photo": ["https://img.freepik.com/free-photo/grey-kitty-with-monochrome-wall-her_23-2148955116.jpg?w=740&t=st=1702696269~exp=1702696869~hmac=4030d00a6ac17986b59a06eb36600f2508244f5b97686aaeb32f255f6cb2aa38", "https://img.freepik.com/free-photo/grey-cat-lying-looking-up_176474-6827.jpg?w=996&t=st=1702696353~exp=1702696953~hmac=4e3bffc6e216ce129eb26ced74e4c99b76040e5a050eea6d1976be108b9f794f"],
    "loc": {
      "type": "Point",
      "coordinates": [
        105.851686, -6.610044
      ]
    },
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Leo",
    "size": "small",
    "age": "adult",
    "breed": "Bengal",
    "gender": "male",
    "color": "spotted",
    "description": "Energetic Bengal cat with beautiful spotted coat. Loves to play and climb.",
    "photo": ["https://img.freepik.com/free-photo/gold-bengal-cat-white-space_155003-12734.jpg?w=996&t=st=1702696471~exp=1702697071~hmac=e31345e33b13baa05a248cd38855f53a3878e69f973835961e7689134e10b1e4", "https://img.freepik.com/free-photo/cute-bengal-cat-looking-up_181624-34559.jpg?w=360&t=st=1702696434~exp=1702697034~hmac=40a8c2a3aa63b9287ef1cc1353f3a6df94aac2b6886c0dc9ac3dd2cf4d1902dd"],
    "loc": {
      "type": "Point",
      "coordinates": [
        107.632659, -6.828261
      ]
    },
    "status": "adopted",
    "statusPrice": "With Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Cleo",
    "size": "large",
    "age": "old",
    "breed": "Ragdoll",
    "gender": "female",
    "color": "seal point",
    "description": "Gentle and affectionate Ragdoll cat looking for a calm and loving home.",
    "photo": ["https://img.freepik.com/free-photo/ragdoll-breed-cat-face-close-up_2829-11417.jpg?w=740&t=st=1702696607~exp=1702697207~hmac=9140794249aa8af34abd690ca13404085142c907c83f043f55d2f5b72e564ace", "https://img.freepik.com/free-photo/ragdoll-breed-cat-face-close-up_2829-11405.jpg?w=996&t=st=1702696696~exp=1702697296~hmac=3ff58586e0d806d449e1c30754630914677d16249da8c09a097bda4e502b6d5d"],
    "loc": {
      "type": "Point",
      "coordinates": [
        109.457608, -7.569437
      ]
    },
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Sphinx",
    "size": "medium",
    "age": "young",
    "breed": "Sphynx",
    "gender": "male",
    "color": "pink",
    "description": "Adventurous and friendly Sphynx kitten with a unique hairless coat.",
    "photo": ["https://catevolution.co.nz/cdn/shop/articles/sphynx-Cats-1200x750.png?v=1674628187&width=1100", "https://www.aspcapetinsurance.com/media/2417/all-about-sphynx-cats.jpg"],
    "loc": {
      "type": "Point",
      "coordinates": [
        111.915791, -7.377721
      ]
    },
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Misty",
    "size": "large",
    "age": "adult",
    "breed": "Abyssinian",
    "gender": "female",
    "color": "fawn",
    "description": "Graceful Abyssinian cat seeking a loving and active home.",
    "photo": ["https://lollybrown.com/wp-content/uploads/2019/08/abyssinian-cat-2754331_960_720.jpg", "https://patch.com/img/cdn20/users/24142232/20230403/110235/styles/patch_image/public/abyssinian-cats-are-known-for-their-large-ears-and-unique-look-credit-m___03110217103.jpg"],
    "loc": {
      "type": "Point",
      "coordinates": [
        112.343852, -7.207720
      ]
    },
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Oreo",
    "size": "small",
    "age": "young",
    "breed": "Scottish Fold",
    "gender": "male",
    "color": "black and white",
    "description": "Adorable Scottish Fold kitten with distinctive folded ears. Loves to play with toys.",
    "photo": ["https://static.wixstatic.com/media/bfc548_537281c099d14b279e36359729dcc219~mv2.jpg/v1/fill/w_1776,h_1212,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bfc548_537281c099d14b279e36359729dcc219~mv2.jpg", "https://media.graphassets.com/resize=height:360,width:1280/output=format:webp/P3ANVZPDQ3OJNE9YImTw?width=1280"],
    "loc": {
      "type": "Point",
      "coordinates": [
        110.576085, -7.687040
      ]
    },
    "status": "adopted",
    "statusPrice": "With Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Nala",
    "size": "medium",
    "age": "adult",
    "breed": "Norwegian Forest Cat",
    "gender": "female",
    "color": "tabby",
    "description": "Sweet and majestic Norwegian Forest Cat looking for a warm and cozy home.",
    "photo": ["https://cdn1.tedsby.com/tb/large/storage/5/4/7/547417/handmade-cat-norwegian-forest-named-aslan.jpg", "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/22032626/fakta-menarik-mengenai-norwegian-forest-cat-halodoc.jpg.webp"],
    "loc": {
      "type": "Point",
      "coordinates": [
        107.497859, -7.185921
      ]
    },
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Siber",
    "size": "large",
    "age": "old",
    "breed": "Siberian",
    "gender": "male",
    "color": "brown",
    "description": "Gentle and fluffy Siberian cat seeking a peaceful retirement home.",
    "photo": ["https://images.saymedia-content.com/.image/t_share/MTc0Mzc0Nzk3Mzg2NzIwOTAy/hereditary-diseases-of-the-siberian-forest-cat.jpg", "https://excitedcats.com/wp-content/uploads/2023/07/siberian-cat-in-the-snow_Emil-Helge-Shutterstock.jpg"],
    "loc": {
      "type": "Point",
      "coordinates": [
        113.214564, -7.033295
      ]
    },
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Whiskey",
    "size": "medium",
    "age": "young",
    "breed": "Exotic Shorthair",
    "gender": "male",
    "color": "silver",
    "description": "Charming Exotic Shorthair kitten with a sleek silver coat. Loves to play and explore.",
    "photo": ["https://www.thesprucepets.com/thmb/ZQNIcRsqjASnDlUt7tRwiCLcZlo=/2127x0/filters:no_upscale():strip_icc()/GettyImages-469019865-3e040624b88e42d0b2d749c9e8897f9f.jpg", "https://cattitudedaily.com/wp-content/uploads/2021/11/brown-exotic-shorthair-tabby-scaled.jpg"],
    "loc": {
      "type": "Point",
      "coordinates": [
        115.105474, 8.557121
      ]
    },
    "status": "adopted",
    "statusPrice": "With Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  }
];


module.exports = { usersSeed, postsSeed };