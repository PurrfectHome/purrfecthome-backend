const OpenAI = require('openai');

const chatAI = async (req) => {
    const openai = new OpenAI({
        apiKey: process.env.OpenAI_KEY
    });

    const { choices } = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ "role": "user", "content": req }],
        max_tokens: 620
    });
    return choices[0].message.content;
}

const generateAnsPromt = (q, answer) => {
    let question = q.split(';;');
    let result = `berikan nilai terhadap jawaban dari pertanyaan-pertanyaan berikut. tentukan apakah jawabannya benar dari pertanyaannya `;

    for (let i = 0; i < 5; i++) {
        result += ' ' + question[i] + ' apakah benar jawabannya adalah ' + answer[i] + '. ';
    }

    result += 'cukup keluarkan respons dalam bentuk integer javascript. setiap jawaban benar mendapat 20 poin. Tidak perlu mengeluarkan respons deskripsi apa pun cukup integer total poinnya dalam bentuk js. cukup jawab misal 10 atau 50, tidak perlu ada deklarasi atau console log cukup angkanya saja. pastikan hitung dengan benar, koreksi dengan tepat antara pertanyaan dan jawaban! Jika jawaban asal dan tidak dapat dipahami maka salahkan/jangan tambah poin!'
    return result;
}
module.exports = { chatAI, generateAnsPromt };