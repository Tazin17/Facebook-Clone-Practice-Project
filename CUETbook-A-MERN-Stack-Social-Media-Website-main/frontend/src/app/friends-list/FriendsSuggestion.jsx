import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion} from "framer-motion";
import { UserMinus, UserPlus } from "lucide-react";

const FriendsSuggestion = () => {
    return (
           <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white mb-4 dark:bg-gray-800 p-4 shadow rounded-lg"
                >
                     <Avatar className='h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden'> 
                        <AvatarImage
                        src="https://thumbs.dreamstime.com/b/rain-drop-grasses-19162481.jpg"
                        alt="avatar image"
                        className="h-full w-full object-cover"
                        
                        
                        />
                        <AvatarFallback className="dark:bg-gray-400">W</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-center mb-4">Madiha Ahmed Chowdhury</h3>
                    {/* <div className="flex flex-col justify-between">
                        <Button className='bg-blue-500' size='lg' onClick={() =>{}}>
                            <UserPlus className="mr-2 h-4 w-4"/> Add Friend
                        </Button>

                        <Button className='bg-white' size='lg' onClick={() =>{}}>
                            <UserMinus className="mr-2 h-4 w-4"/> Ignore
                        </Button>
                        
                    </div> */}
                      <div className="flex flex-col justify-between">
                              <Button className="bg-blue-500" size="lg" onClick={() => {}}>
                                <UserPlus className="mr-2 h-4 w-4" /> Add Friend
                              </Button>
                              <Button className="mt-2 " size="lg" onClick={() => {}}>
                                <UserMinus className="mr-2 h-4 w-4" /> Ignore
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
            <UserPlus className="mr-2 h-4 w-4" /> Add Friend 
          </Button>
          <Button className="mt-2 " size="lg" onClick={() => {}}>
            <UserMinus className="mr-2 h-4 w-4" /> Ignore
          </Button>
        </div>
      </motion.div>
           </AnimatePresence>
        )
}
export default FriendsSuggestion