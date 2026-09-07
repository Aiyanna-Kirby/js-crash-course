for (let i = 1; i <= 30; i++) {
  if (i % 4 === 0 && i % 6 === 0) {
    console.log(`${i} -> 'QuadHex'`);

  } else if (i % 4 === 0) {
    console.log(`${i} -> 'Quad'`);

  } else if (i % 6 === 0) {
    console.log(`${i} -> 'Hex'`);
    
  } else {
    console.log(`${i} -> ${i}`);
  }
}
