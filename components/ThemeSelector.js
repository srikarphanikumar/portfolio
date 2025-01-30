'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight;

        const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const raindrops = Array(Math.floor(columns)).fill(canvas.height);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < raindrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                const x = i * fontSize;
                const y = raindrops[i] * fontSize;

                ctx.fillText(text, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    raindrops[i] = 0;
                }
                raindrops[i]++;
            }
        };

        const interval = setInterval(draw, 100);

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

        const envelopes = [];
        const numEnvelopes = 100;  // Reduced for cleaner look - use 15 

        const colors = ['#34A853', '#4285F4', '#FBBC05', '#EA4335'];

        for (let i = 0; i < numEnvelopes; i++) {
            envelopes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 20 + 15, // Adjusted size
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

            // Draw M shape
            ctx.beginPath();
            ctx.lineWidth = 2;

            // First color segment (left side of M)
            ctx.beginPath();
            ctx.moveTo(-size, size / 2);    // Start at bottom left
            ctx.lineTo(-size, -size / 2);   // Up to top left
            ctx.lineTo(0, size / 2);        // Down to middle bottom
            ctx.strokeStyle = colors[0];
            ctx.stroke();

            // Second color segment (right side of M)
            ctx.beginPath();
            ctx.moveTo(0, size / 2);        // Start from middle bottom
            ctx.lineTo(size, -size / 2);    // Up to top right
            ctx.lineTo(size, size / 2);     // Down to bottom right
            ctx.strokeStyle = colors[1];
            ctx.stroke();

            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            envelopes.forEach(envelope => {
                // Update position
                envelope.y -= envelope.speed;
                envelope.angle += envelope.rotationSpeed;

                // Reset position if envelope goes off screen
                if (envelope.y < -50) {
                    envelope.y = canvas.height + 50;
                    envelope.x = Math.random() * canvas.width;
                    // Randomize colors on reset
                    envelope.colorSet = [
                        colors[Math.floor(Math.random() * colors.length)],
                        colors[Math.floor(Math.random() * colors.length)],
                    ];
                }

                drawM(envelope.x, envelope.y, envelope.size, envelope.angle, envelope.colorSet);
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

const ThemeSelector = () => {
    const router = useRouter();

    const handleThemeSelect = (theme) => {
        if (theme === 'terminal') {
            router.push('/terminal');
        } else {
            router.push('/gmail');
        }
    };

    return (
        <div className="fixed inset-0 flex w-screen h-screen overflow-hidden">
            {/* Terminal Theme Side */}
            <motion.div
                className="w-1/2 h-full bg-black relative cursor-pointer"
                whileHover={{ width: '50%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                onClick={() => handleThemeSelect('terminal')}
            >
                <MatrixRain />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h2 className="text-green-500 text-5xl font-bold font-mono">
                        Terminal Inspired View
                    </h2>
                </div>
            </motion.div>

            {/* Gmail Theme Side */}
            <motion.div
                className="w-1/2 h-full relative cursor-pointer"
                whileHover={{ width: '50%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                onClick={() => handleThemeSelect('gmail')}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50" />
                <GmailAnimation />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-gray-800 text-5xl font-bold font-mono">
                        Gmail Inspired View
                    </h2>
                </div>
            </motion.div>
        </div>
    );
};

export default ThemeSelector;