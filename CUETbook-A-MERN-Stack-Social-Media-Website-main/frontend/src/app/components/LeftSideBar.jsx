"use client"
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Home, MessageCircle, User, Users, Video, Bell}  from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';

const LeftSideBar = () => {
    //  tried to merge
    const router=useRouter();
    const handleNavigation = (path,item)=>{
        router.push(path);
      };
      
// const LeftSideBar = () => {
//     const { isSidebarOpen, toggleSidebar } = useSidebarStore();
//     const router=useRouter();

    return (
        <aside className=' fixed top-16 left-0 h-full w-64 p-4 transform transition-transform duration-1200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0'>
            <div className='flex flex-col h-full overflow-y-auto'>
                {/* navigation menu starts here */}
                <nav className='space-y-4 flex-grow'>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Avatar className='h-10 w-10 rounded-full overflow-hidden'>
                           <AvatarImage
                           src="https://media.istockphoto.com/id/498309616/photo/great-ocean-road-at-night-milky-way-view.jpg?s=612x612&w=0&k=20&c=fJGWCAB4JoXaQD6gjJRHjPmPIRvx5e6K-1Oq2EeOZwk="
                           alt="image avatar"
                           className="w-full h-full object-cover"
                           />
                            <AvatarFallback>T</AvatarFallback>
                        </Avatar>
                        <span className='font-semibold'>Nusrat Tazin</span>
                    </div>
                    
                    <Button
                    variant = "ghost"
                    className="w-full justify-start"
                    onClick={()=>handleNavigation('/')}
                    >
                        <Home className='mr-4'/> Home
                    </Button>
                    <Button
                    variant = "ghost"
                    className="w-full justify-start"
                    onClick={()=>handleNavigation('/friends-list')}
                    >
                        <Users className='mr-4'/> Friends
                    </Button>
                    <Button
                    variant = "ghost"
                    className="w-full justify-start"
                    onClick={()=>handleNavigation('/video-feed')}
                    >
                        <Video className='mr-4'/> Video
                    </Button>
                    <Button
                    variant = "ghost"
                    className="w-full justify-start"
                    >
                        <User className='mr-4'/> Profile
                    </Button>
                    <Button
                    variant = "ghost"
                    className="w-full justify-start"
                    >
                        <MessageCircle className='mr-4'/> Messages
                    </Button>
                    <Button
                    variant = "ghost"
                    className="w-full justify-start"
                    >
                        <Bell className='mr-4'/> Notifications
                    </Button>
                </nav>
                
                {/* footer section  */}
                <div className='mb-16 bottom-0'>
                    <Separator className='my-4'/>
                    <div className='flex items-center space-x-2 mb-4 cursor-pointer'>
                    <Avatar className='h-10 w-10 rounded-full overflow-hidden'>
                           <AvatarImage
                           src="https://media.istockphoto.com/id/498309616/photo/great-ocean-road-at-night-milky-way-view.jpg?s=612x612&w=0&k=20&c=fJGWCAB4JoXaQD6gjJRHjPmPIRvx5e6K-1Oq2EeOZwk="
                           alt="image avatar"
                           className="w-full h-full object-cover"
                           />
                            <AvatarFallback>T</AvatarFallback>
                        </Avatar>
                        <span className='font-semibold'>Nusrat Tazin</span>
                    </div>
                    
                </div>
            </div>
        </aside>
    )
}

export default LeftSideBar
