const args = process.argv;


let arrayOfArgs = args.splice(2);

for (let i = 0; i < arrayOfArgs.length; i++) {
  
  if (arrayOfArgs[i] > 0) {
    if (!isNaN(arrayOfArgs[i])) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (arrayOfArgs[i] * 100));
    }
  }
}





