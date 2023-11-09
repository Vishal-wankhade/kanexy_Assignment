
import './App.css';
import {useState} from 'react'
import bg from './images/bg.jpg'
import bg2 from './images/bg2.jpg'
import bg3 from './images/bg3.jpg'
import PieChart from './PieChart'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiLogoVisa , BiRupee,BiDownArrowAlt,BiUpArrowAlt,BiChevronDown,BiCommentDetail, BiCircle} from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

const box1Content = [
  {
    image : bg2,
    text: "Anouncement",
    para : "The world's second largest economy is still strugling to recover from the pandemic"
  
  },
  {
  image : bg,
  text: "text1",
  para : "lorem ipsum adnnn"

}
,
{
  image : bg3,
  text: "text3",
  para : "lorem ipsum adnnn"

}

]




function App() {
   const [index,setIndex] = useState(0);

   console.log(box1Content[index].text);


    function handleclick() {
      let nextIndex = index + 1;
  
      if (nextIndex === box1Content.length) {
        nextIndex = 0;
      }
  
      setIndex(nextIndex);
    }
 
  
  return (
    <div className="App">
      <header className="App-header">
         <div className="logo" style={{background:"white", color:"black", height:"90%", textAlign:"center"}}>
           compony logo
         </div>
         <div className="menu">
           <ul>
            <li>Home</li>
            <li>Accounts <BiChevronDown />
            
            </li>
            <li>Loans <BiChevronDown />
            
            </li>
            <li>Deposites <BiChevronDown />
              
            </li>
            <li>Other Services <BiChevronDown />
           
            </li>
            <li>Transactions</li>
           </ul>
         </div>
         <div className='profile'>
           <BiCommentDetail/>
           <BiCircle/>
           <div className='picture'> 
             <img src={bg} alt='pic' />
           </div>
           <div><p style={{fontSize:"15px"}}>Pawan Kumar <BiChevronDown/></p> </div>
         </div>
         
      </header>
      <div className="hero">
        <div className='row1'>
      <div className="box1">

            <button className='text' style={{fontWeight:"700"}}>{box1Content[index].text}</button>
            <p style={{fontWeight:"700", lineHeight:"1.7"}}>{box1Content[index].para}</p>
            <p style={{fontWeight:"700"}}>Read more <FaArrowRightLong style={{fontWeight:"700", color:"#fff",lineHeight:"1.5"}}/></p>
            <button onClick={handleclick} style={{fontWeight:"700" , padding:"5px", background:"#fff", marginBottom:"30px"}} >Next</button>
          </div>
          <div className="box2">
             <p className='av-fund'>Available Funds</p>
             <div className='s-info'>
                <div className='names'>
                    <p className='names-title'>Savings Account Balance</p>
                     <p className='ac'>**** **** **** 6543</p>
                </div>
                <p>60,000 <BiRupee /></p>
             </div>
             <div className='c-info'>
                <div className='names'>
                    <p className='names-title'>Current Account Balance</p>
                     <p className='ac'>**** **** **** 6543</p>
                </div>
                <p>60,000 <BiRupee/></p>
             </div>
             <div className='t'> 
                <p className='names-title'>Total</p>
                <p>1,20,000 <BiRupee/></p>
             </div>

          </div>
        </div>
        <div className='row2'>
         <div className="box1">
          <div className='chart-head'>
            <p>Cashflows</p>
            <select disabled>
              <option>Monthly</option>
              <option>yearly</option>
              </select>
          </div>
          <div className='chart-wrap'>
              <PieChart />
              <div className='chart-info'>
                  <div className='wd'><BiDownArrowAlt/> 4.441,20 <BiRupee/> Total Withdraws</div>
                  <div className='dp'><BiUpArrowAlt/> 29.59,80 <BiRupee/> Total Deposite</div>
              </div>
          </div>
         </div>
         <div className="box2">
          <div className='card'>
            <h4>Cards</h4>
            
          </div>
          <div className='cardWrap'>
             <div className='left'>

             <div className='l-header'>
                 <BsFillCheckCircleFill style={{color:"#456af0"}}/>
                 <BiLogoVisa className='visa'/>
                 
               </div >
               <div className='c-no'>
                 <p>**** **** **** 6543</p>
                </div>

               <div className='l-bot'>
          <div className='bot1'>
                   <p className='card-sub'>AVAILABLE FUNDS</p>
                   <p>68.789,56</p>
                 </div>
                  <div className='bot2'>
                  <p className='card-sub'>EXPIRES</p>
                   <p>08/22</p>
                 </div>
                 <div className='bot3'>
                 <p className='card-sub'>CVV</p>
                   <p>186</p>
                 </div>
               </div>
             </div>
             
             <div className='center-wrap'>
             <div className='center'>
               <div className='c-header'>
                 <BsFillCheckCircleFill style={{color:"#f1cb49"}}/>
                 <BiLogoVisa className='visa'/>
                 
               </div >
               <div className='c-no'>
                 <p>**** **** **** 6543</p>
                </div>

               <div className='c-bottom'>
          <div className='bot1'>
                   <p className='card-sub'>AVAILABLE FUNDS</p>
                   <p><BiRupee/> 68.789,56</p>
                 </div>
                  <div className='bot2'>
                  <p className='card-sub'>EXPIRES</p>
                   <p>08/22</p>
                 </div>
                 <div className='bot3'>
                 <p className='card-sub'>CVV</p>
                   <p>186</p>
                 </div>
               </div>
             </div>
             </div>

             <div className='right'>
             <div className='r-header'>
                 <BsFillCheckCircleFill style={{color:"#f1cb49"}}/>
                 <BiLogoVisa className='visa'/>
                 
               </div >
               <div className='c-no'>
                 <p style={{fontWeight:"700"}}>**** **** **** 6543</p>
                </div>

               <div className='r-bot'>
          <div className='bot1'>
                   <p className='card-sub'>AVAILABLE FUNDS</p>
                   <p>68.789,56</p>
                 </div>
                  <div className='bot2'>
                  <p className='card-sub'>EXPIRES</p>
                   <p>08/22</p>
                 </div>
                 <div className='bot3'>
                 <p className='card-sub'>CVV</p>
                   <p>186</p>
                 </div>
               </div>

             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
