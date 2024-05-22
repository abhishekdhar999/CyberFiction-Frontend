
// const photos = await import('./images/CYBERFICTION-IMAGES');
// console.log(photos);

function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();



const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  
  
  images/CYBERFICTION-IMAGES/male0001.png
images/CYBERFICTION-IMAGES/male0002.png
images/CYBERFICTION-IMAGES/male0003.png
images/CYBERFICTION-IMAGES/male0004.png
images/CYBERFICTION-IMAGES/male0005.png
images/CYBERFICTION-IMAGES/male0006.png
images/CYBERFICTION-IMAGES/male0007.png
images/CYBERFICTION-IMAGES/male0008.png
images/CYBERFICTION-IMAGES/male0009.png
images/CYBERFICTION-IMAGES/male0010.png
images/CYBERFICTION-IMAGES/male0011.png
images/CYBERFICTION-IMAGES/male0012.png
images/CYBERFICTION-IMAGES/male0013.png
images/CYBERFICTION-IMAGES/male0014.png
images/CYBERFICTION-IMAGES/male0015.png
images/CYBERFICTION-IMAGES/male0016.png
images/CYBERFICTION-IMAGES/male0017.png
images/CYBERFICTION-IMAGES/male0018.png
images/CYBERFICTION-IMAGES/male0019.png
images/CYBERFICTION-IMAGES/male0020.png
images/CYBERFICTION-IMAGES/male0021.png
images/CYBERFICTION-IMAGES/male0022.png
images/CYBERFICTION-IMAGES/male0023.png
images/CYBERFICTION-IMAGES/male0024.png
images/CYBERFICTION-IMAGES/male0025.png
images/CYBERFICTION-IMAGES/male0026.png
images/CYBERFICTION-IMAGES/male0027.png
images/CYBERFICTION-IMAGES/male0028.png
images/CYBERFICTION-IMAGES/male0029.png
images/CYBERFICTION-IMAGES/male0030.png
images/CYBERFICTION-IMAGES/male0031.png
images/CYBERFICTION-IMAGES/male0032.png
images/CYBERFICTION-IMAGES/male0033.png
images/CYBERFICTION-IMAGES/male0034.png
images/CYBERFICTION-IMAGES/male0035.png
images/CYBERFICTION-IMAGES/male0036.png
images/CYBERFICTION-IMAGES/male0037.png
images/CYBERFICTION-IMAGES/male0038.png
images/CYBERFICTION-IMAGES/male0039.png
images/CYBERFICTION-IMAGES/male0040.png
images/CYBERFICTION-IMAGES/male0041.png
images/CYBERFICTION-IMAGES/male0042.png
images/CYBERFICTION-IMAGES/male0043.png
images/CYBERFICTION-IMAGES/male0044.png
images/CYBERFICTION-IMAGES/male0045.png
images/CYBERFICTION-IMAGES/male0046.png
images/CYBERFICTION-IMAGES/male0047.png
images/CYBERFICTION-IMAGES/male0048.png
images/CYBERFICTION-IMAGES/male0049.png
images/CYBERFICTION-IMAGES/male0050.png
images/CYBERFICTION-IMAGES/male0051.png
images/CYBERFICTION-IMAGES/male0052.png
images/CYBERFICTION-IMAGES/male0053.png
images/CYBERFICTION-IMAGES/male0054.png
images/CYBERFICTION-IMAGES/male0055.png
images/CYBERFICTION-IMAGES/male0056.png
images/CYBERFICTION-IMAGES/male0057.png
images/CYBERFICTION-IMAGES/male0058.png
images/CYBERFICTION-IMAGES/male0059.png
images/CYBERFICTION-IMAGES/male0060.png
images/CYBERFICTION-IMAGES/male0061.png
images/CYBERFICTION-IMAGES/male0062.png
images/CYBERFICTION-IMAGES/male0063.png
images/CYBERFICTION-IMAGES/male0064.png
images/CYBERFICTION-IMAGES/male0065.png
images/CYBERFICTION-IMAGES/male0066.png
images/CYBERFICTION-IMAGES/male0067.png
images/CYBERFICTION-IMAGES/male0068.png
images/CYBERFICTION-IMAGES/male0069.png
images/CYBERFICTION-IMAGES/male0070.png
images/CYBERFICTION-IMAGES/male0071.png
images/CYBERFICTION-IMAGES/male0072.png
images/CYBERFICTION-IMAGES/male0073.png
images/CYBERFICTION-IMAGES/male0074.png
images/CYBERFICTION-IMAGES/male0075.png
images/CYBERFICTION-IMAGES/male0076.png
images/CYBERFICTION-IMAGES/male0077.png
images/CYBERFICTION-IMAGES/male0078.png
images/CYBERFICTION-IMAGES/male0079.png
images/CYBERFICTION-IMAGES/male0080.png
images/CYBERFICTION-IMAGES/male0081.png
images/CYBERFICTION-IMAGES/male0082.png
images/CYBERFICTION-IMAGES/male0083.png
images/CYBERFICTION-IMAGES/male0084.png
images/CYBERFICTION-IMAGES/male0085.png
images/CYBERFICTION-IMAGES/male0086.png
images/CYBERFICTION-IMAGES/male0087.png
images/CYBERFICTION-IMAGES/male0088.png
images/CYBERFICTION-IMAGES/male0089.png
images/CYBERFICTION-IMAGES/male0090.png
images/CYBERFICTION-IMAGES/male0091.png
images/CYBERFICTION-IMAGES/male0092.png
images/CYBERFICTION-IMAGES/male0093.png
images/CYBERFICTION-IMAGES/male0094.png
images/CYBERFICTION-IMAGES/male0095.png
images/CYBERFICTION-IMAGES/male0096.png
images/CYBERFICTION-IMAGES/male0097.png
images/CYBERFICTION-IMAGES/male0098.png
images/CYBERFICTION-IMAGES/male0099.png
images/CYBERFICTION-IMAGES/male0100.png
images/CYBERFICTION-IMAGES/male0101.png
images/CYBERFICTION-IMAGES/male0102.png
images/CYBERFICTION-IMAGES/male0103.png
images/CYBERFICTION-IMAGES/male0104.png
images/CYBERFICTION-IMAGES/male0105.png
images/CYBERFICTION-IMAGES/male0106.png
images/CYBERFICTION-IMAGES/male0107.png
images/CYBERFICTION-IMAGES/male0108.png
images/CYBERFICTION-IMAGES/male0109.png
images/CYBERFICTION-IMAGES/male0110.png
images/CYBERFICTION-IMAGES/male0111.png
images/CYBERFICTION-IMAGES/male0112.png
images/CYBERFICTION-IMAGES/male0113.png
images/CYBERFICTION-IMAGES/male0114.png
images/CYBERFICTION-IMAGES/male0115.png
images/CYBERFICTION-IMAGES/male0116.png
images/CYBERFICTION-IMAGES/male0117.png
images/CYBERFICTION-IMAGES/male0118.png
images/CYBERFICTION-IMAGES/male0119.png
images/CYBERFICTION-IMAGES/male0120.png
images/CYBERFICTION-IMAGES/male0121.png
images/CYBERFICTION-IMAGES/male0122.png
images/CYBERFICTION-IMAGES/male0123.png
images/CYBERFICTION-IMAGES/male0124.png
images/CYBERFICTION-IMAGES/male0125.png
images/CYBERFICTION-IMAGES/male0126.png
images/CYBERFICTION-IMAGES/male0127.png
images/CYBERFICTION-IMAGES/male0128.png
images/CYBERFICTION-IMAGES/male0129.png
images/CYBERFICTION-IMAGES/male0130.png
images/CYBERFICTION-IMAGES/male0131.png
images/CYBERFICTION-IMAGES/male0132.png
images/CYBERFICTION-IMAGES/male0133.png
images/CYBERFICTION-IMAGES/male0134.png
images/CYBERFICTION-IMAGES/male0135.png
images/CYBERFICTION-IMAGES/male0136.png
images/CYBERFICTION-IMAGES/male0137.png
images/CYBERFICTION-IMAGES/male0138.png
images/CYBERFICTION-IMAGES/male0139.png
images/CYBERFICTION-IMAGES/male0140.png
images/CYBERFICTION-IMAGES/male0141.png
images/CYBERFICTION-IMAGES/male0142.png
images/CYBERFICTION-IMAGES/male0143.png
images/CYBERFICTION-IMAGES/male0144.png
images/CYBERFICTION-IMAGES/male0145.png
images/CYBERFICTION-IMAGES/male0146.png
images/CYBERFICTION-IMAGES/male0147.png
images/CYBERFICTION-IMAGES/male0148.png
images/CYBERFICTION-IMAGES/male0149.png
images/CYBERFICTION-IMAGES/male0150.png
images/CYBERFICTION-IMAGES/male0151.png
images/CYBERFICTION-IMAGES/male0152.png
images/CYBERFICTION-IMAGES/male0153.png
images/CYBERFICTION-IMAGES/male0154.png
images/CYBERFICTION-IMAGES/male0155.png
images/CYBERFICTION-IMAGES/male0156.png
images/CYBERFICTION-IMAGES/male0157.png
images/CYBERFICTION-IMAGES/male0158.png
images/CYBERFICTION-IMAGES/male0159.png
images/CYBERFICTION-IMAGES/male0160.png
images/CYBERFICTION-IMAGES/male0161.png
images/CYBERFICTION-IMAGES/male0162.png
images/CYBERFICTION-IMAGES/male0163.png
images/CYBERFICTION-IMAGES/male0164.png
images/CYBERFICTION-IMAGES/male0165.png
images/CYBERFICTION-IMAGES/male0166.png
images/CYBERFICTION-IMAGES/male0167.png
images/CYBERFICTION-IMAGES/male0168.png
images/CYBERFICTION-IMAGES/male0169.png
images/CYBERFICTION-IMAGES/male0170.png
images/CYBERFICTION-IMAGES/male0171.png
images/CYBERFICTION-IMAGES/male0172.png
images/CYBERFICTION-IMAGES/male0173.png
images/CYBERFICTION-IMAGES/male0174.png
images/CYBERFICTION-IMAGES/male0175.png
images/CYBERFICTION-IMAGES/male0176.png
images/CYBERFICTION-IMAGES/male0177.png
images/CYBERFICTION-IMAGES/male0178.png
images/CYBERFICTION-IMAGES/male0179.png
images/CYBERFICTION-IMAGES/male0180.png
images/CYBERFICTION-IMAGES/male0181.png
images/CYBERFICTION-IMAGES/male0182.png
images/CYBERFICTION-IMAGES/male0183.png
images/CYBERFICTION-IMAGES/male0184.png
images/CYBERFICTION-IMAGES/male0185.png
images/CYBERFICTION-IMAGES/male0186.png
images/CYBERFICTION-IMAGES/male0187.png
images/CYBERFICTION-IMAGES/male0188.png
images/CYBERFICTION-IMAGES/male0189.png
images/CYBERFICTION-IMAGES/male0190.png
images/CYBERFICTION-IMAGES/male0191.png
images/CYBERFICTION-IMAGES/male0192.png
images/CYBERFICTION-IMAGES/male0193.png
images/CYBERFICTION-IMAGES/male0194.png
images/CYBERFICTION-IMAGES/male0195.png
images/CYBERFICTION-IMAGES/male0196.png
images/CYBERFICTION-IMAGES/male0197.png
images/CYBERFICTION-IMAGES/male0198.png
images/CYBERFICTION-IMAGES/male0199.png
images/CYBERFICTION-IMAGES/male0200.png
images/CYBERFICTION-IMAGES/male0201.png
images/CYBERFICTION-IMAGES/male0202.png
images/CYBERFICTION-IMAGES/male0203.png
images/CYBERFICTION-IMAGES/male0204.png
images/CYBERFICTION-IMAGES/male0205.png
images/CYBERFICTION-IMAGES/male0206.png
images/CYBERFICTION-IMAGES/male0207.png
images/CYBERFICTION-IMAGES/male0208.png
images/CYBERFICTION-IMAGES/male0209.png
images/CYBERFICTION-IMAGES/male0210.png
images/CYBERFICTION-IMAGES/male0211.png
images/CYBERFICTION-IMAGES/male0212.png
images/CYBERFICTION-IMAGES/male0213.png
images/CYBERFICTION-IMAGES/male0214.png
images/CYBERFICTION-IMAGES/male0215.png
images/CYBERFICTION-IMAGES/male0216.png
images/CYBERFICTION-IMAGES/male0217.png
images/CYBERFICTION-IMAGES/male0218.png
images/CYBERFICTION-IMAGES/male0219.png
images/CYBERFICTION-IMAGES/male0220.png
images/CYBERFICTION-IMAGES/male0221.png
images/CYBERFICTION-IMAGES/male0222.png
images/CYBERFICTION-IMAGES/male0223.png
images/CYBERFICTION-IMAGES/male0224.png
images/CYBERFICTION-IMAGES/male0225.png
images/CYBERFICTION-IMAGES/male0226.png
images/CYBERFICTION-IMAGES/male0227.png
images/CYBERFICTION-IMAGES/male0228.png
images/CYBERFICTION-IMAGES/male0229.png
images/CYBERFICTION-IMAGES/male0230.png
images/CYBERFICTION-IMAGES/male0231.png
images/CYBERFICTION-IMAGES/male0232.png
images/CYBERFICTION-IMAGES/male0233.png
images/CYBERFICTION-IMAGES/male0234.png
images/CYBERFICTION-IMAGES/male0235.png
images/CYBERFICTION-IMAGES/male0236.png
images/CYBERFICTION-IMAGES/male0237.png
images/CYBERFICTION-IMAGES/male0238.png
images/CYBERFICTION-IMAGES/male0239.png
images/CYBERFICTION-IMAGES/male0240.png
images/CYBERFICTION-IMAGES/male0241.png
images/CYBERFICTION-IMAGES/male0242.png
images/CYBERFICTION-IMAGES/male0243.png
images/CYBERFICTION-IMAGES/male0244.png
images/CYBERFICTION-IMAGES/male0245.png
images/CYBERFICTION-IMAGES/male0246.png
images/CYBERFICTION-IMAGES/male0247.png
images/CYBERFICTION-IMAGES/male0248.png
images/CYBERFICTION-IMAGES/male0249.png
images/CYBERFICTION-IMAGES/male0250.png
images/CYBERFICTION-IMAGES/male0251.png
images/CYBERFICTION-IMAGES/male0252.png
images/CYBERFICTION-IMAGES/male0253.png
images/CYBERFICTION-IMAGES/male0254.png
images/CYBERFICTION-IMAGES/male0255.png
images/CYBERFICTION-IMAGES/male0256.png
images/CYBERFICTION-IMAGES/male0257.png
images/CYBERFICTION-IMAGES/male0258.png
images/CYBERFICTION-IMAGES/male0259.png
images/CYBERFICTION-IMAGES/male0260.png
images/CYBERFICTION-IMAGES/male0261.png
images/CYBERFICTION-IMAGES/male0262.png
images/CYBERFICTION-IMAGES/male0263.png
images/CYBERFICTION-IMAGES/male0264.png
images/CYBERFICTION-IMAGES/male0265.png
images/CYBERFICTION-IMAGES/male0266.png
images/CYBERFICTION-IMAGES/male0267.png
images/CYBERFICTION-IMAGES/male0268.png
images/CYBERFICTION-IMAGES/male0269.png
images/CYBERFICTION-IMAGES/male0270.png
images/CYBERFICTION-IMAGES/male0271.png
images/CYBERFICTION-IMAGES/male0272.png
images/CYBERFICTION-IMAGES/male0273.png
images/CYBERFICTION-IMAGES/male0274.png
images/CYBERFICTION-IMAGES/male0275.png
images/CYBERFICTION-IMAGES/male0276.png
images/CYBERFICTION-IMAGES/male0277.png
images/CYBERFICTION-IMAGES/male0278.png
images/CYBERFICTION-IMAGES/male0279.png
images/CYBERFICTION-IMAGES/male0280.png
images/CYBERFICTION-IMAGES/male0281.png
images/CYBERFICTION-IMAGES/male0282.png
images/CYBERFICTION-IMAGES/male0283.png
images/CYBERFICTION-IMAGES/male0284.png
images/CYBERFICTION-IMAGES/male0285.png
images/CYBERFICTION-IMAGES/male0286.png
images/CYBERFICTION-IMAGES/male0287.png
images/CYBERFICTION-IMAGES/male0288.png
images/CYBERFICTION-IMAGES/male0289.png
images/CYBERFICTION-IMAGES/male0290.png
images/CYBERFICTION-IMAGES/male0291.png
images/CYBERFICTION-IMAGES/male0292.png
images/CYBERFICTION-IMAGES/male0293.png
images/CYBERFICTION-IMAGES/male0294.png
images/CYBERFICTION-IMAGES/male0295.png
images/CYBERFICTION-IMAGES/male0296.png
images/CYBERFICTION-IMAGES/male0297.png
images/CYBERFICTION-IMAGES/male0298.png
images/CYBERFICTION-IMAGES/male0299.png
images/CYBERFICTION-IMAGES/male0300.png

      
  `;




return data.split("\n")[index];
}

const frameCount = 200;

const images = [];

const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `900% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render();

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  console.log(ratio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
// triggering the canvas 
ScrollTrigger.create({

  trigger: "#page>canvas",
  pin: true,
  markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `900% top`,

});

// triggering the pages
gsap.to("#page1",{
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        end:`bottom top`,
        // markers:true,
        pin:true,
        scroller:`#main`
    }
})
gsap.to("#page2",{
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        end:`bottom top`,
        // markers:true,
        pin:true,
        scroller:`#main`
    }
})
gsap.to("#page3",{
    scrollTrigger:{
        trigger:`#page3`,
        start:`top top`,
        end:`bottom top`,
        // markers:true,
        pin:true,
        scroller:`#main`
    }
})








