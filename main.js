let html = document.querySelector(".html");
let style = document.querySelector(".style");
let str = `
/*你好，我是一名前端新手。
下面展示一下我是如何用HTML+CSS绘制一个太极图的。
*/
/* 先新建一个div1，设置宽高和边框 */
.div1 {
  border: 1px solid black;
  width: 200px;
  height: 200px;
}
/* div1变成圆形，去掉边框 */
.div1 {
  border-radius: 50%;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.3);
  border: none;
}
/* 给太极图设置左黑右白的背景色 */
.div1 {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
}
/* 给太极图中间加两个圆形 */
.div1::before,
.div1::after {
  content: "";
  border: 1px solid red;
  display: block;
  width: 100px;
  height: 100px;
}
/* 把两个圆形在div1里面居中，设置一上一下的位置
设置一黑一白的背景色，并去掉两个圆形的边框*/
.div1::before {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  border: none;
  background-color: #000;
}
.div1::after {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  border: none;
  background-color: #fff;
}
/* 给上面的圆形设置外黑内白 */
.div1::before {
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 25%,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
}
/* 给下面的圆形设置外白内黑 */
.div1::after {
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 25%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
}
/* 这样一个太极图就做好啦 */
`;

let str2 = ""; //定义一个空字符串

let i = -1;
let step = () => {
  i += 1;
  if (i <= str.length - 1) {
    setTimeout(() => {
      //有回车，就直接把回车变<br>;没有回车就直接照搬str
      str2 = str[i] === "\n" ? (str2 += "<br>") : (str2 += str[i]);
      html.innerHTML = str2;
      style.innerHTML = str.substring(0, i);
      step();
      window.scrollTo(0, 99999);
      html.scrollTo(0, 99999);
    }, 0);
  } else {
  }
};
step();
