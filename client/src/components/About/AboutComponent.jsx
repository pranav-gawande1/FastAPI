import React from "react";
import Texture from "../../assets/texture.jpeg"

const About_Component = () => {
    return (
        <>
            <section className="bg-repeat mt-8" style={{ backgroundImage: `url(${Texture})`, backgroundSize: "25%" }}>
                <div className="mb-4">
                    <h1 className="font-bold lg:text-center text-[32px] text-center">Welcome to Pizza Paradise</h1>
                </div>
                <div>
                    <p className="p-8 lg:px-32 text-justify text-base lg:text-2xl tracking-wide leading-relaxed mx-auto max-w-[1200px]">
                        There’s nothing ordinary about Pizza Paradise. Not our pizzas. Not our team. And definitely not the way we roll. We craft every pie with passion, serve it with a smile, and live life full of flavor. Around here, we’re all about becoming our best selves, building lifelong friendships, and having a blast while delivering pizza perfection.
                        <br />
                        <br />
                        We’re not for the faint-hearted: innovation runs in our dough. With over 10,000 locations and 200,000 paradise-makers across 80+ countries, we’ve redefined pizza delivery—from our legendary Paradise Stuffed Crust to launching pies into the stratosphere. We push limits to bring you sizzling-hot pizzas, lightning-fast, wherever the adventure takes you.
                        <br />
                        <br />
                        <h4 className="text-center"><b>What We're All About</b></h4>
                        At Pizza Paradise, we don’t just sling dough. We spark joy, one slice at a time. Founded on the idea that pizza night is pure magic, we’ve perfected the art over 50+ years. Our secret? Food we’re proud to share, delivered fresh and fast with genuine warmth.
                        <br />
                        <br />
                        <h4 className="text-center"><b>Our Story</b></h4>
                        It all started in 1965 when two brothers scraped together $500 from their savings to fire up a pizza spot in a sleepy Kansas town. They called it Pizza Paradise—what fit on the sign and captured the dream. Word spread like wildfire: the pizzas were unbeatable, the vibe felt like family, and every guest left happier than they arrived. That same magic fuels us today.
                        <br />
                        <br />
                        Paradise Passion Since 1965
                        From the start, the brothers sourced ingredients straight from local farms they trusted, promising the best pie around. Those farms evolved with us, and quality remains our north star. No one obsesses over pizza like Pizza Paradise—that’s why it’s in our name, baked into every bite.
                        <br />
                        <br />
                        Pizza Paradise India
                        We landed in India in 1998, kicking off with our first spot in Bangalore as a trailblazer in the pizza scene. Today, we dazzle with signature pizzas, mouthwatering starters, pastas, desserts, and drinks. Voted India’s most trusted pizza brand for a decade straight, we deliver the freshest, tastiest, most wallet-friendly slices around.
                    </p>
                </div>
            </section>
        </>
    );
};

export default About_Component;