
import React, { useEffect } from 'react';

const About = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 animate-fade-up">
          About Us
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Our story is one of passion, craftsmanship, and a love for creating memorable experiences through our cakes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-serif mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2010, Cake Délice began as a small bakery with a big dream: to create cakes that would not only taste extraordinary but also tell a story. Our founder, Claire Laurent, brought her French heritage and culinary expertise to create recipes that blend traditional techniques with modern flavors.
            </p>
            <p className="text-muted-foreground">
              Over the years, we've grown from a small local bakery to a beloved destination for cake enthusiasts. Throughout our journey, our commitment to quality and craftsmanship has remained unwavering.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden aspect-video animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              alt="Our bakery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cream-50 p-6 rounded-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-serif text-xl font-medium mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To create cakes that not only satisfy the palate but also bring joy and create unforgettable moments for our customers.
            </p>
          </div>
          <div className="bg-cream-50 p-6 rounded-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-serif text-xl font-medium mb-3">Our Commitment</h3>
            <p className="text-muted-foreground">
              We're committed to using only the finest, sustainably-sourced ingredients and supporting local producers whenever possible.
            </p>
          </div>
          <div className="bg-cream-50 p-6 rounded-lg animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-serif text-xl font-medium mb-3">Our Promise</h3>
            <p className="text-muted-foreground">
              Every cake that leaves our bakery is made with care, precision, and a dedication to exceeding your expectations.
            </p>
          </div>
        </div>

        <div className="text-center py-16 bg-cream-100 rounded-2xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Behind every delicious cake is a team of dedicated artisans who bring their skill, passion, and creativity to create something truly special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
