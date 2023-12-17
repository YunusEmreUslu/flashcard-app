const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'ADC',
        answer: 'Add with Carry',
        options: []
      },
      {
        id: 2,
        question: 'AND',
        answer: 'Logical AND with Accumulator',
        options: []
      },
      {
        id: 3,
        question: 'ASL',
        answer: 'Arithmetic Shift Left',
        options: []
      },
      {
        id: 4,
        question: 'BIT',
        answer: 'Bit Test',
        options: []
      },
      {
        id: 5,
        question: 'BCC',
        answer: 'Branch if Carry Clear',
        options: []
      },
      {
        id: 6,
        question: 'BCS',
        answer: 'Branch if Carry Set',
        options: []
      },
      {
        id: 7,
        question: 'BEQ',
        answer: 'Branch if Equal',
        options: []
      },
      {
        id: 8,
        question: 'BMI',
        answer: 'Branch if Minus (Negative)',
        options: []
      },
      {
        id: 9,
        question: 'BNE',
        answer: 'Branch if Not Equal',
        options: []
      },
      {
        id: 10,
        question: 'BPL',
        answer: 'Branch if Plus (Positive)',
        options: []
      },
      {
        id: 11,
        question: 'BRK',
        answer: 'Break',
        options: []
      },
      {
        id: 12,
        question: 'BVC',
        answer: 'Branch if Overflow Clear',
        options: []
      },
      {
        id: 13,
        question: 'BVS',
        answer: 'Branch if Overflow Set',
        options: []
      },
      {
        id: 14,
        question: 'CLC',
        answer: 'Clear Carry Flag',
        options: []
      },
      {
        id: 15,
        question: 'CLD',
        answer: 'Clear Decimal Mode',
        options: []
      },
      {
        id: 16,
        question: 'CLI',
        answer: 'Clear Interrupt Disable',
        options: []
      },
      {
        id: 17,
        question: 'CLV',
        answer: 'Clear Overflow Flag',
        options: []
      },
      {
        id: 18,
        question: 'CMP',
        answer: 'Compare Accumulator',
        options: []
      },
      {
        id: 19,
        question: 'CPX',
        answer: 'Compare X Register',
        options: []
      },
      {
        id: 20,
        question: 'CPY',
        answer: 'Compare Y Register',
        options: []
      },
      {
        id: 21,
        question: 'DEC',
        answer: 'Decrement Memory',
        options: []
      },
      {
        id: 22,
        question: 'DEX',
        answer: 'Decrement X Register',
        options: []
      },
      {
        id: 23,
        question: 'DEY',
        answer: 'Decrement Y Register',
        options: []
      },
      {
        id: 24,
        question: 'EOR',
        answer: 'Exclusive OR with Accumulator',
        options: []
      },
      {
        id: 25,
        question: 'INC',
        answer: 'Increment Memory',
        options: []
      },
      {
        id: 26,
        question: 'INX',
        answer: 'Increment X Register',
        options: []
      },
      {
        id: 27,
        question: 'INY',
        answer: 'Increment Y Register',
        options: []
      },
      {
        id: 28,
        question: 'JMP',
        answer: 'Jump',
        options: []
      },
      {
        id: 29,
        question: 'JSR',
        answer: 'Jump to Subroutine',
        options: []
      },
      {
        id: 30,
        question: 'LDA',
        answer: 'Load Accumulator',
        options: []
      },
      {
        id: 31,
        question: 'LDX',
        answer: 'Load X Register',
        options: []
      },
      {
        id: 32,
        question: 'LDY',
        answer: 'Load Y Register',
        options: []
      },
      {
        id: 33,
        question: 'LSR',
        answer: 'Logical Shift Right',
        options: []
      },
      {
        id: 34,
        question: 'NOP',
        answer: 'No Operation',
        options: []
      },
      {
        id: 35,
        question: 'ORA',
        answer: 'Logical OR with Accumulator',
        options: []
      },
      {
        id: 36,
        question: 'PHA',
        answer: 'Push Accumulator to Stack',
        options: []
      },
      {
        id: 37,
        question: 'PHP',
        answer: 'Push Processor Status to Stack',
        options: []
      },
      {
        id: 38,
        question: 'PLA',
        answer: 'Pull Accumulator from Stack',
        options: []
      },
      {
        id: 39,
        question: 'PLP',
        answer: 'Pull Processor Status from Stack',
        options: []
      },
      {
        id: 40,
        question: 'ROL',
        answer: 'Rotate Left through Carry',
        options: []
      },
      {
        id: 41,
        question: 'ROR',
        answer: 'Rotate Right through Carry',
        options: []
      },
      {
        id: 42,
        question: 'RTS',
        answer: 'Return from Subroutine',
        options: []
      },
      {
        id: 43,
        question: 'SBC',
        answer: 'Subtract with Carry',
        options: []
      },
      {
        id: 44,
        question: 'SEC',
        answer: 'Set Carry Flag',
        options: []
      },
      {
        id: 45,
        question: 'SED',
        answer: 'Set Decimal Mode',
        options: []
      },
      {
        id: 46,
        question: 'SEI',
        answer: 'Set Interrupt Disable',
        options: []
      },
      {
        id: 47,
        question: 'STA',
        answer: 'Store Accumulator',
        options: []
      },
      {
        id: 48,
        question: 'STX',
        answer: 'Store X Register',
        options: []
      },
      {
        id: 49,
        question: 'STY',
        answer: 'Store Y Register',
        options: []
      },
      {
        id: 50,
        question: 'TAX',
        answer: 'Transfer Accumulator to X',
        options: []
      },
      {
        id: 51,
        question: 'TAY',
        answer: 'Transfer Accumulator to Y',
        options: []
      },
      {
        id: 52,
        question: 'TSX',
        answer: 'Transfer Stack Pointer to X',
        options: []
      },
      {
        id: 53,
        question: 'TXA',
        answer: 'Transfer X to Accumulator',
        options: []
      },
      {
        id: 54,
        question: 'TXS',
        answer: 'Transfer X to Stack Pointer',
        options: []
      },
      {
        id: 55,
        question: 'TYA',
        answer: 'Transfer Y to Accumulator',
        options: []
      }
    ]

 export default SAMPLE_FLASHCARDS; 