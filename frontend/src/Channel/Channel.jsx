
import { useState } from 'react'
import polygon from '../assets/polygon.svg'
import search from '../assets/search.svg'
import foundry from '../assets/foundry.png'
import farcaster from '../assets/farcaster.svg'
import eigen from '../assets/eigen.png'
import purple from '../assets/purple.svg'
import zk from '../assets/zk.jpg'
import neynar from '../assets/neynar.svg'
import base from '../assets/base.svg'
import opstack from '../assets/opstack.svg'
import huff from '../assets/huff.jpeg'
import ethereum from '../assets/ethereum.png'
import crypto from '../assets/crypto.jpeg'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody,  Button, useDisclosure} from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";



function Channel() {


 const [visible , setVisible] = useState(true)
 const [isOpen, setIsOpen] = useState(false);
 const {onOpenChange} = useDisclosure();

 const [post , setPost] = useState({
    no:1,
    company:'polygon',
    cast:42,
    likes:52,
    recast:56,
    points:'6230000',

 })

 const [post13 , setPost13] = useState({
    no:2,
    company:'foundry',
    cast:54,
    likes:64,
    recast:98,
    points:'4260000',

 })

 const [post2 , setPost2] = useState({
    no:4,
    company:'foundry',
    cast:2,
    likes:5,
    recast:1,
    points:'7400',

 })
 const [post3 , setPost3] = useState({
    no:3,
    company:'farcaster',
    cast:45,
    likes:62,
    recast:31,
    points:'3880000',

 })
 const [post4 , setPost4] = useState({
    no:1,
    company:'eigen layer',
    cast:8,
    likes:25,
    recast:5,
    points:'74600',

 })

 const [post14 , setPost14] = useState({
    no:4,
    company:'eigen layer',
    cast:235,
    likes:156,
    recast:126,
    points:'3290000',

 })
 const [post5 , setPost5] = useState({
    no:5,
    company:'purple dao',
    cast:654,
    likes:65,
    recast:87,
    points:'3210000',

 })

 const [post6 , setPost6] = useState({
    no:2,
    company:'zk',
    cast:6,
    likes:18,
    recast:2,
    points:'36200',

 })
 const [post7 , setPost7] = useState({
    no:7,
    company:'neynar',
    cast:529,
    likes:314,
    recast:421,
    points:'478000',

 })
 const [post8 , setPost8] = useState({
    no:8,
    company:'base',
    cast:365,
    likes:248,
    recast:152,
    points:'421900',

 })
 const [post9 , setPost9] = useState({
    no:9,
    company:'OP Stack',
    cast:365,
    likes:248,
    recast:152,
    points:'382500',

 })

 const [post10 , setPost10] = useState({
    no:3,
    company:'Huff',
    cast:3,
    likes:12,
    recast:2,
    points:'29100',

 })

 const [post11 , setPost11] = useState({
    no:5,
    company:'Eth-Security',
    cast:3,
    likes:3,
    recast:0,
    points:'3600',

 })

 const [post12 , setPost12] = useState({
    no:6,
    company:'CryptoGraphy',
    cast:1,
    likes:3,
    recast:0,
    points:'2100',

 })

 const [post15 , setPost15] = useState({
    no:6,
    company:'zk',
    cast:456,
    likes:265,
    recast:267,
    points:'2270000',

 })




function changePosts(){
  
    setIsOpen(true); 
    setTimeout(() => {
        setIsOpen(false); 
        setVisible(false);
  }, 1500);

    // setPost({
    //     no:1,
    //     company:'polygon',
    //     cast:32,
    //     likes:46,
    //     recast:65,
    //     points:'194',
    
    //  })
     
    //  setPost3({
    //     no:3,
    //     company:'farcaster',
    //     cast:651,
    //     likes:215,
    //     recast:687,
    //     points:'928',
    
    //  })
     
    //  setPost5({
    //     no:5,
    //     company:'purple dao',
    //     cast:465,
    //     likes:165,
    //     recast:356,
    //     points:'257',
    
    //  })
     
    //  setPost7({
    //     no:7,
    //     company:'neynar',
    //     cast:254,
    //     likes:327,
    //     recast:654,
    //     points:'741',
    
    //  })
    //  setPost8({
    //     no:8,
    //     company:'base',
    //     cast:871,
    //     likes:345,
    //     recast:268,
    //     points:'345',
    
    //  })
    //  setPost9({
    //     no:9,
    //     company:'OP Stack',
    //     cast:657,
    //     likes:147,
    //     recast:423,
    //     points:'852',
    
    //  })
    
}

    return (
      <>
      <div className='hero__page'>
      <div className="grid">
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>


      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='sm' style={{width:'350px' , border:'1px solid #6b7280'}}>
        <ModalContent>
          {(onClose) => (
            <>
            <div style={{backgroundColor:'#0a0a0a' , display:'flex' , justifyContent:'center' , alignItems:'center' , flexDirection:'column' , paddingTop:'2rem'}}>
              <Spinner color="primary" style={{backgroundColor:'#0a0a0a'}} />
              <p style={{fontSize:'20px' , fontWeight:'500' , backgroundColor:'#0a0a0a' , color:'white' ,}}>Waiting</p>
              </div> 
            </>
          )}
        </ModalContent>
      </Modal>
      <div className='channel__container'>
          <div className='channel__div'>
           <div className='channel__input'>
              <div className='input__container'>
                <div>
                  <p className='text-white'>Fid:{visible ? 278538 : 194} </p>
                </div>
                 <div className='flex flex-col'>
                 <label htmlFor="text" className='text-white '>Search By Fid </label>
                 <input type="text" className='input__search'/>
                 <img src={search} className='search__icon' alt="search" onClick={changePosts} />
                 </div>
              </div>
             </div>

             <Table hideHeader removeWrapper color='#0a0a0a' style={{color:'white' , backgroundColor:'#0a0a0a' }}>
      <TableHeader style={{color:'white', backgroundColor:'#0a0a0a'}}>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>asdf</TableColumn>
        <TableColumn>STATUadfS</TableColumn>
        <TableColumn>STAadsfTUS</TableColumn>
      </TableHeader>
      <TableBody >
        <TableRow key="1">
          <TableCell >Sr no</TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>Total Casts</TableCell>
          <TableCell>Total Likes</TableCell>
          <TableCell>Total Recasts</TableCell>
          <TableCell>Total Points</TableCell>
        </TableRow>
       {visible ?  <TableRow key="2">
          <TableCell>{post4.no}</TableCell>
          <TableCell>
          <div className='flex flex-row gap-4'>
            <img src={eigen} alt="foundry" style={{width:'24px' , height:'24px'}} />
            {post4.company}
          </div>
          </TableCell>
         <TableCell>{post4.cast}</TableCell>
          <TableCell>{post4.likes}</TableCell>
          <TableCell>{post4.recast}</TableCell>
          <TableCell>{post4.points}</TableCell>
        </TableRow> : null}
       {visible ? <TableRow key="3">
          <TableCell>{post6.no}</TableCell>
          <TableCell>
          <div className='flex flex-row gap-4'>
            <img src={zk} alt="foundry" style={{width:'24px' , height:'24px'}} />
            {post6.company}
          </div>
          </TableCell>         
           <TableCell>{post6.cast}</TableCell>
          <TableCell>{post6.likes}</TableCell>
          <TableCell>{post6.recast}</TableCell>
          <TableCell>{post6.points}</TableCell>
        </TableRow> : null}
        {visible ? <TableRow key="4">
          <TableCell>{post10.no}</TableCell>
          <TableCell>
          <div className='flex flex-row gap-4'>
            <img src={huff} alt="foundry" style={{width:'24px' , height:'24px'}} />
            {post10.company}
          </div>
          </TableCell>         
           <TableCell>{post10.cast}</TableCell>
          <TableCell>{post10.likes}</TableCell>
          <TableCell>{post10.recast}</TableCell>
          <TableCell>{post10.points}</TableCell>
        </TableRow>: null}
        {visible ? <TableRow key="5">
          <TableCell>{post2.no}</TableCell>
          <TableCell>
          <div className='flex flex-row gap-4'>
            <img src={foundry} alt="foundry" style={{width:'24px' , height:'24px'}} />
            {post2.company}
          </div>
          </TableCell>
          <TableCell>{post2.cast}</TableCell>
          <TableCell>{post2.likes}</TableCell>
          <TableCell>{post2.recast}</TableCell>
          <TableCell>{post2.points}</TableCell>
        </TableRow> : null}
     
       {visible ?  <TableRow key="6">
          <TableCell>{post11.no}</TableCell>
          <TableCell>
          <div className='flex flex-row gap-4'>
            <img src={ethereum} alt="foundry" style={{width:'24px' , height:'24px'}} />
            {post11.company}
          </div>
          </TableCell>
          <TableCell>{post11.cast}</TableCell>
          <TableCell>{post11.likes}</TableCell>
          <TableCell>{post11.recast}</TableCell>
          <TableCell>{post11.points}</TableCell>
        </TableRow>: null}
        {visible ? <TableRow key="7">
          <TableCell>{post12.no}</TableCell>
          <TableCell>
          <div className='flex flex-row gap-4'>
            <img src={crypto} alt="foundry" style={{width:'24px' , height:'24px'}} />
            {post12.company}
          </div>
          </TableCell>
          <TableCell>{post12.cast}</TableCell>
          <TableCell>{post12.likes}</TableCell>
          <TableCell>{post12.recast}</TableCell>
          <TableCell>{post12.points}</TableCell>
        </TableRow> : null}
        {!visible ? <TableRow key="8">
          <TableCell>{post.no}</TableCell>
          <TableCell className='flex flex-row gap-4'>
          <img src={polygon} alt="polygon" />
          {post.company}
          </TableCell>
          <TableCell>{post.cast}</TableCell>
          <TableCell>{post.likes}</TableCell>
          <TableCell>{post.recast}</TableCell>
          <TableCell>{post.points}</TableCell>
        </TableRow> : null}
       {!visible ?  <TableRow key="9">
          <TableCell>{post13.no}</TableCell>
          <TableCell>
          <div className='flex flex-row gap-4'>
            <img src={foundry} alt="foundry" style={{width:'24px' , height:'24px'}} />
            {post13.company}
          </div>
          </TableCell>
          <TableCell>{post13.cast}</TableCell>
          <TableCell>{post13.likes}</TableCell>
          <TableCell>{post13.recast}</TableCell>
          <TableCell>{post13.points}</TableCell>
        </TableRow> : null}
       {!visible ?  <TableRow key="10">
          <TableCell>{post3.no}</TableCell>
          <TableCell className='flex flex-row gap-4'>
          <img src={farcaster} alt="polygon" />
          {post3.company}
          </TableCell>          
          <TableCell>{post3.cast}</TableCell>
          <TableCell>{post3.likes}</TableCell>
          <TableCell>{post3.recast}</TableCell>
          <TableCell>{post3.points}</TableCell>
        </TableRow> : null}
       {!visible ?  <TableRow key="11">
          <TableCell>{post14.no}</TableCell>
          <TableCell>
          <div className='flex flex-row gap-4'>
            <img src={eigen} alt="foundry" style={{width:'24px' , height:'24px'}} />
            {post14.company}
          </div>
          </TableCell>
         <TableCell>{post14.cast}</TableCell>
          <TableCell>{post14.likes}</TableCell>
          <TableCell>{post14.recast}</TableCell>
          <TableCell>{post14.points}</TableCell>
        </TableRow> : null}
       {!visible ?  <TableRow key="12">
          <TableCell>{post5.no}</TableCell>
          <TableCell className='flex flex-row gap-4'>
          <img src={purple} alt="polygon" />
          {post5.company}
          </TableCell>          
          <TableCell>{post5.cast}</TableCell>
          <TableCell>{post5.likes}</TableCell>
          <TableCell>{post5.recast}</TableCell>
          <TableCell>{post5.points}</TableCell>
        </TableRow> : null}
       {!visible ? <TableRow key="13">
          <TableCell>{post15.no}</TableCell>
          <TableCell>
          <div className='flex flex-row gap-4'>
            <img src={zk} alt="foundry" style={{width:'24px' , height:'24px'}} />
            {post6.company}
          </div>
          </TableCell>         
           <TableCell>{post15.cast}</TableCell>
          <TableCell>{post15.likes}</TableCell>
          <TableCell>{post15.recast}</TableCell>
          <TableCell>{post15.points}</TableCell>
        </TableRow> : null}
       {!visible ?  <TableRow key="14">
          <TableCell>{post7.no}</TableCell>
          <TableCell className='flex flex-row gap-4'>
          <img src={neynar} alt="polygon" />
          {post7.company}
          </TableCell> 
          <TableCell>{post7.cast}</TableCell>
          <TableCell>{post7.likes}</TableCell>
          <TableCell>{post7.recast}</TableCell>
          <TableCell>{post7.points}</TableCell>
        </TableRow> : null}
       {!visible ?  <TableRow key="15">
          <TableCell>{post8.no}</TableCell>
          <TableCell className='flex flex-row gap-4'>
          <img src={base} alt="polygon" />
          {post8.company}
          </TableCell>           
          <TableCell>{post8.cast}</TableCell>
          <TableCell>{post8.likes}</TableCell>
          <TableCell>{post8.recast}</TableCell>
          <TableCell>{post8.points}</TableCell>
        </TableRow> : null}
       {!visible ?  <TableRow key="16">
          <TableCell>{post9.no}</TableCell>
          <TableCell className='flex flex-row gap-4'>
          <img src={opstack} alt="polygon" />
          {post9.company}
          </TableCell>          
           <TableCell>{post9.cast}</TableCell>
          <TableCell>{post9.likes}</TableCell>
          <TableCell>{post9.recast}</TableCell>
          <TableCell>{post9.points}</TableCell>
        </TableRow> : null}
      </TableBody>
    </Table>
          
             {/* <div className='channel'>
                <h2 className='text-white'>Sr.no</h2>
                <h2 className='text-white'>Company Name</h2>
                <h2 className='text-white'>Total Casts</h2>
                <h2 className='text-white'>Total Likes</h2>
                <h2 className='text-white'>Total Recast</h2>
                <h2 className='text-white'>Total Points</h2>
             </div>
             <div className='channel__posts'>
                <h2 className='text-white'>{post.no}</h2>
                <h2 className='text-white'>{post.company}</h2>
                <h2 className='text-white'>{post.cast}</h2>
                <h2 className='text-white'>{post.likes}</h2>
                <h2 className='text-white'>{post.recast}</h2>
                 <div className='flex flex-row gap-2'>
                    <img src={metamask} alt="logo" />
                    <h2 className='text-white'>{post.points}</h2>
                 </div>
             </div>
             <div className='channel__posts'>
                <h2 className='text-white'>{post2.no}</h2>
                <h2 className='text-white'>{post2.company}</h2>
                <h2 className='text-white'>{post2.cast}</h2>
                <h2 className='text-white'>{post2.likes}</h2>
                <h2 className='text-white'>{post2.recast}</h2>
                 <div className='flex flex-row gap-2'>
                    <img src={metamask} alt="logo" />
                    <h2 className='text-white'>{post2.points}</h2>
                 </div>
             </div>
             <div className='channel__posts'>
                <h2 className='text-white'>{post3.no}</h2>
                <h2 className='text-white'>{post3.company}</h2>
                <h2 className='text-white'>{post3.cast}</h2>
                <h2 className='text-white'>{post3.likes}</h2>
                <h2 className='text-white'>{post3.recast}</h2>
                 <div className='flex flex-row gap-2'>
                    <img src={metamask} alt="logo" />
                    <h2 className='text-white'>{post3.points}</h2>
                 </div>
             </div> */}
             
             
             
           </div>
           {/* <div className='channel__div2'>
             <div className='channel__input'>
              <div className='input__container'>
                 <label htmlFor="text" className='text-white'>Search With FidId</label>
                 <input type="text" className='input__search'/>
                 <img src={search} className='search__icon' alt="search" onClick={changePosts}/>
              </div>
             </div>
           </div> */}
       </div>
       <div>
       </div>
      </div>
      </>
    )
  }
  
  export default Channel