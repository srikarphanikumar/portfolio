'use client';
import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight;

        const centerY = canvas.height / 2;
        const vacuumHeight = 80;

        const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        // Create raindrop objects with improved initialization
        const createRaindrop = (isTop) => {
            const baseSpeed = 0.5 + Math.random() * 0.5;
            return {
                x: Math.floor(Math.random() * columns),
                y: isTop ?
                    Math.floor(Math.random() * ((centerY - vacuumHeight / 2) / fontSize)) :
                    Math.floor((centerY + vacuumHeight / 2 + Math.random() * 100) / fontSize),
                speed: isTop ? baseSpeed : baseSpeed * 0.8, // Slightly slower for bottom drops
                active: true, // Start active by default
                waitTime: isTop ? Math.random() * 50 : Math.random() * 20, // Less wait time for bottom drops
                opacity: Math.random() * 0.5 + 0.5
            };
        };

        // Initialize drops with better distribution
        const topRaindrops = Array(Math.floor(columns / 2)).fill(null)
            .map(() => createRaindrop(true));

        const bottomRaindrops = Array(Math.floor(columns / 2)).fill(null)
            .map(() => createRaindrop(false));

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw top raindrops
            topRaindrops.forEach((drop, i) => {
                if (drop.waitTime > 0) {
                    drop.waitTime--;
                    return;
                }

                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                const x = drop.x * fontSize;
                const y = drop.y * fontSize;

                if (y < centerY - vacuumHeight / 2) {
                    ctx.fillStyle = `rgba(0, 255, 0, ${drop.opacity})`;
                    ctx.font = fontSize + 'px monospace';
                    ctx.fillText(text, x, y);
                }

                drop.y += drop.speed;

                if (drop.y * fontSize > centerY - vacuumHeight / 2) {
                    drop.y = 0;
                    drop.x = Math.floor(Math.random() * columns);
                    drop.speed = 0.5 + Math.random() * 0.5;
                    drop.opacity = Math.random() * 0.5 + 0.5;
                }
            });

            // Draw bottom raindrops
            bottomRaindrops.forEach((drop, i) => {
                if (drop.waitTime > 0) {
                    drop.waitTime--;
                    return;
                }

                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                const x = drop.x * fontSize;
                const y = drop.y * fontSize;

                if (y > centerY + vacuumHeight / 2) {
                    ctx.fillStyle = `rgba(0, 255, 0, ${drop.opacity})`;
                    ctx.font = fontSize + 'px monospace';
                    ctx.fillText(text, x, y);
                }

                drop.y -= drop.speed;

                if (drop.y * fontSize < centerY + vacuumHeight / 2) {
                    drop.y = canvas.height / fontSize;
                    drop.x = Math.floor(Math.random() * columns);
                    drop.speed = 0.5 + Math.random() * 0.5;
                    drop.opacity = Math.random() * 0.5 + 0.5;
                }

                // Randomly add new bottom raindrops
                if (Math.random() < 0.01) {
                    bottomRaindrops.push(createRaindrop(false));
                }
            });

            // Limit the number of bottom raindrops
            while (bottomRaindrops.length > columns / 2) {
                bottomRaindrops.shift();
            }
        };

        const interval = setInterval(draw, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 opacity-40"
        />
    );
};

const GmailAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight;

        const centerY = canvas.height / 2;
        const vacuumHeight = 80; // Height of the vacuum zone

        const colors = ['#34A853', '#4285F4', '#FBBC05', '#EA4335'];

        // Create two sets of M symbols
        const topMs = [];
        const bottomMs = [];
        const numMs = 40; // Reduced for cleaner look

        // Initialize top Ms
        for (let i = 0; i < numMs; i++) {
            topMs.push({
                x: Math.random() * canvas.width,
                y: Math.random() * (centerY - vacuumHeight / 2),
                size: Math.random() * 20 + 15,
                speed: Math.random() * 0.8 + 0.4,
                angle: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.01,
                colorSet: [
                    colors[Math.floor(Math.random() * colors.length)],
                    colors[Math.floor(Math.random() * colors.length)],
                ]
            });
        }

        // Initialize bottom Ms
        for (let i = 0; i < numMs; i++) {
            bottomMs.push({
                x: Math.random() * canvas.width,
                y: centerY + vacuumHeight / 2 + Math.random() * (canvas.height - (centerY + vacuumHeight / 2)),
                size: Math.random() * 20 + 15,
                speed: Math.random() * 0.8 + 0.4,
                angle: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.01,
                colorSet: [
                    colors[Math.floor(Math.random() * colors.length)],
                    colors[Math.floor(Math.random() * colors.length)],
                ]
            });
        }

        const drawM = (x, y, size, angle, colors) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);

            ctx.lineWidth = 2;

            // First color segment (left side of M)
            ctx.beginPath();
            ctx.moveTo(-size, size / 2);
            ctx.lineTo(-size, -size / 2);
            ctx.lineTo(0, size / 2);
            ctx.strokeStyle = colors[0];
            ctx.stroke();

            // Second color segment (right side of M)
            ctx.beginPath();
            ctx.moveTo(0, size / 2);
            ctx.lineTo(size, -size / 2);
            ctx.lineTo(size, size / 2);
            ctx.strokeStyle = colors[1];
            ctx.stroke();

            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Animate top Ms
            topMs.forEach(m => {
                m.y += m.speed;
                m.angle += m.rotationSpeed;

                // Reset position if M reaches vacuum zone
                if (m.y > centerY - vacuumHeight / 2) {
                    m.y = 0;
                    m.x = Math.random() * canvas.width;
                    m.colorSet = [
                        colors[Math.floor(Math.random() * colors.length)],
                        colors[Math.floor(Math.random() * colors.length)],
                    ];
                }

                drawM(m.x, m.y, m.size, m.angle, m.colorSet);
            });

            // Animate bottom Ms
            bottomMs.forEach(m => {
                m.y -= m.speed;
                m.angle += m.rotationSpeed;

                // Reset position if M reaches vacuum zone
                if (m.y < centerY + vacuumHeight / 2) {
                    m.y = canvas.height;
                    m.x = Math.random() * canvas.width;
                    m.colorSet = [
                        colors[Math.floor(Math.random() * colors.length)],
                        colors[Math.floor(Math.random() * colors.length)],
                    ];
                }

                drawM(m.x, m.y, m.size, m.angle, m.colorSet);
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            canvas.width = 0;
            canvas.height = 0;
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 opacity-70"
        />
    );
};

export { MatrixRain, GmailAnimation };