"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";



const RightSideBar = () => {
    const [isClient, setIsClient] = useState(false);
    const [showAllSponsers, setShowAllSponsers] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensure rendering happens only on the client
    }, []);

    if (!isClient) return null;

    const sponsers = [
        {
            name: "Whatsapp",
            description: "WhatsApp started as an alternative to SMS. Our product now supports sending and receiving a variety of media.",
            image:"data:image/jpeg;base64,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",
            website: "https://www.whatsapp.com/",
          },
          {
            name: "Instagram",
            description: "Explore the latest features and connect with friends.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NoNt4ECTrCIzRA6PhvyyPThBY9OUEW0-ng&s",
            website: "https://www.instagram.com",
          },
          {
            name: "Spotify",
            description: "Stream your favorite music anytime, anywhere.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpvQJUXehm_yT1kr2WSATHaDRF88_JjWHcQ&s",
            website: "https://www.spotify.com",
          },
          {
            name: "Amazon",
            description: "Shop for everything you need with fast delivery.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBLSbp3rFpIZ0kzoreJLN7uZqkJz0h6-RQQ&s",
            website: "https://www.amazon.com",
          },
          {
            name: "Apple",
            description: "Discover innovative products and services.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qsC4qgsmGTJ9HnNYatRyi7GyJ7GlRMujlw&s",
            website: "https://www.apple.com",
          },
    ];

    const displaySponsers = showAllSponsers ? sponsers : sponsers.slice(0, 3);

    return (
        <motion.aside
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
        >
            <Card>
                <CardHeader>
                    <CardTitle className="flex text-lg font-semibold items-center dark:text-white">
                        <TrendingUp className="mr-2 h-5 w-5 text-primary " />
                        Popular Sponsers
                    </CardTitle>
                </CardHeader>
                {/* <div className="p-4">
                    {displaySponsors.map((sponsor, index) => (
                        <div key={index} className="flex items-center space-x-4 mb-4">
                            Render sponsors
                        </div>
                    ))}
                </div> */}
                <CardContent>
                    <ul className="space-y-4">
                        {displaySponsers.map((sponser, index) => (
                   <motion.li
                   key={sponser.name}
                   initial={{opacity: 0, y:20}}
     animate={{opacity: 1, y:0}}
     transition={{delay: index *0.1}}
     className='flex flex-col items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
     >
       <img
       src={sponser.image}
       alt={sponser.name}
       className='w-50 h-40 object-contain rounded-md'
       />
       <div className='flex-1'>
           <h3 className='text-md font-semibold'></h3>
               <p className='text-sm text-gray-600 dark:text-gray-400'>{sponser.description}</p>
               <a
               href={sponser.website}
               target="_blank"
               className='text-primary text-sm flex items-center mt-1 hover:underline'
               >
                   Visit Website <ExternalLink className='ml-1 h-4 w-4'/>
               </a>
       </div>
               </motion.li>
                        ))}
                    </ul>
                    {sponsers.length>3 && (
                        <Button variant='outline'
                        className="w-full mt-4 dark:text-white"
                        onClick={()=> setShowAllSponsers(!showAllSponsers)}>
                            {showAllSponsers?"Show Less":"Show More"}
                        </Button>
                    )}
                </CardContent>
            </Card>
        </motion.aside>
    );
};

export default RightSideBar;
