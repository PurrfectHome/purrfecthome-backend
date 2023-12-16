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
    "age": "kitten",
    "breed": "Maine Coon",
    "gender": "male",
    "color": "gray",
    "description": "Adorable and playful kitten with soft fur. Loves to cuddle.",
    "photo": ["https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/03/maine-coon-cat-breed.jpg", "https://www.thesprucepets.com/thmb/MzKr6fC-v8W4D4oz2p9wWCwAFms=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg"],
    "long": 106.845130,
    "lat": -6.208763,
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
    "long": 107.619125,
    "lat": -6.917464,
    "status": "adopted",
    "statusPrice": "With Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Fluffy",
    "size": "big",
    "age": "old",
    "breed": "Persian",
    "gender": "male",
    "color": "white",
    "description": "Gentle and wise Persian cat seeking a quiet and loving retirement home.",
    "photo": ["https://www.bubblypet.com/wp-content/uploads/2022/07/Tabby-gray-Persian-cat-playing-in-garden-1200x800.jpg", "https://i.pinimg.com/originals/b4/e7/d4/b4e7d46063c31ae1f5dfb66a6bf30634.jpg"],
    "long": 110.418812,
    "lat": -7.556578,
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
    "age": "kitten",
    "breed": "British Shorthair",
    "gender": "female",
    "color": "blue",
    "description": "Playful and curious British Shorthair kitten with striking blue fur.",
    "photo": ["https://img.freepik.com/free-photo/grey-kitty-with-monochrome-wall-her_23-2148955116.jpg?w=740&t=st=1702696269~exp=1702696869~hmac=4030d00a6ac17986b59a06eb36600f2508244f5b97686aaeb32f255f6cb2aa38", "https://img.freepik.com/free-photo/grey-cat-lying-looking-up_176474-6827.jpg?w=996&t=st=1702696353~exp=1702696953~hmac=4e3bffc6e216ce129eb26ced74e4c99b76040e5a050eea6d1976be108b9f794f"],
    "long": 112.620516,
    "lat": -7.257472,
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
    "long": 107.602807,
    "lat": -6.966700,
    "status": "adopted",
    "statusPrice": "With Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Cleo",
    "size": "big",
    "age": "old",
    "breed": "Ragdoll",
    "gender": "female",
    "color": "seal point",
    "description": "Gentle and affectionate Ragdoll cat looking for a calm and loving home.",
    "photo": ["https://img.freepik.com/free-photo/ragdoll-breed-cat-face-close-up_2829-11417.jpg?w=740&t=st=1702696607~exp=1702697207~hmac=9140794249aa8af34abd690ca13404085142c907c83f043f55d2f5b72e564ace", "https://img.freepik.com/free-photo/ragdoll-breed-cat-face-close-up_2829-11405.jpg?w=996&t=st=1702696696~exp=1702697296~hmac=3ff58586e0d806d449e1c30754630914677d16249da8c09a097bda4e502b6d5d"],
    "long": 110.373283,
    "lat": -7.795579,
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
    "age": "kitten",
    "breed": "Sphynx",
    "gender": "male",
    "color": "pink",
    "description": "Adventurous and friendly Sphynx kitten with a unique hairless coat.",
    "photo": ["https://example.com/sphinx1.jpg", "https://example.com/sphinx2.jpg"],
    "long": 106.827183,
    "lat": -6.208821,
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Misty",
    "size": "big",
    "age": "adult",
    "breed": "Abyssinian",
    "gender": "female",
    "color": "fawn",
    "description": "Graceful Abyssinian cat seeking a loving and active home.",
    "photo": ["https://example.com/misty1.jpg", "https://example.com/misty2.jpg"],
    "long": 110.388062,
    "lat": -7.767580,
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
    "age": "kitten",
    "breed": "Scottish Fold",
    "gender": "male",
    "color": "black and white",
    "description": "Adorable Scottish Fold kitten with distinctive folded ears. Loves to play with toys.",
    "photo": ["https://example.com/oreo1.jpg", "https://example.com/oreo2.jpg"],
    "long": 112.751049,
    "lat": -7.274217,
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
    "photo": ["https://example.com/nala1.jpg", "https://example.com/nala2.jpg"],
    "long": 110.425628,
    "lat": -7.782889,
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Siber",
    "size": "big",
    "age": "old",
    "breed": "Siberian",
    "gender": "male",
    "color": "brown",
    "description": "Gentle and fluffy Siberian cat seeking a peaceful retirement home.",
    "photo": ["https://example.com/siber1.jpg", "https://example.com/siber2.jpg"],
    "long": 106.845130,
    "lat": -6.208763,
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
    "age": "kitten",
    "breed": "Exotic Shorthair",
    "gender": "male",
    "color": "silver",
    "description": "Charming Exotic Shorthair kitten with a sleek silver coat. Loves to play and explore.",
    "photo": ["https://example.com/whiskey1.jpg", "https://example.com/whiskey2.jpg"],
    "long": 107.619125,
    "lat": -6.917464,
    "status": "adopted",
    "statusPrice": "With Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Muffin",
    "size": "small",
    "age": "adult",
    "breed": "Ragamuffin",
    "gender": "female",
    "color": "calico",
    "description": "Sweet and gentle Ragamuffin cat looking for a loving home. Enjoys quiet cuddle sessions.",
    "photo": ["https://example.com/muffin1.jpg", "https://example.com/muffin2.jpg"],
    "long": 110.418812,
    "lat": -7.556578,
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Burmie",
    "size": "big",
    "age": "old",
    "breed": "Burmese",
    "gender": "male",
    "color": "champagne",
    "description": "Regal Burmese cat seeking a calm and comfortable retirement home.",
    "photo": ["https://example.com/burmie1.jpg", "https://example.com/burmie2.jpg"],
    "long": 112.620516,
    "lat": -7.257472,
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Bluebell",
    "size": "medium",
    "age": "kitten",
    "breed": "Russian Blue",
    "gender": "female",
    "color": "blue",
    "description": "Gentle and shy Russian Blue kitten looking for a patient and loving home.",
    "photo": ["https://example.com/bluebell1.jpg", "https://example.com/bluebell2.jpg"],
    "long": 107.602807,
    "lat": -6.966700,
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Lucky",
    "size": "big",
    "age": "adult",
    "breed": "Indonesian Domestic",
    "gender": "male",
    "color": "orange",
    "description": "Friendly and easygoing domestic cat looking for a forever home.",
    "photo": ["https://example.com/lucky1.jpg", "https://example.com/lucky2.jpg"],
    "long": 112.620516,
    "lat": -7.257472,
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Coco",
    "size": "small",
    "age": "kitten",
    "breed": "Siamese",
    "gender": "female",
    "color": "chocolate",
    "description": "Adorable Siamese kitten with a sweet personality. Loves to be pampered.",
    "photo": ["https://example.com/coco1.jpg", "https://example.com/coco2.jpg"],
    "long": 107.602807,
    "lat": -6.966700,
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Simba",
    "size": "medium",
    "age": "adult",
    "breed": "Persian",
    "gender": "male",
    "color": "golden",
    "description": "Majestic Persian cat with a luxurious golden coat. Enjoys lounging in the sun.",
    "photo": ["https://example.com/simba1.jpg", "https://example.com/simba2.jpg"],
    "long": 107.619125,
    "lat": -6.917464,
    "status": "adopted",
    "statusPrice": "With Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  },
  {
    "name": "Lulu",
    "size": "big",
    "age": "old",
    "breed": "Bengal",
    "gender": "female",
    "color": "marbled",
    "description": "Elegant Bengal cat with a stunning marbled coat. Seeks a quiet and loving home.",
    "photo": ["https://example.com/lulu1.jpg", "https://example.com/lulu2.jpg"],
    "long": 110.418812,
    "lat": -7.556578,
    "status": "available",
    "statusPrice": "Without Adoption Fee",
    "AdopterId": "",
    "PosterId": "",
    "createdAt": "",
    "updatedAt": ""
  }
];


module.exports = { usersSeed, postsSeed };