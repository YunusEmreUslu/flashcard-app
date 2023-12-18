const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'ADC',
        answer: 'Add with Carry / Eldeyle birlikte bellek verisini akümulatöre* topla',
        options: []
      },
      {
        id: 2,
        question: 'AND',
        answer: 'Logical AND with Accumulator / Belleği akümülatörle mantıksal çarp',
        options: []
      },
      {
        id: 3,
        question: 'ASL',
        answer: 'Arithmetic Shift Left / Bir bit sola kaydır ',
        options: []
      },
      {
        id: 4,
        question: 'BIT',
        answer: 'Test bits in memory with accumulator / Bellek bitlerini akümülatörle test et',
        options: []
      },
      {
        id: 5,
        question: 'BCC',
        answer: 'Branch if Carry Clear / Elde yoksa dallan',
        options: []
      },
      {
        id: 6,
        question: 'BCS',
        answer: 'Branch if Carry Set / Elde varsa dallan',
        options: []
      },
      {
        id: 7,
        question: 'BEQ',
        answer: 'Branch if Equal (on result zero) / Sonuç eşitse dallan ',
        options: []
      },
      {
        id: 8,
        question: 'BMI',
        answer: 'Branch if Minus (Negative) / Sonuç negatifse dallan',
        options: []
      },
      {
        id: 9,
        question: 'BNE',
        answer: 'Branch if Not Equal (on result not zero) / Sonuç eşit değilse dallan ',
        options: []
      },
      {
        id: 10,
        question: 'BPL',
        answer: 'Branch if Plus (Positive) / Sonuç pozitifse dallan ',
        options: []
      },
      {
        id: 11,
        question: 'BRK',
        answer: 'Break / Dur ',
        options: []
      },
      {
        id: 12,
        question: 'BVC',
        answer: 'Branch if Overflow Clear / Taşma yoksa dallan ',
        options: []
      },
      {
        id: 13,
        question: 'BVS',
        answer: 'Branch if Overflow Set / Taşma varsa dallan',
        options: []
      },
      {
        id: 14,
        question: 'CLC',
        answer: 'Clear Carry Flag / Elde bayrağını sil',
        options: []
      },
      {
        id: 15,
        question: 'CLD',
        answer: 'Clear Decimal Mode / Ondalık mod bayrağını sil',
        options: []
      },
      {
        id: 16,
        question: 'CLI',
        answer: 'Clear Interrupt Disable / Kesme yetkisizleştirme bayrağını sil',
        options: []
      },
      {
        id: 17,
        question: 'CLV',
        answer: 'Clear Overflow Flag / Taşma bayrağını sil',
        options: []
      },
      {
        id: 18,
        question: 'CMP',
        answer: 'Compare Memory and Accumulator / Bellek ile akümülatörü karşılastır',
        options: []
      },
      {
        id: 19,
        question: 'CPX',
        answer: 'Compare Memory and X Register / Bellek ile X kaydedicisini karşılaştır ',
        options: []
      },
      {
        id: 20,
        question: 'CPY',
        answer: 'Compare Memory and Y Register / Bellek ile Y kaydedicisini karşılaştır ',
        options: []
      },
      {
        id: 21,
        question: 'DEC',
        answer: 'Decrement Memory by one / Bellek içeriğini bir azalt',
        options: []
      },
      {
        id: 22,
        question: 'DEX',
        answer: 'Decrement X Register / X kaydedicisini bir azalt ',
        options: []
      },
      {
        id: 23,
        question: 'DEY',
        answer: 'Decrement Y Register / Y kaydedicisini bir azalt ',
        options: []
      },
      {
        id: 24,
        question: 'EOR',
        answer: 'Exclusive OR Memory with Accumulator / Belleği akümülatörle EXORla',
        options: []
      },
      {
        id: 25,
        question: 'INC',
        answer: 'Increment Memory by one / Bellek içeriğini bir arttır',
        options: []
      },
      {
        id: 26,
        question: 'INX',
        answer: 'Increment X Register by one / X kaydedicisini bir arttır ',
        options: []
      },
      {
        id: 27,
        question: 'INY',
        answer: 'Increment Y Register by one / Y kaydedicisini bir arttır ',
        options: []
      },
      {
        id: 28,
        question: 'JMP',
        answer: 'Jump to new location / Yeni bir adrese dallan ',
        options: []
      },
      {
        id: 29,
        question: 'JSR',
        answer: 'Jump to new location Saving Return adress / Geri dönüş adresini sakla ve yeni bir adrese dallan',
        options: []
      },
      {
        id: 30,
        question: 'LDA',
        answer: 'Load Accumulator with memory / Akümülatöre bellekten değer yükle',
        options: []
      },
      {
        id: 31,
        question: 'LDX',
        answer: 'Load X Register with memory / X kaydedicisine bellekten değer yükle',
        options: []
      },
      {
        id: 32,
        question: 'LDY',
        answer: 'Load Y Register with memory / Y kaydedicisine bellekten değer yükle',
        options: []
      },
      {
        id: 33,
        question: 'LSR',
        answer: 'Shift Right one bit / Sağa bir bit kaydır',
        options: []
      },
      {
        id: 34,
        question: 'NOP',
        answer: 'No Operation / İşlem yok',
        options: []
      },
      {
        id: 35,
        question: 'ORA',
        answer: 'OR memory with Accumulator / Belleği akümülatörle mantıksal topla (ORla)',
        options: []
      },
      {
        id: 36,
        question: 'PHA',
        answer: 'Push Accumulator to Stack / Akümülatörü yığına at',
        options: []
      },
      {
        id: 37,
        question: 'PHP',
        answer: 'Push Processor Status to Stack / Bayrakları yığına at',
        options: []
      },
      {
        id: 38,
        question: 'PLA',
        answer: 'Pull Accumulator from Stack / Akümülatörü yığından al',
        options: []
      },
      {
        id: 39,
        question: 'PLP',
        answer: 'Pull Processor Status from Stack / Bayrakları yığından al',
        options: []
      },
      {
        id: 40,
        question: 'ROL',
        answer: 'Rotate one bit Left / Sola bir bit yönlendir',
        options: []
      },
      {
        id: 41,
        question: 'ROR',
        answer: 'Rotate one bit Right / Sağa bir bit yönlendir',
        options: []
      },
      {
        id: 42,
        question: 'RTS',
        answer: 'Return from Subroutine / Altyordamdan dön',
        options: []
      },
      {
        id: 43,
        question: 'SBC',
        answer: 'Subtract with Carry / Belleği akümülatörden borçla birlikte çıkar',
        options: []
      },
      {
        id: 44,
        question: 'SEC',
        answer: 'Set Carry Flag / Elde bayrağını setle (1e kur)',
        options: []
      },
      {
        id: 45,
        question: 'SED',
        answer: 'Set Decimal Mode / Ondalık mod bayrağını setle',
        options: []
      },
      {
        id: 46,
        question: 'SEI',
        answer: 'Set Interrupt Disable / Kesme yetkisizleştirme bayrağını setle',
        options: []
      },
      {
        id: 47,
        question: 'STA',
        answer: 'Store Accumulator in memory / Akümülatör içeriğini bellekte depola',
        options: []
      },
      {
        id: 48,
        question: 'STX',
        answer: 'Store X Register in memory / X kaydedecisini bellekte depola',
        options: []
      },
      {
        id: 49,
        question: 'STY',
        answer: 'Store Y Register in memory / Y kaydedecisini bellekte depola',
        options: []
      },
      {
        id: 50,
        question: 'TAX',
        answer: 'Transfer Accumulator to X / Akümülatörü Xe aktar',
        options: []
      },
      {
        id: 51,
        question: 'TAY',
        answer: 'Transfer Accumulator to Y / Akümülatörü Y`ye aktar',
        options: []
      },
      {
        id: 52,
        question: 'TSX',
        answer: 'Transfer Stack Pointer to X / SPyi Xe aktar',
        options: []
      },
      {
        id: 53,
        question: 'TXA',
        answer: 'Transfer X to Accumulator / Xi akümülatöre aktar',
        options: []
      },
      {
        id: 54,
        question: 'TXS',
        answer: 'Transfer X to Stack Pointer / Xi SPye aktar',
        options: []
      },
      {
        id: 55,
        question: 'TYA',
        answer: 'Transfer Y to Accumulator / Y`yi SPye aktar',
        options: []
      }
    ]

 export default SAMPLE_FLASHCARDS; 