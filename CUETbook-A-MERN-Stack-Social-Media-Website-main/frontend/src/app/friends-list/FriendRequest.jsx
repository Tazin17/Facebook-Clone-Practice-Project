import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { UserMinus, UserPlus } from "lucide-react";
import React from "react";

const FriendRequest = ({ friend }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white mb-4 dark:bg-gray-800 p-4 shadow rounded-lg"
      >
        {/* <Avatar className='h-32 w-32 rounded mx-auto mb-4'> 
                    <AvatarImage/>
                    <AvatarFallback className="dark:bg-gray-400">W</AvatarFallback>
                </Avatar> */}
        <Avatar className="h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden">
          <AvatarImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4q82-5V0wZ3eFt5Q6BaK2PI3HJ1XFp4zeA&s"
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
          <AvatarFallback className="dark:bg-gray-400">W</AvatarFallback>
        </Avatar>

        <h3 className="text-lg font-semibold text-center mb-4">Walisa Alam</h3>
        <div className="flex flex-col justify-between">
          <Button className="bg-blue-500" size="lg" onClick={() => {}}>
            <UserPlus className="mr-2 h-4 w-4" /> Confirm
          </Button>
          <Button className="mt-2 " size="lg" onClick={() => {}}>
            <UserMinus className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white mb-4 dark:bg-gray-800 p-4 shadow rounded-lg"
      >
        <Avatar className="h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden">
          <AvatarImage
            src="https://thumbs.dreamstime.com/b/ai-visualization-exterior-scenery-city-rainy-season-raining-wet-people-walk-umbrellas-299866890.jpg"
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
          <AvatarFallback className="dark:bg-gray-400">R</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-semibold text-center mb-4">
          Rashme Akther
        </h3>
        <div className="flex flex-col justify-between">
          <Button className="bg-blue-500" size="lg" onClick={() => {}}>
            <UserPlus className="mr-2 h-4 w-4" /> Confirm
          </Button>
          <Button className="mt-2 " size="lg" onClick={() => {}}>
            <UserMinus className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </motion.div>
      {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QtRgbqzndUAoNz5kuH_kHeW2aBpORuqsUA&s */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white mb-4 dark:bg-gray-800 p-4 shadow rounded-lg"
      >
        <Avatar className="h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden ">
          <AvatarImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QtRgbqzndUAoNz5kuH_kHeW2aBpORuqsUA&s"
            alt="user avatar"
            className="h-full w-full object-cover"
          />
          <AvatarFallback className="dark:bg-gray-400">S</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-semibold text-center mb-4">
          Sidratul Muntaha
        </h3>
        <div className="flex flex-col justify-between">
          <Button className="bg-blue-500" size="lg" onClick={() => {}}>
            <UserPlus className="mr-2 h-4 w-4" /> Confirm
          </Button>
          <Button className="mt-2 " size="lg" onClick={() => {}}>
            <UserMinus className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white mb-4 dark:bg-gray-800 p-4 shadow rounded-lg"
      >
        <Avatar className="h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden">
          <AvatarImage
            src="https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=R3Tcc6HKc1ixPrBc7qXvXFCicm8jLMMlT99MfmchLNA="
            alt="image avatar"
            className="h-full w-full object-cover"
          />
          <AvatarFallback className="dark:bg-gray-400">H</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-semibold text-center mb-4">Habiba Akter</h3>
        <div className="flex flex-col justify-between">
          <Button className="bg-blue-500" size="lg" onClick={() => {}}>
            <UserPlus className="mr-2 h-4 w-4" /> Confirm
          </Button>
          <Button className="mt-2 " size="lg" onClick={() => {}}>
            <UserMinus className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white mb-4 dark:bg-gray-800 p-4 shadow rounded-lg"
      >
        <Avatar className="h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden">
          <AvatarImage src="https://plus.unsplash.com/premium_photo-1672146844153-9c269fba7bf2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlsbHN8ZW58MHx8MHx8fDA%3D" 
          alt="image avatar"
          className="w-full h-full object-cover"
          
          />
          <AvatarFallback className="dark:bg-gray-400">N</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-semibold text-center mb-4">
          Nazifa Sultana Raisa
        </h3>
        <div className="flex flex-col justify-between">
          <Button className="bg-blue-500" size="lg" onClick={() => {}}>
            <UserPlus className="mr-2 h-4 w-4" /> Confirm
          </Button>
          <Button className="mt-2 " size="lg" onClick={() => {}}>
            <UserMinus className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </motion.div> */}
    </AnimatePresence>
  );
};
export default FriendRequest;
