// import React, { useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { MessageCircle, MoreHorizontal, Share2, ThumbsUp } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import PostComments from "./PostComments";
// import { format } from 'date-fns';

// const PostCard = ({ post, isLiked, onShare, onComment, onLike }) => {
//   const formattedDate = format(new Date(post.createdAt), 'MM/dd/yyyy');
//   const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const generateSharedLink = () => {
//     return `http://localhost:3000/${post?.id}`;
//   };
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Toggle the dropdown menu
//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const handleShare = (platform) => {
//     const url = generateSharedLink();
//     let shareUrl;
  
//     switch (platform) {
//       case "facebook":
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
//         break;
//       case "twitter":
//         shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
//         break;
//       case "linkedin":
//         shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
//         break;
//       case "copy":
//         navigator.clipboard.writeText(url);
//         setIsShareDialogOpen(false);
//         return;
//       default:
//         return;
//     }
  
//     window.open(shareUrl, "_blank");
//     setIsShareDialogOpen(false);
//   };
  
//   return (
//     <motion.div
//       key={post?._id}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card>
//       {/* <CardContent className={`p-6 dark:text-white ${post?.jobPost ? 'bg-blue-100 rounded-lg' : ''}`}> */}
//   <CardContent className={`p-6 dark:text-gray-300 ${post?.jobpost ? ' bg-blue-300 dark:bg-blue-950 rounded-lg font-semibold' : ''}`}>
//     <div className="flex items-center justify-between mb-4">
//       <div className="flex items-center space-x-3 cursor-pointer">
//        <Avatar className="h-10 w-10 rounded-full overflow-auto">
//           <AvatarImage
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4712Why-LxxmiyfAB1oswGfk81Fp-sdK8X3FioyXzfFPe32A0r1z0AK8XuSsviDdQsHU&usqp=CAU"
//           alt="avatar image"
//           className="h-full w-full object-cover"/>
//           <AvatarFallback className="dark:bg-gray-400">
//             {post?.user.username[0]} {/* Default to the first letter of the username if no profile image */}
//           </AvatarFallback>
//         </Avatar>
//         <div>
//           {/* <p className={`font-semibold dark:text-white ${post?.jobpost ? 'dark:text-black' : ''} `}>{post?.user.username}</p> Access username from user object */}
//           <p className={`font-semibold dark:text-gray-200 ${post?.jobpost ? 'dark:text-black' : ''}`}>{post?.user.username}</p>

//           <p className="font-sm text-gray-500">{new Date(post?.createdAt).toLocaleString()}</p> {/* Format timestamp */}
//         </div>
//         </div>
//         <Button variant="ghost" className="dark:hover:bg-gray-500"
//          onClick={toggleMenu}>
//           <MoreHorizontal className="dark:text-white h-4 w-4" />
//         </Button>
//         {isMenuOpen && (
//                 <div className="absolute right-60 mt-2 bg-white text-black dark:bg-white dark:text-black rounded-lg shadow-lg w-40 p-2 z-10">
//                  <Button
//                       className="w-full text-left px-4 py-2 text-sm dark:text-black hover:bg-gray-200 dark:hover:bg-gray-700"
//                     >
//                       Save Post
//                     </Button>
//                     <Button
//                       className="w-full text-left px-4 py-2 text-sm dark:text-black hover:bg-gray-200 dark:hover:bg-gray-700"
//                     >
//                       Hide Post
//                     </Button>
//                     <Button
//                       className="w-full text-left px-4 py-2 text-sm dark:text-black hover:bg-gray-200 dark:hover:bg-gray-700"
//                     >
//                       Report
//                     </Button>
//                 </div>
//               )}
      
//     </div>

//     <p className="mb-4">{post?.content}</p>

//     {post?.mediaUrl && post?.mediaType === "image" && (
//       <img
//         src={post?.mediaUrl}
//         alt="post_image"
//         className="w-full h-full object-cover rounded-lg mb-4"
//         loading="lazy"
//       />
//     )}

//     {post?.mediaUrl && post?.mediaType === "video" && (
//       <video controls className="w-full h-[500px] rounded-lg mb-4">
//         <source src={post?.mediaUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     )}

//     <div className="flex justify-between items-center mb-4">
//       <span className="text-sm text-gray-500 dark:text-gray-400 hover:border-b-2 border-gray-400 cursor-pointer">
//         {post?.likes} likes
//       </span>

//       <div className="flex gap-3">
//         <span
//           className="text-sm text-gray-500 dark:text-gray-400 hover:border-b-2 border-gray-400 cursor-pointer"
//           onClick={() => setShowComments(!showComments)}
//         >
//           {post?.comments.length} comments
//         </span>

//         <span className="text-sm text-gray-500 dark:text-gray-400 hover:border-b-2 border-gray-400 cursor-pointer">
//           {post?.shares} shares
//         </span>
//       </div>
//     </div>

//           <Separator className="mb-2 dark:bg-gray-400" />
//           <div className="flex justify-between mb-2 text-gray-400">
//             <Button
//               variant="ghost"
//               className={`flex-1 dark:hover:bg-gray-600 `}
              
//             >
//               <ThumbsUp className="mr-2 h-4 w-4 text-gray-400" /> Like
//             </Button>
//             <Button
//               variant="ghost"
//               className={`flex-1 dark:hover:bg-gray-600 `}
//               >
//               <MessageCircle className="mr-2 h-4 w-4" /> Comment
//             </Button>
//               <Dialog
//               open={isShareDialogOpen}
//               onOpenChange={setIsShareDialogOpen}
//             >
//                <DialogTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   className="flex-1 dark:hover:bg-gray-500">
//                <Share2 className="mr-2 h-4 w-4"/>Shares
//                 </Button>
//               </DialogTrigger>
//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>Share This Post</DialogTitle>
//                   <DialogDescription>
//                     Choose how you want to share this post
//                   </DialogDescription>
//                 </DialogHeader>
//                 <div className="flex flex-col space-y-4 ">
//                   <Button onClick={() => handleShare("facebook")}>
//                     Share on Facebook
//                   </Button>
//                   <Button onClick={() => handleShare("twitter")}>
//                     Share on Twitter
//                   </Button>
//                   <Button onClick={() => handleShare("linkedin")}>
//                     Share on Linkedin
//                   </Button>
//                   <Button onClick={() => handleShare("copy")}>Copy Link</Button>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//           <Separator className="mb-2 dark:bg-gray-400" />
//           <AnimatePresence>
//             {showComments && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <PostComments
//                   post={post}
                 
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// export default PostCard;



import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, MoreHorizontal, Share2, ThumbsUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PostComments from "./PostComments";
import { formateDate } from "@/lib/utils";

const PostCard = ({ post, isLiked, onShare, onComment, onLike }) => {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const commentInputRef = useRef(null)

  const handleCommentClick = () =>{
    setShowComments(true);
    setTimeout(() =>{
      commentInputRef?.current?.focus();
    },0)
  }
  const userPostPlaceholder = post?.user?.username
    ?.split(" ")
    .map((name) => name[0])
    .join("");

  const generateSharedLink = () => {
    return `http://localhost:3000/${post?.id}`;
  };
  const handleShare = (platform) => {
    const url = generateSharedLink();
    let shareUrl;
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setIsShareDialogOpen(false);
        return;
      default:
        return;
    }
    window.open(shareUrl, "_blank");
    setIsShareDialogOpen(false);
  };
  return (
    <motion.div
      key={post?._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent className="p-6  dark:text-white">
          <div className="flex items-center justify-between mb-4">
            <div
              className="flex items-center space-x-3 cursor-pointer"

            >
              <Avatar>
                {post?.user?.profilePicture ? (
                                 <AvatarImage
                                 src={post?.user?.profilePicture}
                                 alt={post?.user?.username}
                                 />
                ):(
                  <AvatarFallback className="dark:bg-gray-400">{userPostPlaceholder}</AvatarFallback>
                )}
    
              
  
              </Avatar>
              <div>
                <p className="font-semibold dark:text-white">
                  {post?.user?.username}
                </p>
                <p className="font-sm text-gray-500">
                  {formateDate(post?.createdAt)}
                </p>
              </div>
            </div>
            <Button variant="ghost" className="dark:hover:bg-gray-500">
              <MoreHorizontal className="dark:text-white h-4 w-4" />
            </Button>
          </div>
          <p className="mb-4">{post?.content}</p>
          {post?.mediaUrl && post.mediaType === "image" && (
            <img
              src={post?.mediaUrl}
              alt="post_image"
              className="w-full h-auto rounded-lg mb-4"
            />
          )}
          {post?.mediaUrl && post.mediaType === "video" && (
            <video controls className="w-full h-[500px] rounded-lg mb-4">
              <source src={post?.mediaUrl} type="video/mp4" />
              Your browser does not support the video tag
            </video>
          )}
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500 dark:text-gray-400 hover:border-b-2 border-gray-400 cursor-pointer ">
              {post?.likeCount} likes
            </span>
            <div className="flex gap-3">
              <span
                className="text-sm text-gray-500 dark:text-gray-400 hover:border-b-2 border-gray-400 cursor-pointer "
              onClick={() => setShowComments(!showComments)}
              >
                    {post?.commentCount} comments
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 hover:border-b-2 border-gray-400 cursor-pointer ">
              {post?.shareCount} share
              </span>
            </div>
          </div>
          <Separator className="mb-2 dark:bg-gray-400" />
          <div className="flex justify-between mb-2">
            <Button
              variant="ghost"
              className={`flex-1 dark:hover:bg-gray-600 ${isLiked ? "text-blue-600" :""}`}
              onClick={onLike}
            >
              <ThumbsUp className="mr-2 h-4 w-4" /> Like
            </Button>
            <Button
              variant="ghost"
              className={`flex-1 dark:hover:bg-gray-600 `}
              onClick={handleCommentClick}
            >
              <MessageCircle className="mr-2 h-4 w-4" /> Comment
            </Button>
            <Dialog
              open={isShareDialogOpen}
              onOpenChange={setIsShareDialogOpen}
            >
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex-1 dark:hover:bg-gray-500"
                onClick={onShare}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  share
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share This Post</DialogTitle>
                  <DialogDescription>
                    Choose how you want to share this post
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-4 ">
                  <Button onClick={() => handleShare("facebook")}>
                    Share on Facebook
                  </Button>
                  <Button onClick={() => handleShare("twitter")}>
                    Share on Twitter
                  </Button>
                  <Button onClick={() => handleShare("linkedin")}>
                    Share on Linkedin
                  </Button>
                  <Button onClick={() => handleShare("copy")}>Copy Link</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <Separator className="mb-2 dark:bg-gray-400" />
          <AnimatePresence>
            {showComments && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <PostComments
                  post={post}
                  onComment={onComment}
                  commentInputRef={commentInputRef}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PostCard;
