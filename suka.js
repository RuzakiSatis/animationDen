// window.addEventListener('load', function(){
//     const canvas = document.getElementById('canvas1');
//     const ctx = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const gap = 4;
//     const mouse = {
//         radius: 3000,
//         x: undefined,
//         y: undefined
//     };

//     const particlesArray = [];

//     const image = document.getElementById('image1');
//     const centerX = canvas.width * 0.7;
//     const centerY = canvas.height * 0.4;
//     const x = centerX - image.width * 0.5;
//     const y = centerY - image.height * 0.5;

//     window.addEventListener('mousemove', event => {
//         mouse.x = event.x;
//         mouse.y = event.y;
//     });

//     window.addEventListener('touchmove', function(event) {
//         if (event.touches.length > 0) {
//             mouse.x = event.touches[0].clientX;
//             mouse.y = event.touches[0].clientY;
//         }
//     });

//     function init(context){
//         const scaleFactor = Math.min(canvas.width / image.width, canvas.height / image.height);
//         context.drawImage(image, x, y, image.width * scaleFactor, image.height * scaleFactor);

//         const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
//         for(let y = 0; y < canvas.height; y += gap){
//             for(let x = 0; x < canvas.width; x += gap){
//                 const index = (y * canvas.width + x) * 4;
//                 const red = pixels[index];
//                 const green = pixels[index + 1];
//                 const blue = pixels[index + 2];
//                 const alpha = pixels[index + 3];
//                 const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

//                 if(alpha > 0){
//                     particlesArray.push({
//                         x: Math.random() * canvas.width,
//                         y: Math.random() * canvas.height,
//                         originX: Math.floor(x),
//                         originY: Math.floor(y),
//                         originX: x,
//                         originY: y,
//                         color,
//                         size: 2.5,
//                         vx: 0,
//                         vy: 0,
//                         ease: 0.05,
//                         friction: 0.90,
//                         dx: 0,
//                         dy: 0,
//                         distance: 0,
//                         fourse: 0,
//                         angle: 0
//                     });
//                 }
//             }
//         }
//     }

//     function drawParticle(particle, context){
//         context.fillStyle = particle.color;
//         context.fillRect(particle.x, particle.y, particle.size, particle.size);
//     }

//     function updateParticle(particle){
//         particle.dx = mouse.x - particle.x;
//         particle.dy = mouse.y - particle.y;
//         particle.distance = particle.dx * particle.dx + particle.dy * particle.dy;
//         particle.fourse = -mouse.radius / particle.distance;

//         if(particle.distance < mouse.radius){
//             const angle = Math.atan2(particle.dy, particle.dx);
//             particle.vx += particle.fourse * Math.cos(angle);
//             particle.vy += particle.fourse * Math.sin(angle);
//         }

//         particle.x += (particle.vx *= particle.friction) + (particle.originX - particle.x) * particle.ease;
//         particle.y += (particle.vy *= particle.friction) + (particle.originY - particle.y) * particle.ease;
//     }

//     function draw(context){
//         particlesArray.forEach(particle => drawParticle(particle, context));
//     }

//     function update(){
//         particlesArray.forEach(updateParticle);
//     }

//     init(ctx);

//     function animate(){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         draw(ctx);
//         update();
//         requestAnimationFrame(animate);
//     }

//     animate();
// });


// window.addEventListener('load', function(){
//     const canvas = document.getElementById('canvas1');
//     const ctx = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const gap = 4;
//     const mouse = {
//         radius: 3000,
//         x: undefined,
//         y: undefined
//     };

//     const particlesArray = [];

//     const image = document.getElementById('image1');
//     const centerX = canvas.width * 0.7;
//     const centerY = canvas.height * 0.4;
//     const x = centerX - image.width * 0.5;
//     const y = centerY - image.height * 0.5;

//     function init(context){
//         const scaleFactor = Math.min(canvas.width / image.width, canvas.height / image.height);
//         context.drawImage(image, x, y, image.width * scaleFactor, image.height * scaleFactor);

//         const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
//         for(let y = 0; y < canvas.height; y += gap){
//             for(let x = 0; x < canvas.width; x += gap){
//                 const index = (y * canvas.width + x) * 4;
//                 const red = pixels[index];
//                 const green = pixels[index + 1];
//                 const blue = pixels[index + 2];
//                 const alpha = pixels[index + 3];
//                 const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

//                 if(alpha > 0){
//                     particlesArray.push({
//                         x: Math.random() * canvas.width,
//                         y: Math.random() * canvas.height,
//                         originX: Math.floor(x),
//                         originY: Math.floor(y),
//                         originX: x,
//                         originY: y,
//                         color,
//                         size: 2.5,
//                         vx: 0,
//                         vy: 0,
//                         ease: 0.05,
//                         friction: 0.90,
//                         dx: 0,
//                         dy: 0,
//                         distance: 0,
//                         fourse: 0,
//                         angle: 0
//                     });
//                 }
//             }
//         }
//     }

//     function drawParticle(particle, context){
//         context.fillStyle = particle.color;
//         context.fillRect(particle.x, particle.y, particle.size, particle.size);
//     }

//     function updateParticle(particle){
//         if (particle.distance === 0) {
//             // Чекаємо 2 секунди перед початком розпаду
//             setTimeout(() => {
//                 particle.fourse = 0.90;
//                 particle.ease = 0.05;
//          // Змініть цей параметр, щоб визначити швидкість розпаду
//             }, 2000);
//         }

//         particle.x += (particle.vx *= particle.friction) + (particle.originX - particle.x) * particle.ease;
//         particle.y += (particle.vy *= particle.friction) + (particle.originY - particle.y) * particle.ease;

//         particle.vx += particle.fourse * Math.cos(particle.angle);
//         particle.vy += particle.fourse * Math.sin(particle.angle);
//     }

//     function draw(context){
//         particlesArray.forEach(particle => drawParticle(particle, context));
//     }

//     function update(){
//         particlesArray.forEach(updateParticle);
//     }

//     init(ctx);

//     function animate(){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         draw(ctx);
//         update();
//         requestAnimationFrame(animate);
//     }

//     animate();
// });

// window.addEventListener('load', function(){
//     const canvas = document.getElementById('canvas1');
//     const ctx = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const gap = 4;
//     const particlesArray = [];

//     const image = document.getElementById('image1');
//     const centerX = canvas.width * 0.7;
//     const centerY = canvas.height * 0.4;
//     const x = centerX - image.width * 0.5;
//     const y = centerY - image.height * 0.5;

//     function init(context){
//         const scaleFactor = Math.min(canvas.width / image.width, canvas.height / image.height);
//         context.drawImage(image, x, y, image.width * scaleFactor, image.height * scaleFactor);

//         const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
//         for(let y = 0; y < canvas.height; y += gap){
//             for(let x = 0; x < canvas.width; x += gap){
//                 const index = (y * canvas.width + x) * 4;
//                 const red = pixels[index];
//                 const green = pixels[index + 1];
//                 const blue = pixels[index + 2];
//                 const alpha = pixels[index + 3];
//                 const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

//                 if(alpha > 0){
//                     particlesArray.push({
//                         x: Math.random() * canvas.width,
//                         y: Math.random() * canvas.height,
//                         originX: x,
//                         originY: y,
//                         color,
//                         size: 2.5,
//                         vx: 0,
//                         vy: 0,
//                         ease: 0.05,
//                         friction: 0.90,
//                         dx: 0,
//                         dy: 0,
//                         distance: 0,
//                         fourse: 0,
//                         angle: Math.random() * Math.PI * 2 // Випадковий кут
//                     });
//                 }
//             }
//         }
//     }

//     function drawParticle(particle, context){
//         context.fillStyle = particle.color;
//         context.fillRect(particle.x, particle.y, particle.size, particle.size);
//     }

//     function updateParticle(particle){
//         if (particle.distance === 0) {
//             // Чекаємо 2 секунди перед початком розпаду
//             setTimeout(() => {
//                 particle.fourse = 1.90;
//                 particle.ease = 0.01; // Змініть цей параметр, щоб визначити швидкість розпаду
//             }, 2000);
//         }

//         particle.x += (particle.vx *= particle.friction) + (particle.originX - particle.x) * particle.ease;
//         particle.y += (particle.vy *= particle.friction) + (particle.originY - particle.y) * particle.ease;

//         particle.vx += particle.fourse * Math.cos(particle.angle);
//         particle.vy += particle.fourse * Math.sin(particle.angle);
//     }

//     function draw(context){
//         particlesArray.forEach(particle => drawParticle(particle, context));
//     }

//     function update(){
//         particlesArray.forEach(updateParticle);
//     }

//     init(ctx);

//     function animate(){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         draw(ctx);
//         update();
//         requestAnimationFrame(animate);
//     }

//     animate();
// }); ефект свічі


window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gap = 4;
    const particlesArray = [];

    const image = document.getElementById('image1');
    const centerX = canvas.width * 0.5;
    const centerY = canvas.height * 0.4;
    const x = centerX - image.width * 0.5;
    const y = centerY - image.height * 0.5;

    function init(context){
        const scaleFactor = Math.min(canvas.width / image.width, canvas.height / image.height);
        context.drawImage(image, x, y, image.width * scaleFactor, image.height * scaleFactor);

        const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
        for(let y = 0; y < canvas.height; y += gap){
            for(let x = 0; x < canvas.width; x += gap){
                const index = (y * canvas.width + x) * 4;
                const red = pixels[index];
                const green = pixels[index + 1];
                const blue = pixels[index + 2];
                const alpha = pixels[index + 3];
                const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

                if(alpha > 0){
                    particlesArray.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        originX: x,
                        originY: y,
                        color,
                        size: 2.5,
                        vx: (Math.random() - 0.5) * 20,
                        vy: (Math.random() - 0.5) * 20,
                        ease: 0.05,
                        friction: 0.90,
                        dx: 0,
                        dy: 0,
                        distance: 0,
                        fourse: 0,
                        angle: Math.random() * Math.PI * 100 // Випадковий кут
                    });
                }
            }
        }
    }

    function drawParticle(particle, context){
        context.fillStyle = particle.color;
        context.fillRect(particle.x, particle.y, particle.size, particle.size);
    }

    function updateParticle(particle){
        if (particle.distance === 0) {
            const angle = particle.angle;
                particle.vx = Math.cos(angle) * particle.distance;
                particle.vy = Math.sin(angle) * particle.distance;

                particle.x += (particle.vx *= particle.friction) + (particle.originX - particle.x) * particle.ease;
                particle.y += (particle.vy *= particle.friction) + (particle.originY - particle.y) * particle.ease;

                // Збільшуємо відстань для збільшення розсипання частинок
                particle.distance += 0.1;

                // Збільшуємо кут для зміни напрямку руху частинок
                particle.angle += 0.01; /* ця сука відповідає за ефект бум */
            // Чекаємо 2 секунди перед початком розпаду
            setTimeout(() => {
                particle.fourse = 1.90;
                particle.ease = 0.01; // Змініть цей параметр, щоб визначити швидкість розпаду
            }, 3000);
        }

        particle.vx += particle.fourse * Math.cos(particle.angle);
        particle.vy += particle.fourse * Math.sin(particle.angle);

        particle.x += (particle.vx *= particle.friction) + (particle.originX - particle.x) * particle.ease;
        particle.y += (particle.vy *= particle.friction) + (particle.originY - particle.y) * particle.ease;
    }

    function draw(context){
        particlesArray.forEach(particle => drawParticle(particle, context));
    }

    function update(){
        particlesArray.forEach(updateParticle);
    }

    init(ctx);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(ctx);
        update();
        requestAnimationFrame(animate);
    }

    animate();
});

