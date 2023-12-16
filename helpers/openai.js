const OpenAI = require('openai');

const chatAI = async (breed) => {
    const question = `
    saya mempunyai ras ${breed} berikan saya informasi terkait pemeliharaannya seperti:
    makanan,  kesehatan, kebersihan, aktivitas, tempat beristirahat
    berikan dalam format json dengan format seperti di bawah ini:

      {
       
          "makanan": {
            "deskripsi": "Beri makanan kucing berkualitas dengan kandungan nutrisi yang sesuai.",
            "emoji": "🍽️"
          },
          "kesehatan": {
            "deskripsi": "Lakukan kunjungan rutin ke dokter hewan, berikan vaksinasi, dan perhatikan tanda-tanda kesehatan.",
            "emoji": "👩‍⚕️"
          },
          "kebersihan": {
            "deskripsi": "Sediakan kotak pasir bersih, lakukan pembersihan rutin, dan perhatikan kebersihan bulu.",
            "emoji": "🚿"
          },
          "aktivitas": {
            "deskripsi": "Stimulasi aktivitas fisik dan mental dengan mainan dan interaksi yang berkualitas.",
            "emoji": "🎾"
          },
          "tempat_beristirahat": {
            "deskripsi": "Sediakan tempat tidur yang nyaman dan tenang untuk istirahat kucing.",
            "emoji": "😴"
          }
        
      }


    berikan juga emoji yang mewakili setiap informasinya dan berikan deskripsi yang lebih lengkap dan informatif. cukup berikan jsonnya saja tidak perlu ada respons deskripsi apa pun selain respons dalam bentuk json
    `;


    const openai = new OpenAI({
        apiKey: process.env.OpenAI_KEY
    });

    const { choices } = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ "role": "user", "content": question }],
        max_tokens: 750
    });
    return choices[0].message.content;
}

module.exports = { chatAI };