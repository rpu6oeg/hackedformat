import { useEffect, useState, Children, cloneElement } from "react";
import arrow_left from './img/left_arrow.png'; 
import arrow_right from './img/right_arrow.png'; 

const PAGE_WIDTH = 100

const Carousel = ({children}) => {

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + 100

            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {
        console.log('handleRightArrowClick');

        setOffset((currentOffset) => {

            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(100 * (pages.length - 1))

            return Math.max(newOffset, maxOffset)

        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '91vh',
                        minWidth: `${PAGE_WIDTH}vw`,
                        maxWidth: `${PAGE_WIDTH}vw`,
                    },
                })
            })
        )
    }, [])


    return(
        <div className="main-container">
            <div className="arrows arrow1" onClick={() => handleLeftArrowClick()}>
                <div className="arrow">
                    <img src={arrow_left} alt="" />
                </div>
            </div>
            <div className="arrows arrow2" onClick={() => handleRightArrowClick()}>
                <div className="arrow">
                    <img src={arrow_right} alt="" />
                </div>
            </div>
            <div className="window">
                <div className="all-pages-container"
                style={
                    {
                        transform: `translateX(${offset}vw)`,
                    }
                }>
                    
                    { pages }
                </div>
            </div>
        </div>
    );
};

export default Carousel;