const fs = require('fs');
const uuid = require('./uuid');
const { sample, sampleSize, times } = require('lodash');

const path = '../src/data.json';

const titles = [
    `แพกเกจจอหงวนไฮเปอร์พงษ์ มินต์คีตกวีเลิฟ มอลล์`,
    `บราสามช่าเพรียวบาง พรีเซ็นเตอร์คอนแทคกุนซือโรแมนติกพาเหรด ไชน่าเนิร์สเซอรี่เป็นไงนพมาศเบญจมบพิตร`,
    `ทัวริสต์สตีล เทวาอพาร์ตเมนท์สุริยยาตร์ ฮีโร่แคมเปญแชมเปี้ยน`,
    `โอยัวะสเตอริโอ ทาวน์เฟรมพะเรอ ฟีดเวณิกาโฟมแอปเปิ้ล`,
    `โต๋เต๋สะกอมโอเปอเรเตอร์ บาร์บี้แฟ็กซ์ เรตติ้งอุปนายิกาคาวบอย`,
    `มั้ยซัพพลายราสเบอร์รีเบิร์นวาริชศาสตร์ สเต็ปเชอร์รี่โพสต์เหมยโฟล์ค เฟอร์รี่`,
    `ออเดอร์ชาร์ตพิซซ่าไมค์ ว้าวโบว์ โยเกิร์ตดีเจโอยัวะตรวจสอบไคลแมกซ์`,
    `แคร์ม้าหินอ่อนแฟกซ์อึ้ม สเกตช์พุทโธไฮไลต์ เย้วกิมจิราเม็งคอนแทค`,
    `วิดีโอคอนแทคแฟกซ์ บ๋อยพลาซ่า สกรัมไฮกุ`,
    `บัตเตอร์ ฮอตฮาราคีรีเยนดีพาร์ทเมนท์ ออดิทอเรียม`,
    `แพกเกจจอหงวนไฮเปอร์พงษ์ มินต์คีตกวีเลิฟ มอลล์`,
    `บราสามช่าเพรียวบาง พรีเซ็นเตอร์คอนแทคกุนซือโรแมนติกพาเหรด ไชน่าเนิร์สเซอรี่เป็นไงนพมาศเบญจมบพิตร`,
    `ทัวริสต์สตีล เทวาอพาร์ตเมนท์สุริยยาตร์ ฮีโร่แคมเปญแชมเปี้ยน`,
    `โอยัวะสเตอริโอ ทาวน์เฟรมพะเรอ ฟีดเวณิกาโฟมแอปเปิ้ล`,
    `โต๋เต๋สะกอมโอเปอเรเตอร์ บาร์บี้แฟ็กซ์ เรตติ้งอุปนายิกาคาวบอย`,
    `มั้ยซัพพลายราสเบอร์รีเบิร์นวาริชศาสตร์ สเต็ปเชอร์รี่โพสต์เหมยโฟล์ค เฟอร์รี่`,
    `ออเดอร์ชาร์ตพิซซ่าไมค์ ว้าวโบว์ โยเกิร์ตดีเจโอยัวะตรวจสอบไคลแมกซ์`,
    `แคร์ม้าหินอ่อนแฟกซ์อึ้ม สเกตช์พุทโธไฮไลต์ เย้วกิมจิราเม็งคอนแทค`,
    `วิดีโอคอนแทคแฟกซ์ บ๋อยพลาซ่า สกรัมไฮกุ`,
    `บัตเตอร์ ฮอตฮาราคีรีเยนดีพาร์ทเมนท์ ออดิทอเรียม`,
    `แพกเกจจอหงวนไฮเปอร์พงษ์ มินต์คีตกวีเลิฟ มอลล์`,
    `บราสามช่าเพรียวบาง พรีเซ็นเตอร์คอนแทคกุนซือโรแมนติกพาเหรด ไชน่าเนิร์สเซอรี่เป็นไงนพมาศเบญจมบพิตร`,
    `ทัวริสต์สตีล เทวาอพาร์ตเมนท์สุริยยาตร์ ฮีโร่แคมเปญแชมเปี้ยน`,
    `โอยัวะสเตอริโอ ทาวน์เฟรมพะเรอ ฟีดเวณิกาโฟมแอปเปิ้ล`,
    `โต๋เต๋สะกอมโอเปอเรเตอร์ บาร์บี้แฟ็กซ์ เรตติ้งอุปนายิกาคาวบอย`,
    `มั้ยซัพพลายราสเบอร์รีเบิร์นวาริชศาสตร์ สเต็ปเชอร์รี่โพสต์เหมยโฟล์ค เฟอร์รี่`,
    `ออเดอร์ชาร์ตพิซซ่าไมค์ ว้าวโบว์ โยเกิร์ตดีเจโอยัวะตรวจสอบไคลแมกซ์`,
    `แคร์ม้าหินอ่อนแฟกซ์อึ้ม สเกตช์พุทโธไฮไลต์ เย้วกิมจิราเม็งคอนแทค`,
    `วิดีโอคอนแทคแฟกซ์ บ๋อยพลาซ่า สกรัมไฮกุ`,
    `บัตเตอร์ ฮอตฮาราคีรีเยนดีพาร์ทเมนท์ ออดิทอเรียม`,
    `แพกเกจจอหงวนไฮเปอร์พงษ์ มินต์คีตกวีเลิฟ มอลล์`,
    `บราสามช่าเพรียวบาง พรีเซ็นเตอร์คอนแทคกุนซือโรแมนติกพาเหรด ไชน่าเนิร์สเซอรี่เป็นไงนพมาศเบญจมบพิตร`,
    `ทัวริสต์สตีล เทวาอพาร์ตเมนท์สุริยยาตร์ ฮีโร่แคมเปญแชมเปี้ยน`,
    `โอยัวะสเตอริโอ ทาวน์เฟรมพะเรอ ฟีดเวณิกาโฟมแอปเปิ้ล`,
    `โต๋เต๋สะกอมโอเปอเรเตอร์ บาร์บี้แฟ็กซ์ เรตติ้งอุปนายิกาคาวบอย`,
    `มั้ยซัพพลายราสเบอร์รีเบิร์นวาริชศาสตร์ สเต็ปเชอร์รี่โพสต์เหมยโฟล์ค เฟอร์รี่`,
    `ออเดอร์ชาร์ตพิซซ่าไมค์ ว้าวโบว์ โยเกิร์ตดีเจโอยัวะตรวจสอบไคลแมกซ์`,
    `แคร์ม้าหินอ่อนแฟกซ์อึ้ม สเกตช์พุทโธไฮไลต์ เย้วกิมจิราเม็งคอนแทค`,
    `วิดีโอคอนแทคแฟกซ์ บ๋อยพลาซ่า สกรัมไฮกุ`,
    `บัตเตอร์ ฮอตฮาราคีรีเยนดีพาร์ทเมนท์ ออดิทอเรียม`
];
const texts = [
    `มหาอุปราชาวอลล์เมคอัพ เอ็นทรานซ์ ฮันนีมูนดัมพ์ภูมิทัศน์ไพลินเทคโนแครต เดอะสามแยก สัมนาภูมิทัศน์อีสเตอร์สปอร์ต ทัวร์นาเมนท์ศึกษาศาสตร์แคนยอนแจ๊กพอต พลาซ่า ตนเอง ซูเปอร์ แพลนตรวจสอบ โชห่วยสตรอว์เบอร์รีแจ๊กพ็อต เซี้ยววันเวย์บ๊วยท็อปบู๊ทไง สตรอเบอร์รีสถาปัตย์วอล์คแป๋วสุริยยาตร์ สกรัมงี้จัมโบ้ ฮ่องเต้อินดอร์เท็กซ์ไฟแนนซ์ สเปกยาวีตี๋`,
    `แอร์ เทคซูเปอร์สะกอมเซฟตี้ แอพพริคอทเมเปิลแคมปัสอวอร์ด โปลิศแจ๊กพ็อตไทยแลนด์คาราโอเกะ ไบเบิลไอซ์อัลมอนด์ ยาวีออเดอร์แตงกวา เลกเชอร์พ่อค้าฮากกาตัวตนโยเกิร์ต ทอล์คซิ้มโกะแคชเชียร์แพนดา คอร์รัปชันอันตรกิริยา ไฮไลต์เที่ยงคืนแดรี่แมนชั่น อะอาร์พีจีบอมบ์หมวย คาร์โก้สุริยยาตร ไฮเวย์ เทคอพาร์ตเมนต์ซูมซูเปอร์ ซังเตชัตเตอร์มั้งอึ้ม บัลลาสต์เทียมทานคลิป`,
    `เมเปิล ปูอัดแทกติคมอคคาบรรพชนศิลปากร เอฟเฟ็กต์เดบิต อมาตยาธิปไตยกลาส แพตเทิร์นเอาต์นายแบบลอร์ด เลคเชอร์ ฮองเฮาโบว์คลาสสิกแตงกวาสมาพันธ์ ฮิปฮอปเพรียวบาง นาฏยศาลาเบิร์นโครนาธรรมาเอาท์ เห่ยทัวริสต์ไฟแนนซ์โปสเตอร์ชะโนด ไฮเอนด์ จ๊อกกี้เธควโรกาส โบรชัวร์ บรรพชน คอร์ปอเรชั่นจุ๊ยฉลุยเฟิร์ม อีโรติกสามแยกน็อค`,
    `วอล์คทาวน์เฮาส์เวิร์ลด์เอาท์ดอร์ สติกเกอร์จ๊าบพะเรอสะกอมสัมนา รุมบ้าปักขคณนาราเมนแทงกั๊กคลิป สมิติเวชเปเปอร์พีเรียด วีนยูโรเทรลเล่อร์ ซัมเมอร์คอนเซ็ปต์เชอร์รี่คอนโทรล เซลส์วอล์กศิลปวัฒนธรรม กับดักอยุติธรรม ฟาสต์ฟู้ด เฝอรัมมะกันไฟต์ ดีกรี คอรัปชันบาร์บีคิวทับซ้อนไดเอ็ตโฟน เก๊ะงั้น ไนน์โนติสเทรลเล่อร์ กลาสทัวร์นาเมนท์สจ๊วต ช็อคจอหงวนเยอร์บีร่าบอยคอตออร์แกนิก`,
    `สแตนเลสอพาร์ตเมนท์จิ๊กโก๋ตุ๋ยกลาส สต็อกบ๊อบโอยัวะบัลลาสต์อิ่มแปร้ เฝอฮิบรูโอเคความหมาย โปรฮิ ดีไซน์ติวเตอร์ แทกติคสไตล์คอนเซ็ปต์ สจ๊วตยิว คอนเซ็ปต์ โฮปธุรกรรมไลท์ตังค์ มอยส์เจอไรเซอร์หมวยเลสเบี้ยนแจ๊สมาร์ก เซี้ยวโคโยตีไทยแลนด์ศิรินทร์ควีน เบญจมบพิตร มหภาคเซลส์แมนโอยัวะสามช่า สุริยยาตรวีนตัวตน ฮาโลวีนเครปแดนซ์โปรเจ็คแฟรี่ โปรโมชั่นเมจิค`,
    `มหาอุปราชาวอลล์เมคอัพ เอ็นทรานซ์ ฮันนีมูนดัมพ์ภูมิทัศน์ไพลินเทคโนแครต เดอะสามแยก สัมนาภูมิทัศน์อีสเตอร์สปอร์ต ทัวร์นาเมนท์ศึกษาศาสตร์แคนยอนแจ๊กพอต พลาซ่า ตนเอง ซูเปอร์ แพลนตรวจสอบ โชห่วยสตรอว์เบอร์รีแจ๊กพ็อต เซี้ยววันเวย์บ๊วยท็อปบู๊ทไง สตรอเบอร์รีสถาปัตย์วอล์คแป๋วสุริยยาตร์ สกรัมงี้จัมโบ้ ฮ่องเต้อินดอร์เท็กซ์ไฟแนนซ์ สเปกยาวีตี๋`,
    `แอร์ เทคซูเปอร์สะกอมเซฟตี้ แอพพริคอทเมเปิลแคมปัสอวอร์ด โปลิศแจ๊กพ็อตไทยแลนด์คาราโอเกะ ไบเบิลไอซ์อัลมอนด์ ยาวีออเดอร์แตงกวา เลกเชอร์พ่อค้าฮากกาตัวตนโยเกิร์ต ทอล์คซิ้มโกะแคชเชียร์แพนดา คอร์รัปชันอันตรกิริยา ไฮไลต์เที่ยงคืนแดรี่แมนชั่น อะอาร์พีจีบอมบ์หมวย คาร์โก้สุริยยาตร ไฮเวย์ เทคอพาร์ตเมนต์ซูมซูเปอร์ ซังเตชัตเตอร์มั้งอึ้ม บัลลาสต์เทียมทานคลิป`,
    `เมเปิล ปูอัดแทกติคมอคคาบรรพชนศิลปากร เอฟเฟ็กต์เดบิต อมาตยาธิปไตยกลาส แพตเทิร์นเอาต์นายแบบลอร์ด เลคเชอร์ ฮองเฮาโบว์คลาสสิกแตงกวาสมาพันธ์ ฮิปฮอปเพรียวบาง นาฏยศาลาเบิร์นโครนาธรรมาเอาท์ เห่ยทัวริสต์ไฟแนนซ์โปสเตอร์ชะโนด ไฮเอนด์ จ๊อกกี้เธควโรกาส โบรชัวร์ บรรพชน คอร์ปอเรชั่นจุ๊ยฉลุยเฟิร์ม อีโรติกสามแยกน็อค`,
    `วอล์คทาวน์เฮาส์เวิร์ลด์เอาท์ดอร์ สติกเกอร์จ๊าบพะเรอสะกอมสัมนา รุมบ้าปักขคณนาราเมนแทงกั๊กคลิป สมิติเวชเปเปอร์พีเรียด วีนยูโรเทรลเล่อร์ ซัมเมอร์คอนเซ็ปต์เชอร์รี่คอนโทรล เซลส์วอล์กศิลปวัฒนธรรม กับดักอยุติธรรม ฟาสต์ฟู้ด เฝอรัมมะกันไฟต์ ดีกรี คอรัปชันบาร์บีคิวทับซ้อนไดเอ็ตโฟน เก๊ะงั้น ไนน์โนติสเทรลเล่อร์ กลาสทัวร์นาเมนท์สจ๊วต ช็อคจอหงวนเยอร์บีร่าบอยคอตออร์แกนิก`,
    `สแตนเลสอพาร์ตเมนท์จิ๊กโก๋ตุ๋ยกลาส สต็อกบ๊อบโอยัวะบัลลาสต์อิ่มแปร้ เฝอฮิบรูโอเคความหมาย โปรฮิ ดีไซน์ติวเตอร์ แทกติคสไตล์คอนเซ็ปต์ สจ๊วตยิว คอนเซ็ปต์ โฮปธุรกรรมไลท์ตังค์ มอยส์เจอไรเซอร์หมวยเลสเบี้ยนแจ๊สมาร์ก เซี้ยวโคโยตีไทยแลนด์ศิรินทร์ควีน เบญจมบพิตร มหภาคเซลส์แมนโอยัวะสามช่า สุริยยาตรวีนตัวตน ฮาโลวีนเครปแดนซ์โปรเจ็คแฟรี่ โปรโมชั่นเมจิค`,
    `มหาอุปราชาวอลล์เมคอัพ เอ็นทรานซ์ ฮันนีมูนดัมพ์ภูมิทัศน์ไพลินเทคโนแครต เดอะสามแยก สัมนาภูมิทัศน์อีสเตอร์สปอร์ต ทัวร์นาเมนท์ศึกษาศาสตร์แคนยอนแจ๊กพอต พลาซ่า ตนเอง ซูเปอร์ แพลนตรวจสอบ โชห่วยสตรอว์เบอร์รีแจ๊กพ็อต เซี้ยววันเวย์บ๊วยท็อปบู๊ทไง สตรอเบอร์รีสถาปัตย์วอล์คแป๋วสุริยยาตร์ สกรัมงี้จัมโบ้ ฮ่องเต้อินดอร์เท็กซ์ไฟแนนซ์ สเปกยาวีตี๋`,
    `แอร์ เทคซูเปอร์สะกอมเซฟตี้ แอพพริคอทเมเปิลแคมปัสอวอร์ด โปลิศแจ๊กพ็อตไทยแลนด์คาราโอเกะ ไบเบิลไอซ์อัลมอนด์ ยาวีออเดอร์แตงกวา เลกเชอร์พ่อค้าฮากกาตัวตนโยเกิร์ต ทอล์คซิ้มโกะแคชเชียร์แพนดา คอร์รัปชันอันตรกิริยา ไฮไลต์เที่ยงคืนแดรี่แมนชั่น อะอาร์พีจีบอมบ์หมวย คาร์โก้สุริยยาตร ไฮเวย์ เทคอพาร์ตเมนต์ซูมซูเปอร์ ซังเตชัตเตอร์มั้งอึ้ม บัลลาสต์เทียมทานคลิป`,
    `เมเปิล ปูอัดแทกติคมอคคาบรรพชนศิลปากร เอฟเฟ็กต์เดบิต อมาตยาธิปไตยกลาส แพตเทิร์นเอาต์นายแบบลอร์ด เลคเชอร์ ฮองเฮาโบว์คลาสสิกแตงกวาสมาพันธ์ ฮิปฮอปเพรียวบาง นาฏยศาลาเบิร์นโครนาธรรมาเอาท์ เห่ยทัวริสต์ไฟแนนซ์โปสเตอร์ชะโนด ไฮเอนด์ จ๊อกกี้เธควโรกาส โบรชัวร์ บรรพชน คอร์ปอเรชั่นจุ๊ยฉลุยเฟิร์ม อีโรติกสามแยกน็อค`,
    `วอล์คทาวน์เฮาส์เวิร์ลด์เอาท์ดอร์ สติกเกอร์จ๊าบพะเรอสะกอมสัมนา รุมบ้าปักขคณนาราเมนแทงกั๊กคลิป สมิติเวชเปเปอร์พีเรียด วีนยูโรเทรลเล่อร์ ซัมเมอร์คอนเซ็ปต์เชอร์รี่คอนโทรล เซลส์วอล์กศิลปวัฒนธรรม กับดักอยุติธรรม ฟาสต์ฟู้ด เฝอรัมมะกันไฟต์ ดีกรี คอรัปชันบาร์บีคิวทับซ้อนไดเอ็ตโฟน เก๊ะงั้น ไนน์โนติสเทรลเล่อร์ กลาสทัวร์นาเมนท์สจ๊วต ช็อคจอหงวนเยอร์บีร่าบอยคอตออร์แกนิก`,
    `สแตนเลสอพาร์ตเมนท์จิ๊กโก๋ตุ๋ยกลาส สต็อกบ๊อบโอยัวะบัลลาสต์อิ่มแปร้ เฝอฮิบรูโอเคความหมาย โปรฮิ ดีไซน์ติวเตอร์ แทกติคสไตล์คอนเซ็ปต์ สจ๊วตยิว คอนเซ็ปต์ โฮปธุรกรรมไลท์ตังค์ มอยส์เจอไรเซอร์หมวยเลสเบี้ยนแจ๊สมาร์ก เซี้ยวโคโยตีไทยแลนด์ศิรินทร์ควีน เบญจมบพิตร มหภาคเซลส์แมนโอยัวะสามช่า สุริยยาตรวีนตัวตน ฮาโลวีนเครปแดนซ์โปรเจ็คแฟรี่ โปรโมชั่นเมจิค`,
    `มหาอุปราชาวอลล์เมคอัพ เอ็นทรานซ์ ฮันนีมูนดัมพ์ภูมิทัศน์ไพลินเทคโนแครต เดอะสามแยก สัมนาภูมิทัศน์อีสเตอร์สปอร์ต ทัวร์นาเมนท์ศึกษาศาสตร์แคนยอนแจ๊กพอต พลาซ่า ตนเอง ซูเปอร์ แพลนตรวจสอบ โชห่วยสตรอว์เบอร์รีแจ๊กพ็อต เซี้ยววันเวย์บ๊วยท็อปบู๊ทไง สตรอเบอร์รีสถาปัตย์วอล์คแป๋วสุริยยาตร์ สกรัมงี้จัมโบ้ ฮ่องเต้อินดอร์เท็กซ์ไฟแนนซ์ สเปกยาวีตี๋`,
    `แอร์ เทคซูเปอร์สะกอมเซฟตี้ แอพพริคอทเมเปิลแคมปัสอวอร์ด โปลิศแจ๊กพ็อตไทยแลนด์คาราโอเกะ ไบเบิลไอซ์อัลมอนด์ ยาวีออเดอร์แตงกวา เลกเชอร์พ่อค้าฮากกาตัวตนโยเกิร์ต ทอล์คซิ้มโกะแคชเชียร์แพนดา คอร์รัปชันอันตรกิริยา ไฮไลต์เที่ยงคืนแดรี่แมนชั่น อะอาร์พีจีบอมบ์หมวย คาร์โก้สุริยยาตร ไฮเวย์ เทคอพาร์ตเมนต์ซูมซูเปอร์ ซังเตชัตเตอร์มั้งอึ้ม บัลลาสต์เทียมทานคลิป`,
    `เมเปิล ปูอัดแทกติคมอคคาบรรพชนศิลปากร เอฟเฟ็กต์เดบิต อมาตยาธิปไตยกลาส แพตเทิร์นเอาต์นายแบบลอร์ด เลคเชอร์ ฮองเฮาโบว์คลาสสิกแตงกวาสมาพันธ์ ฮิปฮอปเพรียวบาง นาฏยศาลาเบิร์นโครนาธรรมาเอาท์ เห่ยทัวริสต์ไฟแนนซ์โปสเตอร์ชะโนด ไฮเอนด์ จ๊อกกี้เธควโรกาส โบรชัวร์ บรรพชน คอร์ปอเรชั่นจุ๊ยฉลุยเฟิร์ม อีโรติกสามแยกน็อค`,
    `วอล์คทาวน์เฮาส์เวิร์ลด์เอาท์ดอร์ สติกเกอร์จ๊าบพะเรอสะกอมสัมนา รุมบ้าปักขคณนาราเมนแทงกั๊กคลิป สมิติเวชเปเปอร์พีเรียด วีนยูโรเทรลเล่อร์ ซัมเมอร์คอนเซ็ปต์เชอร์รี่คอนโทรล เซลส์วอล์กศิลปวัฒนธรรม กับดักอยุติธรรม ฟาสต์ฟู้ด เฝอรัมมะกันไฟต์ ดีกรี คอรัปชันบาร์บีคิวทับซ้อนไดเอ็ตโฟน เก๊ะงั้น ไนน์โนติสเทรลเล่อร์ กลาสทัวร์นาเมนท์สจ๊วต ช็อคจอหงวนเยอร์บีร่าบอยคอตออร์แกนิก`,
    `สแตนเลสอพาร์ตเมนท์จิ๊กโก๋ตุ๋ยกลาส สต็อกบ๊อบโอยัวะบัลลาสต์อิ่มแปร้ เฝอฮิบรูโอเคความหมาย โปรฮิ ดีไซน์ติวเตอร์ แทกติคสไตล์คอนเซ็ปต์ สจ๊วตยิว คอนเซ็ปต์ โฮปธุรกรรมไลท์ตังค์ มอยส์เจอไรเซอร์หมวยเลสเบี้ยนแจ๊สมาร์ก เซี้ยวโคโยตีไทยแลนด์ศิรินทร์ควีน เบญจมบพิตร มหภาคเซลส์แมนโอยัวะสามช่า สุริยยาตรวีนตัวตน ฮาโลวีนเครปแดนซ์โปรเจ็คแฟรี่ โปรโมชั่นเมจิค`,
    `มหาอุปราชาวอลล์เมคอัพ เอ็นทรานซ์ ฮันนีมูนดัมพ์ภูมิทัศน์ไพลินเทคโนแครต เดอะสามแยก สัมนาภูมิทัศน์อีสเตอร์สปอร์ต ทัวร์นาเมนท์ศึกษาศาสตร์แคนยอนแจ๊กพอต พลาซ่า ตนเอง ซูเปอร์ แพลนตรวจสอบ โชห่วยสตรอว์เบอร์รีแจ๊กพ็อต เซี้ยววันเวย์บ๊วยท็อปบู๊ทไง สตรอเบอร์รีสถาปัตย์วอล์คแป๋วสุริยยาตร์ สกรัมงี้จัมโบ้ ฮ่องเต้อินดอร์เท็กซ์ไฟแนนซ์ สเปกยาวีตี๋`,
    `แอร์ เทคซูเปอร์สะกอมเซฟตี้ แอพพริคอทเมเปิลแคมปัสอวอร์ด โปลิศแจ๊กพ็อตไทยแลนด์คาราโอเกะ ไบเบิลไอซ์อัลมอนด์ ยาวีออเดอร์แตงกวา เลกเชอร์พ่อค้าฮากกาตัวตนโยเกิร์ต ทอล์คซิ้มโกะแคชเชียร์แพนดา คอร์รัปชันอันตรกิริยา ไฮไลต์เที่ยงคืนแดรี่แมนชั่น อะอาร์พีจีบอมบ์หมวย คาร์โก้สุริยยาตร ไฮเวย์ เทคอพาร์ตเมนต์ซูมซูเปอร์ ซังเตชัตเตอร์มั้งอึ้ม บัลลาสต์เทียมทานคลิป`,
    `เมเปิล ปูอัดแทกติคมอคคาบรรพชนศิลปากร เอฟเฟ็กต์เดบิต อมาตยาธิปไตยกลาส แพตเทิร์นเอาต์นายแบบลอร์ด เลคเชอร์ ฮองเฮาโบว์คลาสสิกแตงกวาสมาพันธ์ ฮิปฮอปเพรียวบาง นาฏยศาลาเบิร์นโครนาธรรมาเอาท์ เห่ยทัวริสต์ไฟแนนซ์โปสเตอร์ชะโนด ไฮเอนด์ จ๊อกกี้เธควโรกาส โบรชัวร์ บรรพชน คอร์ปอเรชั่นจุ๊ยฉลุยเฟิร์ม อีโรติกสามแยกน็อค`,
    `วอล์คทาวน์เฮาส์เวิร์ลด์เอาท์ดอร์ สติกเกอร์จ๊าบพะเรอสะกอมสัมนา รุมบ้าปักขคณนาราเมนแทงกั๊กคลิป สมิติเวชเปเปอร์พีเรียด วีนยูโรเทรลเล่อร์ ซัมเมอร์คอนเซ็ปต์เชอร์รี่คอนโทรล เซลส์วอล์กศิลปวัฒนธรรม กับดักอยุติธรรม ฟาสต์ฟู้ด เฝอรัมมะกันไฟต์ ดีกรี คอรัปชันบาร์บีคิวทับซ้อนไดเอ็ตโฟน เก๊ะงั้น ไนน์โนติสเทรลเล่อร์ กลาสทัวร์นาเมนท์สจ๊วต ช็อคจอหงวนเยอร์บีร่าบอยคอตออร์แกนิก`,
    `สแตนเลสอพาร์ตเมนท์จิ๊กโก๋ตุ๋ยกลาส สต็อกบ๊อบโอยัวะบัลลาสต์อิ่มแปร้ เฝอฮิบรูโอเคความหมาย โปรฮิ ดีไซน์ติวเตอร์ แทกติคสไตล์คอนเซ็ปต์ สจ๊วตยิว คอนเซ็ปต์ โฮปธุรกรรมไลท์ตังค์ มอยส์เจอไรเซอร์หมวยเลสเบี้ยนแจ๊สมาร์ก เซี้ยวโคโยตีไทยแลนด์ศิรินทร์ควีน เบญจมบพิตร มหภาคเซลส์แมนโอยัวะสามช่า สุริยยาตรวีนตัวตน ฮาโลวีนเครปแดนซ์โปรเจ็คแฟรี่ โปรโมชั่นเมจิค`,
    `มหาอุปราชาวอลล์เมคอัพ เอ็นทรานซ์ ฮันนีมูนดัมพ์ภูมิทัศน์ไพลินเทคโนแครต เดอะสามแยก สัมนาภูมิทัศน์อีสเตอร์สปอร์ต ทัวร์นาเมนท์ศึกษาศาสตร์แคนยอนแจ๊กพอต พลาซ่า ตนเอง ซูเปอร์ แพลนตรวจสอบ โชห่วยสตรอว์เบอร์รีแจ๊กพ็อต เซี้ยววันเวย์บ๊วยท็อปบู๊ทไง สตรอเบอร์รีสถาปัตย์วอล์คแป๋วสุริยยาตร์ สกรัมงี้จัมโบ้ ฮ่องเต้อินดอร์เท็กซ์ไฟแนนซ์ สเปกยาวีตี๋`,
    `แอร์ เทคซูเปอร์สะกอมเซฟตี้ แอพพริคอทเมเปิลแคมปัสอวอร์ด โปลิศแจ๊กพ็อตไทยแลนด์คาราโอเกะ ไบเบิลไอซ์อัลมอนด์ ยาวีออเดอร์แตงกวา เลกเชอร์พ่อค้าฮากกาตัวตนโยเกิร์ต ทอล์คซิ้มโกะแคชเชียร์แพนดา คอร์รัปชันอันตรกิริยา ไฮไลต์เที่ยงคืนแดรี่แมนชั่น อะอาร์พีจีบอมบ์หมวย คาร์โก้สุริยยาตร ไฮเวย์ เทคอพาร์ตเมนต์ซูมซูเปอร์ ซังเตชัตเตอร์มั้งอึ้ม บัลลาสต์เทียมทานคลิป`,
    `เมเปิล ปูอัดแทกติคมอคคาบรรพชนศิลปากร เอฟเฟ็กต์เดบิต อมาตยาธิปไตยกลาส แพตเทิร์นเอาต์นายแบบลอร์ด เลคเชอร์ ฮองเฮาโบว์คลาสสิกแตงกวาสมาพันธ์ ฮิปฮอปเพรียวบาง นาฏยศาลาเบิร์นโครนาธรรมาเอาท์ เห่ยทัวริสต์ไฟแนนซ์โปสเตอร์ชะโนด ไฮเอนด์ จ๊อกกี้เธควโรกาส โบรชัวร์ บรรพชน คอร์ปอเรชั่นจุ๊ยฉลุยเฟิร์ม อีโรติกสามแยกน็อค`,
    `วอล์คทาวน์เฮาส์เวิร์ลด์เอาท์ดอร์ สติกเกอร์จ๊าบพะเรอสะกอมสัมนา รุมบ้าปักขคณนาราเมนแทงกั๊กคลิป สมิติเวชเปเปอร์พีเรียด วีนยูโรเทรลเล่อร์ ซัมเมอร์คอนเซ็ปต์เชอร์รี่คอนโทรล เซลส์วอล์กศิลปวัฒนธรรม กับดักอยุติธรรม ฟาสต์ฟู้ด เฝอรัมมะกันไฟต์ ดีกรี คอรัปชันบาร์บีคิวทับซ้อนไดเอ็ตโฟน เก๊ะงั้น ไนน์โนติสเทรลเล่อร์ กลาสทัวร์นาเมนท์สจ๊วต ช็อคจอหงวนเยอร์บีร่าบอยคอตออร์แกนิก`,
    `สแตนเลสอพาร์ตเมนท์จิ๊กโก๋ตุ๋ยกลาส สต็อกบ๊อบโอยัวะบัลลาสต์อิ่มแปร้ เฝอฮิบรูโอเคความหมาย โปรฮิ ดีไซน์ติวเตอร์ แทกติคสไตล์คอนเซ็ปต์ สจ๊วตยิว คอนเซ็ปต์ โฮปธุรกรรมไลท์ตังค์ มอยส์เจอไรเซอร์หมวยเลสเบี้ยนแจ๊สมาร์ก เซี้ยวโคโยตีไทยแลนด์ศิรินทร์ควีน เบญจมบพิตร มหภาคเซลส์แมนโอยัวะสามช่า สุริยยาตรวีนตัวตน ฮาโลวีนเครปแดนซ์โปรเจ็คแฟรี่ โปรโมชั่นเมจิค`
];
const authors = times(100, () => String(uuid()));

function makeComments(counts) {
    const comments = [];
    for (let index = 0; index < counts; index++) {
        const comment = {
            id: uuid(),
            text: sample(texts),
            author: sample(authors),
            comments: []
        }
        comments.push(comment);
    }
    return comments;
}

function makeTopics(counts) {
    const topics = [];
    for (let index = 0; index < counts; index++) {
        const topic = {
            id: uuid(),
            title: sample(titles),
            detail: sample(texts),
            author: sample(authors),
            comments: []
        }
        topics.push(topic);
    }
    return topics;
}

function linkComments(comments, parents) {
    comments.forEach(comment => {
        sample(parents).comments.push(comment.id);
    });
}


const comments = makeComments(100);
const topics = makeTopics(15);
const highlights = sampleSize(topics, 6).map(t => t.id);
linkComments(comments, [].concat(topics, sampleSize(comments, 20)));

fs.writeFile(path, JSON.stringify({ comments, topics, highlights }), err => {
    if (err) throw err;
    console.log(`saved at ${path}`);
});