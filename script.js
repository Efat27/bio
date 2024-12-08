const text = "𝐇𝐞𝐲 𝐭𝐡𝐞𝐫𝐞! 𝐈'𝐦 𝐄𝐟𝐚𝐭, 𝐚𝐧 𝐚𝐩𝐩 𝐚𝐧𝐝 𝐰𝐞𝐛 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 🚀 𝐚𝐬 𝐰𝐞𝐥𝐥 𝐚𝐬 𝐚 𝐜𝐲𝐛𝐞𝐫 𝐬𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐞𝐱𝐩𝐞𝐫𝐭 🔒. 𝐋𝐞𝐭 𝐦𝐞 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦 𝐲𝐨𝐮𝐫 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐯𝐢𝐬𝐢𝐨𝐧 𝐢𝐧𝐭𝐨 𝐫𝐞𝐚𝐥𝐢𝐭𝐲 𝐰𝐢𝐭𝐡 𝐭𝐨𝐩-𝐧𝐨𝐭𝐜𝐡 𝐩𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐨𝐧 🔐.";

        const delay = 70; 

        function autoType(element, text, delay) {

            let index = 0;

            (function type() {

                if (index < text.length) {

                    element.innerHTML += text.charAt(index);

                    index++;

                    setTimeout(type, delay);

                }

            })();

        }

        const autoTypingElement = document.getElementById("auto-typing");

        

        function toggleProfile() {

            const container = document.querySelector('.container');

            container.classList.toggle('expanded');

        }

        

      

        function createStars() {

            const starContainer = document.getElementById('stars');

            for (let i = 0; i < 100; i++) {

            const star = document.createElement('div');

            star.classList.add('star');

            star.style.left = `${Math.random() * window.innerWidth}px`;

            star.style.top = `${Math.random() * window.innerHeight}px`;

            star.style.width = `${Math.random() * 2 + 1}px`;

            star.style.height = star.style.width;

            star.style.animationDuration = `${Math.random() * 3 + 2}s`;

            star.style.animationDelay = `${Math.random() * 5}s`;

            starContainer.appendChild(star);

            }

            }

            

          

            function createComets() {

            const cometContainer = document.getElementById('comets');

            for (let i = 0; i < 5; i++) {

            const comet = document.createElement('div');

            comet.classList.add('comet');

            comet.style.left = `${Math.random() * window.innerWidth}px`;

            comet.style.top = `${Math.random() * window.innerHeight}px`;

            comet.style.width = `${Math.random() * 5 + 2}px`;

            comet.style.height = comet.style.width;

            comet.style.animationDuration = `${Math.random() * 5 + 3}s`;

            comet.style.animationDelay = `${Math.random() * 5}s`;

            cometContainer.appendChild(comet);

            }

            }

            

            window.onload = function() {

            createStars();

            createComets();

            autoType(autoTypingElement, text, delay);

            setTimeout(function() {

            alert('Click on the profile picture to see more information!');

            }, 500);

            };

            