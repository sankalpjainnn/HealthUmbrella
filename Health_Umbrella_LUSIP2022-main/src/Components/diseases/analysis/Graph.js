import React,{useState,useLayoutEffect} from 'react'
import BarChart from 'react-bar-chart';
import './graphStyles.css'

function Graph() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
          setSize([window.innerWidth/2+100, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
    const data = [
        {text: 'a', value: 100}, 
        {text: 'b', value: 100} ,
        {text: 10,value: 71},
        {text: 20,value: 55},
        {text: 30,value: 50},
        {text: 40,value: 65},
        {text: 50,value: 71},
        {text: 60,value: 68}
    ];
    const margin = {top: 20, right: 20, bottom: 20, left: 50};
    
    const handleBarClick=(element,id)=>{ 
        console.log(`The bin ${element.text} with id ${id} was clicked`);
      }
  return (
    
        <div className='analysis_graph' > 
                <BarChart ylabel=''
                  width={size[0]}
                  height={size[0]/2+100}
                  margin={margin}
                  data={data}
                  onBarClick={(element, id)=>handleBarClick(element,id)}/>
        </div>
    
  )
}

export default Graph;