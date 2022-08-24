import React, { useState } from 'react';
import { Data } from './data';
import "./faq.css";
import { MDBCol } from 'mdb-react-ui-kit';
import imgfaq from './Picturee.png';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';



const Faqs = () => {

  const placeholder = 'Search For a Question'
  const [wordEntered, setWordEntered] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [filteredData, setfilteredData] = useState([]);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = Data.filter((value) => {
      return value.question.toLowerCase().includes(searchWord.toLowerCase());
    })

    if (searchWord === "") {
      setfilteredData([]);
    }
    else {
      setfilteredData(newFilter);
    }
  }

  const clrinput = () => {
    setWordEntered('')
    setfilteredData([])
  }


  return (



    <IconContext.Provider value={{ color: 'black', size: '30px' }}>
      <div className="Faqsection">
        <div className="Faq_headii">


          <h1>FAQ</h1>
          <br />
          <h2>Landing Page</h2>
          <br />
          <button className="Buttonii">Ask a Question</button>
          <br />
          <p>Have questions?</p>
          <p>we are here to help </p>

          <div><MDBCol md="6">
            <input className="Searchii" type="text" placeholder={placeholder} value={wordEntered} aria-label="Searchii" onChange={handleFilter} />

            {filteredData.length !== 0 && (
              <div className="dataResult">
                {filteredData.slice(0, 15).map((value, index) => {
                  return (
                    <div className="dataItem"> 

                    <a className="dataItemm" onClick={clrinput} href={`#${value.id}`} >
                      <p>{value.question} </p>
                    </a>
                    </div>
                  );
                })}
              </div>
            )}
          </MDBCol></div>







        </div>
        <div className="Faqimg">
          <img className="Faqimage" src={imgfaq} alt="" />
        </div>
      </div>

      <div className="AccordionSectionii">


        <div className="Containerii">
          {Data.map((item, index) => {
            return (
              <>
                <div id={index} className="Wrapii" onClick={() => toggle(index)} key={index}>
                  <h1>{item.question} </h1>


                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="Dropdownii">
                    <p className='faq_answerBox'>{item.answer}</p>
                  </div>

                ) : null}
                <hr className='faqHr' />
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Faqs;