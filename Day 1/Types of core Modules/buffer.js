const buf1 = Buffer.from('123456789');
const buf2 = Buffer.from('123456789')

buf2.copy(buf1,2);
console.log(buf1.toString())
console.log(Buffer.concat([buf1,buf2]).toString());
console.log(buf1.equals(buf2));
console.log(Buffer.compare(buf1, buf2));
